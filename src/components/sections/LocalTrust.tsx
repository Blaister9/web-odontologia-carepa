import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function LocalTrust() {
  return (
    <section className="section local-trust">
      <div className="container local-trust__grid">
        <div>
          <SectionHeading
            eyebrow="Confianza local"
            title="Una atención pensada para Carepa y la región de Urabá"
            description="Para personas que buscan claridad antes de iniciar un tratamiento odontológico, con una conversación directa y sin promesas exageradas."
          />
        </div>

        <div className="local-trust__pillars">
          {siteConfig.localTrustPillars.map((pillar) => (
            <article className="local-pillar" key={pillar.title}>
              <span aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
