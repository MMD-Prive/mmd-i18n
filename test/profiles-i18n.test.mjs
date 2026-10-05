import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const core=fs.readFileSync("assets/i18n/pages/profiles.core.js","utf8");
const runtime=fs.readFileSync("assets/i18n/pages/profiles.runtime.js","utf8");
const registry=fs.readFileSync("assets/i18n/completed-pages.registry.js","utf8");
const loader=fs.readFileSync("components/webflow/mmd-i18n-loader.html","utf8");

test("Profiles canonical copy covers TH EN ZH and current public role layers",()=>{
  assert.ok(core.includes('add("th",'));
  assert.ok(core.includes('add("en",'));
  assert.ok(core.includes('add("zh",'));
  for(const key of ["role.driver_companion.title","dayoff.title","nightlife.title","social.title","bangkok.title","sport.title","wellness.title","business.title","creative.title","medical.title","member.title","consent.title","access.body"]) assert.ok(core.includes('"'+key+'"'),key);
});

test("Profiles runtime stays route-scoped and bridges existing language buttons",()=>{
  assert.ok(runtime.includes('/profiles'));
  assert.ok(runtime.includes('data-set-lang'));
  assert.ok(runtime.includes('profiles.roleIntro.title'));
  assert.ok(runtime.includes('MutationObserver'));
  assert.ok(runtime.includes('catalog.result'));
});

test("Profiles route is registered with its canonical bundle and loader scripts",()=>{
  assert.ok(registry.includes('{ path: "/profiles", world: "public", bundle: "profiles" }'));
  assert.ok(loader.includes('pages/profiles.core.js'));
  assert.ok(loader.includes('pages/profiles.runtime.js'));
});
