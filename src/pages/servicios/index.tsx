import Head from "next/head";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MediaPair } from "@/components/media/MediaPair";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { serviceCatalog } from "@/data/serviceCatalog";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function ServiciosPage() {
  const canonicalUrl = absoluteUrl(siteConfig, "/servicios");
  const title = "Servicios odontológicos en Carepa | Dra. Nataly Jiménez";
  const description =
    "Consulta servicios odontológicos en Carepa: odontología general, estética, ortodoncia, urgencias, rehabilitación y especialidades.";
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
        <section className="internal-hero services-hero">
          <div className="container services-hero__grid">
            <div className="services-hero__copy">
              <p className="eyebrow">Servicios</p>
              <h1>Servicios odontológicos en Carepa</h1>
              <p>
                Busca el servicio que necesitas. Si no estás seguro, escríbenos y te indicamos
                cómo empezar.
              </p>
            </div>
            <MediaPair
              className="services-hero__media-pair"
              primary={{
                src: "/images/client/web-v2/nataly-clinic-work.webp",
                alt: "Dra. Nataly Jiménez atendiendo a una paciente",
                caption: "Atención en el consultorio.",
                position: "center 44%"
              }}
              secondary={{
                src: "/images/client/web-v2/clinic-chair-portrait.webp",
                alt: "Unidad odontológica del consultorio en Carepa",
                position: "center 44%"
              }}
            />
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
                            <Link href={`/servicios/${service.slug}`}>Más información</Link>
                          ) : (
                            <span>Consulta por WhatsApp</span>
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
              <p>Cuéntanos qué sientes o qué quieres cambiar.</p>
            </div>
            <a
              className="button button--primary button--md"
              href={getWhatsAppUrl(
                siteConfig.whatsappNumber,
                "Hola, no sé qué tratamiento necesito. ¿Tienen disponibilidad para una valoración?"
              )}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
