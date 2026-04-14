"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import CallToAction from "../../../../components/CallToAction";

type TierKey = "5-session-package" | "10-session-package" | "20-session-package";

const ONE_ON_ONE_TIERS: Record<
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
  "5-session-package": {
    label: "5 Session Package",
    price: "$750",
    frequency: "5 sessions at $150/session",
    description:
      "A strong starting point for student-athletes who want individualized coaching without a large upfront commitment.",
    features: [
      "5 private coaching sessions",
      "$150 per session",
      "Best for athletes getting started with 1:1 coaching",
      "Package expires 90 days from purchase",
    ],
    bestFor:
      "Student-athletes who want to build momentum, assess fit, and begin with a lower-commitment package.",
  },

  "10-session-package": {
    label: "10 Session Package",
    price: "$1,300",
    frequency: "10 sessions at $130/session",
    description:
      "A more committed option for student-athletes who want greater consistency, stronger training rhythm, and better value per session.",
    features: [
      "10 private coaching sessions",
      "$130 per session",
      "Best balance of value and consistency",
      "Package expires 90 days from purchase",
    ],
    bestFor:
      "Student-athletes who want more continuity and a stronger coaching rhythm over time.",
  },

  "20-session-package": {
    label: "20 Session Package",
    price: "$2,400",
    frequency: "20 sessions at $120/session",
    description:
      "The best-value package for student-athletes committed to longer-term development, measurable progress, and consistent coaching support.",
    features: [
      "20 private coaching sessions",
      "$120 per session",
      "Best value for long-term development",
      "Package expires 90 days from purchase",
    ],
    bestFor:
      "Student-athletes who are ready to commit to a longer training block and maximize value per session.",
  },
};

type Props = {
  params: Promise<{
    tier: TierKey;
  }>;
};

export default function OneOnOneTierPage({ params }: Props) {
  const { tier } = use(params) as { tier: TierKey };
  const data = ONE_ON_ONE_TIERS[tier];

  if (!data) {
    notFound();
  }

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>1:1 Coaching</p>

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
            <h3 style={cardTitle}>Package overview</h3>
            <p style={cardBody}>
              {data.label} gives student-athletes access to individualized 1:1
              coaching designed to improve performance through focused attention
              and clear progression.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Best for</h3>
            <p style={cardBody}>{data.bestFor}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Package policy</h3>
            <p style={cardBody}>
              All student-athlete packages expire 90 days from purchase. Adult
              clients should inquire directly for pricing. Adult base rate
              starts at $165 per session.
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
        <h2 style={sectionTitleStyle}>Adult training</h2>

        <p style={cardBody}>
          Adult clients should inquire directly for more information. Adult 1:1
          training starts at a base rate of $165 per session.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CallToAction href="/contact" variant="primary">
            Inquire for adult training
          </CallToAction>

          <CallToAction href="/services/one-on-one" variant="secondary">
            Back to 1:1 Coaching
          </CallToAction>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to move forward?</h2>

        <p style={cardBody}>
          Start with the athlete intake so we can understand your goals,
          schedule, and which package is the right fit.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CallToAction href="/intake" variant="primary">
            Start athlete intake
          </CallToAction>

          <CallToAction href="/services/one-on-one" variant="secondary">
            Back to 1:1 Coaching
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