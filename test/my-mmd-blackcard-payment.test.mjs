import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const copy=JSON.parse(readFileSync(new URL('../assets/i18n/pages/my-mmd-blackcard-payment.th.json',import.meta.url),'utf8'));
test('Black Card payment copy preserves official verification and immediate Companion preference',()=>{
  assert.match(copy.subtitle,/35,000.*3 ปี/);
  assert.match(copy.pending,/เลือก Companion/);
  assert.match(copy.preference,/ยังไม่เปิดสิทธิ์สมาชิก/);
  assert.match(copy.companionNote,/ไม่ใช่ Travel Model/);
  assert.match(copy.error,/ลองอีกครั้ง/);
});
