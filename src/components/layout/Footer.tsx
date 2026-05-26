import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function Footer() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero recibir información sobre atención odontológica en Carepa."
  );

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__mark">OC</span>
          <h2>{siteConfig.clinicName}</h2>
          <p>
            {siteConfig.specialty} en {siteConfig.city}, {siteConfig.department}.
          </p>
          <p className="site-footer__legal">
            La información publicada no reemplaza una valoración odontológica profesional.
          </p>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            {siteConfig.services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>{service.title}</a>
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
          <h3>Redes</h3>
          <ul>
            <li>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            {siteConfig.facebookUrl ? (
              <li>
                <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            ) : null}
            <li>
              <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer">
                Cómo llegar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
