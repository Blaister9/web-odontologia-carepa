import Link from "next/link";

import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

const featuredServiceIds = [
  "limpieza-dental",
  "blanqueamiento-dental",
  "diseno-sonrisa",
  "urgencias-odontologicas"
];

const outcomeCopy: Record<string, { title: string; summary: string }> = {
  "limpieza-dental": { title: "Quiero una sonrisa más limpia", summary: "Cuidado preventivo para dientes y encías." },
  "blanqueamiento-dental": { title: "Quiero aclarar mis dientes", summary: "Opciones responsables según tu salud oral." },
  "diseno-sonrisa": { title: "Quiero mejorar mi sonrisa", summary: "Alternativas estéticas con valoración previa." },
  "urgencias-odontologicas": { title: "Necesito atención por dolor", summary: "Consulta disponibilidad para una valoración." }
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
            eyebrow="Guías de tratamiento"
            title="Opciones según lo que quieres resolver"
            description="Conoce alternativas frecuentes. La valoración define el paso adecuado."
          />
        </div>

        <div className="featured-treatments__grid" data-reveal="group">
          {featuredServices.map((service, index) => {
            if (!service) {
              return null;
            }

            const outcome = outcomeCopy[service.id];

            return (
              <article className="featured-treatment-card" key={service.id}>
                <div className="featured-treatment-card__body">
                  <div className="featured-treatment-card__meta">
                    <span>0{index + 1}</span>
                    <span>{service.badge}</span>
                  </div>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.summary}</p>
                  <div className="featured-treatment-card__actions">
                    <Link href={`/servicios/${service.slug}`}>Ver guía del tratamiento <span aria-hidden="true">→</span></Link>
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
