import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function MobileStickyCTA() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero agendar una valoración odontológica. ¿Me pueden orientar con disponibilidad?"
  );
  const emergencyUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y tengo una urgencia odontológica. ¿Me pueden orientar con disponibilidad de atención?"
  );

  return (
    <nav className="mobile-sticky-cta" aria-label="Acciones rápidas por WhatsApp">
      <a href={appointmentUrl} target="_blank" rel="noreferrer">
        Agenda por WhatsApp
      </a>
      <a href={emergencyUrl} target="_blank" rel="noreferrer">
        Urgencia
      </a>
    </nav>
  );
}
