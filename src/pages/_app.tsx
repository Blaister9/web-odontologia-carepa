import type { AppProps } from "next/app";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollReveal />
      <Component {...pageProps} />
    </>
  );
}
