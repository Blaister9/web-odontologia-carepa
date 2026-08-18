type TrackingParams = Record<string, unknown>;

type WhatsAppClickContext = {
  ctaLocation: string;
  serviceSlug?: string;
  journeyId?: string;
};

type AnalyticsWindow = Window &
  typeof globalThis & {
    gtag?: (command: "event", name: string, params?: TrackingParams) => void;
    fbq?: (command: "trackCustom", name: string, params?: TrackingParams) => void;
  };

export function trackEvent(name: string, params?: TrackingParams): void {
  if (typeof window === "undefined") {
    return;
  }

  const analyticsWindow = window as AnalyticsWindow;

  if (process.env.NODE_ENV === "development") {
    console.debug("[tracking]", name, params ?? {});
  }

  analyticsWindow.gtag?.("event", name, params);
  analyticsWindow.fbq?.("trackCustom", name, params);
}

export function trackWhatsAppClick({
  ctaLocation,
  serviceSlug,
  journeyId
}: WhatsAppClickContext): void {
  if (typeof window === "undefined") return;

  const query = new URLSearchParams(window.location.search);
  trackEvent("whatsapp_click", {
    page_path: window.location.pathname,
    cta_location: ctaLocation,
    service_slug: serviceSlug,
    journey_id: journeyId,
    campaign: query.get("utm_campaign") ?? query.get("campaign") ?? undefined
  });
}
