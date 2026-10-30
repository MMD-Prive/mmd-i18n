import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

test('held review labels use owner wording without adding payment authority', () => {
  const window = { I18N_DICT: { th: { retained_test_key: 'preserved' } } };
  runInNewContext(readFileSync(new URL('../assets/i18n/i18n.dict.js', import.meta.url), 'utf8'), { window });
  const th = window.I18N_DICT.th;
  assert.equal(th['admin.held_review.title'], 'สลิปรอตรวจ');
  assert.equal(th['admin.held_review.navigation_label'], 'หมวดตรวจสลิป');
  assert.equal(th['admin.held_review.loading'], 'กำลังอ่านรายการสลิปรอตรวจ…');
  assert.equal(th.retained_test_key, 'preserved');
  assert.deepEqual(Object.keys(th).filter(key => key.startsWith('admin.held_review.')).sort(), ['admin.held_review.loading','admin.held_review.navigation_label','admin.held_review.title']);
});
