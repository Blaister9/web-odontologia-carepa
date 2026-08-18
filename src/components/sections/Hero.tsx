import Image from "next/image";

import { siteConfig } from "@/data/site";

const heroProof = [
  {
    title: "Carepa, Antioquia",
    detail: "Atención con cita previa"
  },
  {
    title: "Equipo interdisciplinario",
    detail: "Orientación clara desde el inicio"
  }
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

          <div className="hero__proof" aria-label="Datos de confianza">
            {heroProof.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <figure className="hero__portrait">
          <div className="hero__portrait-media">
            <Image
              src="/images/client/web/nataly-promo-portrait.webp"
              alt={`${siteConfig.doctorName}, odontóloga general y estética en Carepa`}
              fill
              priority
              loading="eager"
              sizes="(min-width: 1024px) 340px, (min-width: 720px) 30vw, 116px"
            />
          </div>
          <figcaption>
            <span>{siteConfig.doctorName}</span>
            <strong>{siteConfig.doctorProfile.title}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
