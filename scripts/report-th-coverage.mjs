import { readFileSync } from "node:fs";
import { extname } from "node:path";
import vm from "node:vm";

const files = process.argv.slice(2).filter((file) => extname(file) === ".html");
if (!files.length) {
  console.error("usage: npm run audit:th -- <HTML files>");
  process.exit(1);
}

const sandbox = { window: {} };
sandbox.window.window = sandbox.window;
vm.runInNewContext(readFileSync("assets/i18n/i18n.dict.js", "utf8"), sandbox);

const thai = sandbox.window.I18N_DICT?.th || {};
const thaiKeys = Object.keys(thai).filter((key) => String(thai[key] ?? "").trim());
const missing = [];
let bindingCount = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const pattern = /data-i18n(?:-text|-html|-placeholder|-title|-aria-label|-value)?=["']([^"']+)["']/gi;
  const keys = new Set();
  let match;
  while ((match = pattern.exec(html))) keys.add(match[1].trim());
  bindingCount += keys.size;

  for (const key of keys) {
    const covered = thaiKeys.includes(key) || thaiKeys.some((candidate) => candidate.startsWith(`${key}.`));
    if (!covered) missing.push({ file, key });
  }
}

console.log(`Thai coverage: ${bindingCount - missing.length}/${bindingCount} bound keys`);
for (const item of missing) console.error(`MISSING TH ${item.file}: ${item.key}`);
if (missing.length) process.exit(1);
