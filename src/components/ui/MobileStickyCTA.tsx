import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { useJourney } from "../conversion/JourneyContext";

export function MobileStickyCTA() {
  const { intentId, selectedOption } = useJourney();
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero agendar una valoración odontológica. ¿Me pueden orientar con disponibilidad?"
  );
  const emergencyUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y tengo una urgencia odontológica. ¿Me pueden orientar con disponibilidad de atención?"
  );
  const contextualUrl = selectedOption
    ? getWhatsAppUrl(siteConfig.whatsappNumber, selectedOption.whatsappMessage)
    : intentId === "urgency"
      ? emergencyUrl
      : appointmentUrl;
  const label = intentId === "urgency"
    ? "Consultar mi urgencia"
    : intentId === "aesthetic"
      ? "Consultar mi sonrisa"
      : "Agendar valoración";

  if (selectedOption) {
    return null;
  }

  return (
    <nav className="mobile-sticky-cta" aria-label="Acciones rápidas por WhatsApp">
      <a
        href={contextualUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${label} por WhatsApp`}
        data-cta-location="mobile_sticky"
        data-journey-id={intentId ?? undefined}
      >
        {label}
      </a>
    </nav>
  );
}
