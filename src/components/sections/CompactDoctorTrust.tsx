import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

const compactHighlights = [
  "Odontología general, estética y especializada",
  "Equipo interdisciplinario en Carepa",
  "Comunicación directa por WhatsApp"
];

export function CompactDoctorTrust() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica con la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );

  return (
    <section className="section compact-trust" id="doctora">
      <div className="container compact-trust__inner">
        <div data-reveal>
          <p className="eyebrow">Confianza en segundos</p>
          <h2>Un equipo cercano en Carepa</h2>
          <p>Valoración profesional y opciones explicadas con claridad.</p>
        </div>

        <div className="compact-trust__panel" data-reveal>
          <div className="compact-trust__doctor">
            <div className="compact-trust__photo">
              <Image
                src={siteConfig.doctorProfile.image}
                alt={`${siteConfig.doctorProfile.name}, odontóloga en Carepa`}
                fill
                sizes="96px"
              />
            </div>
            <div>
              <span>{siteConfig.doctorProfile.name}</span>
              <strong>{siteConfig.doctorProfile.title}</strong>
            </div>
          </div>

          <ul aria-label="Puntos de confianza">
            {compactHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="compact-trust__actions">
            <Button href={appointmentUrl} target="_blank" size="lg">
              Agendar valoración
            </Button>
            <Link href="/equipo">Ver equipo profesional</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
