import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function RegionFocus() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en la región de Urabá y quiero consultar disponibilidad para atención odontológica en Carepa."
  );

  return (
    <section className="section region-focus">
      <div className="container region-focus__grid">
        <div>
          <p className="eyebrow">Carepa y Urabá</p>
          <h2>Atención en Carepa para pacientes de la región</h2>
          <p>
            Este sitio está pensado para personas de Carepa y la región de Urabá que quieren
            orientación clara antes de iniciar un tratamiento. La atención es en Carepa y la
            disponibilidad se confirma por WhatsApp.
          </p>
          <Button href={whatsappUrl} target="_blank" size="lg">
            Confirmar disponibilidad
          </Button>
        </div>

        <div className="region-focus__cities" aria-label="Municipios de referencia">
          {siteConfig.regionCities.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
