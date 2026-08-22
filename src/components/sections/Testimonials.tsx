import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Antes de decidir"
          title="Lo que puedes esperar de la consulta"
          description="No publicamos testimonios sin autorización. Estos puntos explican cómo funciona la atención."
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
