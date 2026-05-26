import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Experiencias"
          title="Referencias de pacientes"
          description="Estos textos son placeholders neutrales y deben reemplazarse por testimonios reales autorizados antes de usar la página en campañas o pauta."
          align="center"
        />

        <div className="testimonials__grid">
          {siteConfig.testimonials.map((testimonial) => (
            <article className="testimonial-card" key={`${testimonial.name}-${testimonial.label}`}>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
