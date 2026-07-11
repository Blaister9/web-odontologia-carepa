import type { AppProps } from "next/app";

import {
  JourneyInitialState,
  JourneyProvider
} from "@/components/conversion/JourneyContext";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

import "@/styles/globals.css";

type CampaignAwarePageProps = Record<string, unknown> & {
  campaignSlug?: string | null;
  initialJourney?: JourneyInitialState | null;
};

export default function App({
  Component,
  pageProps
}: AppProps<CampaignAwarePageProps>) {
  const initialJourney = pageProps.initialJourney ?? null;
  const journeyStateKey = [
    pageProps.campaignSlug ?? "default",
    initialJourney?.intentId ?? "none",
    initialJourney?.optionId ?? "none"
  ].join(":");

  return (
    <JourneyProvider key={journeyStateKey} initialState={initialJourney}>
      <ScrollReveal />
      <Component {...pageProps} />
    </JourneyProvider>
  );
}
