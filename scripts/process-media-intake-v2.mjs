#!/usr/bin/env node
/**
 * Derive publishable assets from the 2026-08-22 private media intake.
 *
 * Privacy contract:
 * - every source stays under private/ (gitignored);
 * - only the explicit allowlist below can be written to public/;
 * - no retouching, face edits, whitening, generative fill or upscaling;
 * - small originals are placed on an editorial canvas instead of enlarged.
 *
 * Run: node scripts/process-media-intake-v2.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();
const rawDir = path.join(root, "private", "media-intake-2026-08-22", "raw");
const webDir = path.join(root, "public", "images", "client", "web-v2");
const marketingDir = path.join(root, "public", "marketing", "media-v2");
const originalsDir = path.join(marketingDir, "client-originals");

const sources = {
  team: "WhatsApp Image 2026-08-22 at 2.04.28 PM (1).jpeg",
  clinic: "WhatsApp Image 2026-08-22 at 2.04.28 PM (2).jpeg",
  procedure: "WhatsApp Image 2026-08-22 at 2.04.45 PM (1).jpeg",
  nataly: "WhatsApp Image 2026-08-22 at 2.13.08 PM.jpeg"
};

const formatSpecs = [
  { dir: "feed", suffix: "1080x1080", width: 1080, height: 1080 },
  { dir: "portrait", suffix: "1080x1350", width: 1080, height: 1350 },
  { dir: "story", suffix: "1080x1920", width: 1080, height: 1920 },
  { dir: "meta-horizontal", suffix: "1200x628", width: 1200, height: 628 },
  { dir: "google-business", suffix: "1200x900", width: 1200, height: 900 }
];

async function ensureSource(filename) {
  const source = path.join(rawDir, filename);
  await fs.access(source);
  return source;
}

async function writeWebAssets() {
  await fs.mkdir(webDir, { recursive: true });

  const clinicSource = await ensureSource(sources.clinic);
  await sharp(clinicSource)
    .rotate()
    .resize({ width: 1200, height: 900, fit: "cover", position: "centre", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(webDir, "clinic-chair.webp"));

  await sharp(clinicSource)
    .rotate()
    .resize({ width: 900, height: 1200, fit: "cover", position: "centre", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(webDir, "clinic-chair-portrait.webp"));

  const teamSource = await ensureSource(sources.team);
  await sharp(teamSource)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(webDir, "nataly-vanesa-team.webp"));

  const procedureSource = await ensureSource(sources.procedure);
  await sharp(procedureSource)
    .rotate()
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(webDir, "nataly-clinic-work.webp"));

  const natalySource = await ensureSource(sources.nataly);
  await sharp(natalySource)
    .rotate()
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(webDir, "nataly-portrait.webp"));
}

async function writeFormatSet(key, filename, position = "centre") {
  const source = await ensureSource(filename);
  const metadata = await sharp(source).rotate().metadata();

  for (const spec of formatSpecs) {
    const outputDir = path.join(marketingDir, spec.dir);
    await fs.mkdir(outputDir, { recursive: true });

    const coverScale = Math.max(spec.width / metadata.width, spec.height / metadata.height);
    const canCoverWithoutUpscale = coverScale <= 1;
    const resize = canCoverWithoutUpscale
      ? {
          width: spec.width,
          height: spec.height,
          fit: "cover",
          position,
          withoutEnlargement: true
        }
      : {
          width: spec.width,
          height: spec.height,
          fit: "contain",
          position: "centre",
          withoutEnlargement: true,
          background: { r: 242, g: 239, b: 247, alpha: 1 }
        };

    await sharp(source)
      .rotate()
      .resize(resize)
      .webp({ quality: 82 })
      .toFile(path.join(outputDir, `${key}-${spec.suffix}.webp`));
  }
}

async function copyApprovedOriginals() {
  await fs.mkdir(originalsDir, { recursive: true });
  const copies = [
    ["WhatsApp Image 2026-08-22 at 2.04.42 PM (1).jpeg", "nataly-sonrie-original.jpeg"],
    ["WhatsApp Image 2026-08-22 at 2.04.42 PM.jpeg", "nataly-cuidamos-sonrisa-original.jpeg"],
    ["WhatsApp Image 2026-08-22 at 2.17.01 PM.jpeg", "brand-logo-original.jpeg"]
  ];

  for (const [sourceName, outputName] of copies) {
    await fs.copyFile(await ensureSource(sourceName), path.join(originalsDir, outputName));
  }
}

async function main() {
  await writeWebAssets();
  await writeFormatSet("clinic-chair", sources.clinic);
  await writeFormatSet("nataly-vanesa-team", sources.team, "north");
  await writeFormatSet("nataly-clinic-work", sources.procedure, "centre");
  await writeFormatSet("nataly-portrait", sources.nataly, "north");
  await copyApprovedOriginals();

  console.log("Media V2: 5 web images, 20 format candidates and 3 approved originals generated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
