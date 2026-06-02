import { siteConfig } from "@/data/site";
import { trackEvent } from "@/utils/tracking";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function OralHealthCampaign() {
  const campaignUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, vi la campaña de salud oral y quiero consultar disponibilidad para una valoración."
  );

  return (
    <section className="oral-health-campaign" id="campana-salud-oral">
      <div className="container oral-health-campaign__inner">
        <div className="oral-health-campaign__content">
          <p className="eyebrow">Campaña local</p>
          <h2>Semana de salud oral en Carepa</h2>
          <p>
            Agenda tu valoración odontológica preventiva. Revisamos tu caso, resolvemos tus dudas
            y te orientamos sobre el tratamiento más adecuado según diagnóstico clínico.
          </p>
          <p className="oral-health-campaign__note">
            Cupos limitados por agenda. La valoración no reemplaza procedimientos clínicos ni
            garantiza tratamientos específicos.
          </p>
        </div>

        <div className="oral-health-campaign__aside">
          <h3>Beneficio según valoración</h3>
          <p>
            Si después de la valoración decides iniciar tratamiento, podrás acceder a un beneficio
            especial en profilaxis o control preventivo, según diagnóstico y disponibilidad.
          </p>
          <Button
            href={campaignUrl}
            target="_blank"
            size="lg"
            fullWidth
            onClick={() => trackEvent("click_whatsapp_campaign")}
          >
            Consultar disponibilidad por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
