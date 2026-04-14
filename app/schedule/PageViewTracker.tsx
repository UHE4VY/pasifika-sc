"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

type Props = {
  page: string;
  component: string;
};

export default function PageViewTracker({ page, component }: Props) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    trackEvent("page_view", {
      page,
      component,
    });
  }, [page, component, trackEvent]);

  return null;
}