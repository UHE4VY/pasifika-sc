"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import CallToAction from "../../../../components/CallToAction";

type TierKey = "5-session-package";

const ONE_ON_ONE_TIERS: Record<
  TierKey,
  {
    label: string;
    frequency: string;
    description: string;
    features: string[];
    bestFor: string;
  }
> = {
  "5-session-package": {
    label: "New Client Special",
    frequency: "5 private coaching sessions + free consultation",
    description:
      "A simple entry point for student-athletes and families who want to experience 1:1 coaching before committing to a longer-term training plan.",
    features: [
      "Free initial consultation",
      "5 private coaching sessions",
      "$500 total",
      "$100 per session",
      "Movement and training needs review",
      "Individualized coaching recommendations",
      "Package expires 90 days from purchase",
    ],
    bestFor:
      "Student-athletes who want to build momentum, assess fit, and begin with individualized coaching support.",
  },
};

type Props = {
  params: Promise<{
    tier: string;
  }>;
};

export default function OneOnOneTierPage({ params }: Props) {
  const { tier } = use(params) as { tier: string };

  if (tier !== "5-session-package") {
    notFound();
  }

  const data = ONE_ON_ONE_TIERS[tier];

  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>1:1 Coaching</p>

        <h1 style={titleStyle}>{data.label}</h1>

        <p style={subtitleStyle}>{data.frequency}</p>

        <p style={subtitleStyle}>{data.description}</p>

        <div style={ctaRowStyle}>
          <CallToAction href="/schedule" variant="primary">
            Schedule free consultation
          </CallToAction>

          <CallToAction href="/intake" variant="secondary">
            Start athlete intake
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
              This new client special gives student-athletes access to focused
              1:1 coaching with a clear starting point and no long-term
              commitment required.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Best for</h3>
            <p style={cardBody}>{data.bestFor}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Next steps</h3>
            <p style={cardBody}>
              Longer-term training options can be discussed after the
              consultation once we understand the athlete’s goals, schedule, and
              level of support needed.
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
          Start with a free consultation so we can learn more about the athlete,
          answer questions, and decide whether 1:1 coaching is the right fit.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CallToAction href="/schedule" variant="primary">
            Schedule free consultation
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

const subtitleStyle: React.CSSProperties = {
  margin: "8px 0 0",
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