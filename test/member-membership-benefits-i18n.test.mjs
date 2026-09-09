import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const bundle = readFileSync(new URL("../assets/i18n/pages/member-membership-benefits.js", import.meta.url), "utf8");
const registry = readFileSync(new URL("../assets/i18n/completed-pages.registry.js", import.meta.url), "utf8");
const loader = readFileSync(new URL("../components/webflow/mmd-i18n-loader.html", import.meta.url), "utf8");

test("registers SIGIL membership benefits as canonical TH EN ZH", () => {
  assert.match(registry, /path:\s*"\/sigil\/member\/membership\/benefits"[^\n]+bundle:\s*"member-membership-benefits"/);
  assert.match(registry, /locales:\s*\["th",\s*"en",\s*"zh"\]/);
});

test("loads the benefits page bundle before the canonical runtime", () => {
  const page = loader.indexOf("pages/member-membership-benefits.js");
  const registryIndex = loader.indexOf("completed-pages.registry.js");
  const core = loader.indexOf("i18n.core.v21.js");
  assert.ok(page >= 0);
  assert.ok(page < registryIndex);
  assert.ok(registryIndex < core);
});

test("keeps canonical Thai source and supplies reviewed English and Chinese hero copy", () => {
  assert.match(bundle, /"memberBenefits\.hero\.subtitle":"สิทธิ์ที่ค่อย ๆ เปิดตามระดับที่ยืนยันแล้ว"/);
  assert.match(bundle, /"memberBenefits\.hero\.subtitle":"Benefits that open progressively with your verified level"/);
  assert.match(bundle, /"memberBenefits\.hero\.subtitle":"权益会随已验证等级逐步开放"/);
  assert.match(bundle, /"memberBenefits\.cta\.membership":"Find the membership for you"/);
  assert.match(bundle, /"memberBenefits\.cta\.membership":"查看适合你的 Membership"/);
});

test("translates entitlement and concierge explanations without changing product names", () => {
  assert.match(bundle, /"memberBenefits\.acc\.standard\.body":"Once Standard Active is verified/);
  assert.match(bundle, /"memberBenefits\.acc\.standard\.body":"Standard Active 验证通过后/);
  assert.match(bundle, /"memberBenefits\.kenji\.title":"Kenji can guide the next step; the system confirms the actual entitlement"/);
  assert.match(bundle, /"memberBenefits\.kenji\.title":"Kenji 可以帮你继续下一步，实际权益仍由系统确认"/);
});

test("binds the rebuilt Webflow embed explicitly instead of relying only on text guessing", () => {
  assert.match(bundle, /getElementById\("mmdBenefitsFullV4"\)/);
  assert.match(bundle, /setAttribute\("data-i18n-text",key\)/);
  assert.match(bundle, /data-mmd-i18n-bundle/);
  assert.match(bundle, /mmd:i18n:change/);
});
