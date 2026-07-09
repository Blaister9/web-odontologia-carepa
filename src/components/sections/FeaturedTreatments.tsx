import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

const featuredServiceIds = [
  "limpieza-dental",
  "blanqueamiento-dental",
  "diseno-sonrisa",
  "urgencias-odontologicas"
];

export function FeaturedTreatments() {
  const featuredServices = featuredServiceIds
    .map((serviceId) => siteConfig.services.find((service) => service.id === serviceId))
    .filter(Boolean);

  return (
    <section className="section featured-treatments" id="servicios">
      <div className="container">
        <SectionHeading
          eyebrow="Tratamientos destacados"
          title="Opciones frecuentes para pacientes en Carepa"
          description="Guías claras para entender mejor cada servicio antes de escribir por WhatsApp o agendar una valoración."
        />

        <div className="featured-treatments__grid">
          {featuredServices.map((service) => {
            if (!service) {
              return null;
            }

            const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, service.whatsappMessage);

            return (
              <article className="featured-treatment-card" key={service.id}>
                <span>{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.featuredSummary}</p>
                <div>
                  <Link href={`/servicios/${service.slug}`}>Ver guía del servicio</Link>
                  <Button href={whatsappUrl} target="_blank" variant="ghost" size="sm">
                    Consultar servicio
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-treatments__footer">
          <Link href="/servicios">Ver todos los servicios</Link>
        </div>
      </div>
    </section>
  );
}
