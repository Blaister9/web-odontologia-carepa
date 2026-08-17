import Head from "next/head";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/data/site";
import { teamGroupPhoto, teamMembers } from "@/data/team";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function EquipoPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/equipo");
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica con el equipo de la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );
  const title = "Equipo odontológico en Carepa | Dra. Nataly Jiménez";
  const description =
    "Conoce el equipo del Consultorio Odontológico Dra Nataly Jiménez en Carepa y agenda una valoración odontológica por WhatsApp.";
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
      <main>
        <section className="internal-hero">
          <div className="container internal-hero__inner">
            <p className="eyebrow">Equipo</p>
            <h1>Un equipo para orientar tu atención odontológica con claridad.</h1>
            <p>
              La información del equipo se mantiene editable y prudente. Los retratos individuales
              se irán reemplazando a medida que se reciba la fotografía de cada profesional.
            </p>
            <div className="internal-hero__actions">
              <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section team-intro">
          <div className="container team-intro__inner">
            {/*
              Banda fotográfica recortada de la pieza entregada por la clienta.
              Identidades confirmadas: Nataly Jiménez y Vanesa López. El pie es
              solo nominal; los roles ya viven en las tarjetas individuales.
            */}
            <figure className="team-intro__figure">
              <div className="team-intro__media">
                <Image
                  src={teamGroupPhoto.current}
                  alt={teamGroupPhoto.alt}
                  fill
                  sizes="(min-width: 980px) 52vw, 100vw"
                  priority
                />
              </div>
              <figcaption>{teamGroupPhoto.caption}</figcaption>
            </figure>
            <div className="team-intro__copy">
              <p className="eyebrow">Atención cercana</p>
              <h2>Personas detrás de cada valoración</h2>
              <p>
                La atención combina odontología general, estética y apoyo especializado. Cada caso
                se revisa en valoración antes de recomendar un tratamiento.
              </p>
            </div>
          </div>
        </section>

        <section className="section team-directory">
          <div className="container team-directory__grid">
            {teamMembers.map((member) => (
              <article className="team-card team-card--directory" key={member.name}>
                <div className="team-card__image">
                  <Image
                    src={member.image}
                    alt={
                      member.hasRealPhoto
                        ? `${member.name}, ${member.role}`
                        : `Imagen referencial del equipo: ${member.name}`
                    }
                    fill
                    sizes="(min-width: 980px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="team-card__body">
                  <span>{member.profileComplete ? "Perfil del equipo" : "Perfil en actualización"}</span>
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
      <WhatsAppFloatingButton />
      <MobileStickyCTA />
    </>
  );
}
