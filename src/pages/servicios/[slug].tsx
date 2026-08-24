import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { EditorialMedia } from "@/components/media/EditorialMedia";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { servicePages, ServicePage } from "@/data/servicePages";
import { Service, siteConfig } from "@/data/site";
import { absoluteUrl, getServiceJsonLd } from "@/utils/seo";
import { getWhatsAppUrl } from "@/utils/whatsapp";

type ServicePageProps = {
  servicePage: ServicePage;
  service: Service;
  relatedServices: Service[];
};

export default function ServiceDetailPage({
  servicePage,
  service,
  relatedServices
}: ServicePageProps) {
  const canonicalUrl = absoluteUrl(siteConfig, `/servicios/${servicePage.slug}`);
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, servicePage.whatsappMessage);
  const jsonLd = getServiceJsonLd(siteConfig, servicePage, service);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicePage.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <Head>
        <title>{servicePage.title}</title>
        <meta name="description" content={servicePage.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content={siteConfig.clinicName} />
        <meta property="og:title" content={servicePage.title} />
        <meta property="og:description" content={servicePage.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={servicePage.title} />
        <meta name="twitter:description" content={servicePage.metaDescription} />
        <meta name="twitter:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <Header />
      <main id="main-content">
        <section className="service-hero">
          <div
            className={`container service-hero__grid${
              servicePage.heroMedia ? " service-hero__grid--media" : ""
            }`}
          >
            <div>
              <Link className="service-hero__back" href="/#servicios">
                Volver a servicios
              </Link>
              <p className="eyebrow">{service.badge} en Carepa</p>
              <h1>{servicePage.h1}</h1>
              <p className="service-hero__lead">{servicePage.intro}</p>
              <div className="service-hero__actions">
                <a className="button button--primary button--lg" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Consultar por WhatsApp
                </a>
                <Link className="button button--outline button--lg" href="/#que-necesitas">
                  No sé si es para mí
                </Link>
              </div>
            </div>

            {servicePage.heroMedia ? (
              <aside className="service-hero__media-column" aria-label="Contexto del servicio">
                <EditorialMedia
                  {...servicePage.heroMedia}
                  className="service-detail-media"
                  priority
                  sizes="(min-width: 980px) 32vw, 92vw"
                />
                <div className="service-hero__note service-hero__note--compact">
                  <span>Antes de iniciar</span>
                  <strong>Primero revisamos si corresponde a tu caso.</strong>
                  <p>Sin diagnósticos por chat ni promesas de resultado.</p>
                </div>
              </aside>
            ) : (
              <div className="service-hero__note">
                <span>Antes de iniciar</span>
                <strong>Primero hay que revisar si este tratamiento corresponde a tu caso.</strong>
                <p>Sin diagnósticos por chat ni promesas de resultado.</p>
              </div>
            )}
          </div>
        </section>

        <section className="section service-content">
          <div className="container service-content__grid">
            <article className="service-panel">
              <h2>Qué puede aportar</h2>
              <ul>
                {servicePage.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>

            <article className="service-panel service-panel--accent">
              <h2>Cuándo consultar</h2>
              <ul>
                {servicePage.whenToConsider.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section service-process">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="section-heading__eyebrow">Proceso</p>
              <h2>Cómo empieza</h2>
              <p>
                Los pasos pueden cambiar según lo que encontremos en la valoración.
              </p>
            </div>

            <div className="service-process__grid">
              {servicePage.processSteps.map((step, index) => (
                <article className="service-process__step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {servicePage.caseStudy?.enabled ? (
          <section className="section service-case" aria-labelledby="service-case-title">
            <div className="container service-case__inner">
              <div className="section-heading section-heading--center">
                <p className="section-heading__eyebrow">Caso real</p>
                <h2 id="service-case-title">{servicePage.caseStudy.title}</h2>
              </div>

              <div className="service-case__pair">
                <figure className="service-case__item">
                  <div className="service-case__media">
                    <Image
                      src={servicePage.caseStudy.before.src}
                      alt={servicePage.caseStudy.before.alt}
                      fill
                      sizes="(min-width: 640px) 260px, 45vw"
                    />
                  </div>
                  <figcaption>Antes</figcaption>
                </figure>

                <figure className="service-case__item">
                  <div className="service-case__media">
                    <Image
                      src={servicePage.caseStudy.after.src}
                      alt={servicePage.caseStudy.after.alt}
                      fill
                      sizes="(min-width: 640px) 260px, 45vw"
                    />
                  </div>
                  <figcaption>Después</figcaption>
                </figure>
              </div>

              <p className="service-case__disclaimer">{servicePage.caseStudy.disclaimer}</p>
            </div>
          </section>
        ) : null}

        <section className="section service-faq">
          <div className="container service-faq__grid">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2>Dudas antes de agendar</h2>
              <p>Son respuestas generales. La valoración define qué corresponde en cada caso.</p>
            </div>

            <div className="faq__items">
              {servicePage.faq.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section related-services">
          <div className="container">
            <div className="section-heading">
              <p className="section-heading__eyebrow">Otros servicios</p>
              <h2>También puedes revisar</h2>
            </div>

            <div className="related-services__grid">
              {relatedServices.map((relatedService) => (
                <Link
                  className="related-card"
                  href={`/servicios/${relatedService.slug}`}
                  key={relatedService.id}
                >
                  <span>{relatedService.badge}</span>
                  <strong>{relatedService.title}</strong>
                  <p>{relatedService.featuredSummary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="service-disclaimer">
          <div className="container service-disclaimer__inner">
            <div>
              <span>Antes de decidir</span>
              <p>
                Esta información es general y no reemplaza una valoración odontológica. Para
                consultar disponibilidad, escribe por WhatsApp.
              </p>
            </div>
            <a className="button button--primary button--md" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar valoración
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: servicePages.map((servicePage) => ({
    params: { slug: servicePage.slug }
  })),
  fallback: false
});

export const getStaticProps: GetStaticProps<ServicePageProps> = ({ params }) => {
  const slug = String(params?.slug ?? "");
  const servicePage = servicePages.find((page) => page.slug === slug);
  const service = siteConfig.services.find((item) => item.id === servicePage?.serviceId);

  if (!servicePage || !service) {
    return { notFound: true };
  }

  const relatedServices = servicePage.relatedServices
    .map((relatedSlug) => siteConfig.services.find((item) => item.slug === relatedSlug))
    .filter((item): item is Service => Boolean(item));

  // Un caso desactivado se elimina de las props: si viajara en el payload de
  // __NEXT_DATA__ publicaría las rutas de las fotos del paciente aunque el
  // bloque no se pinte, y esta bandera existe por consentimiento, no por diseño.
  const { caseStudy, ...restOfPage } = servicePage;
  const safePage: ServicePage = caseStudy?.enabled ? servicePage : restOfPage;

  return {
    props: {
      servicePage: safePage,
      service,
      relatedServices
    }
  };
};
