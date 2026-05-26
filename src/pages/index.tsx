import Head from "next/head";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { BeforeBooking } from "@/components/sections/BeforeBooking";
import { Emergency } from "@/components/sections/Emergency";
import { FAQ } from "@/components/sections/FAQ";
import { FirstVisit } from "@/components/sections/FirstVisit";
import { Hero } from "@/components/sections/Hero";
import { LocalTrust } from "@/components/sections/LocalTrust";
import { Location } from "@/components/sections/Location";
import { NeedSelector } from "@/components/sections/NeedSelector";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/data/site";
import { getDentistJsonLd } from "@/utils/seo";

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
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:title" content={siteConfig.seoTitle} />
        <meta property="og:description" content={siteConfig.seoDescription} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seoTitle} />
        <meta name="twitter:description" content={siteConfig.seoDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <TrustBar />
        <NeedSelector />
        <LocalTrust />
        <Services />
        <FirstVisit />
        <AboutDoctor />
        <Emergency />
        <BeforeBooking />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <MobileStickyCTA />
    </>
  );
}
