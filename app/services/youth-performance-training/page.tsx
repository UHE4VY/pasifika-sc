"use client";

import React from "react";
import CallToAction from "../../../components/CallToAction";

export default function YouthPerformancePage() {
  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Training Program</p>
        <h1 style={titleStyle}>Youth Performance Training</h1>
        <p style={subtitleStyle}>
          Structured, coach-led training for youth athletes who thrive in a
          competitive environment and want consistent progress in speed,
          strength, movement quality, and confidence.
        </p>

        <div style={ctaRowStyle}>
          <CallToAction href="/intake" variant="primary">
            Reserve early access
          </CallToAction>
          <CallToAction href="/schedule" variant="secondary">
            Book a consult
          </CallToAction>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* PRICING & AVAILABILITY */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Pricing & Availability</h2>

        <p style={cardBodyStyle}>
          Youth Group Training includes 8 structured coaching sessions per
          month in a supportive and accountable group environment.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Early Access Rate</h3>
            <p style={cardBodyStyle}>
              <strong>$150/month</strong> for the first 3 months for athletes who
              sign up during the early access period.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Standard Rate</h3>
            <p style={cardBodyStyle}>
              <strong>$200/month</strong> starting in month 4.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Sessions Included</h3>
            <p style={cardBodyStyle}>
              8 coach-led sessions per month focused on strength, speed and
              movement quality.
            </p>
          </div>

        </div>

        <p style={launchNoteStyle}>
          Early access athletes receive priority placement before public
          enrollment opens.
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CallToAction href="/intake" variant="primary">
            Reserve early access
          </CallToAction>
          <CallToAction href="/schedule" variant="secondary">
            Book a consult
          </CallToAction>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHAT PARENTS CAN EXPECT */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>What Parents Can Expect</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Intentional Coaching</h3>
            <p style={cardBodyStyle}>
              Sessions are structured and outcome-driven, ensuring athletes
              receive purposeful coaching rather than random workouts.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited Group Sizes</h3>
            <p style={cardBodyStyle}>
              With a maximum of 15 athletes per class, each participant receives
              meaningful feedback and accountability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>A Clear Development Path</h3>
            <p style={cardBodyStyle}>
              Athletes progress through a structured system focused on movement
              quality, strength and long-term athletic development.
            </p>
          </div>
        </div>

        <p style={launchNoteStyle}>
          Families can expect a professional environment with clear standards
          and measurable progress.
        </p>
      </section>

      <div style={dividerStyle} />

      {/* NEXT STEP */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to Get Started?</h2>
        <p style={cardBodyStyle}>
          Start with the athlete intake so we can understand your athlete’s
          goals and guide you through the onboarding process.
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
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

/* ===== Styles ===== */

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
  textAlign: "center",       // Centers headings and text
  display: "flex",
  flexDirection: "column",
  alignItems: "center",      // Ensures all children are horizontally centered
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
  margin: "0 auto",        // Centers the text block horizontally
  maxWidth: 720,           // Optional: keeps line length readable
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",     // Ensures the text itself is centered
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
  justifyContent: "center",  // Centers buttons horizontally
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
  textAlign: "center", // ✅ Center section content
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 16,
  fontSize: 20,
  color: "var(--navy)",
  textAlign: "center", // ✅ Center section titles
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 14,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "#ffffff",
  textAlign: "center", // ✅ Center text within cards
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

const launchNoteStyle: React.CSSProperties = {
  marginTop: 14,
  lineHeight: 1.65,
  opacity: 0.82,
  color: "var(--navy)",
};