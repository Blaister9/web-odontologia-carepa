import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import ts from "typescript";

const root = process.cwd();
const srcRoot = path.join(root, "src");
const outputRoot = path.join(root, "docs", "content-audit-v1");

const visibleKeys = new Set([
  "title", "metaTitle", "seoTitle", "description", "metaDescription", "seoDescription",
  "label", "headline", "cta", "question", "answer", "alt", "whatsappMessage",
  "reassurance", "guidance", "summary", "featuredSummary", "intro", "quote",
  "shortCopy", "landingIntro", "conversionPrompt", "supportCopy", "name", "badge"
]);
const visibleTags = new Set(["p", "h1", "h2", "h3", "h4", "span", "strong", "small", "button", "a", "figcaption", "blockquote", "li"]);
const visibleAttributes = new Set(["alt", "aria-label", "title", "placeholder"]);
const artificial = /(más que|experiencia pensada|tu mejor versión|cada sonrisa|acompañ\w*|bienestar y confianza|clara, cercana y profesional|atención cercana|cuidado que se siente|transform\w* sonrisas|comprometid\w* con)/i;
const factual = /(direcci[oó]n|horario|gratis|sin costo|forma[s]? de pago|certificad|a[nñ]os de experiencia|24\/7|disponibilidad inmediata)/i;
const seoKeys = new Set(["metaTitle", "seoTitle", "metaDescription", "seoDescription"]);
const trackedTerms = ["confianza", "cercano", "personalizado", "bienestar", "experiencia", "sonrisa", "cuidado", "orientación", "profesional"];

async function walk(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(absolute);
  }
  return files.sort();
}

function clean(value) {
  return value.replace(/\s+/g, " ").trim();
}

function tagName(node) {
  const tag = node?.parent?.openingElement?.tagName ?? node?.parent?.tagName;
  return tag && ts.isIdentifier(tag) ? tag.text : tag?.getText?.() ?? "jsx";
}

function extract(file, source) {
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const items = [];
  function add(node, text, key, kind) {
    const value = clean(text);
    if (!value || value.length < 2 || /^[-→↓“”]+$/.test(value)) return;
    const line = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
    items.push({ file, line, key, kind, text: value });
  }
  function visit(node) {
    if (ts.isPropertyAssignment(node)) {
      const key = node.name && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)) ? node.name.text : "";
      if (visibleKeys.has(key) && (ts.isStringLiteral(node.initializer) || ts.isNoSubstitutionTemplateLiteral(node.initializer))) add(node.initializer, node.initializer.text, key, "data");
    }
    if (ts.isJsxText(node) && visibleTags.has(tagName(node))) add(node, node.getText(sourceFile), tagName(node), "jsx");
    if (ts.isJsxAttribute(node) && visibleAttributes.has(node.name.text) && node.initializer && ts.isStringLiteral(node.initializer)) add(node, node.initializer.text, node.name.text, "attribute");
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return items;
}

function pageFor(file) {
  const normalized = file.replaceAll("\\", "/");
  if (normalized.includes("/pages/index.tsx")) return "/";
  if (normalized.includes("/pages/consultorio.tsx")) return "/consultorio";
  if (normalized.includes("/pages/equipo.tsx")) return "/equipo";
  if (normalized.includes("/pages/servicios/index.tsx")) return "/servicios";
  if (normalized.includes("/pages/servicios/[slug].tsx") || normalized.endsWith("/data/servicePages.ts")) return "/servicios/*";
  if (normalized.includes("/pages/c/[slug].tsx") || normalized.endsWith("/data/campaigns.ts")) return "/c/*";
  if (normalized.endsWith("/data/conversionJourneys.ts")) return "/#que-necesitas";
  if (normalized.includes("/components/sections/")) return "/ (home section)";
  return "sitewide/shared";
}

function purposeFor(item) {
  if (item.key === "alt") return "Describe image for accessibility";
  if (item.key === "whatsappMessage") return "Prefilled WhatsApp message";
  if (seoKeys.has(item.key)) return "Search snippet";
  if (/^h[1-4]$/.test(item.key) || item.key === "title" || item.key === "headline") return "Heading / scanning";
  if (["button", "a", "cta", "label"].includes(item.key)) return "Action / choice";
  if (["question", "answer"].includes(item.key)) return "Patient FAQ";
  return "Information / orientation";
}

