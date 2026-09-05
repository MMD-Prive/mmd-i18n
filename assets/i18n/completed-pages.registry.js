/* MMD Prive — completed/current route registry for canonical i18n rollout.
   2026-09-04. Historical previews, copies, placeholders and drafts are excluded. */
(function () {
  "use strict";

  var W = window;
  var routes = [
    { path: "/", world: "public" },
    { path: "/profiles", world: "public" },
    { path: "/public/access", world: "public" },
    { path: "/services/companion", world: "public" },
    { path: "/booking", world: "public" },
    { path: "/find", world: "public" },
    { path: "/therapists", world: "mms" },
    { path: "/membership", world: "member" },
    { path: "/terms", world: "trust" },
    { path: "/privacy-policy", world: "trust" },
    { path: "/aftercare", world: "trust" },
    { path: "/tmib", world: "public" },
    { path: "/trust/start", world: "trust" },
    { path: "/trust/inme", world: "trust" },

    { path: "/member/login", world: "member" },
    { path: "/member/dashboard", world: "member" },
    { path: "/member/requests", world: "member" },
    { path: "/member/private", world: "member" },
    { path: "/member/membership", world: "member" },
    { path: "/member/kenji-ai-20", world: "member" },
    { path: "/pay/membership", world: "member" },
    { path: "/confirm/payment-proof", world: "member" },
    { path: "/confirm/public-access-payment", world: "public" },
    { path: "/confirm/public-access-received", world: "public" },
    { path: "/confirm/access-proof", world: "public" },
    { path: "/blackcard/black-card", world: "member" },
    { path: "/blackcard/confirm", world: "member" },

    { path: "/promotion/6-years-care-back", world: "campaign", bundle: "care-back" },
    { path: "/promotion/6-years-care-back/wish", world: "campaign", bundle: "care-back-wish" },

    { path: "/male-massage/", world: "mms", bundle: "mms" },
    { path: "/male-massage/home", world: "mms", bundle: "mms" },
    { path: "/male-massage/how-to-use", world: "mms", bundle: "mms" },
    { path: "/male-massage/member/mms-booking", world: "mms", bundle: "mms" },
    { path: "/male-massage/therapists/mms", world: "mms", bundle: "mms" },
    { path: "/apply/mms-therapist", world: "mms", bundle: "mms-therapist-application" },
    { path: "/apply/mms-therapist-benefits", world: "mms" },
    { path: "/apply/mms-therapist-rules", world: "mms" },
    { path: "/male-massage/rules/mms-therapist", world: "mms" },
    { path: "/male-massage/apply/mms-fast-track", world: "mms" },

    { path: "/partner/referral", world: "partner" },
    { path: "/shop", world: "shop", bundle: "mmd-shop" },
    { path: "/shop/supplier/portal", world: "shop", bundle: "mmd-shop" },

    { path: "/studio", world: "internal" },
    { path: "/internal/admin/studio", world: "internal" },
    { path: "/internal/admin/studio/upload", world: "internal" },
    { path: "/internal/admin/studio/review", world: "internal" },
    { path: "/internal/admin/studio/model-preview", world: "internal" },
    { path: "/internal/admin/kenji", world: "internal" },
    { path: "/internal/admin/kenji-client-intake", world: "internal" },
    { path: "/internal/admin/jobs/create-job", world: "internal" },
    { path: "/internal/admin/member-intelligence", world: "internal" },
    { path: "/internal/admin/membership-access", world: "internal" }
  ];

  var normalized = routes.map(function (item) {
    return Object.assign({
      locales: ["th", "en", "zh"],
      runtime: "canonical",
      fallback: "selected>th>en>existing-copy",
      exposure: item.world === "internal" ? "internal" : "customer-safe"
    }, item);
  });

  W.MMD_I18N_COMPLETED_ROUTES = normalized;

  function current() {
    var path = (location.pathname || "/").replace(/\/+$/, "") || "/";
    for (var i = 0; i < normalized.length; i += 1) {
      var candidate = normalized[i].path.replace(/\/+$/, "") || "/";
      if (candidate === path) return normalized[i];
    }
    return null;
  }

  try {
    var active = current();
    if (active) {
      document.documentElement.setAttribute("data-mmd-i18n-route", active.path);
      document.documentElement.setAttribute("data-mmd-world", document.documentElement.getAttribute("data-mmd-world") || active.world);
      document.documentElement.setAttribute("data-mmd-i18n-runtime", "canonical");
    }
  } catch (_) {}
})();
