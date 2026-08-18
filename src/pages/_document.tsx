import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es-CO">
      <Head />
      <body>
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
