import { readFileSync } from "node:fs";
import { extname } from "node:path";

const rawArgs = process.argv.slice(2);
const strict = rawArgs.includes("--strict");
const files = rawArgs.filter((value) => value !== "--strict" && extname(value) === ".html");

if (!files.length) {
  console.log("i18n audit: no HTML files supplied");
  process.exit(0);
}

const findings = [];

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const exempt = /data-mmd-i18n-exempt\s*:\s*\S+/i.test(html);
  const pageArtifact = /<(?:html|main|section|form)\b/i.test(html);
  const hasDict = /assets\/i18n\/i18n\.dict\.js/i.test(html);
  const hasCore = /assets\/i18n\/i18n\.core\.js/i.test(html);
  const hasLegacyEngine = /mmd-i18n\.(?:local|global)\.js|mmd-master\.js/i.test(html);
  const hasLegacySpans = /data-lang=["'](?:th|en|zh|ja|jp)["']/i.test(html);
  const hasBindings = /data-i18n(?:-|=)/i.test(html);
  const hasSwitcher = /data-(?:set-lang|lang-btn)=/i.test(html);

  if (pageArtifact && !exempt && (!hasDict || !hasCore)) {
    findings.push({ file, level: "error", message: "page artifact does not load the canonical dictionary and core" });
  }
  if (hasLegacyEngine) {
    findings.push({ file, level: "error", message: "legacy/page-local i18n engine is not allowed" });
  }
  if (hasLegacySpans) {
    findings.push({ file, level: "error", message: "parallel data-lang spans must migrate to canonical data-i18n keys" });
  }
  if (hasSwitcher && !hasCore) {
    findings.push({ file, level: "error", message: "language switcher exists without the canonical core" });
  }
  if (hasBindings && !hasDict) {
    findings.push({ file, level: "error", message: "i18n bindings exist without the canonical dictionary" });
  }
}

if (!findings.length) {
  console.log(`i18n audit: ${files.length} file(s) passed`);
  process.exit(0);
}

for (const finding of findings) {
  console.error(`${finding.level.toUpperCase()} ${finding.file}: ${finding.message}`);
}

if (strict) process.exit(1);
console.log("i18n audit completed with findings (use --strict to fail)");
