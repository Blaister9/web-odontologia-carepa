import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function Emergency() {
  const emergencyUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, tengo una urgencia odontológica y estoy en Carepa o cerca. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="emergency" id="urgencias">
      <div className="container emergency__grid">
        <div data-reveal>
          <p className="emergency__pill">
            <span className="emergency__pulse" aria-hidden="true" />
            Prioridad a urgencias según disponibilidad
          </p>
          <p className="eyebrow eyebrow--light">Urgencias odontológicas</p>
          <h2>¿Tienes dolor ahora?</h2>
          <p>Escríbenos para consultar disponibilidad de valoración.</p>
          <Button
            href={emergencyUrl}
            target="_blank"
            variant="emergency"
            size="lg"
            className="emergency__cta"
          >
            <WhatsAppIcon className="button__icon" />
            Consultar mi urgencia
          </Button>
        </div>

        <ul className="emergency__list" aria-label="Motivos frecuentes de urgencia" data-reveal="group">
          {siteConfig.emergencyReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
