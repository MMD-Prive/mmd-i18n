/* =====================================================
   MMD Prive i18n Core — MULTI-LANGUAGE ROLLOUT v2.1.0
   2026-09-04

   Canonical runtime for Webflow + Worker-rendered HTML.
   Active languages: th / en / zh
   Default language: th
   Future language: jp (known, not active)

   Safety contract:
   - Missing/blank translation never erases existing copy.
   - Fallback order: selected -> Thai -> English -> existing page copy.
   - Webflow's primary html lang does not override the MMD Thai default.
   - mmd_lang and legacy lang stay synchronized.
   ===================================================== */
(function () {
  "use strict";

  var W = window;
  var D = document;
  if (W.__MMD_I18N_V21__) return;
  W.__MMD_I18N_V21__ = true;

  try {
    if (W.__MMD_I18N_OBSERVER__ && W.__MMD_I18N_OBSERVER__.disconnect) {
      W.__MMD_I18N_OBSERVER__.disconnect();
    }
  } catch (_) {}

  var VERSION = "2.1.0-rollout";
  var DEFAULT_LANG = "th";
  var KNOWN_LANGS = ["th", "en", "zh", "jp"];
  var AVAILABLE_LANGS = ["th", "en", "zh"];
  var STORAGE_KEYS = ["mmd_lang", "lang"];
  var BUTTON_SELECTOR = ".mmd-lang-btn,[data-set-lang],[data-lang-btn]";

  function str(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function trim(value) {
    return str(value).replace(/\s+/g, " ").trim();
  }

  function nonBlank(value) {
    return trim(value) !== "";
  }

  function safeGet(key) {
    try { return W.localStorage.getItem(key); } catch (_) { return null; }
  }

  function safeSet(key, value) {
    try { W.localStorage.setItem(key, value); } catch (_) {}
  }

  function normalizeLang(input) {
    var lang = trim(input).toLowerCase().replace(/_/g, "-");
    if (!lang) return null;
    if (lang === "ja" || lang.indexOf("ja-") === 0 || lang.indexOf("jp-") === 0) return "jp";
    if (lang.indexOf("zh-") === 0) return "zh";
    if (lang.indexOf("th-") === 0) return "th";
    if (lang.indexOf("en-") === 0) return "en";
    return KNOWN_LANGS.indexOf(lang) >= 0 ? lang : null;
  }

  function availableLang(input) {
    var lang = normalizeLang(input);
    return lang && AVAILABLE_LANGS.indexOf(lang) >= 0 ? lang : null;
  }

  function urlLang() {
    try { return availableLang(new URLSearchParams(W.location.search || "").get("lang")); }
    catch (_) { return null; }
  }

  function storedLang() {
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) {
      var lang = availableLang(safeGet(STORAGE_KEYS[i]));
      if (lang) return lang;
    }
    return null;
  }

  function htmlLang() {
    try {
      if (D.documentElement.getAttribute("data-mmd-use-html-lang") !== "true") return null;
      return availableLang(D.documentElement.getAttribute("lang"));
    } catch (_) { return null; }
  }

  function getLang() {
    return urlLang() || storedLang() || htmlLang() || DEFAULT_LANG;
  }

  function persist(input) {
    var lang = availableLang(input) || DEFAULT_LANG;
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) safeSet(STORAGE_KEYS[i], lang);
    try {
      D.documentElement.setAttribute("lang", lang);
      D.documentElement.setAttribute("data-mmd-lang", lang);
    } catch (_) {}
    return lang;
  }

  function normalizeRole(input) {
    var role = trim(input).toLowerCase().replace(/[_\s]+/g, "-");
    var aliases = {
      guest: "guest", free: "guest", public: "guest",
      standard: "standard", std: "standard",
      premium: "premium", pre: "premium",
      vip: "vip", blackcard: "blackcard", "black-card": "blackcard", black: "blackcard",
      svip: "blackcard", "s-vip": "blackcard",
      "7days": "7days", "7-day": "7days", "7-days": "7days", "guest-pass": "7days"
    };
    return aliases[role] || "guest";
  }

  function currentRole(root) {
    var values = [];
    try {
      if (root && root.getAttribute) values.push(root.getAttribute("data-user-role"));
      if (D.body) values.push(D.body.getAttribute("data-user-role"));
    } catch (_) {}
    values.push(safeGet("mmd_role"));
    values.push(safeGet("role"));
    for (var i = 0; i < values.length; i += 1) if (nonBlank(values[i])) return normalizeRole(values[i]);
    return "guest";
  }

  function dict() {
    return W.I18N_DICT || W.I18N || W.DICT || {};
  }

  function lookup(lang, key) {
    var source = dict();
    if (source[lang] && Object.prototype.hasOwnProperty.call(source[lang], key)) return source[lang][key];
    if (source[key] && Object.prototype.hasOwnProperty.call(source[key], lang)) return source[key][lang];
    return null;
  }

  function fallbacks(input) {
    var selected = availableLang(input) || DEFAULT_LANG;
    var order = [selected, "th", "en"];
    var seen = {};
    return order.filter(function (lang) {
      if (seen[lang]) return false;
      seen[lang] = true;
      return true;
    });
  }

  function keyCandidates(base, role, mobile) {
    var key = trim(base);
    if (!key) return [];
    var r = normalizeRole(role);
    var out = [];
    if (mobile) {
      out.push(key + ".m." + r);
      out.push(key + "." + r + ".m");
      out.push(key + ".m");
    }
    out.push(key + "." + r);
    out.push(key);
    var seen = {};
    return out.filter(function (candidate) {
      if (seen[candidate]) return false;
      seen[candidate] = true;
      return true;
    });
  }

  function t(key, options) {
    if (typeof options === "string") options = { lang: options };
    options = options || {};
    var langs = fallbacks(options.lang || getLang());
    var role = normalizeRole(options.role || currentRole(options.root || D.body));
    var keys = keyCandidates(key, role, !!options.mobile);
    for (var i = 0; i < langs.length; i += 1) {
      for (var j = 0; j < keys.length; j += 1) {
        var value = lookup(langs[i], keys[j]);
        if (nonBlank(value)) return str(value);
      }
    }
    return null;
  }

  function qsa(root, selector) {
    return root && root.querySelectorAll ? root.querySelectorAll(selector) : [];
  }

  function isMobileBinding(el) {
    var value = el && el.getAttribute ? el.getAttribute("data-i18n-mobile") : null;
    if (value === null) return false;
    value = trim(value).toLowerCase();
    return value === "" || value === "true" || value === "1" || value === "yes" || value === "mobile";
  }

  function fallback(el, kind, attr) {
    if (!el || !el.getAttribute) return "";
    var specific = "";
    if (kind === "attr" && attr) specific = el.getAttribute("data-fallback-attr-" + str(attr).toLowerCase()) || "";
    else if (kind) specific = el.getAttribute("data-fallback-" + kind) || "";
    return trim(specific || el.getAttribute("data-fallback") || "");
  }

  function applyValue(el, kind, value, attr) {
    var output = nonBlank(value) ? str(value) : fallback(el, kind, attr);
    if (!nonBlank(output)) return;
    if (kind === "text") el.textContent = output;
    else if (kind === "html") el.innerHTML = output;
    else if (kind === "value") {
      try { el.value = output; } catch (_) { el.setAttribute("value", output); }
    } else if (kind === "attr" && attr) el.setAttribute(attr, output);
    else el.setAttribute(kind, output);
  }

  function applySelector(root, selector, keyAttr, kind, lang, role) {
    var nodes = qsa(root, selector);
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      var value = t(el.getAttribute(keyAttr), { lang: lang, role: role, mobile: isMobileBinding(el), root: root });
      applyValue(el, kind, value);
    }
  }

  function apply(root, options) {
    root = root || D;
    options = options || {};
    var lang = availableLang(options.lang) || getLang();
    var role = normalizeRole(options.role || currentRole(root));

    applySelector(root, "[data-i18n]", "data-i18n", "html", lang, role);
    applySelector(root, "[data-i18n-text]", "data-i18n-text", "text", lang, role);
    applySelector(root, "[data-i18n-html]", "data-i18n-html", "html", lang, role);
    applySelector(root, "[data-i18n-placeholder]", "data-i18n-placeholder", "placeholder", lang, role);
    applySelector(root, "[data-i18n-title]", "data-i18n-title", "title", lang, role);
    applySelector(root, "[data-i18n-aria-label]", "data-i18n-aria-label", "aria-label", lang, role);
    applySelector(root, "[data-i18n-value]", "data-i18n-value", "value", lang, role);

    var attrNodes = qsa(root, "[data-i18n-attr]");
    for (var a = 0; a < attrNodes.length; a += 1) {
      var el = attrNodes[a];
      var items = str(el.getAttribute("data-i18n-attr")).split(/[;,]/g);
      for (var b = 0; b < items.length; b += 1) {
        var idx = items[b].indexOf(":");
        if (idx <= 0) continue;
        var attr = trim(items[b].slice(0, idx));
        var key = trim(items[b].slice(idx + 1));
        if (!attr || !key) continue;
        applyValue(el, "attr", t(key, { lang: lang, role: role, mobile: isMobileBinding(el), root: root }), attr);
      }
    }

    try {
      D.documentElement.setAttribute("data-mmd-lang", lang);
      D.documentElement.setAttribute("data-mmd-role", role);
    } catch (_) {}
    updateButtons(lang);
    dispatch("mmd:i18n:applied", { lang: lang, role: role, version: VERSION });
    return lang;
  }

  function dispatch(name, detail) {
    try { D.dispatchEvent(new W.CustomEvent(name, { detail: detail })); } catch (_) {}
  }

  function updateButtons(lang) {
    var buttons = qsa(D, BUTTON_SELECTOR);
    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      var target = availableLang(button.getAttribute("data-set-lang") || button.getAttribute("data-lang-btn") || button.getAttribute("data-lang"));
      if (!target) continue;
      var active = target === lang;
      if (button.classList) {
        button.classList.toggle("mmd-lang-active", active);
        button.classList.toggle("is-active", active);
      }
      button.setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function setLang(input, options) {
    options = options || {};
    var lang = persist(input);
    apply(options.root || D, { lang: lang, role: options.role });
    dispatch("mmd:i18n:change", { lang: lang, version: VERSION });
    return lang;
  }

  function bindButtons() {
    if (D.__MMD_I18N_V21_BUTTONS__) return;
    D.__MMD_I18N_V21_BUTTONS__ = true;
    D.addEventListener("click", function (event) {
      var target = event.target;
      if (target && target.closest) target = target.closest(BUTTON_SELECTOR);
      if (!target || !target.getAttribute) return;
      var lang = target.getAttribute("data-set-lang") || target.getAttribute("data-lang-btn") || target.getAttribute("data-lang");
      if (!availableLang(lang)) return;
      if (event.preventDefault) event.preventDefault();
      setLang(lang);
    });
  }

  function observe() {
    if (typeof W.MutationObserver !== "function") return;
    var target = D.body;
    if (!target) return;
    var observer = new W.MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var added = mutations[i].addedNodes || [];
        for (var j = 0; j < added.length; j += 1) {
          if (added[j] && added[j].nodeType === 1) apply(added[j], { lang: getLang() });
        }
      }
    });
    observer.observe(target, { childList: true, subtree: true });
    W.__MMD_I18N_OBSERVER__ = observer;
  }

  function init(options) {
    options = options || {};
    var lang = persist(options.lang || getLang());
    apply(options.root || D, { lang: lang, role: options.role });
    if (options.bindLangButtons !== false) bindButtons();
    if (options.observe !== false) observe();
    dispatch("mmd:i18n:ready", { lang: lang, version: VERSION, languages: AVAILABLE_LANGS.slice() });
    return true;
  }

  var API = {
    version: VERSION,
    languages: AVAILABLE_LANGS.slice(),
    knownLanguages: KNOWN_LANGS.slice(),
    defaultLang: DEFAULT_LANG,
    normalizeLang: normalizeLang,
    normalizeRole: normalizeRole,
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: apply,
    bindLangButtons: bindButtons,
    init: init
  };

  W.MMD_I18N = API;
  W.T = function (key, options) { return API.t(key, options || {}); };

  function boot() {
    try { API.init({ root: D, observe: true }); } catch (_) {}
  }

  if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
