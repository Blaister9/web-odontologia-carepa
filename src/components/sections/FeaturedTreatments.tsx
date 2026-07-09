import Image from "next/image";
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
        <div data-reveal>
          <SectionHeading
            eyebrow="Tratamientos destacados"
            title="Opciones frecuentes para pacientes en Carepa"
            description="Guías claras para entender mejor cada servicio antes de escribir por WhatsApp o agendar una valoración."
          />
        </div>

        <div className="featured-treatments__grid" data-reveal="group">
          {featuredServices.map((service) => {
            if (!service) {
              return null;
            }

            const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, service.whatsappMessage);

            return (
              <article className="featured-treatment-card" key={service.id}>
                <div className="featured-treatment-card__media" aria-hidden="true">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 980px) 25vw, (min-width: 720px) 50vw, 100vw"
                  />
                  <span className="featured-treatment-card__badge">{service.badge}</span>
                </div>
                <div className="featured-treatment-card__body">
                  <h3>{service.title}</h3>
                  <p>{service.featuredSummary}</p>
                  <div className="featured-treatment-card__actions">
                    <Link href={`/servicios/${service.slug}`}>Ver guía del servicio</Link>
                    <Button href={whatsappUrl} target="_blank" variant="ghost" size="sm">
                      Consultar servicio
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-treatments__footer" data-reveal>
          <Link className="featured-treatments__all" href="/servicios">
            Ver todos los servicios
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
