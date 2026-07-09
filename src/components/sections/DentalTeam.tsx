import Image from "next/image";
import Link from "next/link";

import { teamMembers } from "@/data/team";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function DentalTeam() {
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica con el equipo de la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );
  const featuredMembers = teamMembers.filter((member) => member.featured).slice(0, 4);

  return (
    <section className="section dental-team" id="equipo">
      <div className="container">
        <div className="dental-team__heading">
          <SectionHeading
            eyebrow="Equipo"
            title="Profesionales para una atención odontológica integral"
            description="Un equipo pensado para orientar, valorar y acompañar cada caso con comunicación clara desde el primer contacto."
          />
          <Button href={appointmentUrl} target="_blank" size="md">
            Agendar por WhatsApp
          </Button>
        </div>

        <div className="dental-team__grid">
          {featuredMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card__image">
                <Image
                  src={member.image}
                  alt={`Imagen referencial del equipo: ${member.name}`}
                  fill
                  sizes="(min-width: 980px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="team-card__body">
                <span>{member.profileComplete ? "Perfil del equipo" : "Perfil en actualización"}</span>
                <h3>{member.name}</h3>
                <strong>{member.role}</strong>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="dental-team__footer">
          <Link href="/equipo">Conocer el equipo completo</Link>
        </div>
      </div>
    </section>
  );
}
