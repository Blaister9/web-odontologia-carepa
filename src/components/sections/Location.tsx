import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function Location() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero confirmar ubicación y disponibilidad de cita odontológica en Carepa."
  );

  return (
    <section className="section location" id="ubicacion">
      <div className="container location__grid">
        <div>
          <SectionHeading
            eyebrow="Ubicación"
            title={`Atención odontológica en ${siteConfig.city}, ${siteConfig.department}`}
            description="Un punto de atención pensado para pacientes de Carepa y la región de Urabá. Confirma la dirección exacta al agendar."
          />

          <div className="location__details">
            <div>
              <h3>Dirección</h3>
              <p>{siteConfig.address}</p>
            </div>
            <div>
              <h3>Horarios</h3>
              <p>{siteConfig.schedule.weekdays}</p>
              <p>{siteConfig.schedule.saturday}</p>
              <p>{siteConfig.schedule.emergencies}</p>
            </div>
          </div>

          <div className="location__actions">
            <Button href={siteConfig.mapUrl} target="_blank" variant="secondary">
              Cómo llegar
            </Button>
            <Button href={appointmentUrl} target="_blank" variant="outline">
              Escribir por WhatsApp
            </Button>
          </div>
        </div>

        <a className="map-card" href={siteConfig.mapUrl} target="_blank" rel="noreferrer">
          <span className="map-card__pin" aria-hidden="true" />
          <strong>Carepa, Antioquia</strong>
          <span>Ver ubicación en Google Maps</span>
        </a>
      </div>
    </section>
  );
}
