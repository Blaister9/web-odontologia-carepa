import Link from "next/link";

import { brandContent } from "@/data/brandContent";

import { SectionHeading } from "../ui/SectionHeading";

export function BrandStory() {
  return (
    <section className="section brand-story" id="consultorio">
      <div className="container brand-story__grid">
        <div>
          <SectionHeading
            eyebrow="Consultorio"
            title="Atención clara antes de decidir un tratamiento"
            description={brandContent.homeIntro}
          />
        </div>

        <div className="brand-story__panel">
          {brandContent.principles.map((principle) => (
            <article className="brand-story__item" key={principle.title}>
              <span aria-hidden="true" />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}

          <div className="brand-story__links" aria-label="Enlaces de información del consultorio">
            {brandContent.internalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
