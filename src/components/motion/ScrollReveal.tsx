import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Sistema global de reveal-on-scroll sin dependencias.
 * - Marca <html> con .js-motion solo si hay JS, IntersectionObserver
 *   y el usuario NO prefiere movimiento reducido.
 * - Observa [data-reveal] y agrega .is-revealed al entrar al viewport.
 * - Sin JS o con prefers-reduced-motion, el contenido queda visible siempre.
 */
export function ScrollReveal() {
  const router = useRouter();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.classList.add("js-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((element) => observer.observe(element));
    };

    observeAll();
    router.events.on("routeChangeComplete", observeAll);

    return () => {
      router.events.off("routeChangeComplete", observeAll);
      observer.disconnect();
    };
  }, [router.events]);

  return null;
}
