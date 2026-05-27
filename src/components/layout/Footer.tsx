import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function Footer() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero recibir información sobre atención odontológica en Carepa."
  );
  const footerLinks = [
    { label: "Instagram", href: siteConfig.instagramUrl },
    { label: "Facebook", href: siteConfig.facebookUrl },
    { label: "Cómo llegar", href: siteConfig.mapUrl }
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__mark">{siteConfig.brandInitials}</span>
          <h2>{siteConfig.clinicName}</h2>
          <p>{siteConfig.specialty}</p>
          <p className="site-footer__legal">
            La información publicada no reemplaza una valoración odontológica profesional.
          </p>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            {siteConfig.services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a href={`/servicios/${service.slug}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.schedule.weekdays}</li>
            <li>
              <a href={appointmentUrl} target="_blank" rel="noreferrer">
                {siteConfig.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Enlaces</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
