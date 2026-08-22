import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function FinalWhatsAppCTA() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quisiera agendar una valoración odontológica. ¿Tienen disponibilidad?"
  );

  return (
    <section className="final-whatsapp">
      <div className="container">
        <div className="final-whatsapp__inner" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">Agenda por WhatsApp</p>
            <h2>¿Quieres agendar una valoración?</h2>
            <p>
              Escribe aunque no sepas el nombre del tratamiento. Cuéntanos qué necesitas.
            </p>
          </div>
          <div className="final-whatsapp__actions">
            <Button
              href={whatsappUrl}
              target="_blank"
              size="lg"
              className="button--whatsapp-glow final-whatsapp__button"
            >
              <WhatsAppIcon className="button__icon" />
              Agendar valoración
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
