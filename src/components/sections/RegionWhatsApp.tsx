import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function RegionWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa o en una zona cercana de Urabá y quiero agendar una valoración odontológica. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="region-whatsapp">
      <div className="container region-whatsapp__inner">
        <div>
          <p className="eyebrow">Carepa y Urabá</p>
          <h2>Escribe desde tu ubicación y revisamos disponibilidad.</h2>
          <p>
            Si estás en Carepa, una vereda cercana o la región de Urabá, puedes escribir por
            WhatsApp para consultar disponibilidad, orientación inicial y agendar tu valoración.
          </p>
        </div>
        <Button href={whatsappUrl} target="_blank" size="lg">
          Escribir desde mi ubicación
        </Button>
      </div>
    </section>
  );
}
