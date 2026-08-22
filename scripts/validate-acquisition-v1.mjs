import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import sharp from "sharp";

const root = process.cwd();
const docs = path.join(root, "docs", "acquisition-v1");
const media = path.join(root, "public", "marketing", "acquisition-v1");
const errors = [];
const checks = [];

function ok(name, detail) {
  checks.push({ name, status: "pass", detail });
}

function fail(name, detail) {
  errors.push(`${name}: ${detail}`);
  checks.push({ name, status: "fail", detail });
}

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (char === '"') {
      if (quoted && input[i + 1] === '"') {
        field += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && input[i + 1] === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value.length > 0)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [headers, ...body] = rows;
  return body.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

async function readCsv(name) {
  return parseCsv(await fs.readFile(path.join(docs, name), "utf8"));
}

async function hash(file) {
  return crypto.createHash("sha256").update(await fs.readFile(file)).digest("hex");
}

function ffprobe(file) {
  const executable = "C:\\ffmpeg\\bin\\ffprobe.exe";
  return new Promise((resolve, reject) => {
    const child = spawn(executable, ["-v", "error", "-show_entries", "stream=codec_name,width,height,r_frame_rate,sample_rate", "-show_entries", "format=duration", "-of", "json", file]);
    let output = "";
    let error = "";
    child.stdout.on("data", (chunk) => { output += chunk; });
    child.stderr.on("data", (chunk) => { error += chunk; });
    child.on("error", reject);
    child.on("close", (code) => code === 0 ? resolve(JSON.parse(output)) : reject(new Error(error)));
  });
}

const required = [
  "README.md", "platform-research.md", "local-audience-research.md", "acquisition-architecture.md",
  "google-keywords.csv", "google-negatives.csv", "google-ads-copy.csv", "google-location-strategy.md",
  "google-business-maps-checklist.md", "meta-campaign-architecture.md", "meta-ads-copy.csv",
  "creative-strategy.md", "ad-policy-review.md", "budget-scenarios.md", "test-plan.md",
  "analytics-setup.md", "measurement-framework.md", "appointment-attribution.csv",
  "stop-continue-rules.md", "campaign-master.csv", "30-day-paid-plan.md",
  "organic-paid-synergy.md", "LAUNCH_CHECKLIST.md", "responsibilities.md",
  "google-ads-copy.md", "meta-ads-copy.md", "visual-qa.md"
];
const missing = [];
for (const name of required) {
  try { await fs.access(path.join(docs, name)); } catch { missing.push(name); }
}
if (missing.length) fail("required-files", missing.join(", "));
else ok("required-files", `${required.length} present`);

const google = await readCsv("google-ads-copy.csv");
const rsaProblems = google.filter((row) =>
  !row.text || (row.asset_type === "headline" && [...row.text].length > 30) ||
  (row.asset_type === "description" && [...row.text].length > 90)
);
const rsaGroups = new Map();
for (const row of google) {
  const key = `${row.ad_group}/${row.concept}`;
  const tally = rsaGroups.get(key) ?? { headline: 0, description: 0 };
  if (row.asset_type in tally) tally[row.asset_type] += 1;
  rsaGroups.set(key, tally);
}
for (const [group, tally] of rsaGroups) {
  if (tally.headline < 3 || tally.headline > 15 || tally.description < 2 || tally.description > 4) rsaProblems.push({ text: `${group} ${JSON.stringify(tally)}` });
}
if (rsaProblems.length || rsaGroups.size !== 15) fail("google-rsa-limits", rsaProblems.map((row) => row.text).join(" | ") || `${rsaGroups.size} concepts`);
else ok("google-rsa-limits", `${google.length} assets; 15 concepts across 5 intents with 5 headlines/2 descriptions`);

const forbidden = /\b(gratis|gratuito|sin costo|garantiz\w*|citas disponibles|atenci[oó]n inmediata|sin dolor)\b/i;
const paidCopy = `${await fs.readFile(path.join(docs, "google-ads-copy.csv"), "utf8")}\n${await fs.readFile(path.join(docs, "meta-ads-copy.csv"), "utf8")}`;
if (forbidden.test(paidCopy)) fail("copy-policy-guard", `found: ${paidCopy.match(forbidden)?.[0]}`);
else ok("copy-policy-guard", "no prohibited promotional claims in paid copy");

const meta = await readCsv("meta-ads-copy.csv");
const metaProblems = [];
for (const row of meta) {
  if (!row.asset_path || !row.landing_url) metaProblems.push(`${row.ad_id}: missing field`);
  try { await fs.access(path.join(root, row.asset_path)); } catch { metaProblems.push(`${row.ad_id}: missing ${row.asset_path}`); }
  try {
    const url = new URL(row.landing_url);
    if (url.hostname !== "www.dranatalyjimenez.com" || url.searchParams.get("utm_source") !== "meta" || url.searchParams.get("utm_medium") !== "paid_social" || !url.searchParams.get("utm_campaign") || !url.searchParams.get("utm_content")) metaProblems.push(`${row.ad_id}: invalid URL/UTM`);
  } catch { metaProblems.push(`${row.ad_id}: malformed URL`); }
}
if (metaProblems.length) fail("meta-assets-and-utm", metaProblems.join(" | "));
else ok("meta-assets-and-utm", `${meta.length} ads resolve to local assets with canonical UTM`);

const googleUrlProblems = [];
for (const row of google) {
  try {
    const url = new URL(row.final_url);
    if (url.hostname !== "www.dranatalyjimenez.com" || url.searchParams.get("utm_source") !== "google" || url.searchParams.get("utm_medium") !== "cpc" || !url.searchParams.get("utm_campaign") || !url.searchParams.get("utm_content")) googleUrlProblems.push(`${row.ad_group}/${row.position}`);
  } catch { googleUrlProblems.push(`${row.ad_group}/${row.position}`); }
}
if (googleUrlProblems.length) fail("google-utm", googleUrlProblems.join(", "));
else ok("google-utm", "all final URLs use canonical domain and complete UTM");

const campaignMaster = await readCsv("campaign-master.csv");
const active = campaignMaster.filter((row) => /active|enabled|published/i.test(row.status));
if (active.length) fail("offline-status", active.map((row) => row.campaign).join(", "));
else ok("offline-status", `${campaignMaster.length} campaign records remain DRAFT/HOLD`);

const attribution = (await fs.readFile(path.join(docs, "appointment-attribution.csv"), "utf8")).trim().split(/\r?\n/);
if (attribution.length === 1) ok("attribution-template", "header only; no patient rows");
else fail("attribution-template", `${attribution.length - 1} data rows found`);

const manifest = JSON.parse(await fs.readFile(path.join(media, "manifest.json"), "utf8"));
const allowed = new Set(["IMG-004", "IMG-005", "IMG-007", "IMG-008", "IMG-015", "IMG-017", "IMG-019", "VID-001", "VID-002", "VID-003", "VID-003 + VID-001 + VID-002"]);
const mediaProblems = [];
const statics = manifest.entries.filter((entry) => entry.kind === "static");
const videos = manifest.entries.filter((entry) => entry.kind === "video");
const support = manifest.entries.filter((entry) => entry.kind === "support");
if (statics.length !== 10 || support.length !== 3 || videos.length !== 4) mediaProblems.push(`counts ${statics.length} static/${support.length} support/${videos.length} video`);
for (const entry of manifest.entries) {
  const absolute = path.join(root, entry.file);
  if (!allowed.has(entry.sourceAsset)) mediaProblems.push(`${entry.id}: source ${entry.sourceAsset}`);
  try {
    if (await hash(absolute) !== entry.sha256) mediaProblems.push(`${entry.id}: hash mismatch`);
    if (entry.kind === "static" || entry.kind === "support") {
      const info = await sharp(absolute).metadata();
      if (info.width !== entry.width || info.height !== entry.height || info.format !== "webp") mediaProblems.push(`${entry.file}: invalid static metadata`);
    } else {
      const info = await ffprobe(absolute);
      const video = info.streams.find((stream) => stream.codec_name === "h264");
      const audio = info.streams.find((stream) => stream.codec_name === "aac");
      if (!video || video.width !== 720 || video.height !== 1280 || video.r_frame_rate !== "30/1") mediaProblems.push(`${entry.file}: invalid video stream`);
      if (!audio || audio.sample_rate !== "48000") mediaProblems.push(`${entry.file}: invalid audio stream`);
      if (Math.abs(Number(info.format.duration) - entry.duration) > 0.2) mediaProblems.push(`${entry.file}: duration ${info.format.duration}`);
    }
  } catch (error) { mediaProblems.push(`${entry.file}: ${error.message}`); }
}
if (mediaProblems.length) fail("media-integrity", mediaProblems.join(" | "));
else ok("media-integrity", "13 WebP + 4 H.264/AAC files match manifest, dimensions, durations, hashes and complete PUBLIC-SAFE allowlist");

const report = {
  generatedAt: new Date().toISOString(),
  overall: errors.length ? "fail" : "pass",
  checks,
  errors
};
await fs.writeFile(path.join(docs, "qa-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
