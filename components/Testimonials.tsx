"use client";

import React from "react";
import CallToAction from "./CallToAction";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

type Props = {
  items: Testimonial[];
  ctaHref?: string;
  ctaText?: string;
};

export default function Testimonials({
  items,
  ctaHref = "/schedule",
  ctaText = "Book a consult",
}: Props) {
  return (
    <section style={{ marginTop: 0 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: 16,
              background: "#ffffff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.9 }}>
              “{t.quote}”
            </p>
            <p style={{ margin: "10px 0 0 0", opacity: 0.75, fontSize: 13 }}>
              — {t.name}
              {t.role ? `, ${t.role}` : ""}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <CallToAction href={ctaHref}>{ctaText}</CallToAction>
      </div>
    </section>
  );
}