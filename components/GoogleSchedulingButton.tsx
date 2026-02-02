"use client";

import { useEffect, useRef } from "react";

type Props = {
  url: string;
  label?: string;
  color?: string;
};

export default function GoogleSchedulingButton({
  url,
  label = "Book an appointment",
  color = "#039BE5",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load CSS
    const link = document.createElement("link");
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load script
    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      if ((window as any).calendar && containerRef.current) {
        (window as any).calendar.schedulingButton.load({
          url,
          color,
          label,
          target: containerRef.current,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [url, label, color]);

  return <div ref={containerRef} />;
}