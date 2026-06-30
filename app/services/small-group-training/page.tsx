"use client";

import React from "react";
import CallToAction from "../../../components/CallToAction";

export default function SmallGroupTrainingPage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Training Program</p>
        <h1 style={titleStyle}>Small Group Training</h1>
        <p style={subtitleStyle}>
          Coach-led sessions in intentionally small groups for athletes who want
          more feedback, structure, and accountability than a large class—without
          the cost of fully private coaching.
        </p>

        <div style={ctaRowStyle}>
          <CallToAction href="/intake" variant="primary">
            Reserve early access
          </CallToAction>
          <CallToAction href="/schedule" variant="secondary">
            Book a consultation
          </CallToAction>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Program Overview</h2>

        <p style={cardBodyStyle}>
          Small Group Training sits between 1:1 coaching and our larger Group
          Performance classes. Sessions stay focused, coaching stays personal,
          and athletes still benefit from training alongside motivated peers.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Intentionally Small Groups</h3>
            <p style={cardBodyStyle}>
              Fewer athletes per session means more coaching eyes on your
              athlete, clearer corrections, and better accountability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Structured Progression</h3>
            <p style={cardBodyStyle}>
              Training follows a clear plan built around movement quality,
              strength, speed, and long-term athletic development.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Flexible Frequency</h3>
            <p style={cardBodyStyle}>
              Athletes can train once, twice, or three times per week depending
              on goals, schedule, and how much coaching support they need.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Pricing Discussed During Consult</h3>
            <p style={cardBodyStyle}>
              Package options are reviewed during onboarding so families have a
              clear plan before committing.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CallToAction href="/intake" variant="primary">
            Start athlete intake
          </CallToAction>
          <CallToAction href="/schedule" variant="secondary">
            Book a consultation
          </CallToAction>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>How It Compares</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>vs 1:1 Coaching</h3>
            <p style={cardBodyStyle}>
              Small Group Training offers more affordability and team energy
              while still delivering frequent coaching feedback and a structured
              plan.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>vs Group Performance Training</h3>
            <p style={cardBodyStyle}>
              Group Performance Training is built for larger class sizes and
              summer schedule flexibility. Small Group Training is the better
              fit when your athlete needs more individual attention.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to Get Started?</h2>
        <p style={cardBodyStyle}>
          Start with the athlete intake so we can understand your athlete&apos;s
          goals and guide you toward the right training option.
        </p>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CallToAction href="/intake" variant="primary">
            Reserve early access
          </CallToAction>
          <CallToAction href="/services" variant="secondary">
            Back to services
          </CallToAction>
        </div>
      </section>
    </main>
  );
}

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
  fontSize: 38,
  lineHeight: 1.12,
  color: "var(--navy)",
  textAlign: "center",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 720,
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
  alignItems: "center",
};

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: "var(--border)",
  margin: "24px 2px",
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
  marginBottom: 16,
  fontSize: 20,
  color: "var(--navy)",
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "#ffffff",
  textAlign: "center",
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 16,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBodyStyle: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",
};
