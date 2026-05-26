import Image from "next/image";
import Link from "next/link";

import { Service, siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "./Button";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, service.whatsappMessage);

  return (
    <article className="service-card">
      <div className="service-card__image">
        <span className="service-card__badge">{service.badge}</span>
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 720px) 45vw, 100vw"
        />
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-card__actions">
          <Link href={`/servicios/${service.slug}`}>Ver guía</Link>
          <Button href={whatsappUrl} target="_blank" variant="ghost" size="sm">
            Consultar este tratamiento
          </Button>
        </div>
      </div>
    </article>
  );
}
