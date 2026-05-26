import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function FAQ() {
  return (
    <section className="section faq" id="preguntas">
      <div className="container faq__grid">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Antes de agendar"
          description="Respuestas breves para resolver dudas comunes antes de escribir por WhatsApp o programar una valoración."
        />

        <div className="faq__items">
          {siteConfig.faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
