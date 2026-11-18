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

test("renewal and signup labels follow their links and verified terms survive the policy overlay", async () => {
  const { runInNewContext } = await import("node:vm");
  const overlay = readFileSync(new URL("../assets/i18n/pages/member-membership-benefits-policy-v3.js", import.meta.url), "utf8");
  const makeLink = (path) => ({
    pathname: path.split("#")[0], hash: path.includes("#") ? "#" + path.split("#")[1] : "",
    setAttribute(name, value) { this[name] = value; },
  });
  const actions = [makeLink("/member/renewal"), makeLink("/sigil/member/membership#privatePackages")];
  const myMmd = makeLink("/member/dashboard");
  const root = {
    querySelector: () => null,
    querySelectorAll(selector) {
      if (selector === ".bf4-sticky a") return [actions[0], myMmd];
      if (selector.includes(".bf4-hero .bf4-actions a,")) return [...actions, myMmd];
      return [];
    },
    setAttribute() {},
  };
  const context = {
    window: {}, location: { pathname: "/sigil/member/membership/benefits" },
    document: { addEventListener() {}, getElementById: () => root }, setTimeout() {},
  };
  runInNewContext(bundle, context);
  runInNewContext(overlay, context);
  assert.deepEqual(actions.map(link => link["data-i18n-text"]), ["memberBenefits.cta.renew", "memberBenefits.cta.packages"]);
  assert.equal(myMmd["data-i18n-text"], "memberBenefits.sticky.dashboard");
  const dictionaries = context.window.I18N_DICT;
  for (const [lang, labels] of Object.entries({
    th: ["ตรวจสิทธิ์ต่ออายุ", "ดูแพ็กเกจสมาชิก", "บาท / 2 ปีแรก"],
    en: ["Check renewal eligibility", "View membership plans", "THB / first 2 years"],
    zh: ["查看续费资格", "查看会员方案", "泰铢 / 首 2 年"],
  })) {
    const t = key => dictionaries[lang]["memberBenefits." + key];
    assert.equal(t("cta.renew"), labels[0]);
    assert.equal(t("cta.packages"), labels[1]);
    assert.equal(t("mini.cta"), labels[0]);
    assert.equal(t("acc.renewal.cta"), labels[0]);
    assert.equal(t("premium.unit"), labels[2]);
    assert.equal(t("sticky.dashboard"), "My MMD");
    assert.match(t("mini.desc"), /Standard.*1,000.*Premium.*2,500/);
    assert.match(t("acc.renewal.body"), /90/);
    assert.match(t("acc.renewal.body"), /LINE/);
    assert.match(t("renewal.campaign"), /CARE BACK.*MY MMD/);
    assert.doesNotMatch(Object.values(dictionaries[lang]).join(" "), /180|\+1 (?:ปี|年|year)|799|1,999|1999|December|ธันวาคม|12月/i);
  }
  assert.equal(dictionaries.th["memberBenefits.renewal.campaign"], "CARE BACK ทยอยเปิดข้อเสนอตั้งแต่กลางเดือน สิทธิ์ที่ได้รับขึ้นอยู่กับรอบที่ต่ออายุ ตรวจข้อเสนอของคุณใน MY MMD ก่อนชำระเงิน");
});
