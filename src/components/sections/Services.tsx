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
          description="Explora opciones frecuentes, pero recuerda: la recomendación final depende de una valoración profesional y de lo que realmente necesites."
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
