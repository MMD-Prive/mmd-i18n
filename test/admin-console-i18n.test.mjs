import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const copy = JSON.parse(readFileSync(new URL("../assets/i18n/pages/admin-console.th.json", import.meta.url), "utf8"));
const extension = readFileSync(new URL("../assets/i18n/pages/admin-console.js", import.meta.url), "utf8");
const core = readFileSync(new URL("../assets/i18n/i18n.core.v21.js", import.meta.url), "utf8");

test("Console extension preserves the existing dictionary and locales when loaded again", () => {
  const th = { "existing.key": "คงข้อความเดิม" };
  const en = Object.freeze({ "existing.key": "Keep existing copy" });
  const zh = Object.freeze({ "existing.key": "保留原文" });
  const dictionary = { th, en, zh };
  const window = { I18N_DICT: dictionary };
  const context = vm.createContext({ window });

  vm.runInContext(extension, context);
  vm.runInContext(extension, context);

  assert.equal(window.I18N_DICT, dictionary);
  assert.equal(window.I18N_DICT.th, th);
  assert.equal(window.I18N_DICT.en, en);
  assert.equal(window.I18N_DICT.zh, zh);
  assert.equal(th["existing.key"], "คงข้อความเดิม");
  assert.deepEqual(Object.keys(dictionary).sort(), ["en", "th", "zh"]);
  assert.deepEqual(
    Object.fromEntries(Object.entries(th).filter(([key]) => key.startsWith("admin.console."))),
    copy,
  );
  assert.ok(Object.keys(copy).length > 0);
  for (const [key, value] of Object.entries(copy)) {
    assert.match(key, /^admin\.console\./);
    assert.equal(typeof value, "string", key);
    assert.ok(value.trim(), key);
  }
});

test("Canonical v2.1 runtime resolves Console Thai copy for existing language preferences", () => {
  const document = { readyState: "loading", addEventListener() {} };
  const window = {};
  const context = vm.createContext({ window, document });
  vm.runInContext(extension, context);
  vm.runInContext(core, context);

  for (const lang of ["th", "en", "zh"]) {
    for (const [key, value] of Object.entries(copy)) {
      assert.equal(window.MMD_I18N.t(key, { lang, role: "owner" }), value, `${lang}: ${key}`);
    }
  }
  assert.equal(window.MMD_I18N.t("admin.console.missing", { lang: "th", role: "owner" }), null);
});
