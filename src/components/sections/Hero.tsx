import Image from "next/image";

import { siteConfig } from "@/data/site";
import { trackEvent } from "@/utils/tracking";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const heroBadges = ["Carepa y Urabá", "Atención personalizada", "Agenda por WhatsApp"];

export function Hero() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica preventiva en Carepa."
  );

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
          <h1>Odontología en Carepa con atención cercana y diagnóstico claro</h1>
          <p className="hero__lead">
            Agenda tu valoración odontológica preventiva y recibe una orientación inicial sobre
            el estado de tu salud oral antes de iniciar cualquier tratamiento.
          </p>

          <div className="hero__actions">
            <Button
              href={appointmentUrl}
              target="_blank"
              size="lg"
              className="button--whatsapp-glow"
              onClick={() => trackEvent("click_whatsapp_hero")}
            >
              <WhatsAppIcon className="button__icon" />
              Agendar valoración
            </Button>
            <Button href="#servicios" variant="outline" size="lg">
              Ver servicios
            </Button>
          </div>

          <div className="hero__badges" aria-label="Beneficios principales">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>

          <a className="hero__scroll-cue" href="#servicios">
            <span aria-hidden="true" />
            Ver tratamientos destacados
          </a>
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
          <div className="hero__appointment-card">
            <span>Agenda tu valoración</span>
            <strong>Cuéntanos qué necesitas y revisamos disponibilidad.</strong>
            <a href={appointmentUrl} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
          <div className="hero__note">
            <span>Valoración clara</span>
            <strong>Plan de tratamiento explicado paso a paso</strong>
          </div>
          <div className="hero__micro-card hero__micro-card--top">
            <span>Sin presión</span>
            <strong>Primero orientación, luego decisión.</strong>
          </div>
          <div className="hero__micro-card hero__micro-card--bottom">
            <span>Enfoque local</span>
            <strong>Carepa y región de Urabá.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
