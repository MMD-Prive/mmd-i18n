import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../assets/i18n/pages/model-line-job-briefs.js", import.meta.url), "utf8");

test("Model LINE job briefs copy defines the complete shared key set in supported locales", () => {
  const window = { I18N_DICT: { th: { "existing.key": "keep" } } };
  vm.runInNewContext(source, { window });
  const keys = Object.keys(window.I18N_DICT.th).filter(key => key.startsWith("jobBrief.")).sort();
  assert.equal(keys.length, 101);
  for (const lang of ["th", "en", "zh"]) {
    assert.deepEqual(Object.keys(window.I18N_DICT[lang]).filter(key => key.startsWith("jobBrief.")).sort(), keys);
    for (const key of keys) assert.ok(window.I18N_DICT[lang][key].trim(), `${lang}.${key}`);
  }
  assert.ok(keys.includes("jobBrief.owner.form.title"));
  assert.ok(keys.includes("jobBrief.owner.status.expired"));
  assert.ok(keys.includes("jobBrief.owner.responseVersion"));
  assert.ok(keys.includes("jobBrief.owner.stage.pending_review"));
  assert.ok(keys.includes("jobBrief.owner.filter.startDate"));
  assert.ok(keys.includes("jobBrief.owner.unit.hours"));
  assert.ok(keys.includes("jobBrief.owner.app.description"));
  assert.ok(keys.includes("jobBrief.owner.option.comfortable"));
  assert.equal(window.I18N_DICT.th["jobBrief.interestPending"], "ส่งความสนใจแล้ว รอ MMD พิจารณา ยังไม่ถือว่ายืนยันรับงาน");
  assert.equal(window.I18N_DICT.th["jobBrief.returnToBrief"], "กลับไปดูบรีฟงาน");
  assert.equal(window.I18N_DICT.th["existing.key"], "keep");
});
