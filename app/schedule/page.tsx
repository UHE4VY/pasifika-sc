"use client";

import CallToAction from "../../components/CallToAction";
import PageViewTracker from "./PageViewTracker";

export default function SchedulePage() {
  return (
    <>
      <PageViewTracker page="/schedule" component="schedule_page" />

      <main style={pageStyle}>
        <section style={heroStyle}>
          <p style={eyebrowStyle}>Scheduling</p>

          <h1 style={titleStyle}>Online scheduling is coming soon</h1>

          <p style={subtitleStyle}>
            We’re currently finalizing our booking system. In the meantime,
            please reach out through our contact page and we’ll help you get
            started.
          </p>

          <div style={ctaRowStyle}>
            <CallToAction href="/contact" variant="primary">
              Contact us
            </CallToAction>

            <CallToAction href="/services" variant="secondary">
              Back to services
            </CallToAction>
          </div>
        </section>
      </main>
    </>
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
  padding: "40px 20px",
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
};