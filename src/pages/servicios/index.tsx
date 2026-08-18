import Head from "next/head";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { serviceCatalog } from "@/data/serviceCatalog";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function ServiciosPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/servicios");
  const title = "Servicios odontológicos en Carepa | Dra. Nataly Jiménez";
  const description =
    "Consulta el catálogo de servicios odontológicos en Carepa: odontología general, estética, ortodoncia, urgencias, rehabilitación y especialidades.";
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
            <p className="eyebrow">Servicios</p>
            <h1>Catálogo de atención odontológica en Carepa.</h1>
            <p>
              Explora por categoría y abre la guía de cada tratamiento. Si no sabes cuál
              corresponde a tu caso, la valoración es el punto de partida.
            </p>
          </div>
        </section>

        <section className="section service-directory">
          <div className="container service-directory__grid">
            {serviceCatalog.map((category) => (
              <article className="service-directory__category" key={category.title}>
                <div>
                  <span>{category.services.length} servicios</span>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <div className="service-directory__items">
                  {category.services.map((service) => {
                    return (
                      <div className="service-directory__item" key={`${category.title}-${service.name}`}>
                        <div>
                          <h3>{service.name}</h3>
                          <p>{service.summary}</p>
                        </div>
                        <div className="service-directory__actions">
                          {service.slug ? (
                            <Link href={`/servicios/${service.slug}`}>Ver guía</Link>
                          ) : (
                            <span>Orientación en valoración</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-directory__closing">
          <div className="container service-directory__closing-inner">
            <div>
              <span>¿No sabes cuál elegir?</span>
              <p>Cuéntanos qué sientes y te orientamos para agendar una valoración.</p>
            </div>
            <a
              className="button button--primary button--md"
              href={getWhatsAppUrl(
                siteConfig.whatsappNumber,
                "Hola, quiero orientación para saber qué valoración odontológica necesito."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orientación
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
