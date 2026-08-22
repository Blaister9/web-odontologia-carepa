import { getWhatsAppUrl } from "@/utils/whatsapp";
import { siteConfig } from "@/data/site";

import { Button } from "../ui/Button";

export function PatientGuidance() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, no sé qué tratamiento necesito. ¿Tienen disponibilidad para una valoración?"
  );

  return (
    <section className="guidance-band">
      <div className="container guidance-band__grid">
        <div>
          <p className="eyebrow eyebrow--light">Puedes empezar por aquí</p>
          <h2>No tienes que saber qué tratamiento pedir</h2>
          <p>
            Escribe qué sientes o qué quieres cambiar. En la valoración revisamos el caso y te
            explicamos las opciones.
          </p>
        </div>
        <div className="guidance-band__actions">
          <Button href="#que-necesitas" variant="emergency" size="lg">
            Elegir una opción
          </Button>
          <Button href={whatsappUrl} target="_blank" variant="outline" size="lg">
            Escribir directamente
          </Button>
        </div>
      </div>
    </section>
  );
}
