/* =====================================================
   MMD Privé i18n Core — RESTORE v2.0.0 (2026-08-04)

   Canonical language engine for Webflow and Worker HTML.
   Active rollout language: th.
   Future languages remain known but disabled until copy review is complete.

   Safety contract:
   - Thai is the default and the first translation fallback.
   - Missing/blank translations never erase existing page copy.
   - mmd_lang and the legacy lang storage key stay in sync.
   - Existing data-i18n bindings and role/mobile suffixes remain compatible.
   ===================================================== */

(function () {
  "use strict";

  var W = window;
  var D = document;

  if (W.__MMD_I18N_RESTORE_V2__) return;
  W.__MMD_I18N_RESTORE_V2__ = true;

  var VERSION = "2.0.0-restore";
  var DEFAULT_LANG = "th";
  var KNOWN_LANGS = ["th", "en", "zh", "jp"];
  var AVAILABLE_LANGS = ["th"];
  var STORAGE_KEYS = ["mmd_lang", "lang"];
  var BUTTON_SELECTOR = ".mmd-lang-btn,[data-set-lang],[data-lang-btn]";

  function str(value) {
    return value === null || value === undefined ? "" : String(value);
  }

  function trim(value) {
    return str(value).replace(/\s+/g, " ").trim();
  }

  function isNonBlank(value) {
    return trim(value) !== "";
  }

  function isTruthyAttr(value) {
    value = trim(value).toLowerCase();
    return value === "" || value === "true" || value === "1" || value === "yes" || value === "on" || value === "mobile";
  }

  function safeGetStorage(key) {
    try { return W.localStorage.getItem(key); } catch (_) { return null; }
  }

  function safeSetStorage(key, value) {
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

  function getUrlLang() {
    try {
      return availableLang(new URLSearchParams(W.location.search || "").get("lang"));
    } catch (_) {
      return null;
    }
  }

  function getStoredLang() {
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) {
      var lang = availableLang(safeGetStorage(STORAGE_KEYS[i]));
      if (lang) return lang;
    }
    return null;
  }

  function getHtmlLang() {
    try { return availableLang(D.documentElement.getAttribute("lang")); } catch (_) { return null; }
  }

  function getLang() {
    return getUrlLang() || getStoredLang() || getHtmlLang() || DEFAULT_LANG;
  }

  function persistLang(input) {
    var lang = availableLang(input) || DEFAULT_LANG;
    for (var i = 0; i < STORAGE_KEYS.length; i += 1) safeSetStorage(STORAGE_KEYS[i], lang);
    try {
      D.documentElement.setAttribute("lang", lang === "jp" ? "ja" : lang);
      D.documentElement.setAttribute("data-mmd-lang", lang);
    } catch (_) {}
    return lang;
  }

  function normalizeRole(input) {
    var role = trim(input).toLowerCase().replace(/[_\s]+/g, "-");
    var aliases = {
      "guest": "guest", "free": "guest", "public": "guest",
      "standard": "standard", "std": "standard",
      "premium": "premium", "pre": "premium",
      "vip": "vip",
      "blackcard": "blackcard", "black-card": "blackcard", "black": "blackcard",
      "svip": "blackcard", "s-vip": "blackcard",
      "7days": "7days", "7-day": "7days", "7-days": "7days",
      "7days-pass": "7days", "guest-pass": "7days"
    };
    return aliases[role] || "guest";
  }

  function isMmdRoleToken(value) {
    return /^(guest|standard|std|premium|pre|vip|blackcard|black-card|black|svip|s-vip|7days|7-day|7-days|guest-pass)$/.test(trim(value).toLowerCase());
  }

  function getCurrentRole(root) {
    var body = D.body;
    var candidates = [];
    if (root && root.getAttribute) {
      candidates.push(root.getAttribute("data-user-role"));
      if (isMmdRoleToken(root.getAttribute("role"))) candidates.push(root.getAttribute("role"));
    }
    if (body && body.getAttribute) {
      candidates.push(body.getAttribute("data-user-role"));
      if (isMmdRoleToken(body.getAttribute("role"))) candidates.push(body.getAttribute("role"));
    }
    candidates.push(safeGetStorage("mmd_role"));
    candidates.push(safeGetStorage("role"));
    for (var i = 0; i < candidates.length; i += 1) {
      if (isNonBlank(candidates[i])) return normalizeRole(candidates[i]);
    }
    return "guest";
  }

  function getDict() {
    return W.I18N_DICT || W.I18N || W.DICT || {};
  }

  function lookupInLang(lang, key) {
    var dict = getDict();
    if (dict[lang] && Object.prototype.hasOwnProperty.call(dict[lang], key)) return dict[lang][key];
    if (dict[key] && Object.prototype.hasOwnProperty.call(dict[key], lang)) return dict[key][lang];
    return null;
  }

  function languageFallbacks(input) {
    var selected = availableLang(input) || DEFAULT_LANG;
    var order = [selected, "th", "en"];
    var seen = {};
    return order.filter(function (lang) {
      if (seen[lang]) return false;
      seen[lang] = true;
      return true;
    });
  }

  function keyCandidates(baseKey, role, mobile) {
    var key = trim(baseKey);
    if (!key) return [];
    var normalizedRole = normalizeRole(role);
    var order = [];
    if (mobile) {
      order.push(key + ".m." + normalizedRole);
      order.push(key + "." + normalizedRole + ".m");
      order.push(key + ".m");
    }
    order.push(key + "." + normalizedRole);
    order.push(key);
    var seen = {};
    return order.filter(function (candidate) {
      if (seen[candidate]) return false;
      seen[candidate] = true;
      return true;
    });
  }

  function translate(key, options) {
    options = options || {};
    var languages = languageFallbacks(options.lang || getLang());
    var role = normalizeRole(options.role || getCurrentRole(options.root || D.body));
    var keys = keyCandidates(key, role, !!options.mobile);

    for (var i = 0; i < languages.length; i += 1) {
      for (var j = 0; j < keys.length; j += 1) {
        var value = lookupInLang(languages[i], keys[j]);
        if (isNonBlank(value)) return str(value);
      }
    }
    return null;
  }

  function getFallback(element, kind, attributeName) {
    if (!element || !element.getAttribute) return "";
    var specific = "";
    if (kind === "attr" && attributeName) {
      specific = element.getAttribute("data-fallback-attr-" + str(attributeName).toLowerCase()) || "";
    } else if (kind) {
      specific = element.getAttribute("data-fallback-" + kind) || "";
    }
    return trim(specific || element.getAttribute("data-fallback") || "");
  }

  function applyValue(element, kind, value, attributeName) {
    if (!element) return;
    var output = isNonBlank(value) ? str(value) : getFallback(element, kind, attributeName);
    if (!isNonBlank(output)) return;

    if (kind === "text") element.textContent = output;
    else if (kind === "html") element.innerHTML = output;
    else if (kind === "value") {
      try { element.value = output; } catch (_) { element.setAttribute("value", output); }
    } else if (kind === "attr" && attributeName) element.setAttribute(attributeName, output);
    else element.setAttribute(kind, output);
  }

  function parseAttributeMap(input) {
    return str(input).split(/[;,]/g).map(function (item) {
      var index = item.indexOf(":");
      if (index <= 0) return null;
      var attribute = trim(item.slice(0, index));
      var key = trim(item.slice(index + 1));
      return attribute && key ? { attribute: attribute, key: key } : null;
    }).filter(Boolean);
  }

  function query(root, selector) {
    return root && root.querySelectorAll ? root.querySelectorAll(selector) : [];
  }

  function isMobileBinding(element) {
    if (!element || !element.getAttribute) return false;
    var value = element.getAttribute("data-i18n-mobile");
    return value !== null && isTruthyAttr(value);
  }

  function applySelector(root, selector, keyAttribute, kind, lang, role) {
    var nodes = query(root, selector);
    for (var i = 0; i < nodes.length; i += 1) {
      var element = nodes[i];
      var key = element.getAttribute(keyAttribute);
      var value = translate(key, { lang: lang, role: role, mobile: isMobileBinding(element), root: root });
      applyValue(element, kind, value);
    }
  }

  function updateButtons(root, lang) {
    var buttons = query(root || D, BUTTON_SELECTOR);
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

  function dispatch(name, detail) {
    try {
      var event;
      if (typeof W.CustomEvent === "function") event = new W.CustomEvent(name, { detail: detail });
      else {
        event = D.createEvent("CustomEvent");
        event.initCustomEvent(name, false, false, detail);
      }
      D.dispatchEvent(event);
    } catch (_) {}
  }

  function applyToRoot(root, options) {
    root = root || D;
    options = options || {};
    var lang = availableLang(options.lang) || getLang();
    var role = normalizeRole(options.role || getCurrentRole(root));

    applySelector(root, "[data-i18n]", "data-i18n", "html", lang, role);
    applySelector(root, "[data-i18n-text]", "data-i18n-text", "text", lang, role);
    applySelector(root, "[data-i18n-html]", "data-i18n-html", "html", lang, role);
    applySelector(root, "[data-i18n-placeholder]", "data-i18n-placeholder", "placeholder", lang, role);
    applySelector(root, "[data-i18n-title]", "data-i18n-title", "title", lang, role);
    applySelector(root, "[data-i18n-aria-label]", "data-i18n-aria-label", "aria-label", lang, role);
    applySelector(root, "[data-i18n-value]", "data-i18n-value", "value", lang, role);

    var attributeNodes = query(root, "[data-i18n-attr]");
    for (var i = 0; i < attributeNodes.length; i += 1) {
      var element = attributeNodes[i];
      var pairs = parseAttributeMap(element.getAttribute("data-i18n-attr"));
      for (var j = 0; j < pairs.length; j += 1) {
        var value = translate(pairs[j].key, { lang: lang, role: role, mobile: isMobileBinding(element), root: root });
        applyValue(element, "attr", value, pairs[j].attribute);
      }
    }

    try {
      var stateRoot = root === D ? D.documentElement : root;
      if (stateRoot && stateRoot.setAttribute) {
        stateRoot.setAttribute("data-mmd-lang", lang);
        stateRoot.setAttribute("data-mmd-role", role);
      }
    } catch (_) {}

    updateButtons(D, lang);
    dispatch("mmd:i18n:applied", { lang: lang, role: role, version: VERSION });
    return lang;
  }

  function changeLanguage(input, options) {
    options = options || {};
    var lang = persistLang(input);
    applyToRoot(options.root || D, { lang: lang, role: options.role });
    dispatch("mmd:i18n:change", { lang: lang, version: VERSION });
    return lang;
  }

  function bindLanguageButtons(root) {
    root = root || D;
    if (root.__MMD_I18N_BUTTONS_BOUND__) return;
    root.__MMD_I18N_BUTTONS_BOUND__ = true;
    if (!root.addEventListener) return;

    root.addEventListener("click", function (event) {
      var target = event.target;
      if (target && target.closest) target = target.closest(BUTTON_SELECTOR);
      if (!target || !target.getAttribute) return;
      var lang = target.getAttribute("data-set-lang") || target.getAttribute("data-lang-btn") || target.getAttribute("data-lang");
      if (!availableLang(lang)) return;
      if (event.preventDefault) event.preventDefault();
      changeLanguage(lang);
    });
    updateButtons(root, getLang());
  }

  function observe(root) {
    if (W.__MMD_I18N_OBSERVER__ || typeof W.MutationObserver !== "function") return;
    var target = root === D ? D.body : root;
    if (!target) return;
    var observer = new W.MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i += 1) {
        var added = mutations[i].addedNodes || [];
        for (var j = 0; j < added.length; j += 1) {
          if (added[j] && added[j].nodeType === 1) applyToRoot(added[j], { lang: getLang() });
        }
      }
    });
    observer.observe(target, { childList: true, subtree: true });
    W.__MMD_I18N_OBSERVER__ = observer;
  }

  function init(options) {
    options = options || {};
    var root = options.root || D;
    var lang = persistLang(options.lang || getLang());
    applyToRoot(root, { lang: lang, role: options.role });
    if (options.bindLangButtons !== false) bindLanguageButtons(D);
    if (options.observe !== false) observe(root);
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
    setLang: changeLanguage,
    t: translate,
    apply: applyToRoot,
    bindLangButtons: bindLanguageButtons,
    init: init
  };

  W.MMD_I18N = API;
  if (typeof W.T !== "function") W.T = function (key, options) { return API.t(key, options || {}); };

  function boot() {
    try { API.init({ root: D, observe: true }); } catch (_) {}
  }

  if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
