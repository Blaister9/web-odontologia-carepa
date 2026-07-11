import type { AppProps } from "next/app";

import { JourneyProvider } from "@/components/conversion/JourneyContext";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JourneyProvider>
      <ScrollReveal />
      <Component {...pageProps} />
    </JourneyProvider>
  );
}
