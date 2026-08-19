import Image from "next/image";

import { siteConfig } from "@/data/site";

const heroCues = [
  `${siteConfig.city}, ${siteConfig.department}`,
  "Equipo interdisciplinario",
  "Cita previa por WhatsApp"
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__stage">
        <div className="hero__content">
          <p className="eyebrow">Odontología en Carepa</p>
          <h1>Cuéntanos qué necesitas</h1>
          <p className="hero__lead">
            Dolor, una inquietud estética o cuidado preventivo: elige lo más cercano a tu caso y te mostramos cómo empezar.
          </p>
          <a
            className="hero__primary-link"
            href="#elige-tu-camino"
            id="hero-primary-action"
          >
            Elegir qué necesito <span aria-hidden="true">↓</span>
          </a>

          <ul className="hero__cues" aria-label="Datos de confianza">
            {heroCues.map((cue) => (
              <li key={cue}>{cue}</li>
            ))}
          </ul>

          {/* Firma compacta: en móvil sustituye al retrato para que el gateway
              no quede empujado fuera de la primera pantalla. */}
          <p className="hero__signature">
            <span className="hero__signature-avatar">
              <Image
                src="/images/client/web/nataly-signature-avatar.webp"
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 720px) 1vw, 48px"
              />
            </span>
            <span className="hero__signature-text">
              <strong>{siteConfig.doctorName}</strong>
              <small>{siteConfig.doctorProfile.title}</small>
            </span>
          </p>
        </div>

        <figure className="hero__portrait">
          <div className="hero__portrait-media">
            <Image
              src="/images/client/web/nataly-hero-portrait.webp"
              alt={`${siteConfig.doctorName}, odontóloga general y estética en Carepa`}
              fill
              priority
              sizes="(min-width: 720px) 45vw, 1vw"
            />
          </div>
          <figcaption className="hero__portrait-plate">
            <span>{siteConfig.doctorName}</span>
            <strong>{siteConfig.doctorProfile.title}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
