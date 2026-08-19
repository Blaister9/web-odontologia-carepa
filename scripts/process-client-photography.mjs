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
 * Clinical material with an identifiable patient lives OUTSIDE public/ and
 * outside the repository, in private/client-clinical-pending/ (gitignored),
 * until written image-use authorisation exists. Those jobs are marked
 * `pendingAuthorisation` and are skipped when the folder is absent, so a fresh
 * clone can still regenerate everything else.
 *
 * Usage: node scripts/process-client-photography.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = process.cwd();
const rawDir = path.join(root, "public", "images", "client", "raw");
const webDir = path.join(root, "public", "images", "client", "web");
const equipoDir = path.join(root, "public", "images", "equipo");
const pendingDir = path.join(root, "private", "client-clinical-pending");

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

/**
 * `crop` is expressed in the original pixel grid. `width` is the encoded width;
 * it is never larger than the crop width, so nothing is upscaled.
 */
const jobs = [
  {
    source: "nataly-bata-clinica.jpeg",
    output: "nataly-clinica-avatar.webp",
    note: "Recorte facial cuadrado para el avatar circular de confianza.",
    crop: { left: 250, top: 20, width: 420, height: 420 },
    width: 420,
    quality: 84
  },
  {
    source: "nataly-bata-promo.jpeg",
    output: "nataly-promo-portrait.webp",
    note:
      "Retrato profesional 4:5 con mirada a cámara. Excluye el logo superior " +
      "izquierdo y el bloque de texto inferior. Es el recorte de Nataly con más " +
      "resolución y el que mejor coincide con el formato pedido para los " +
      "retratos individuales pendientes.",
    crop: { left: 220, top: 0, width: 499, height: 624 },
    width: 499,
    quality: 82
  },
  {
    source: "nataly-bata-promo.jpeg",
    output: "nataly-hero-portrait.webp",
    note:
      "Retrato editorial alto para el hero de la home. Mismo original que " +
      "nataly-promo-portrait.webp, pero llegando hasta el torso para que la " +
      "figura sostenga una columna alta en desktop en vez de una tarjeta " +
      "pequeña. El borde izquierdo evita el logo y el inferior el bloque " +
      "publicitario; el derecho recorta la pared vacía que dejaba a Nataly " +
      "descentrada dentro del marco.",
    crop: { left: 215, top: 0, width: 455, height: 830 },
    width: 455,
    quality: 82
  },
  {
    source: "nataly-bata-promo.jpeg",
    output: "nataly-signature-avatar.webp",
    note:
      "Avatar frontal para la firma compacta del hero en móvil. Se recorta del " +
      "mismo material que el retrato del hero, no de nataly-bata-clinica.jpeg, " +
      "porque allí Nataly aparece de perfil y mirando fuera de cámara: a 46 px " +
      "ese encuadre se lee como un recorte fallido.",
    crop: { left: 225, top: 40, width: 400, height: 400 },
    width: 240,
    quality: 86
  },
  {
    // Provisional: recorte del material de redes mientras llega su retrato
    // profesional. El ancho útil está limitado por la posición de Nataly en
    // la toma original, así que no puede crecer más sin invadirla.
    source: "equipo-duo-promo.jpeg",
    output: "vanesa-lopez.webp",
    dir: equipoDir,
    note: "Recorte individual de Vanesa López, sin textos y sin el cabello de Nataly en cuadro.",
    crop: { left: 435, top: 170, width: 284, height: 355 },
    width: 284,
    quality: 86
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
  // Los dos recortes del caso clínico entran y salen de private/: ni la fuente
  // ni el resultado pueden tocar public/ mientras no haya autorización escrita
  // del paciente. Al autorizarse, se cambia `dir` a webDir y `caseStudy.enabled`
  // a true en src/data/servicePages.ts.
  {
    source: "caso-protesis-antes-despues.jpeg",
    output: "caso-protesis-antes.webp",
    note: "Fotografía clínica «antes» aislada del montaje. Encuadre original sin alterar.",
    pendingAuthorisation: true,
    sourceDir: pendingDir,
    dir: pendingDir,
    crop: { left: 78, top: 415, width: 274, height: 600 },
    width: 274,
    quality: 86
  },
  {
    source: "caso-protesis-antes-despues.jpeg",
    output: "caso-protesis-despues.webp",
    note: "Fotografía clínica «después» aislada del montaje. Mismo encuadre que «antes».",
    pendingAuthorisation: true,
    sourceDir: pendingDir,
    dir: pendingDir,
    crop: { left: 367, top: 415, width: 274, height: 600 },
    width: 274,
    quality: 86
  }
];

async function main() {
  await fs.mkdir(webDir, { recursive: true });
  await fs.mkdir(equipoDir, { recursive: true });
  if (await exists(pendingDir)) {
    await fs.mkdir(pendingDir, { recursive: true });
  }

  for (const job of jobs) {
    const source = path.join(job.sourceDir ?? rawDir, job.source);

    if (job.pendingAuthorisation && !(await exists(source))) {
      console.log(`${job.output.padEnd(30)} omitido: material clínico no disponible localmente`);
      continue;
    }

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

    const target = path.join(job.dir ?? webDir, job.output);
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
