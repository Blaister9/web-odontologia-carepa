import { SiteConfig } from "@/data/site";

export function getDentistJsonLd(site: SiteConfig): Record<string, unknown> {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.department,
    addressCountry: "CO"
  };

  if (!site.address.toLowerCase().includes("pendiente")) {
    address.streetAddress = site.address;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.clinicName,
    description: site.seoDescription,
    telephone: site.whatsappDisplay,
    image: site.ogImage,
    url: site.siteUrl || undefined,
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
