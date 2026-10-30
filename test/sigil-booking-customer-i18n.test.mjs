import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../assets/i18n/pages/sigil-booking-customer.js", import.meta.url), "utf8");
const placeholders = (value) => [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();

test("customer copy preserves existing copy and has complete locale and placeholder parity", () => {
  const window = { I18N_DICT: { th: { "existing.key": "เดิม" }, en: { "existing.key": "existing" }, zh: { "existing.key": "原文" } } };
  vm.runInNewContext(source, { window });
  const keys = Object.keys(window.I18N_DICT.th).filter((key) => key.startsWith("sigil.customer.")).sort();
  assert.ok(keys.length > 0);
  for (const lang of ["th", "en", "zh"]) {
    const locale = window.I18N_DICT[lang];
    assert.deepEqual(Object.keys(locale).filter((key) => key.startsWith("sigil.customer.")).sort(), keys);
    for (const key of keys) {
      assert.equal(typeof locale[key], "string", `${lang}.${key}`);
      assert.ok(locale[key].trim(), `${lang}.${key}`);
      assert.deepEqual(placeholders(locale[key]), placeholders(window.I18N_DICT.th[key]), `${lang}.${key} placeholders`);
    }
  }
  assert.equal(window.I18N_DICT.th["existing.key"], "เดิม");
  assert.equal(window.I18N_DICT.en["existing.key"], "existing");
  assert.equal(window.I18N_DICT.zh["existing.key"], "原文");
});
