import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function FirstVisit() {
  return (
    <section className="section first-visit" id="primera-cita">
      <div className="container first-visit__grid">
        <div>
          <SectionHeading
            eyebrow="Primera cita"
            title="Tu primera cita en 3 pasos"
            description="Un proceso simple para que puedas pasar de la duda inicial a una valoración con información suficiente y expectativas claras."
          />
        </div>

        <div className="steps">
          {siteConfig.firstVisitSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-card__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
