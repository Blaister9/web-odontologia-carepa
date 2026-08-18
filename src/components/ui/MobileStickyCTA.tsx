import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { useJourney } from "../conversion/JourneyContext";

export function MobileStickyCTA() {
  const { pathname } = useRouter();
  const { intentId, selectedOption } = useJourney();
  const [heroActionVisible, setHeroActionVisible] = useState(true);
  const [journeyVisible, setJourneyVisible] = useState(true);
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

  useEffect(() => {
    const heroAction = document.getElementById("hero-primary-action");
    if (!heroAction) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHeroActionVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(heroAction);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const journey = document.querySelector(".journey-experience");
    if (!journey) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setJourneyVisible(entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px", threshold: 0.05 }
    );
    observer.observe(journey);

    return () => observer.disconnect();
  }, []);

  const homeConversionSurfaceVisible =
    pathname === "/" && (heroActionVisible || journeyVisible);

  if (selectedOption || homeConversionSurfaceVisible) {
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
