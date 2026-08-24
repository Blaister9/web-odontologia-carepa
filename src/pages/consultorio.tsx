import Head from "next/head";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { EditorialMedia } from "@/components/media/EditorialMedia";
import { InlineVideo } from "@/components/media/InlineVideo";
import { MediaPair } from "@/components/media/MediaPair";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { brandContent } from "@/data/brandContent";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function ConsultorioPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/consultorio");
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quisiera agendar una valoración. ¿Tienen disponibilidad?"
  );
  const title = "Consultorio odontológico en Carepa | Dra. Nataly Jiménez";
  const description =
    "Conoce el consultorio de la Dra. Nataly Jiménez en Carepa, el equipo y la forma de agendar una valoración por WhatsApp.";
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
        <section className="internal-hero consultorio-hero">
          <div className="container consultorio-hero__grid">
            <div className="consultorio-hero__copy">
              <p className="eyebrow">Consultorio</p>
              <h1>{brandContent.presentation.title}</h1>
              <p>{brandContent.presentation.lead}</p>
              <div className="internal-hero__actions">
                <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Agendar valoración
                </a>
              </div>
            </div>
            <EditorialMedia
              src="/images/client/web-v2/clinic-chair.webp"
              alt="Unidad odontológica del consultorio de la Dra. Nataly Jiménez en Carepa"
              caption="Consultorio en Carepa."
              className="consultorio-hero__media"
              priority
              sizes="(min-width: 900px) 48vw, 92vw"
            />
          </div>
        </section>

        <section className="section consultorio-work" aria-labelledby="consultorio-work-title">
          <div className="container consultorio-work__grid">
            <EditorialMedia
              src="/images/client/web-v2/nataly-clinic-work.webp"
              alt="Dra. Nataly Jiménez atendiendo a una paciente en el consultorio"
              caption="Atención en el consultorio."
              className="consultorio-work__media"
              sizes="(min-width: 900px) 56vw, 92vw"
              position="center 46%"
            />
            <div className="consultorio-work__copy">
              <p className="eyebrow">{brandContent.presentation.eyebrow}</p>
              <h2 id="consultorio-work-title">{brandContent.consultorioTitle}</h2>
              <p>{brandContent.consultorioIntro}</p>
              <p>{brandContent.presentation.paragraphs[0]}</p>
              <ul>
                {brandContent.presentation.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section consultorio-people" aria-labelledby="consultorio-people-title">
          <div className="container consultorio-people__inner">
            <div className="consultorio-people__copy">
              <p className="eyebrow">Quién te atiende</p>
              <h2 id="consultorio-people-title">{siteConfig.doctorName}</h2>
              <p>{siteConfig.doctorProfile.intro}</p>
              <blockquote>{siteConfig.doctorProfile.quote}</blockquote>
            </div>
            <MediaPair
              primary={{
                src: "/images/client/web-v2/nataly-portrait.webp",
                alt: `${siteConfig.doctorName} en el consultorio`,
                caption: "Dra. Nataly Jiménez.",
                position: "center 20%"
              }}
              secondary={{
                src: "/images/client/web-v2/nataly-vanesa-team.webp",
                alt: "Dra. Nataly Jiménez y Vanesa López en el consultorio",
                position: "center 28%"
              }}
            />
          </div>
        </section>

        <section className="section consultorio-video" aria-labelledby="consultorio-video-title">
          <div className="container consultorio-video__grid">
            <div className="consultorio-video__copy">
              <p className="eyebrow">El espacio</p>
              <h2 id="consultorio-video-title">Un vistazo al consultorio</h2>
              <p>
                La atención es en Carepa. La dirección exacta y las indicaciones para llegar se
                confirman al agendar.
              </p>
            </div>
            <InlineVideo
              src="/marketing/media-v2/video-previews/clinic-room-closing-vertical.mp4"
              poster="/images/client/web-v2/clinic-tour-poster.webp"
              label="Video del consultorio odontológico en Carepa"
              caption="Consultorio al finalizar la jornada."
            />
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
