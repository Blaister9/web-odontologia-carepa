#!/usr/bin/env node

/**
 * Rasterize QR masters and lightweight template previews.
 *
 * Sharp is already available through Next.js' install tree. This script is a
 * development utility and is never imported by the application bundle.
 */

import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const marketing = path.join(root, "public", "marketing");
const manifest = JSON.parse(await readFile(path.join(marketing, "manifest.json"), "utf8"));

const publicPath = (assetPath) => path.join(root, "public", assetPath.replace(/^\//, ""));

await mkdir(path.join(marketing, "qr", "png"), { recursive: true });
await mkdir(path.join(marketing, "previews"), { recursive: true });

let qrCount = 0;
for (const destination of manifest.qrDestinations) {
  for (const variant of destination.variants) {
    // Keep the integer module scale defined by the SVG. Excessive raster
    // upscaling can trigger decoder limits without improving print fidelity.
    await sharp(publicPath(variant.svg), { density: 72 })
      .png({ compressionLevel: 9, palette: false })
      .toFile(publicPath(variant.png));
    qrCount += 1;
  }
}

let previewCount = 0;
for (const template of manifest.templates) {
  const previewWidth = Math.min(900, Number(template.dimensions.width));
  await sharp(publicPath(template.master), { density: 96 })
    .resize({ width: previewWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 92, colours: 256 })
    .toFile(publicPath(template.preview));
  previewCount += 1;
}

console.log(`Rendered ${qrCount} QR PNG files and ${previewCount} template previews.`);
