import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function CareExperience() {
  return (
    <section className="section care-experience">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo es la consulta"
          title="Desde el primer mensaje"
          description="Estos son los pasos habituales desde que escribes hasta que conoces las opciones."
          align="center"
        />

        <div className="care-experience__grid">
          {siteConfig.careExperienceItems.map((item, index) => (
            <article className="care-step" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
