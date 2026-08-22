#!/usr/bin/env node
/**
 * Generate the offline creative package for Patient Acquisition Campaigns V1.
 *
 * Sources are limited to the PUBLIC-SAFE derivatives approved in Media Intake V2.
 * The script does not call ad platforms, publish content, add music, retouch people,
 * use generative fill, or enlarge source video. FFmpeg is a local authoring tool only.
 *
 * Run: node scripts/generate-acquisition-v1.mjs
 */

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

import sharp from "sharp";

const root = process.cwd();
const outputRoot = path.join(root, "public", "marketing", "acquisition-v1");
const feedDir = path.join(outputRoot, "feed");
const storyDir = path.join(outputRoot, "stories");
const reelDir = path.join(outputRoot, "reels");
const previewDir = path.join(outputRoot, "previews");
const metaDir = path.join(outputRoot, "meta");
const overlayDir = path.join(outputRoot, ".overlays");
const sourceRoot = path.join(root, "public", "marketing", "media-v2");

const palette = {
  ink: "#23201C",
  ivory: "#F7F2EA",
  green: "#1E4D3A",
  terracotta: "#A24A30",
  white: "#FFFFFF"
};

const creatives = [
  {
    id: "valoracion",
    source: "nataly-portrait",
    hook: ["No necesitas saber", "el tratamiento"],
    support: "Empieza con una valoración profesional.",
    cta: "Conoce cómo empezar",
    route: "/c/valoracion",
    assetId: "IMG-017"
  },
  {
    id: "sonrisa",
    source: "nataly-clinic-work",
    hook: ["Opciones para", "tu sonrisa"],
    support: "Primero valorar, luego decidir.",
    cta: "Explora opciones",
    route: "/c/sonrisa",
    assetId: "IMG-015"
  },
  {
    id: "confianza",
    source: "nataly-vanesa-team",
    hook: ["Un equipo cercano", "en Carepa"],
    support: "Orientación clara antes de decidir.",
    cta: "Conoce al equipo",
    route: "/equipo",
    assetId: "IMG-004"
  },
  {
    id: "consultorio",
    source: "clinic-chair",
    hook: ["Odontología", "en Carepa"],
    support: "Conoce el espacio y consulta disponibilidad.",
    cta: "Conoce cómo empezar",
    route: "/c/uraba",
    assetId: "IMG-005"
  },
  {
    id: "prevencion",
    source: "nataly-clinic-work",
    hook: ["Cuidar tu sonrisa", "empieza por valorar"],
    support: "Orientación profesional para tu salud oral.",
    cta: "Ver valoración general",
    route: "/c/valoracion",
    assetId: "IMG-015"
  }
];

const videoSpecs = [
  {
    id: "valoracion-nataly",
    source: "nataly-valoracion-cta.mp4",
    duration: 6.8,
    hook: ["¿No sabes", "cómo empezar?"],
    cta: "Cuéntanos qué quieres revisar",
    route: "/c/valoracion",
    assetId: "VID-003"
  },
  {
    id: "consultorio-cierre",
    source: "clinic-closing-vertical.mp4",
    duration: 5,
    hook: ["Un espacio real", "en Carepa"],
    cta: "Conoce cómo empezar",
    route: "/c/uraba",
    assetId: "VID-001"
  },
  {
    id: "consultorio-recorrido",
    source: "clinic-room-closing-vertical.mp4",
    duration: 6,
    hook: ["Un vistazo al", "consultorio"],
    cta: "Consulta disponibilidad",
    route: "/c/uraba",
    assetId: "VID-002"
  }
];

function escapeXml(value) {
  return value.replace(/[<>&'\"]/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;"
  })[char]);
}

