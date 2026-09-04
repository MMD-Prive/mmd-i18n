import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../assets/i18n/i18n.core.v21.js", import.meta.url), "utf8");

class FakeElement {
  constructor(attributes = {}, text = "") {
    this.attributes = { ...attributes };
    this.textContent = text;
    this.innerHTML = text;
    this.value = "";
    this.nodeType = 1;
    this.classList = { toggle() {} };
  }
  getAttribute(name) { return Object.hasOwn(this.attributes, name) ? this.attributes[name] : null; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  closest() { return this; }
}

function runtime({ stored = {}, htmlLang = "en", search = "" } = {}) {
  const storage = new Map(Object.entries(stored));
  const selectors = new Map();
  const documentElement = new FakeElement({ lang: htmlLang });
  const body = new FakeElement();
  const document = {
    readyState: "complete",
    body,
    documentElement,
    querySelectorAll(selector) { return selectors.get(selector) || []; },
    addEventListener() {},
    dispatchEvent() {},
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
      th: { title: "หัวข้อ", onlyThai: "ภาษาไทย" },
      en: { title: "Title", onlyThai: "" },
      zh: { title: "标题" },
      jp: { title: "タイトル" }
    }
  };
  window.window = window;
  vm.runInContext(source, vm.createContext({ window, document, URLSearchParams }));
  return { window, document, storage, selectors };
}

test("keeps Thai as default even when Webflow html lang is English", () => {
  const r = runtime({ htmlLang: "en" });
  assert.equal(r.window.MMD_I18N.getLang(), "th");
});

test("activates English and Chinese while Japanese remains future", () => {
  const r = runtime();
  assert.deepEqual(Array.from(r.window.MMD_I18N.languages), ["th", "en", "zh"]);
  assert.equal(r.window.MMD_I18N.setLang("en"), "en");
  assert.equal(r.storage.get("mmd_lang"), "en");
  assert.equal(r.window.MMD_I18N.setLang("zh"), "zh");
  assert.equal(r.window.MMD_I18N.setLang("jp"), "th");
});

test("uses selected language then Thai fallback", () => {
  const r = runtime({ stored: { mmd_lang: "en" } });
  assert.equal(r.window.MMD_I18N.t("title"), "Title");
  assert.equal(r.window.MMD_I18N.t("onlyThai"), "ภาษาไทย");
});

test("applies canonical text binding without erasing missing copy", () => {
  const r = runtime({ stored: { mmd_lang: "zh" } });
  const translated = new FakeElement({ "data-i18n-text": "title" }, "เดิม");
  const missing = new FakeElement({ "data-i18n-text": "missing" }, "Keep me");
  r.selectors.set("[data-i18n-text]", [translated, missing]);
  r.window.MMD_I18N.apply(r.document);
  assert.equal(translated.textContent, "标题");
  assert.equal(missing.textContent, "Keep me");
});
