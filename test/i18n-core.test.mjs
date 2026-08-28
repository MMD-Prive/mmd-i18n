import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const coreSource = readFileSync(new URL("../assets/i18n/i18n.core.js", import.meta.url), "utf8");

class FakeElement {
  constructor(attributes = {}, text = "") {
    this.attributes = { ...attributes };
    this.textContent = text;
    this.innerHTML = text;
    this.value = "";
    this.nodeType = 1;
    this.states = new Set();
    this.classList = {
      toggle: (name, active) => active ? this.states.add(name) : this.states.delete(name)
    };
  }
  getAttribute(name) { return Object.hasOwn(this.attributes, name) ? this.attributes[name] : null; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  closest() { return this; }
}

function createRuntime({ stored = {}, htmlLang = "th", search = "" } = {}) {
  const storage = new Map(Object.entries(stored));
  const selectors = new Map();
  const listeners = new Map();
  const documentElement = new FakeElement({ lang: htmlLang });
  const body = new FakeElement();

  const document = {
    readyState: "complete",
    body,
    documentElement,
    querySelectorAll(selector) { return selectors.get(selector) || []; },
    addEventListener(name, handler) { listeners.set(name, handler); },
    dispatchEvent() {},
    createEvent() { return { initCustomEvent() {} }; }
  };

  const window = {
    document,
    location: { search },
    localStorage: {
      getItem(key) { return storage.has(key) ? storage.get(key) : null; },
      setItem(key, value) { storage.set(key, String(value)); }
    },
    CustomEvent: class { constructor(name, options) { this.type = name; this.detail = options.detail; } },
    URLSearchParams,
    MutationObserver: undefined,
    I18N_DICT: {
      th: { title: "หัวข้อ", onlyThai: "ภาษาไทย", "mobile.m": "มือถือ" },
      en: { title: "Title" },
      zh: { title: "标题" },
      jp: { title: "タイトル" }
    }
  };
  window.window = window;

  const context = vm.createContext({ window, document, URLSearchParams });
  vm.runInContext(coreSource, context);
  return { window, document, storage, selectors, listeners };
}

test("defaults to Thai and applies canonical bindings", () => {
  const runtime = createRuntime();
  const heading = new FakeElement({ "data-i18n-text": "title" }, "ข้อความเดิม");
  runtime.selectors.set("[data-i18n-text]", [heading]);
  runtime.window.MMD_I18N.apply(runtime.document);
  assert.equal(runtime.window.MMD_I18N.getLang(), "th");
  assert.equal(heading.textContent, "หัวข้อ");
});

test("locks unavailable locales to Thai in both storage keys", () => {
  const runtime = createRuntime();
  runtime.window.MMD_I18N.setLang("en");
  assert.equal(runtime.storage.get("mmd_lang"), "th");
  assert.equal(runtime.storage.get("lang"), "th");
  assert.equal(runtime.document.documentElement.getAttribute("lang"), "th");
});

test("keeps future locale compatibility without activating it", () => {
  const runtime = createRuntime({ stored: { mmd_lang: "th" }, search: "?lang=ja" });
  assert.equal(runtime.window.MMD_I18N.normalizeLang("ja"), "jp");
  assert.equal(runtime.window.MMD_I18N.getLang(), "th");
  assert.deepEqual(Array.from(runtime.window.MMD_I18N.languages), ["th"]);
});

test("always resolves runtime copy from Thai during TH-first rollout", () => {
  const runtime = createRuntime({ stored: { mmd_lang: "en" } });
  runtime.window.I18N_DICT.en.onlyThai = "";
  assert.equal(runtime.window.MMD_I18N.getLang(), "th");
  assert.equal(runtime.window.MMD_I18N.t("title"), "หัวข้อ");
  assert.equal(runtime.window.MMD_I18N.t("onlyThai"), "ภาษาไทย");
  assert.equal(runtime.window.MMD_I18N.t("missing"), null);
});

test("keeps existing page copy when a key is missing", () => {
  const runtime = createRuntime({ stored: { mmd_lang: "en" } });
  const heading = new FakeElement({ "data-i18n-text": "missing" }, "Keep me");
  runtime.selectors.set("[data-i18n-text]", [heading]);
  runtime.window.MMD_I18N.apply(runtime.document);
  assert.equal(heading.textContent, "Keep me");
});
