import Head from "next/head";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { brandContent } from "@/data/brandContent";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function ConsultorioPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/consultorio");
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una valoración odontológica en el consultorio de la Dra. Nataly Jiménez. ¿Me pueden ayudar con disponibilidad?"
  );
  const title = "Consultorio odontológico en Carepa | Dra. Nataly Jiménez";
  const description =
    "Conoce Odontología Dra. Nataly Jiménez en Carepa: salud oral, estética dental, bienestar y atención personalizada con orientación clara.";
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
        <section className="internal-hero">
          <div className="container internal-hero__inner">
            <p className="eyebrow">Consultorio</p>
            <h1>{brandContent.presentation.title}</h1>
            <p>{brandContent.presentation.lead}</p>
            <div className="internal-hero__actions">
              <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar valoración
              </a>
            </div>
          </div>
        </section>

        <section className="section consultorio-portrait">
          <div className="container consultorio-portrait__inner">
            <div className="consultorio-portrait__media">
              <Image
                src="/images/client/web/nataly-natural-portrait.webp"
                alt={`${siteConfig.doctorName} en el consultorio odontológico de Carepa`}
                fill
                priority
                loading="eager"
                sizes="(min-width: 980px) 38vw, 100vw"
              />
            </div>
            <div className="consultorio-portrait__copy">
              <p className="eyebrow">Quién te atiende</p>
              <h2>{siteConfig.doctorName}</h2>
              <p>{siteConfig.doctorProfile.intro}</p>
              <blockquote>{siteConfig.doctorProfile.quote}</blockquote>
            </div>
          </div>
        </section>

        <section className="section clinic-space" aria-labelledby="clinic-space-title">
          <div className="container clinic-space__inner">
            <div className="clinic-space__copy">
              <p className="eyebrow">El espacio</p>
              <h2 id="clinic-space-title">Un consultorio real, preparado para atenderte.</h2>
              <p>
                La unidad odontológica y el espacio de atención forman parte del consultorio en
                Carepa. La disponibilidad y las indicaciones para llegar se confirman al agendar.
              </p>
            </div>
            <figure className="clinic-space__figure">
              <div className="clinic-space__media">
                <Image
                  src="/images/client/web-v2/clinic-chair.webp"
                  alt="Unidad odontológica del consultorio de la Dra. Nataly Jiménez en Carepa"
                  fill
                  sizes="(min-width: 980px) 58vw, 100vw"
                />
              </div>
              <figcaption>Fotografía real del consultorio.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section consultorio-story">
          <div className="container consultorio-story__grid">
            <div className="consultorio-story__copy">
              <p className="eyebrow">{brandContent.presentation.eyebrow}</p>
              <h2>{brandContent.consultorioTitle}</h2>
              <p>{brandContent.consultorioIntro}</p>
              {brandContent.presentation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <aside className="consultorio-story__panel" aria-label="Enfoque del consultorio">
              <span>Carepa, Antioquia</span>
              <strong>Salud oral, estética dental y bienestar con atención personalizada.</strong>
              <ul>
                {brandContent.presentation.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section internal-content">
          <div className="container internal-content__grid">
            {brandContent.principles.map((principle) => (
              <article className="internal-card" key={principle.title}>
                <span>{principle.title}</span>
                <p>{principle.description}</p>
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
