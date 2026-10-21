import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(
  new URL("../assets/i18n/pages/sigil-booking-owner.js", import.meta.url),
  "utf8",
);

test("SIGIL Booking Owner copy is complete, locale-aligned and fail-closed", () => {
  const window = { I18N_DICT: { th: { "existing.key": "keep" } } };
  vm.runInNewContext(source, { window });

  const keys = Object.keys(window.I18N_DICT.th)
    .filter((key) => key.startsWith("sigil.owner."))
    .sort();

  assert.equal(keys.length, 33);
  for (const lang of ["th", "en", "zh"]) {
    const localeKeys = Object.keys(window.I18N_DICT[lang])
      .filter((key) => key.startsWith("sigil.owner."))
      .sort();
    assert.deepEqual(localeKeys, keys);
    for (const key of keys) {
      assert.ok(window.I18N_DICT[lang][key].trim(), `${lang}.${key}`);
    }
  }

  assert.match(
    window.I18N_DICT.th["sigil.owner.hero.body"],
    /ยังไม่มี canonical request feed/,
  );
  assert.match(
    window.I18N_DICT.th["sigil.owner.tart.body"],
    /ไม่ยืนยันงาน ราคา การชำระเงิน สิทธิ์/,
  );
  assert.match(
    window.I18N_DICT.th["sigil.owner.hold.note"],
    /ยังไม่สร้าง Job, Session, Payment หรือ Booking Request/,
  );
  assert.match(
    window.I18N_DICT.th["sigil.owner.hold.body"],
    /ไม่อ่านหรือเปลี่ยนข้อมูลระบบเดิม/,
  );
  assert.equal(window.I18N_DICT.th["existing.key"], "keep");
});
