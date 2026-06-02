type TrackingParams = Record<string, unknown>;

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
