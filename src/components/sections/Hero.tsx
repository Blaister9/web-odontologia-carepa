import Image from "next/image";

import { siteConfig } from "@/data/site";
const heroBadges = ["Carepa y Urabá", "Orientación clara", "Agenda por WhatsApp"];

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
          <p className="eyebrow">{siteConfig.specialty}</p>
          <h1>Tu sonrisa empieza por elegir bien</h1>
          <p className="hero__lead">
            Elige lo que necesitas y recibe una orientación breve antes de escribir por WhatsApp.
          </p>
          <a className="hero__primary-link" href="#elige-tu-camino">Elegir mi necesidad <span aria-hidden="true">↓</span></a>

          <div className="hero__badges" aria-label="Beneficios principales">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

        </div>

        <div className="hero__visual" aria-label="Consultorio odontológico moderno">
          <Image
            src={siteConfig.ogImage}
            alt="Consultorio odontológico moderno en Carepa"
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="hero__image"
          />
          <div className="hero__note">
            <span>Un punto de partida simple</span>
            <strong>No necesitas conocer el tratamiento.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
