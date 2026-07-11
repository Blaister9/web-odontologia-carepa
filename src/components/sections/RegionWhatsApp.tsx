import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const coverageChips = ["Carepa", "Veredas cercanas", "Región de Urabá"];

export function RegionWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa o en una zona cercana de Urabá y quiero agendar una valoración odontológica. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="region-whatsapp">
      <div className="container region-whatsapp__inner">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">Carepa y Urabá</p>
          <h2>Escribe desde tu ubicación y revisamos disponibilidad.</h2>
          <p>
            Atendemos pacientes de Carepa, veredas cercanas y la región de Urabá con cita previa.
          </p>
          <div className="region-whatsapp__chips" aria-label="Zonas de cobertura por WhatsApp">
            {coverageChips.map((chip) => (
              <span key={chip}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 21s-6.6-5.4-6.6-10.4a6.6 6.6 0 1 1 13.2 0C18.6 15.6 12 21 12 21Z" />
                  <circle cx="12" cy="10.4" r="2.4" />
                </svg>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div data-reveal>
          <Button
            href={whatsappUrl}
            target="_blank"
            size="lg"
            className="button--whatsapp-glow"
          >
            <WhatsAppIcon className="button__icon" />
            Estoy en Carepa o una vereda cercana
          </Button>
        </div>
      </div>
    </section>
  );
}
