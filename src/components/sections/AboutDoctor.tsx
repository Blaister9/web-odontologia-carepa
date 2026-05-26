import Image from "next/image";

import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";

export function AboutDoctor() {
  return (
    <section className="section about" id="doctora">
      <div className="container about__grid">
        <div className="about__image">
          <Image
            src="/images/equipo/odontologia-profesional-carepa.png"
            alt="Imagen referencial de atención odontológica profesional"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="Atención profesional"
            title={siteConfig.doctorName}
            description={siteConfig.specialty}
          />
          <p>
            Una atención odontológica cercana, clara y responsable ayuda a que cada paciente
            entienda el estado de su salud oral, las alternativas disponibles y los cuidados
            necesarios antes de iniciar un tratamiento.
          </p>
          <div className="about__highlights" aria-label="Enfoque de atención">
            <span>Escucha activa</span>
            <span>Explicaciones claras</span>
            <span>Planificación responsable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
