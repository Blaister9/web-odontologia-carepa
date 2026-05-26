import { getWhatsAppUrl } from "@/utils/whatsapp";
import { siteConfig } from "@/data/site";

import { Button } from "../ui/Button";

export function PatientGuidance() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y no sé qué tratamiento necesito. Quiero contar lo que siento para recibir orientación y revisar disponibilidad."
  );

  return (
    <section className="guidance-band">
      <div className="container guidance-band__grid">
        <div>
          <p className="eyebrow eyebrow--light">Orientación sin presión</p>
          <h2>No necesitas saber qué tratamiento pedir</h2>
          <p>
            Puedes escribir con tus síntomas, una molestia, una duda estética o una foto de
            referencia si la tienes. La valoración ayuda a traducir esa inquietud en un camino
            clínico responsable.
          </p>
        </div>
        <div className="guidance-band__actions">
          <Button href="#que-necesitas" variant="emergency" size="lg">
            Usar selector de necesidad
          </Button>
          <Button href={whatsappUrl} target="_blank" variant="outline" size="lg">
            Escribir directamente
          </Button>
        </div>
      </div>
    </section>
  );
}
