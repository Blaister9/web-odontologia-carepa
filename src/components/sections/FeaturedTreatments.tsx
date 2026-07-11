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

const outcomeCopy: Record<string, { title: string; summary: string; cta: string }> = {
  "limpieza-dental": { title: "Quiero una sonrisa más limpia", summary: "Cuidado preventivo para dientes y encías.", cta: "Consultar limpieza" },
  "blanqueamiento-dental": { title: "Quiero aclarar mis dientes", summary: "Opciones responsables según tu salud oral.", cta: "Consultar blanqueamiento" },
  "diseno-sonrisa": { title: "Quiero mejorar mi sonrisa", summary: "Alternativas estéticas con valoración previa.", cta: "Consultar diseño" },
  "urgencias-odontologicas": { title: "Necesito atención por dolor", summary: "Consulta disponibilidad para una valoración.", cta: "Consultar urgencia" }
};

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
            title="Resultados que puedes buscar"
            description="Elige por lo que quieres resolver."
          />
        </div>

        <div className="featured-treatments__grid" data-reveal="group">
          {featuredServices.map((service) => {
            if (!service) {
              return null;
            }

            const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, service.whatsappMessage);
            const outcome = outcomeCopy[service.id];

            return (
              <article className="featured-treatment-card" key={service.id}>
                <div className="featured-treatment-card__media" aria-hidden="true">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 980px) 25vw, (min-width: 720px) 50vw, 100vw"
                  />
                  <span className="featured-treatment-card__badge">{service.title}</span>
                </div>
                <div className="featured-treatment-card__body">
                  <h3>{outcome.title}</h3>
                  <p>{outcome.summary}</p>
                  <div className="featured-treatment-card__actions">
                    <Link href={`/servicios/${service.slug}`}>Ver guía completa</Link>
                    <Button href={whatsappUrl} target="_blank" variant="ghost" size="sm">
                      {outcome.cta}
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
