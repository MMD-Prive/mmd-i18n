/* =====================================================
   MMD Prive i18n Auto-bind — v1.0.0 (2026-09-04)

   Migration bridge for finished Webflow pages that were built before
   data-i18n attributes became mandatory. It binds ONLY exact, unique
   dictionary values and never guesses translations.
   ===================================================== */
(function () {
  "use strict";

  var W = window;
  var D = document;
  if (W.__MMD_I18N_AUTOBIND_V1__) return;
  W.__MMD_I18N_AUTOBIND_V1__ = true;

  var LANGS = ["th", "en", "zh"];
  var TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,span,strong,small,em,button,a,label,summary,option,legend,dt,dd,li";
  var ATTRS = [
    { name: "placeholder", binding: "data-i18n-placeholder" },
    { name: "title", binding: "data-i18n-title" },
    { name: "aria-label", binding: "data-i18n-aria-label" }
  ];

  function norm(value) {
    return String(value == null ? "" : value).replace(/\s+/g, " ").trim();
  }

  function usable(value) {
    var text = norm(value);
    return text.length >= 2 && text.length <= 1200;
  }

  function dictionary() {
    return W.I18N_DICT || W.I18N || W.DICT || {};
  }

  function buildReverse() {
    var reverse = Object.create(null);
    var source = dictionary();

    LANGS.forEach(function (lang) {
      var table = source[lang] || {};
      Object.keys(table).forEach(function (key) {
        var value = table[key];
        if (typeof value !== "string" || !usable(value)) return;
        var token = norm(value);
        if (!reverse[token]) reverse[token] = key;
        else if (reverse[token] !== key) reverse[token] = null;
      });
    });

    return reverse;
  }

  function excluded(el) {
    if (!el || !el.closest) return true;
    return !!el.closest("script,style,pre,code,svg,math,[contenteditable='true'],[data-no-i18n],[data-mmd-i18n-skip]");
  }

  function hasExplicitBinding(el) {
    if (!el || !el.hasAttribute) return true;
    return el.hasAttribute("data-i18n") ||
      el.hasAttribute("data-i18n-text") ||
      el.hasAttribute("data-i18n-html") ||
      el.hasAttribute("data-i18n-placeholder") ||
      el.hasAttribute("data-i18n-title") ||
      el.hasAttribute("data-i18n-aria-label") ||
      el.hasAttribute("data-i18n-attr");
  }

  function safeTextElement(el) {
    if (excluded(el) || hasExplicitBinding(el)) return false;
    var children = el.children || [];
    for (var i = 0; i < children.length; i += 1) {
      var child = children[i];
      if (child.getAttribute && child.getAttribute("aria-hidden") === "true") continue;
      if (norm(child.textContent)) return false;
    }
    return usable(el.textContent);
  }

  function bindText(root, reverse) {
    var nodes = root && root.querySelectorAll ? root.querySelectorAll(TEXT_SELECTOR) : [];
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      if (!safeTextElement(el)) continue;
      var key = reverse[norm(el.textContent)];
      if (!key) continue;
      el.setAttribute("data-i18n-text", key);
      el.setAttribute("data-mmd-i18n-autobound", "text");
    }
  }

  function bindAttributes(root, reverse) {
    var all = root && root.querySelectorAll ? root.querySelectorAll("[placeholder],[title],[aria-label]") : [];
    for (var i = 0; i < all.length; i += 1) {
      var el = all[i];
      if (excluded(el)) continue;
      for (var j = 0; j < ATTRS.length; j += 1) {
        var item = ATTRS[j];
        if (el.hasAttribute(item.binding)) continue;
        var raw = el.getAttribute(item.name);
        if (!usable(raw)) continue;
        var key = reverse[norm(raw)];
        if (!key) continue;
        el.setAttribute(item.binding, key);
        el.setAttribute("data-mmd-i18n-autobound", "attr");
      }
    }
  }

  function scan(root) {
    root = root || D;
    var reverse = buildReverse();
    bindText(root, reverse);
    bindAttributes(root, reverse);
    try {
      if (W.MMD_I18N && typeof W.MMD_I18N.apply === "function") W.MMD_I18N.apply(root);
      D.documentElement.setAttribute("data-mmd-i18n-autobind", "1");
    } catch (_) {}
  }

  function boot() {
    scan(D);
    if (typeof W.MutationObserver !== "function" || !D.body) return;
    var queued = false;
    var observer = new W.MutationObserver(function () {
      if (queued) return;
      queued = true;
      W.requestAnimationFrame(function () {
        queued = false;
        scan(D);
      });
    });
    observer.observe(D.body, { childList: true, subtree: true });
    W.__MMD_I18N_AUTOBIND_OBSERVER__ = observer;
  }

  D.addEventListener("mmd:i18n:ready", function () { scan(D); });
  D.addEventListener("mmd:i18n:change", function () { scan(D); });

  if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