function audit(oldItem, newItem) {
  const current = oldItem.text;
  const proposed = newItem?.text ?? "";
  if (!proposed) return { classification: "DELETE", issue: "Removed because it duplicated nearby information or added no useful meaning", action: "DELETE" };
  if (factual.test(current) && /(confirma|sujeta|según disponibilidad|exacta)/i.test(current)) return { classification: "NEEDS-CLIENT-FACT", issue: "Prudent placeholder depends on a confirmed client fact", action: proposed === current ? "KEEP UNTIL CONFIRMED" : "REWRITE PRUDENTLY" };
  if (seoKeys.has(oldItem.key) && proposed === current) return { classification: "SEO-KEEP", issue: "Clear search intent and local relevance", action: "KEEP" };
  if (proposed !== current) {
    const action = proposed.length < current.length * 0.82 ? "SHORTEN" : "REWRITE";
    const issue = artificial.test(current) ? "Abstract or agency-like phrasing" : current.length > 110 ? "Overexplained or difficult to scan" : "Stiff, repetitive or less natural than needed";
    return { classification: action, issue, action };
  }
  if (artificial.test(current)) return { classification: "REWRITE", issue: "Abstract or formulaic phrasing", action: "REWRITE" };
  if (current.length > 150 && !["answer", "guidance", "description"].includes(oldItem.key)) return { classification: "SHORTEN", issue: "Long for its interface context", action: "SHORTEN" };
  return { classification: "KEEP", issue: "Already clear, useful and natural enough", action: "KEEP" };
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(headers, rows) {
  return `${headers.join(",")}\n${rows.map((row) => headers.map((header) => escapeCsv(row[header])).join(",")).join("\n")}\n`;
}

function termCounts(items) {
  const text = items.map((item) => item.text).join(" ").toLocaleLowerCase("es");
  return Object.fromEntries(trackedTerms.map((term) => [term, (text.match(new RegExp(`\\b${term}`, "giu")) ?? []).length]));
}

const files = await walk(srcRoot);
const oldItems = [];
const newItems = [];
for (const absolute of files) {
  const relative = path.relative(root, absolute).replaceAll("\\", "/");
  const current = await fs.readFile(absolute, "utf8");
  let baseline = current;
  try { baseline = execFileSync("git", ["show", `origin/main:${relative}`], { cwd: root, encoding: "utf8" }); } catch { /* new source file */ }
  oldItems.push(...extract(relative, baseline));
  newItems.push(...extract(relative, current));
}

const currentByFile = new Map();
for (const item of newItems) {
  const list = currentByFile.get(item.file) ?? [];
  list.push(item);
  currentByFile.set(item.file, list);
}
const indexes = new Map();
const rows = oldItems.map((oldItem) => {
  const index = indexes.get(oldItem.file) ?? 0;
  const proposed = currentByFile.get(oldItem.file)?.[index];
  indexes.set(oldItem.file, index + 1);
  const result = audit(oldItem, proposed);
  return {
    page: pageFor(oldItem.file),
    section: oldItem.key,
    component: `${oldItem.file}:${oldItem.line}`,
    current_copy: oldItem.text,
    purpose: purposeFor(oldItem),
    classification: result.classification,
    issue: result.issue,
    recommended_action: result.action,
    proposed_copy: proposed?.text ?? "",
    seo_sensitive: seoKeys.has(oldItem.key) || /servicePages|site\.ts|campaigns/.test(oldItem.file) ? "yes" : "no",
    factual_dependency: factual.test(oldItem.text) ? "yes" : "no",
    notes: proposed && proposed.key !== oldItem.key ? "Review pairing: syntax order changed" : ""
  };
});

await fs.mkdir(outputRoot, { recursive: true });
const headers = ["page", "section", "component", "current_copy", "purpose", "classification", "issue", "recommended_action", "proposed_copy", "seo_sensitive", "factual_dependency", "notes"];
await fs.writeFile(path.join(outputRoot, "copy-inventory.csv"), toCsv(headers, rows));

const before = termCounts(oldItems);
const after = termCounts(newItems);
function exactDuplicates(items) {
  const duplicateMap = new Map();
  for (const item of items) {
    const key = item.text.toLocaleLowerCase("es");
    duplicateMap.set(key, (duplicateMap.get(key) ?? 0) + 1);
  }
  return [...duplicateMap.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
}
const duplicatesBefore = exactDuplicates(oldItems);
const duplicatesAfter = exactDuplicates(newItems);
const duplicates = duplicatesBefore;
const classes = Object.fromEntries(["KEEP", "SHORTEN", "REWRITE", "DELETE", "SEO-KEEP", "NEEDS-CLIENT-FACT"].map((name) => [name, rows.filter((row) => row.classification === name).length]));
const report = `# Language pattern counts\n\nGenerated from visible copy in \`src/\`. Prefix matching includes singular/plural and related forms.\n\n| Term | Before | After | Change |\n|---|---:|---:|---:|\n${trackedTerms.map((term) => `| ${term} | ${before[term]} | ${after[term]} | ${after[term] - before[term]} |`).join("\n")}\n\n## Repeated exact fragments before\n\n${duplicates.map(([text, count]) => `- ${count}× “${text}”`).join("\n") || "No exact duplicates."}\n\n## Inventory classification\n\n${Object.entries(classes).map(([name, count]) => `- ${name}: ${count}`).join("\n")}\n`;
const afterDuplicateSection = `\n\n## Repeated exact fragments after\n\n${duplicatesAfter.map(([text, count]) => `- ${count}× “${text}”`).join("\n") || "No exact duplicates."}`;
const finalReport = report.replace("\n\n## Inventory classification", `${afterDuplicateSection}\n\n## Inventory classification`);
await fs.writeFile(path.join(outputRoot, "language-patterns.md"), finalReport);

console.log(JSON.stringify({ fragments: rows.length, classes, before, after }, null, 2));
