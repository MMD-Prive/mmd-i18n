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
  assert.match(loader, /assets\/i18n\/pages\/blackcard-confirm\.js\?v=20261025-blackcard-confirm-1/);
});
