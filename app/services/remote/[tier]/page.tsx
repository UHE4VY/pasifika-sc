"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import CallToAction from "../../../../components/CallToAction";

type TierKey = "programming-only" | "check-ins" | "high-support";

const REMOTE_TIERS: Record<
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
  "programming-only": {
    label: "Starter",
    price: "$149/month",
    frequency: "Programming only",
    description:
      "A clear training plan for athletes who want structure and direction without ongoing live coaching touchpoints.",
    features: [
      "Monthly training plan",
      "Structured weekly progression",
      "Clear training intent and progression",
      "Best for independent athletes",
    ],
    bestFor:
      "Athletes who can execute on their own and mainly need expert structure.",
  },

  "check-ins": {
    label: "Performance",
    price: "$249/month",
    frequency: "Programming + biweekly check-ins",
    description:
      "Our most balanced remote option for athletes who want accountability, adjustments, and regular coaching feedback.",
    features: [
      "Monthly training plan",
      "Biweekly check-ins",
      "Adjustments based on progress",
      "Stronger accountability and support",
    ],
    bestFor:
      "Athletes who want structure plus regular coaching feedback without in-person training.",
  },

  "high-support": {
    label: "Elite",
    price: "$399/month",
    frequency: "High-support remote coaching",
    description:
      "Our highest-support remote option for athletes who want the strongest feedback loop without training in person full time.",
    features: [
      "Monthly training plan",
      "Frequent check-ins and adjustments",
      "Highest level of remote support",
      "Built for athletes prioritizing steady development",
    ],
    bestFor:
      "Athletes who want the most remote guidance, accountability, and ongoing coaching support.",
  },
};

type Props = {
  params: Promise<{
    tier: TierKey;
  }>;
};

export default function RemoteTierPage({ params }: Props) {
  const { tier } = use(params) as { tier: TierKey };
  const data = REMOTE_TIERS[tier];

  if (!data) {
    notFound();
  }

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Remote Programming</p>

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

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>What’s included</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Tier overview</h3>
            <p style={cardBody}>
              {data.label} gives you a remote coaching structure designed to
              keep progress moving with clear direction and accountability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Best for</h3>
            <p style={cardBody}>{data.bestFor}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Commitment level</h3>
            <p style={cardBody}>
              {data.frequency} with a plan built to create consistent progress
              month after month.
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

          <CallToAction href="/services/remote" variant="secondary">
            Back to Remote Programming
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
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 10px",
  fontSize: 36,
  lineHeight: 1.15,
  color: "var(--navy)",
};

const priceStyle: React.CSSProperties = {
  margin: "0 0 8px",
  fontSize: 30,
  fontWeight: 800,
  color: "var(--navy)",
};

const subtitleStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: 760,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
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
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 12,
  fontSize: 18,
  color: "var(--navy)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
  marginBottom: 16,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 17,
  color: "var(--navy)",
};

const cardBody: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
};

const listStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.9,
  opacity: 0.88,
  color: "var(--navy)",
};