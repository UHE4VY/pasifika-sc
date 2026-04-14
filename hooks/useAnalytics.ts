"use client";

import { track, type AnalyticsEvent, type AnalyticsPayload } from "@/lib/analytics";

export function useAnalytics() {
  function trackEvent(event: AnalyticsEvent, properties: AnalyticsPayload = {}) {
    track(event, properties);
  }

  return { trackEvent };
}