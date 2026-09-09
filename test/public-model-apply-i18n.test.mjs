import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const bundle = readFileSync(new URL("../assets/i18n/pages/public-model-apply.js", import.meta.url), "utf8");
const registry = readFileSync(new URL("../assets/i18n/completed-pages.registry.js", import.meta.url), "utf8");
const loader = readFileSync(new URL("../components/webflow/mmd-i18n-loader.html", import.meta.url), "utf8");

test("registers Public Model application as canonical TH EN ZH", () => {
  assert.match(registry, /path:\s*"\/apply\/public-model"[^\n]+bundle:\s*"public-model-apply"/);
  assert.match(registry, /locales:\s*\["th",\s*"en",\s*"zh"\]/);
});

test("loads the Public Model page bundle before registry and runtime", () => {
  const page = loader.indexOf("pages/public-model-apply.js");
  const registryIndex = loader.indexOf("completed-pages.registry.js");
  const core = loader.indexOf("i18n.core.v21.js");
  assert.ok(page >= 0);
  assert.ok(page < registryIndex);
  assert.ok(registryIndex < core);
});

test("includes reviewed Thai English and Chinese application copy", () => {
  assert.match(bundle, /"publicModel\.fit\.title":"ส่งมาแค่ 4 อย่างก่อน"/);
  assert.match(bundle, /"publicModel\.fit\.title":"Start with just 4 things"/);
  assert.match(bundle, /"publicModel\.fit\.title":"先给我们 4 件事就够了"/);
  assert.match(bundle, /"publicModel\.form\.story\.label":"What is your strongest point\? \*"/);
  assert.match(bundle, /"publicModel\.form\.story\.label":"你最突出的特点是什么？ \*"/);
});

test("keeps application safety and choice semantics across EN and ZH", () => {
  assert.match(bundle, /"publicModel\.form\.safety":"I understand MMD work must be safe, drug-free, and screened before proceeding\."/);
  assert.match(bundle, /"publicModel\.form\.safety":"我了解 MMD 的工作必须安全、无毒品，并在进行前完成筛选。"/);
  assert.match(bundle, /"publicModel\.hero\.chip\.choice":"You choose whether to take a job"/);
  assert.match(bundle, /"publicModel\.hero\.chip\.choice":"每个工作都由你决定是否接受"/);
});

test("binds only the rebuilt native pma9 page and refreshes on language change", () => {
  assert.match(bundle, /querySelector\("\.pma9"\)/);
  assert.doesNotMatch(bundle, /getElementById\("pma8"\)/);
  assert.match(bundle, /data-mmd-i18n-bundle/);
  assert.match(bundle, /mmd:i18n:change/);
});
