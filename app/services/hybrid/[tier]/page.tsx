"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import CallToAction from "../../../../components/CallToAction";

type TierKey = "1x-month" | "2x-month" | "3x-month";

const HYBRID_TIERS: Record<
  TierKey,
  {
    label: string;
    price: string;
    frequency: string;
    description: string;
    features: string[];
    bestFor: string;
  }
> = {
  "1x-month": {
    label: "Starter",
    price: "$249/month",
    frequency: "1 in-person session / month + remote programming",
    description:
      "A flexible entry point for athletes who want a monthly in-person coaching touchpoint while following a structured plan between sessions.",
    features: [
      "1 in-person coaching session per month",
      "Remote programming between sessions",
      "Clear structure and progression",
      "Best for athletes who want flexibility with occasional live feedback",
    ],
    bestFor:
      "Athletes who can train independently but want a monthly in-person check-in to stay on track.",
  },

  "2x-month": {
    label: "Performance",
    price: "$399/month",
    frequency: "Biweekly in-person sessions (2x / month) + remote programming",
    description:
      "Our most balanced hybrid option for athletes who want regular in-person coaching while keeping the flexibility of remote programming.",
    features: [
      "2 in-person coaching sessions per month",
      "Remote programming between sessions",
      "More accountability and stronger feedback loop",
      "Best mix of flexibility and support",
    ],
    bestFor:
      "Athletes who want consistent live coaching without needing weekly in-person sessions.",
  },

  "3x-month": {
    label: "Elite",
    price: "$549/month",
    frequency: "3 touchpoints / month + remote programming",
    description:
      "Our highest-support hybrid option for athletes who want more coaching touchpoints, more feedback, and more structure across the month.",
    features: [
      "3 in-person coaching touchpoints per month",
      "Remote programming between sessions",
      "Highest level of hybrid support",
      "Built for athletes prioritizing steady development",
    ],
    bestFor:
      "Athletes who want more frequent coaching support without committing to full in-person training every week.",
  },
};

type Props = {
  params: Promise<{
    tier: TierKey;
  }>;
};

export default function HybridTierPage({ params }: Props) {
  const { tier } = use(params) as { tier: TierKey };
  const data = HYBRID_TIERS[tier];

  if (!data) {
    notFound();
  }

  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Hybrid Coaching</p>

        <h1 style={titleStyle}>
          {data.label} — {data.frequency}
        </h1>

        <p style={priceStyle}>{data.price}</p>

        <p style={subtitleStyle}>{data.description}</p>

        <div style={ctaRowStyle}>
          <CallToAction href="/intake" variant="primary">
            Start athlete intake
          </CallToAction>

          <CallToAction href="/schedule" variant="secondary">
            Book a consult
          </CallToAction>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* FEATURES */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>What’s included</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Tier overview</h3>
            <p style={cardBody}>
              {data.label} gives you a hybrid structure that combines live
              coaching touchpoints with programming between sessions.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Best for</h3>
            <p style={cardBody}>{data.bestFor}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Commitment level</h3>
            <p style={cardBody}>
              {data.frequency} with a structured plan designed to keep progress
              moving month after month.
            </p>
          </div>
        </div>

        <ul style={listStyle}>
          {data.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <div style={dividerStyle} />

      {/* FINAL CTA */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to move forward?</h2>

        <p style={cardBody}>
          Start with the athlete intake so we can understand your goals,
          schedule, and whether this tier is the right fit.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CallToAction href="/intake" variant="primary">
            Start athlete intake
          </CallToAction>

          <CallToAction href="/services/hybrid" variant="secondary">
            Back to Hybrid Coaching
          </CallToAction>
        </div>
      </section>
    </main>
  );
}

/* styles */

const pageStyle: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "40px 16px 56px",
};

const heroStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "26px 20px",
  background:
    "radial-gradient(700px 320px at 10% 0%, rgba(31,111,235,0.08), transparent 60%), var(--panel)",
  boxShadow: "0 10px 30px var(--shadow)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 10px",
  fontSize: 36,
  lineHeight: 1.15,
  color: "var(--navy)",
  textAlign: "center",
};

const priceStyle: React.CSSProperties = {
  margin: "0 0 8px",
  fontSize: 30,
  fontWeight: 800,
  color: "var(--navy)",
  textAlign: "center",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 760,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
  justifyContent: "center",
};


const dividerStyle: React.CSSProperties = {
  height: 1,
  background: "var(--border)",
  margin: "18px 2px",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  textAlign: "center",
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 12,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
  alignItems: "stretch", // Ensures all cards are equal height
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "var(--panel2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  height: "100%", // Ensures equal height within the grid
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 10,
  fontSize: 18,
  fontWeight: 700,
  color: "var(--navy)",
  textAlign: "center",
  minHeight: 48, // Ensures consistent title height across cards
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 17,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBody: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBodyStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
  flexGrow: 1, // Pushes CTA or other elements to the bottom
};

const listStyle: React.CSSProperties = {
  margin: "0 auto",
  paddingLeft: 0,
  listStylePosition: "inside",
  lineHeight: 1.9,
  opacity: 0.88,
  color: "var(--navy)",
  textAlign: "center",
};

const cardCtaWrapStyle: React.CSSProperties = {
  marginTop: 16,
  display: "flex",
  justifyContent: "center",
};