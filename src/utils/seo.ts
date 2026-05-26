import { ServicePage } from "@/data/servicePages";
import { Service, SiteConfig } from "@/data/site";

export function absoluteUrl(site: SiteConfig, path = ""): string {
  const baseUrl = site.siteUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

export function getDentistJsonLd(site: SiteConfig): Record<string, unknown> {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.department,
    addressCountry: "CO"
  };

  if (!site.address.toLowerCase().includes("confirma")) {
    address.streetAddress = site.address;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.clinicName,
    description: site.seoDescription,
    telephone: site.whatsappDisplay,
    image: absoluteUrl(site, site.ogImage),
    url: site.siteUrl,
    address,
    areaServed: [
      {
        "@type": "City",
        name: site.city
      },
      {
        "@type": "AdministrativeArea",
        name: "Urabá"
      }
    ],
    medicalSpecialty: "Dentistry",
    priceRange: "$$",
    sameAs: [site.instagramUrl, site.facebookUrl].filter(Boolean)
  };
}

export function getServiceJsonLd(
  site: SiteConfig,
  servicePage: ServicePage,
  service: Service
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: servicePage.metaDescription,
    serviceType: service.title,
    areaServed: [
      {
        "@type": "City",
        name: site.city
      },
      {
        "@type": "AdministrativeArea",
        name: "Urabá"
      }
    ],
    provider: {
      "@type": "Dentist",
      name: site.clinicName,
      url: site.siteUrl
    },
    url: absoluteUrl(site, `/servicios/${servicePage.slug}`)
  };
}
