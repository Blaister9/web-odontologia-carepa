import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Experiencia del paciente"
          title="Una experiencia pensada para que decidas con tranquilidad"
          description="Mientras se incorporan testimonios reales autorizados, estos principios describen el tipo de atención que buscamos sostener en cada contacto."
          align="center"
        />

        <div className="testimonials__grid">
          {siteConfig.experiencePrinciples.map((principle) => (
            <article className="testimonial-card" key={principle.title}>
              <p>{principle.description}</p>
              <div>
                <strong>{principle.title}</strong>
                <span>Criterio de atención</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
