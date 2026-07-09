import Link from "next/link";

import { serviceCatalog } from "@/data/serviceCatalog";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function ServiceCatalogPreview() {
  const categories = serviceCatalog.slice(0, 6);

  return (
    <section className="section service-catalog-preview" id="servicios">
      <div className="container">
        <div className="service-catalog-preview__heading">
          <SectionHeading
            eyebrow="Servicios"
            title="Servicios organizados para consultar rápido"
            description="Revisa las áreas de atención y escribe por WhatsApp si no sabes qué tratamiento necesitas."
          />
          <Button href="/servicios" variant="outline" size="md">
            Ver todos los servicios
          </Button>
        </div>

        <div className="service-catalog-preview__grid">
          {categories.map((category) => {
            const primaryService = category.services[0];
            const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, primaryService.whatsappMessage);

            return (
              <article className="catalog-preview-card" key={category.title}>
                <span>{category.services.length} servicios</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="catalog-preview-card__actions">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    Consultar
                  </a>
                  {primaryService.slug ? (
                    <Link href={`/servicios/${primaryService.slug}`}>Ver guía</Link>
                  ) : (
                    <Link href="/servicios">Ver catálogo</Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
