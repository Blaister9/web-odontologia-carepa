import Head from "next/head";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
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
    "Conoce el enfoque del Consultorio Odontológico Dra Nataly Jiménez en Carepa: atención cercana, valoración responsable y orientación clara antes de iniciar.";
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
            <p className="eyebrow">Consultorio</p>
            <h1>{brandContent.consultorioTitle}</h1>
            <p>{brandContent.consultorioIntro}</p>
            <div className="internal-hero__actions">
              <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar por WhatsApp
              </a>
              <Link className="button button--outline button--lg" href="/servicios">
                Ver servicios
              </Link>
            </div>
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
      <WhatsAppFloatingButton />
      <MobileStickyCTA />
    </>
  );
}
