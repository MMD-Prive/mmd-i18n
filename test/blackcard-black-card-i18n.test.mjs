import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const bundle = fs.readFileSync("assets/i18n/pages/blackcard-black-card.js","utf8");
const registry = fs.readFileSync("assets/i18n/completed-pages.registry.js","utf8");
const loader = fs.readFileSync("components/webflow/mmd-i18n-loader.html","utf8");

test("Black Card LV9.1 has canonical TH EN ZH dictionaries", () => {
  assert.match(bundle,/Object\.assign\(I\.th,/);
  assert.match(bundle,/Object\.assign\(I\.en,/);
  assert.match(bundle,/Object\.assign\(I\.zh,/);
  assert.match(bundle,/35,000/);
  assert.match(bundle,/3-year membership/);
  assert.match(bundle,/3 年会员期/);
});

test("Black Card bundle is scoped to the canonical route and current LV9.1 root", () => {
  assert.match(bundle,/\/blackcard\/black-card/);
  assert.match(bundle,/mmd-blackcard-lv91/);
  assert.match(bundle,/data-mmd-i18n-bundle","blackcard-black-card"/);
});

test("Black Card bundle exposes canonical TH EN ZH language controls", () => {
  assert.match(bundle,/data-set-lang="th"/);
  assert.match(bundle,/data-set-lang="en"/);
  assert.match(bundle,/data-set-lang="zh"/);
});

test("Black Card route uses its page bundle in registry and loader", () => {
  assert.match(registry,/path:\s*"\/blackcard\/black-card"[^\n]+bundle:\s*"blackcard-black-card"/);
  assert.match(loader,/pages\/blackcard-black-card\.js/);
});

test("Black Card current bundle does not reintroduce legacy 25k 5-year or invite-only product copy", () => {
  assert.doesNotMatch(bundle,/25,000/);
  assert.doesNotMatch(bundle,/5\s*years?/i);
  assert.doesNotMatch(bundle,/invite[- ]?only/i);
});
