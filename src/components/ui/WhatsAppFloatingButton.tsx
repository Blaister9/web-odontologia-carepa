import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero agendar una valoración odontológica. ¿Me pueden orientar con disponibilidad?"
  );

  return (
    <a
      className="whatsapp-floating"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar cita por WhatsApp"
    >
      <span className="whatsapp-floating__icon" aria-hidden="true">
        <WhatsAppIcon />
      </span>
      <span>WhatsApp</span>
    </a>
  );
}
