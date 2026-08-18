import Image from "next/image";

import { siteConfig } from "@/data/site";
const heroBadges = ["Carepa, Antioquia", "Equipo interdisciplinario", "WhatsApp directo"];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Odontología de aquí · Carepa y Urabá</p>
          <h1>Cuéntanos qué sientes</h1>
          <p className="hero__lead">
            No necesitas conocer el nombre del tratamiento. Elige lo más cercano a lo que te pasa y te orientamos antes de escribir.
          </p>
          <a className="hero__primary-link" href="#elige-tu-camino">Elegir mi necesidad <span aria-hidden="true">↓</span></a>

          <div className="hero__badges" aria-label="Beneficios principales">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

        </div>

        <div className="hero__visual">
          <Image
            src="/images/client/web/nataly-natural-portrait.webp"
            alt={`${siteConfig.doctorName}, odontóloga general y estética en Carepa`}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 44vw"
            className="hero__image"
          />
          <div className="hero__note">
            <span>Atención humana y responsable</span>
            <strong>Dra. Nataly Jiménez · Odontología general y estética</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
