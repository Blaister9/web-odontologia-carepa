import Head from "next/head";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { BrandStory } from "@/components/sections/BrandStory";
import { CareExperience } from "@/components/sections/CareExperience";
import { DentalTeam } from "@/components/sections/DentalTeam";
import { Emergency } from "@/components/sections/Emergency";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { FinalWhatsAppCTA } from "@/components/sections/FinalWhatsAppCTA";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { NeedSelector } from "@/components/sections/NeedSelector";
import { RegionWhatsApp } from "@/components/sections/RegionWhatsApp";
import { ServiceCatalogPreview } from "@/components/sections/ServiceCatalogPreview";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";

export default function Home() {
  const jsonLd = getDentistJsonLd(siteConfig);

  return (
    <>
      <Head>
        <title>{siteConfig.seoTitle}</title>
        <meta name="description" content={siteConfig.seoDescription} />
        <meta name="keywords" content={siteConfig.seoKeywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content={siteConfig.clinicName} />
        <meta property="og:title" content={siteConfig.seoTitle} />
        <meta property="og:description" content={siteConfig.seoDescription} />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seoTitle} />
        <meta name="twitter:description" content={siteConfig.seoDescription} />
        <meta name="twitter:image" content={absoluteUrl(siteConfig, siteConfig.ogImage)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <NeedSelector />
        <FeaturedTreatments />
        <ServiceCatalogPreview />
        <BrandStory />
        <AboutDoctor />
        <DentalTeam />
        <Emergency />
        <CareExperience />
        <RegionWhatsApp />
        <Location />
        <FAQ />
        <FinalWhatsAppCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <MobileStickyCTA />
    </>
  );
}
