import Head from "next/head";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MediaPair } from "@/components/media/MediaPair";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { siteConfig } from "@/data/site";
import { teamMembers } from "@/data/team";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function EquipoPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/equipo");
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quisiera agendar una valoración. ¿Tienen disponibilidad?"
  );
  const title = "Equipo odontológico en Carepa | Dra. Nataly Jiménez";
  const description =
    "Conoce el equipo odontológico de la Dra. Nataly Jiménez en Carepa y consulta disponibilidad por WhatsApp.";
  const jsonLd = getDentistJsonLd(siteConfig);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content={siteConfig.clinicName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main id="main-content">
        <section className="internal-hero team-hero">
          <div className="container team-hero__grid">
            <div className="team-hero__copy">
              <p className="eyebrow">Equipo</p>
              <h1>Conoce al equipo</h1>
              <p>
                Nataly atiende odontología general y estética. El consultorio cuenta con apoyo en
                ortodoncia, cirugía maxilofacial e implantología.
              </p>
              <div className="internal-hero__actions">
                <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
            <MediaPair
              className="team-hero__media-pair"
              primary={{
                src: "/images/client/web-v2/nataly-vanesa-team.webp",
                alt: "Dra. Nataly Jiménez y Vanesa López en el consultorio",
                caption: "Nataly y Vanesa.",
                position: "center 28%"
              }}
              secondary={{
                src: "/images/client/web/equipo-preview.webp",
                alt: "Nataly Jiménez y Vanesa López",
                position: "center 30%"
              }}
            />
          </div>
        </section>

        <section className="section team-directory">
          <div className="container team-directory__grid">
            {teamMembers.map((member) => (
              <article className="team-card team-card--directory" key={member.name}>
                {member.hasRealPhoto && member.image ? (
                  <div className="team-card__image">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 980px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="team-card__initials" aria-hidden="true">
                    {member.name
                      .replace(/^(Dra\.|Dr\.)\s*/, "")
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <div className="team-card__body">
                  <span>{member.profileComplete ? "Equipo odontológico" : "Información pendiente"}</span>
                  <h2>{member.name}</h2>
                  <strong>{member.role}</strong>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
