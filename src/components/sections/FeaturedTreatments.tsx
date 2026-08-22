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
  "limpieza-dental": { title: "Necesito una limpieza", summary: "Remoción de placa y revisión de las encías." },
  "blanqueamiento-dental": { title: "Quiero aclarar mis dientes", summary: "Opciones según tu salud oral y sensibilidad." },
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
            description="Revisa las consultas más frecuentes."
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
                    <Link href={`/servicios/${service.slug}`}>Más información <span aria-hidden="true">→</span></Link>
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
