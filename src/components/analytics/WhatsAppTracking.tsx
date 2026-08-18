import { useEffect } from "react";

import { trackWhatsAppClick } from "@/utils/tracking";

export function WhatsAppTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if (!link) return;

      const ctaLocation =
        link.dataset.ctaLocation ??
        (link.closest("header")
          ? "header"
          : link.closest("footer")
            ? "footer"
            : link.closest(".mobile-sticky-cta")
              ? "mobile_sticky"
              : "page_content");
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const serviceSlug =
        link.dataset.serviceSlug ??
        (pathParts[0] === "servicios" ? pathParts[1] : undefined);

      trackWhatsAppClick({
        ctaLocation,
        serviceSlug,
        journeyId: link.dataset.journeyId
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
