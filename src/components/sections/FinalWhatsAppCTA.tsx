import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function FinalWhatsAppCTA() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica con la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="final-whatsapp">
      <div className="container">
        <div className="final-whatsapp__inner" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">Agenda por WhatsApp</p>
            <h2>Cuéntanos qué necesitas y revisamos el siguiente paso.</h2>
            <p>
              Puedes escribir aunque no sepas el tratamiento. La valoración define las opciones adecuadas.
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
