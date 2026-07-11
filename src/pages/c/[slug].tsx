import type { GetServerSideProps } from "next";

import {
  buildCampaignDestination,
  getEnabledCampaignBySlug
} from "@/data/campaigns";

export default function CampaignEntryPage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ params, query, res }) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");

  const rawSlug = params?.slug ?? query.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const campaign = slug ? getEnabledCampaignBySlug(slug) : null;

  if (!campaign || campaign.landingPath !== `/c/${slug}`) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: buildCampaignDestination(campaign, query),
      permanent: false
    }
  };
};
