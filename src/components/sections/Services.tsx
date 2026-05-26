import { siteConfig } from "@/data/site";

import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";

export function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <SectionHeading
          eyebrow="Tratamientos"
          title="Servicios odontológicos para cuidar salud, función y estética"
          description="Cada tratamiento inicia con una valoración profesional. La recomendación final depende de tu diagnóstico, antecedentes y expectativas reales."
        />

        <div className="services__grid">
          {siteConfig.services.map((service) => (
            <div id={service.id} key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
