#!/usr/bin/env node
/**
 * Derive the web-ready photography from the originals delivered by the client.
 *
 * Every job below is a pure crop + resize + WebP encode. No retouching, no
 * upscaling, no generative edits: crops exist only to exclude the advertising
 * overlays (logo, phone number, address, promo copy) that are baked into the
 * social-media pieces, so the same information is not duplicated inside an
 * image and in the surrounding HTML.
 *
 * Originals in public/images/client/raw/ are never modified.
 *
 * Usage: node scripts/process-client-photography.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();
const rawDir = path.join(root, "public", "images", "client", "raw");
const webDir = path.join(root, "public", "images", "client", "web");

/**
 * `crop` is expressed in the original pixel grid. `width` is the encoded width;
 * it is never larger than the crop width, so nothing is upscaled.
 */
const jobs = [
  {
    source: "nataly-bata-clinica.jpeg",
    output: "nataly-clinica-portrait.webp",
    note: "Retrato editorial 4:5. Excluye el logo superior izquierdo y la franja de texto inferior.",
    crop: { left: 250, top: 20, width: 469, height: 586 },
    width: 469,
    quality: 82
  },
  {
    source: "nataly-bata-clinica.jpeg",
    output: "nataly-clinica-avatar.webp",
    note: "Recorte facial cuadrado para el avatar circular de confianza.",
    crop: { left: 250, top: 20, width: 420, height: 420 },
    width: 420,
    quality: 84
  },
  {
    source: "nataly-retrato-natural.jpeg",
    output: "nataly-natural-portrait.webp",
    note: "Retrato natural 4:5 para /consultorio. Original sin textos incrustados.",
    crop: { left: 0, top: 0, width: 1115, height: 1394 },
    width: 900,
    quality: 80
  },
  {
    source: "equipo-duo-promo.jpeg",
    output: "equipo-preview.webp",
    note: "Banda fotográfica limpia: excluye el arroba superior y el bloque publicitario inferior.",
    crop: { left: 0, top: 145, width: 719, height: 535 },
    width: 719,
    quality: 82
  },
  {
    source: "caso-protesis-antes-despues.jpeg",
    output: "caso-protesis-antes.webp",
    note: "Fotografía clínica «antes» aislada del montaje. Encuadre original sin alterar.",
    crop: { left: 78, top: 415, width: 274, height: 600 },
    width: 274,
    quality: 86
  },
  {
    source: "caso-protesis-antes-despues.jpeg",
    output: "caso-protesis-despues.webp",
    note: "Fotografía clínica «después» aislada del montaje. Mismo encuadre que «antes».",
    crop: { left: 367, top: 415, width: 274, height: 600 },
    width: 274,
    quality: 86
  }
];

async function main() {
  await fs.mkdir(webDir, { recursive: true });

  for (const job of jobs) {
    const source = path.join(rawDir, job.source);
    const meta = await sharp(source).metadata();
    const { left, top, width, height } = job.crop;

    if (left + width > meta.width || top + height > meta.height) {
      throw new Error(
        `${job.output}: el recorte excede el original ${job.source} (${meta.width}x${meta.height}).`
      );
    }

    if (job.width > width) {
      throw new Error(`${job.output}: el ancho de salida haría upscale del recorte.`);
    }

    const target = path.join(webDir, job.output);
    const info = await sharp(source)
      .extract(job.crop)
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: job.quality })
      .toFile(target);

    const kb = (info.size / 1024).toFixed(1);
    console.log(`${job.output.padEnd(30)} ${info.width}x${info.height}  ${kb} kB  <- ${job.source}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
