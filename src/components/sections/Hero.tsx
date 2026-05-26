import Image from "next/image";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

const heroBadges = ["Atención personalizada", "Citas por WhatsApp", "Carepa, Antioquia"];

export function Hero() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una cita odontológica en Carepa."
  );

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Odontología estética y familiar en Carepa, Antioquia</p>
          <h1>Sonríe con confianza, cerca de casa.</h1>
          <p className="hero__lead">
            Atención odontológica moderna, clara y profesional en Carepa, con procesos
            pensados para que entiendas tu diagnóstico y tomes decisiones con tranquilidad.
          </p>

          <div className="hero__actions">
            <Button href={appointmentUrl} target="_blank" size="lg">
              Agendar por WhatsApp
            </Button>
            <Button href="#servicios" variant="outline" size="lg">
              Ver tratamientos
            </Button>
          </div>

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
            <span>Valoración clara</span>
            <strong>Plan de tratamiento explicado paso a paso</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
