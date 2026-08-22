import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function LocalTrust() {
  return (
    <section className="section local-trust">
      <div className="container local-trust__grid">
        <div>
          <SectionHeading
            eyebrow="Carepa y Urabá"
            title="Atención odontológica en Carepa"
            description="Si vienes desde otro municipio, confirma la cita y la ubicación por WhatsApp antes de desplazarte."
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
