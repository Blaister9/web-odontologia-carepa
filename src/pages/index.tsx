import type { GetServerSideProps } from "next";
import Head from "next/head";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ConversionJourney } from "@/components/conversion/ConversionJourney";
import { CompactDoctorTrust } from "@/components/sections/CompactDoctorTrust";
import { Emergency } from "@/components/sections/Emergency";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { FinalWhatsAppCTA } from "@/components/sections/FinalWhatsAppCTA";
import { Hero } from "@/components/sections/Hero";
import { GoogleTrustPreview } from "@/components/sections/GoogleTrustPreview";
import { RegionWhatsApp } from "@/components/sections/RegionWhatsApp";
import { Button } from "@/components/ui/Button";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import {
  CampaignConfig,
  CampaignRequest,
  getEnabledCampaignBySlug,
  resolveCampaignRequest
} from "@/data/campaigns";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getDentistJsonLd } from "@/utils/seo";

type HomeProps = CampaignRequest;

function CampaignEntry({ campaign }: { campaign: CampaignConfig }) {
  const targetId = campaign.slug === "uraba" ? "#elige-tu-camino" : "#recorrido-opciones";

  return (
    <section
      className="campaign-entry"
      id="campaign-entry"
      aria-labelledby="campaign-entry-title"
    >
      <div className="container campaign-entry__inner">
        <div className="campaign-entry__copy">
          <p className="eyebrow">Llegaste por: {campaign.name}</p>
          <h2 id="campaign-entry-title">{campaign.headline}</h2>
          <p>{campaign.supportingLine}</p>
        </div>
        <Button href={targetId} size="lg">
          {campaign.cta}
          <span aria-hidden="true">↓</span>
        </Button>
      </div>
    </section>
  );
}

export default function Home({ campaignSlug }: HomeProps) {
  const jsonLd = getDentistJsonLd(siteConfig);
  const campaign = getEnabledCampaignBySlug(campaignSlug);

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

      <Header homeMode />
      <main id="main-content" className="home-page">
        <Hero />
        {campaign ? <CampaignEntry campaign={campaign} /> : null}
        <ConversionJourney />
        <CompactDoctorTrust />
        <FeaturedTreatments />
        <GoogleTrustPreview />
        <Emergency />
        <RegionWhatsApp />
        <FinalWhatsAppCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ query }) => ({
  props: resolveCampaignRequest(query)
});
