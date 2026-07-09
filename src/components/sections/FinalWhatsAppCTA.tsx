import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function FinalWhatsAppCTA() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica con la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="final-whatsapp">
      <div className="container final-whatsapp__inner">
        <div>
          <p className="eyebrow">Agenda por WhatsApp</p>
          <h2>Cuéntanos qué necesitas y revisamos el siguiente paso.</h2>
          <p>
            Puedes escribir aunque no sepas el nombre del tratamiento. La valoración define el
            diagnóstico y las opciones adecuadas.
          </p>
        </div>
        <div className="final-whatsapp__actions">
          <Button href={whatsappUrl} target="_blank" size="lg">
            Agendar valoración
          </Button>
          <Link href="/servicios">Ver servicios</Link>
        </div>
      </div>
    </section>
  );
}
