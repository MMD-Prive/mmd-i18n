/* =========================================
   MMD PRIVE - PAY / MEMBERSHIP
   LOCK v2026-06-29-CODEXMIN-01
   - membership pays 100% upfront
   - promo/private code belongs on /pay/membership checkout, not /member/membership
   - Standard/Premium/7Days only; VIP/SVIP/Black Card redirect to Black Card route
   ========================================= */
(function () {
  "use strict";

  var root = document.getElementById("mmd-pay-membership");
  if (!root) return;

  var qs = new URLSearchParams(window.location.search || "");
  var STORAGE_KEY = "mmd_pay_payload_membership_v2026_06";

  var CONFIG = {
    promoEndpoint: attr("data-promo-endpoint", "/promo/validate"),
    verifyEndpoint: attr("data-pay-verify-endpoint", "/v1/pay/verify"),
    confirmUrl: attr("data-confirm-url", "/confirm/payment-confirmation"),
    blackcardUrl: attr("data-blackcard-url", "/blackcard/black-card"),
    benefitsUrl: attr("data-benefits-url", "/membership/benefits"),
    telegramUrl: attr("data-telegram-url", "https://t.me/MMDpriveTH")
  };

  var PKG = {
    "7days": { price: 1499, duration: "7d", label: "7 Days Guest Pass" },
    standard: { price: 1199, duration: "365d", label: "Standard" },
    premium: { price: 2999, duration: "365d", label: "Premium" }
  };

  var state = {
    pkg: clampPkg(first(qs.get("plan"), qs.get("tier"), qs.get("package"), qs.get("pkg"), root.getAttribute("data-default-pkg"), "premium")),
    code: normalizeCode(first(qs.get("code"), qs.get("promo"), qs.get("private_code"), qs.get("discount_code"), "")),
    promo: null,
    promoPending: false,
    promoError: "",
    sessionId: first(qs.get("session_id"), root.getAttribute("data-session-id"), makeId("mem")),
    memberEmail: first(qs.get("email"), root.getAttribute("data-member-email"), ""),
    lang: getLang()
  };

  var els = {
    tiers: [].slice.call(root.querySelectorAll(".mmd-tier[data-pkg]")),
    money: [].slice.call(root.querySelectorAll("[data-money]")),
    base: root.querySelector("#mmdBasePrice"),
    discount: root.querySelector("#mmdDiscount"),
    total: root.querySelector("#mmdTotal"),
    fine: root.querySelector("#mmdFinePrint"),
    note: root.querySelector("#mmdTierNote"),
    payNow: root.querySelector("#mmdPayNow"),
    benefits: root.querySelector("#mmdBtnBenefits"),
    telegram: root.querySelector("#mmdBtnTelegram"),
    modal: root.querySelector("#mmdBenefitsModal"),
    frame: root.querySelector("#mmdBenefitsFrame")
  };

  bootIntent();
  hydrateMoneyLabels();
  bindTierClicks();
  bindBenefits();
  ensurePromoBlock();
  syncTierButtons();
  render();

  if (state.code) validatePromoCode(state.code, { silent: true });

  function attr(name, fallback) {
    var v = root.getAttribute(name);
    return v == null || String(v).trim() === "" ? fallback : String(v).trim();
  }

  function first() {
    for (var i = 0; i < arguments.length; i += 1) {
      var v = arguments[i];
      if (v != null && String(v).trim() !== "") return String(v).trim();
    }
    return "";
  }

  function normalizeCode(value) {
    return String(value || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 40);
  }

  function getLang() {
    return String(root.getAttribute("data-lang") || localStorage.getItem("mmd_lang") || localStorage.getItem("lang") || "th").toLowerCase();
  }

  function text(th, en) {
    return state.lang === "en" ? en : th;
  }

  function money(n) {
    return "THB " + Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 0 });
  }

  function clampPkg(value) {
    var p = String(value || "").toLowerCase().replace(/^join_/, "").replace(/-/g, "_");
    if (p === "7_days" || p === "guestpass" || p === "guest_pass") p = "7days";
    if (p === "vip" || p === "svip" || p === "blackcard" || p === "black_card") {
      window.location.href = CONFIG.blackcardUrl;
      return "premium";
    }
    return PKG[p] ? p : "premium";
  }

  function makeId(prefix) {
    var bytes = new Uint8Array(6);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(bytes);
    var hex = [].map.call(bytes, function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    return prefix + "_" + Date.now().toString(36) + "_" + hex;
  }

  function bootIntent() {
    var intent = String(first(qs.get("intent"), localStorage.getItem("mmd_intent"), "")).toLowerCase();
    if (!intent) return;
    if (intent === "join_vip" || intent === "join_svip" || intent === "join_blackcard") {
      window.location.href = CONFIG.blackcardUrl;
      return;
    }
    var map = {
      join_standard: "standard",
      join_premium: "premium",
      join_7days: "7days",
      join_7_days: "7days",
      join_guestpass: "7days",
      join_7days_guest: "7days"
    };
    if (map[intent]) state.pkg = map[intent];
  }

  function hydrateMoneyLabels() {
    els.money.forEach(function (el) {
      var key = String(el.getAttribute("data-money") || "").toLowerCase();
      if (PKG[key]) el.textContent = money(PKG[key].price);
    });
  }

  function bindTierClicks() {
    els.tiers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var nextPkg = clampPkg(btn.getAttribute("data-pkg"));
        if (nextPkg === state.pkg) return;
        state.pkg = nextPkg;
        state.promo = null;
        state.promoError = "";
        syncTierButtons();
        render();
        if (state.code) validatePromoCode(state.code, { silent: true });
      });
    });
  }

  function bindBenefits() {
    if (els.telegram) els.telegram.href = CONFIG.telegramUrl;
    if (!els.benefits || !els.modal || !els.frame) return;
    var open = function () {
      els.frame.src = CONFIG.benefitsUrl;
      els.modal.classList.add("is-open");
      els.modal.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    var close = function () {
      els.modal.classList.remove("is-open");
      els.modal.setAttribute("aria-hidden", "true");
      els.frame.src = "about:blank";
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
    els.benefits.addEventListener("click", open);
    els.modal.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute("data-close") === "1") close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && els.modal.classList.contains("is-open")) close();
    });
  }

  function ensurePromoBlock() {
    var input = root.querySelector("#mmdPromoCode");
    if (input) {
      els.promoInput = input;
      els.promoApply = root.querySelector("#mmdApplyPromo");
      els.promoClear = root.querySelector("#mmdClearPromo");
      els.promoMsg = root.querySelector("#mmdPromoMsg");
      bindPromo();
      return;
    }

    var box = document.createElement("div");
    box.className = "mmd-codebox";
    box.innerHTML = [
      '<div class="mmd-codebox__head">',
      '  <div class="mmd-codebox__title">Private Code / Discount Code</div>',
      '  <div class="mmd-codebox__helper">มีรหัสพิเศษ? กรอกในขั้นตอนชำระเงินเท่านั้น ระบบจะตรวจสอบก่อนคำนวณยอด</div>',
      '</div>',
      '<div class="mmd-codebox__row">',
      '  <input id="mmdPromoCode" class="mmd-codebox__input" type="text" inputmode="latin" autocomplete="off" placeholder="เช่น KJ-PRV-XXXXXX" aria-label="Private Code or Discount Code">',
      '  <button id="mmdApplyPromo" class="mmd-codebox__btn" type="button">Apply</button>',
      '  <button id="mmdClearPromo" class="mmd-codebox__btn mmd-codebox__btn--ghost" type="button">Clear</button>',
      '</div>',
      '<div id="mmdPromoMsg" class="mmd-codebox__msg" role="status" aria-live="polite"></div>'
    ].join("");

    var anchor = els.payNow && els.payNow.parentNode ? els.payNow.parentNode : root.querySelector(".mmd-summary") || root;
    anchor.parentNode.insertBefore(box, anchor);

    els.promoInput = root.querySelector("#mmdPromoCode");
    els.promoApply = root.querySelector("#mmdApplyPromo");
    els.promoClear = root.querySelector("#mmdClearPromo");
    els.promoMsg = root.querySelector("#mmdPromoMsg");
    bindPromo();
  }

  function bindPromo() {
    if (!els.promoInput) return;
    els.promoInput.value = state.code || "";
    els.promoInput.addEventListener("input", function () {
      state.code = normalizeCode(els.promoInput.value);
      els.promoInput.value = state.code;
      state.promo = null;
      state.promoError = "";
      render();
    });
    els.promoInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        validatePromoCode(els.promoInput.value);
      }
    });
    if (els.promoApply) {
      els.promoApply.addEventListener("click", function () { validatePromoCode(els.promoInput.value); });
    }
    if (els.promoClear) {
      els.promoClear.addEventListener("click", function () {
        state.code = "";
        state.promo = null;
        state.promoError = "";
        els.promoInput.value = "";
        render();
      });
    }
  }

  function syncTierButtons() {
    els.tiers.forEach(function (btn) {
      var active = String(btn.getAttribute("data-pkg") || "").toLowerCase() === state.pkg;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function calc() {
    var basePrice = PKG[state.pkg].price;
    var discountAmount = 0;
    if (state.promo && state.promo.valid) {
      discountAmount = Math.max(0, Math.min(Number(state.promo.discountAmount || 0), basePrice));
    }
    var net = Math.max(0, basePrice - discountAmount);
    return { basePrice: basePrice, discountAmount: discountAmount, net: net, dueNow: net };
  }

  function render() {
    var c = calc();
    if (els.base) els.base.textContent = money(c.basePrice);
    if (els.discount) els.discount.textContent = c.discountAmount > 0 ? "- " + money(c.discountAmount) : money(0);
    if (els.total) els.total.textContent = money(c.dueNow);
    if (els.note) {
      els.note.textContent = state.pkg === "7days"
        ? "7 Days เป็นแพ็กเกจทดลองสิทธิ์ ถ้ามีโค้ดเฉพาะให้กรอกที่ Private Code"
        : "VIP / SVIP / Black Card ไม่เปิดรับสมัครผ่านหน้านี้";
    }
    if (els.fine) {
      var parts = [
        "Package: " + state.pkg.toUpperCase(),
        "Duration: " + PKG[state.pkg].duration,
        "Stage: MEMBERSHIP",
        "ตรวจสอบยอดโดย MMD"
      ];
      if (state.code) parts.push("Code: " + state.code);
      if (state.promo && state.promo.valid) parts.push("Discount: " + money(c.discountAmount));
      els.fine.textContent = parts.join(" • ");
    }
    renderPromoMsg();
    if (els.payNow) els.payNow.onclick = function () { proceed(c); };
  }

  function renderPromoMsg() {
    if (!els.promoMsg) return;
    els.promoMsg.className = "mmd-codebox__msg";
    if (state.promoPending) {
      els.promoMsg.textContent = text("กำลังตรวจสอบรหัส...", "Checking code...");
      els.promoMsg.classList.add("is-pending");
      return;
    }
    if (!state.code) {
      els.promoMsg.textContent = text("ช่องนี้ใช้สำหรับ Private Code หรือ Discount Code จากแคมเปญเท่านั้น", "Use this only for a Private Code or campaign Discount Code.");
      return;
    }
    if (state.promo && state.promo.valid) {
      els.promoMsg.textContent = text("ใช้รหัสแล้ว: ส่วนลด " + money(state.promo.discountAmount), "Code applied: discount " + money(state.promo.discountAmount));
      els.promoMsg.classList.add("is-valid");
      return;
    }
    if (state.promoError) {
      els.promoMsg.textContent = state.promoError;
      els.promoMsg.classList.add("is-error");
      return;
    }
    els.promoMsg.textContent = text("รหัสถูกแนบไว้แล้ว กด Apply เพื่อตรวจสอบส่วนลด", "Code attached. Press Apply to validate discount.");
  }

  async function validatePromoCode(raw, options) {
    var code = normalizeCode(raw);
    options = options || {};
    state.code = code;
    if (els.promoInput) els.promoInput.value = code;
    state.promo = null;
    state.promoError = "";
    if (!code) {
      render();
      return;
    }
    if (!CONFIG.promoEndpoint) {
      state.promoError = text("แนบรหัสไว้ให้ทีมตรวจสอบ ไม่มีการลดราคาอัตโนมัติ", "Code attached for manual review. No automatic discount.");
      render();
      return;
    }

    state.promoPending = true;
    render();
    var c = calc();
    try {
      var res = await fetch(CONFIG.promoEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code, promo_code: code, amount: c.basePrice, subtotal: c.basePrice, package_code: state.pkg, page: "pay/membership" })
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok || data.ok === false) throw new Error(data.error || data.reason || "promo_validate_failed");
      var parsed = parsePromoResponse(code, c.basePrice, data);
      if (!parsed.valid) {
        state.promoError = text("รหัสนี้ใช้ไม่ได้ หรือหมดอายุแล้ว", "This code is invalid or expired.");
        state.promo = null;
      } else {
        state.promo = parsed;
      }
    } catch (e) {
      state.promoError = text("ตรวจสอบรหัสไม่ได้ตอนนี้ ระบบจะแนบรหัสไว้ให้ทีมตรวจสอบ", "Code validation is unavailable. The code will be attached for review.");
      if (!options.silent) console.warn("MMD promo validate failed", e);
    } finally {
      state.promoPending = false;
      render();
    }
  }

  function parsePromoResponse(code, basePrice, data) {
    var valid = data.valid === true || data.ok === true && data.valid !== false;
    var discountAmount = 0;
    if (typeof data.discount_amount !== "undefined") discountAmount = Number(data.discount_amount || 0);
    else if (typeof data.discount !== "undefined") discountAmount = Number(data.discount || 0);
    else if (typeof data.discounted_amount !== "undefined") discountAmount = basePrice - Number(data.discounted_amount || basePrice);
    else if (typeof data.subtotal_after !== "undefined") discountAmount = basePrice - Number(data.subtotal_after || basePrice);
    else if (data.type === "percent") discountAmount = Math.floor(basePrice * Number(data.value || 0) / 100);
    else if (data.type === "fixed" || data.type === "thb") discountAmount = Number(data.value || 0);
    discountAmount = Math.max(0, Math.min(discountAmount, basePrice));
    return {
      valid: !!valid && discountAmount >= 0,
      code: code,
      type: data.type || data.discount_type || null,
      discountAmount: discountAmount,
      raw: data
    };
  }

  async function proceed(c) {
    if (state.promoPending) return;
    var payload = {
      page: "pay/membership",
      session_id: state.sessionId,
      payment_stage: "membership",
      package: state.pkg,
      package_code: state.pkg,
      basePrice: c.basePrice,
      discount: c.discountAmount,
      net: c.net,
      totalDueNow: c.dueNow,
      code: state.code || null,
      promo: state.promo && state.promo.valid ? {
        code: state.promo.code,
        type: state.promo.type,
        discountAmount: state.promo.discountAmount
      } : null,
      member_email: readMemberEmail(),
      lang: state.lang,
      ts: Date.now()
    };

    if (CONFIG.verifyEndpoint) {
      try {
        var verify = await fetch(CONFIG.verifyEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: payload.session_id,
            payment_stage: "membership",
            amount: payload.totalDueNow,
            package_code: payload.package_code,
            package: payload.package_code,
            payment_method: "promptpay",
            member_email: payload.member_email,
            code: payload.code,
            promo_code: payload.code,
            source: "pay_membership"
          })
        }).then(function (r) { return r.json().catch(function () { return { ok: false }; }); });
        if (verify && verify.ok) {
          payload.transaction_ref = verify.transaction_ref || verify.payment_ref || null;
          payload.payment_ref = payload.transaction_ref;
          payload.payment_record_id = verify.payment_record_id || null;
        } else {
          payload.verify_warning = verify && (verify.error || verify.message) || "verify_failed";
        }
      } catch (e) {
        payload.verify_warning = "verify_unavailable";
        console.warn("MMD pay verify failed", e);
      }
    }

    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload)); } catch (e) {}

    var next = new URL(CONFIG.confirmUrl, window.location.origin);
    next.searchParams.set("page", "pay/membership");
    next.searchParams.set("session_id", payload.session_id);
    next.searchParams.set("package", payload.package_code);
    next.searchParams.set("amount", String(payload.totalDueNow));
    next.searchParams.set("payment_stage", "membership");
    next.searchParams.set("payment_method", "promptpay");
    if (payload.code) next.searchParams.set("code", payload.code);
    if (payload.payment_ref) next.searchParams.set("payment_ref", payload.payment_ref);
    if (payload.member_email) next.searchParams.set("email", payload.member_email);
    window.location.href = next.pathname + next.search;
  }

  function readMemberEmail() {
    var input = root.querySelector("#mmdMemberEmail, [name='email'], [name='member_email'], [data-member-email-input]");
    return first(input && input.value, state.memberEmail, "").toLowerCase();
  }
})();
