import Image from "next/image";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

export function AboutDoctor() {
  const doctorProfile = siteConfig.doctorProfile;
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quisiera agendar una valoración odontológica. ¿Tienen disponibilidad?"
  );

  return (
    <section className="section about" id="doctora">
      <div className="about__pattern" aria-hidden="true" />
      <div className="container about__grid">
        <div className="about__media">
          <div className="about__image-frame">
            <Image
              src={doctorProfile.image}
              alt="Imagen referencial de atención odontológica profesional"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="about__image"
            />
          </div>

          <div className="about__identity-card" aria-label="Perfil profesional">
            <span>{doctorProfile.name}</span>
            <strong>{doctorProfile.title}</strong>
          </div>

          <div className="about__quote-card">
            <span aria-hidden="true">“</span>
            <p>{doctorProfile.quote}</p>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">Conoce a la doctora</p>
          <h2>Dra. Nataly Jiménez</h2>
          <p className="about__intro">{doctorProfile.intro}</p>

          <div className="about__highlights" aria-label="Datos de atención">
            {doctorProfile.highlights.map((highlight) => (
              <article className="about__highlight" key={highlight}>
                <span aria-hidden="true" />
                <p>{highlight}</p>
              </article>
            ))}
          </div>

          <div className="about__approach" aria-label="Enfoque de atención">
            {doctorProfile.approach.map((item, index) => (
              <article className="about__approach-item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about__actions">
            <Button href={appointmentUrl} target="_blank" size="lg">
              Agendar valoración con la Dra. Nataly
            </Button>
            <Button href="#servicios" variant="outline" size="lg">
              Ver tratamientos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
