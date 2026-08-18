import type { AppProps } from "next/app";
import { Fraunces, Public_Sans } from "next/font/google";

import { WhatsAppTracking } from "@/components/analytics/WhatsAppTracking";
import {
  JourneyInitialState,
  JourneyProvider
} from "@/components/conversion/JourneyContext";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

import "@/styles/globals.css";
import "@/styles/tokens.css";
import "@/styles/luz-de-uraba.css";

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
  display: "swap"
});

const textFont = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-public-sans",
  display: "swap"
});

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
    <div className={`${displayFont.variable} ${textFont.variable} app-shell`}>
      <JourneyProvider key={journeyStateKey} initialState={initialJourney}>
        <WhatsAppTracking />
        <ScrollReveal />
        <Component {...pageProps} />
      </JourneyProvider>
    </div>
  );
}
