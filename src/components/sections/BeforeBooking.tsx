import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function BeforeBooking() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero hacer una pregunta antes de agendar una valoración odontológica."
  );

  return (
    <section className="section before-booking">
      <div className="container">
        <SectionHeading
          eyebrow="Antes de agendar"
          title="Puedes preguntar primero"
          description="Agendar una cita no tiene por qué empezar con presión. Estas dudas son comunes y se pueden resolver antes de decidir."
          align="center"
        />

        <div className="before-booking__grid">
          {siteConfig.beforeBookingItems.map((item) => (
            <article className="objection-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="before-booking__cta">
          <p>Escríbenos primero, agenda después con tranquilidad.</p>
          <Button href={whatsappUrl} target="_blank" size="lg">
            Preguntar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
