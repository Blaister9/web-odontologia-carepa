import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function Emergency() {
  const emergencyUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, tengo una urgencia odontológica en Carepa y quiero revisar disponibilidad de atención."
  );

  return (
    <section className="emergency" id="urgencias">
      <div className="container emergency__grid">
        <div>
          <p className="eyebrow eyebrow--light">Urgencias odontológicas</p>
          <h2>Si tienes dolor o una molestia fuerte, escribenos para revisar disponibilidad.</h2>
          <p>
            La orientación oportuna ayuda a definir el siguiente paso. Describe tus síntomas,
            desde cuándo iniciaron y si has tenido inflamación, trauma o fiebre.
          </p>
          <Button href={emergencyUrl} target="_blank" variant="emergency" size="lg">
            Consultar urgencia por WhatsApp
          </Button>
        </div>

        <ul className="emergency__list" aria-label="Motivos frecuentes de urgencia">
          {siteConfig.emergencyReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
