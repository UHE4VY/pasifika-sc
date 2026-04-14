export type AnalyticsEvent = "page_view" | "cta_click";

export type AnalyticsPayload = Record<
  string,
  string | number | boolean | null | undefined
>;

export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  // ✅ Only log in dev if you explicitly enable it
  const debugEnabled =
    process.env.NODE_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "1";

    if (debugEnabled) {
      console.log("[analytics]", { event, payload });
    }

  // ✅ In prod, forward to gtag if present
  const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
  if (typeof gtag === "function") {
    gtag("event", event, payload);
  }
}