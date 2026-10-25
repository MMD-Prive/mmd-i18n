import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const bundle = readFileSync(new URL("../assets/i18n/pages/blackcard-confirm.js", import.meta.url), "utf8");
const registry = readFileSync(new URL("../assets/i18n/completed-pages.registry.js", import.meta.url), "utf8");
const loader = readFileSync(new URL("../components/webflow/mmd-i18n-loader.html", import.meta.url), "utf8");
const requiredKeys = [
  "bc.confirm.flow.steps", "bc.confirm.flow.title", "bc.confirm.flow.closed_title",
  "bc.confirm.flow.closed_body", "bc.confirm.flow.existing_link", "bc.confirm.flow.existing_hint",
  "bc.confirm.flow.companion_title", "bc.confirm.flow.companion_body",
  "bc.confirm.error.blackcard_required", "bc.confirm.error.conflict", "bc.confirm.error.generic",
  "bc.confirm.error.member_required", "bc.confirm.error.reason", "bc.confirm.error.retry",
  "bc.confirm.error.timeout", "bc.confirm.error.unavailable", "bc.confirm.load.blackcard_required",
  "bc.confirm.load.member_required", "bc.confirm.load.ready", "bc.confirm.load.saved",
  "bc.confirm.load.unavailable", "bc.confirm.status.cancelled", "bc.confirm.status.declined",
  "bc.confirm.status.follow_up", "bc.confirm.status.pending", "bc.confirm.status.recorded",
  "bc.confirm.status.reviewing", "bc.confirm.status.unavailable",
];

test("Black Card confirm bundle defines every page copy key in Thai and English", () => {
  const window = { I18N_DICT: {} };
  const document = { readyState: "loading", addEventListener() {}, getElementById() { return null; } };
  vm.runInNewContext(bundle, { window, document, location: { pathname: "/blackcard/confirm" } });
  for (const key of requiredKeys) {
    assert.equal(typeof window.I18N_DICT.th[key], "string", `missing th.${key}`);
    assert.equal(typeof window.I18N_DICT.en[key], "string", `missing en.${key}`);
  }
});

test("Black Card confirm bundle is registered and loaded by canonical Webflow loader", () => {
  assert.match(registry, /\{ path: "\/blackcard\/confirm", world: "member", bundle: "blackcard-confirm" \}/);
  assert.match(loader, /assets\/i18n\/pages\/blackcard-confirm\.js\?v=20261025-blackcard-confirm-2/);
});

test('runtime status/error keys have matching Thai and English copy with a name placeholder', () => {
  const window = { I18N_DICT: {} };
  const document = { readyState: 'loading', addEventListener() {} };
  vm.runInNewContext(bundle, { window, document, location: { pathname: '/blackcard/confirm' } });
  for (const name of ['loading','choose','choice','saved','saving','no_token','pending','recorded','follow_up','declined','cancelled','expired','verified','evidence','error','error_expired','error_payment','error_product','error_sync','error_conflict','error_reason','change_reason','retry']) {
    const key = 'bc.confirm.runtime.' + name;
    for (const lang of ['th', 'en']) assert.equal(typeof window.I18N_DICT[lang][key], 'string', `${lang}.${key}`);
  }
  assert.match(window.I18N_DICT.en['bc.confirm.runtime.saved'], /\{name\}/);
  assert.match(window.I18N_DICT.th['bc.confirm.runtime.saved'], /\{name\}/);
  assert.ok(!window.I18N_DICT.en['bc.confirm.error.blackcard_required'].includes('verified Black Card access'));
});

test('bundle applies to the real confirm root and updates its language on language changes', () => {
  const events = {}, attrs = {}, root = { setAttribute(k,v) { attrs[k] = v; } };
  let lang = 'en', applied = 0;
  const window = { MMD_I18N: { getLang() { return lang; }, apply(node) { assert.equal(node, root); applied++; } } };
  const document = { readyState: 'complete', addEventListener(name, cb) { events[name] = cb; }, getElementById(id) { assert.equal(id, 'bcflow'); return root; } };
  vm.runInNewContext(bundle, { window, document, location: { pathname: '/blackcard/confirm/' } });
  assert.equal(attrs.lang, 'en'); assert.equal(attrs['data-mmd-i18n-bundle'], 'blackcard-confirm');
  lang = 'th'; events['mmd:i18n:change']();
  assert.equal(attrs.lang, 'th'); assert.equal(applied, 2);
});
