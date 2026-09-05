import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const mms = readFileSync(new URL("../assets/i18n/pages/mms.js", import.meta.url), "utf8");
const registry = readFileSync(new URL("../assets/i18n/completed-pages.registry.js", import.meta.url), "utf8");

test("registers /male-massage/home in canonical TH EN ZH rollout", () => {
  assert.match(registry, /path:\s*"\/male-massage\/home"/);
  assert.match(registry, /locales:\s*\["th",\s*"en",\s*"zh"\]/);
});

test("keeps the remembered eight-skill MMS home headline in all three languages", () => {
  assert.match(mms, /"mms\.home\.services\.title":"เลือก Skill ที่ต้องการ<br>แล้วให้ MMS ช่วย Match"/);
  assert.match(mms, /"mms\.home\.services\.title":"Choose the skill you need\.<br>Let MMS match the fit\."/);
  assert.match(mms, /"mms\.home\.services\.title":"选择所需 Skill<br>由 MMS 协助匹配"/);
});

test("locks customer-home CTA contrast against global link color overrides", () => {
  assert.match(mms, /mms-home-github-contrast-v1/);
  assert.match(mms, /mh4-button-primary[^\n]+-webkit-text-fill-color:#fff!important/);
  assert.match(mms, /mh4-button-secondary[^\n]+-webkit-text-fill-color:#062d1e!important/);
  assert.match(mms, /mh4-branch-next[^\n]+-webkit-text-fill-color:#10251a!important/);
});

test("uses MMS, not MMD, as the customer coordination voice", () => {
  assert.match(mms, /"mms\.booking\.title":"เลือกสิ่งที่ต้องการ ที่เหลือให้ MMS ประสาน"/);
  assert.match(mms, /"mms\.booking\.success\.title":"MMS ได้รับคำขอแล้ว"/);
  assert.doesNotMatch(mms, /"mms\.booking\.title":"[^"]*MMD/);
  assert.doesNotMatch(mms, /"mms\.booking\.success\.title":"MMD/);
});