function staticOverlay({ width, height, creative }) {
  const story = height / width > 1.5;
  const pad = story ? 76 : 66;
  const blockHeight = story ? 700 : 500;
  const titleSize = story ? 76 : 58;
  const supportSize = story ? 35 : 29;
  const ctaSize = story ? 29 : 25;
  const blockY = height - blockHeight;
  const titleY = blockY + (story ? 150 : 120);
  const lineGap = titleSize * 1.06;
  const supportY = titleY + creative.hook.length * lineGap + 28;
  const ctaY = height - (story ? 190 : 145);
  const ctaWidth = story ? 560 : 470;
  const ctaHeight = story ? 86 : 72;

  const title = creative.hook
    .map((line, index) => `<text x="${pad}" y="${titleY + index * lineGap}" font-family="Georgia, serif" font-size="${titleSize}" font-weight="700" fill="${palette.white}">${escapeXml(line)}</text>`)
    .join("");

  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${palette.ink}" stop-opacity="0"/>
          <stop offset="1" stop-color="${palette.ink}" stop-opacity=".98"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <rect x="${pad}" y="${story ? 120 : 84}" width="${story ? 510 : 440}" height="50" rx="25" fill="${palette.ivory}" fill-opacity=".94"/>
      <text x="${pad + 25}" y="${story ? 153 : 117}" font-family="Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="2" fill="${palette.green}">DRA. NATALY JIMÉNEZ · CAREPA</text>
      ${title}
      <text x="${pad}" y="${supportY}" font-family="Arial, sans-serif" font-size="${supportSize}" font-weight="400" fill="${palette.white}" fill-opacity=".92">${escapeXml(creative.support)}</text>
      <rect x="${pad}" y="${ctaY}" width="${ctaWidth}" height="${ctaHeight}" rx="8" fill="${palette.green}"/>
      <text x="${pad + 28}" y="${ctaY + ctaHeight * 0.65}" font-family="Arial, sans-serif" font-size="${ctaSize}" font-weight="700" fill="${palette.white}">${escapeXml(creative.cta)} →</text>
      <text x="${pad}" y="${height - 48}" font-family="Arial, sans-serif" font-size="21" fill="${palette.white}" fill-opacity=".78">dranatalyjimenez.com</text>
    </svg>`);
}

function videoOverlay(spec) {
  const title = spec.hook
    .map((line, index) => `<text x="54" y="${130 + index * 58}" font-family="Georgia, serif" font-size="52" font-weight="700" fill="${palette.white}">${escapeXml(line)}</text>`)
    .join("");

  return Buffer.from(`
    <svg width="720" height="1280" xmlns="http://www.w3.org/2000/svg">
      <rect x="36" y="52" width="648" height="190" rx="16" fill="${palette.ink}" fill-opacity=".72"/>
      ${title}
      <rect x="36" y="1110" width="648" height="112" rx="12" fill="${palette.green}" fill-opacity=".96"/>
      <text x="64" y="1178" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="${palette.white}">${escapeXml(spec.cta)} →</text>
    </svg>`);
}

async function run(command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: "inherit", windowsHide: true });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)));
  });
}

async function findFfmpeg() {
  const bundled = "C:\\ffmpeg\\bin\\ffmpeg.exe";
  try {
    await fs.access(bundled);
    return bundled;
  } catch {
    return "ffmpeg";
  }
}

async function renderStaticAds() {
  const outputs = [];
  for (const creative of creatives) {
    for (const format of [
      { dir: feedDir, label: "1080x1350", width: 1080, height: 1350, sourceDir: "portrait" },
      { dir: storyDir, label: "1080x1920", width: 1080, height: 1920, sourceDir: "story" }
    ]) {
      const source = path.join(sourceRoot, format.sourceDir, `${creative.source}-${format.label}.webp`);
      const output = path.join(format.dir, `${creative.id}-${format.label}.webp`);
      await sharp(source)
        .composite([{ input: staticOverlay({ width: format.width, height: format.height, creative }) }])
        .webp({ quality: 86 })
        .toFile(output);
      outputs.push({
        kind: "static",
        id: creative.id,
        file: path.relative(root, output).replaceAll("\\", "/"),
        width: format.width,
        height: format.height,
        sourceAsset: creative.assetId,
        route: creative.route,
        status: "ready-for-review"
      });
    }
  }
  return outputs;
}

async function renderSupportAssets() {
  const support = [
    { id: "organic-nataly-sonrie", source: "nataly-sonrie-original.jpeg", assetId: "IMG-007", width: 1080, height: 1350 },
    { id: "organic-nataly-cuidamos", source: "nataly-cuidamos-sonrisa-original.jpeg", assetId: "IMG-008", width: 1080, height: 1920 },
    { id: "organic-brand-logo", source: "brand-logo-original.jpeg", assetId: "IMG-019", width: 1080, height: 1080 }
  ];
  const entries = [];
  for (const item of support) {
    const output = path.join(metaDir, `${item.id}-${item.width}x${item.height}.webp`);
    await sharp(path.join(sourceRoot, "client-originals", item.source))
      .rotate()
      .resize({ width: item.width, height: item.height, fit: "contain", background: palette.ivory })
      .webp({ quality: 88 })
      .toFile(output);
    entries.push({
      kind: "support",
      id: item.id,
      file: path.relative(root, output).replaceAll("\\", "/"),
      width: item.width,
      height: item.height,
      sourceAsset: item.assetId,
      route: "/c/valoracion",
      status: "organic-ready-paid-review"
    });
  }
  return entries;
}

async function renderVideo(spec, ffmpeg) {
  const source = path.join(sourceRoot, "video-previews", spec.source);
  const overlay = path.join(overlayDir, `${spec.id}.png`);
  const output = path.join(reelDir, `${spec.id}-720x1280.mp4`);
  await sharp(videoOverlay(spec)).png().toFile(overlay);

  const filter = [
    `[0:v]trim=start=0:end=${spec.duration},setpts=PTS-STARTPTS,`,
    "scale='min(iw,720)':'min(ih,1280)':force_original_aspect_ratio=decrease:force_divisible_by=2,",
    `pad=720:1280:(ow-iw)/2:(oh-ih)/2:color=${palette.ivory},fps=30[base];`,
    "[base][1:v]overlay=0:0:format=auto[v]"
  ].join("");

  await run(ffmpeg, [
    "-y", "-i", source, "-loop", "1", "-i", overlay,
    "-filter_complex", filter,
    "-map", "[v]", "-map", "0:a?",
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
    "-t", String(spec.duration),
    "-c:v", "libx264", "-preset", "medium", "-crf", "23",
    "-pix_fmt", "yuv420p", "-c:a", "aac", "-ar", "48000", "-b:a", "128k",
    "-movflags", "+faststart", output
  ]);

  return {
    kind: "video",
    id: spec.id,
    file: path.relative(root, output).replaceAll("\\", "/"),
    width: 720,
    height: 1280,
    duration: spec.duration,
    sourceAsset: spec.assetId,
    route: spec.route,
    status: "ready-for-review"
  };
}

async function renderMontage(videoOutputs, ffmpeg) {
  const listPath = path.join(overlayDir, "concat.txt");
  const output = path.join(reelDir, "recorrido-local-montage-720x1280.mp4");
  const rows = videoOutputs.map((item) => {
    const absolute = path.join(root, item.file).replaceAll("\\", "/").replaceAll("'", "'\\''");
    return `file '${absolute}'`;
  });
  await fs.writeFile(listPath, `${rows.join("\n")}\n`, "utf8");
  await run(ffmpeg, [
    "-y", "-fflags", "+genpts", "-f", "concat", "-safe", "0", "-i", listPath,
    "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-ar", "48000", "-b:a", "128k", "-movflags", "+faststart", output
  ]);
  return {
    kind: "video",
    id: "recorrido-local-montage",
    file: path.relative(root, output).replaceAll("\\", "/"),
    width: 720,
    height: 1280,
    duration: videoSpecs.reduce((total, item) => total + item.duration, 0),
    sourceAsset: "VID-003 + VID-001 + VID-002",
    route: "/c/valoracion",
    status: "ready-for-review"
  };
}

async function renderContactSheet() {
  const width = 1100;
  const thumbWidth = 200;
  const thumbHeight = 250;
  const gap = 16;
  const top = 110;
  const composites = [];
  for (let index = 0; index < creatives.length; index += 1) {
    const source = path.join(feedDir, `${creatives[index].id}-1080x1350.webp`);
    const thumb = await sharp(source).resize(thumbWidth, thumbHeight).webp().toBuffer();
    composites.push({ input: thumb, left: 14 + index * (thumbWidth + gap), top });
  }
  const header = Buffer.from(`
    <svg width="${width}" height="420" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="420" fill="${palette.ivory}"/>
      <text x="24" y="48" font-family="Georgia, serif" font-size="34" font-weight="700" fill="${palette.ink}">Patient Acquisition V1 · Static Ads</text>
      <text x="24" y="78" font-family="Arial, sans-serif" font-size="18" fill="#5C554C">Fotografía real autorizada · Luz de Urabá · revisión humana requerida</text>
    </svg>`);
  await sharp(header).composite(composites).webp({ quality: 84 }).toFile(path.join(previewDir, "static-contact-sheet.webp"));
}

async function renderVideoPreviews(ffmpeg) {
  const previews = [
    [path.join(reelDir, "valoracion-nataly-720x1280.mp4"), "2", path.join(previewDir, "qa-video-valoracion.webp")],
    [path.join(reelDir, "recorrido-local-montage-720x1280.mp4"), "10", path.join(previewDir, "qa-video-montage.webp")]
  ];
  for (const [source, second, output] of previews) {
    await run(ffmpeg, ["-y", "-ss", second, "-i", source, "-frames:v", "1", output]);
  }
}

async function sha256(file) {
  const bytes = await fs.readFile(file);
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

async function writeManifest(entries) {
  const enriched = [];
  for (const entry of entries) {
    const absolute = path.join(root, entry.file);
    const stats = await fs.stat(absolute);
    enriched.push({ ...entry, bytes: stats.size, sha256: await sha256(absolute) });
  }
  const manifest = {
    generatedAt: "2026-08-22",
    policy: "Offline package only. No campaign was created, published, funded or activated.",
    allowlist: ["IMG-004", "IMG-005", "IMG-015", "IMG-017", "VID-001", "VID-002", "VID-003"],
    entries: enriched
  };
  await fs.writeFile(path.join(outputRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

async function main() {
  await Promise.all([feedDir, storyDir, reelDir, previewDir, metaDir, overlayDir].map((dir) => fs.mkdir(dir, { recursive: true })));
  const staticEntries = await renderStaticAds();
  const supportEntries = await renderSupportAssets();
  await renderContactSheet();

  const ffmpeg = await findFfmpeg();
  const videoEntries = [];
  for (const spec of videoSpecs) {
    videoEntries.push(await renderVideo(spec, ffmpeg));
  }
  videoEntries.push(await renderMontage(videoEntries, ffmpeg));
  await renderVideoPreviews(ffmpeg);
  await writeManifest([...staticEntries, ...supportEntries, ...videoEntries]);
  await fs.rm(overlayDir, { recursive: true, force: true });

  console.log(`Acquisition V1: ${staticEntries.length} static ads, ${supportEntries.length} support assets and ${videoEntries.length} videos generated.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
