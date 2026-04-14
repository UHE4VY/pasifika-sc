"use client";

import CallToAction from "../../components/CallToAction";

export default function ContactPage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Contact</p>
        <h1 style={titleStyle}>Get in Touch</h1>
        <p style={subtitleStyle}>
          Have questions about our programs or want to get started? Reach out and
          we’ll help guide you to the best training option.
        </p>

        <p style={emailStyle}>
          Email us directly at{" "}
          <a
            href="mailto:pasifikasc@gmail.com"
            style={{ color: "var(--accent)", fontWeight: 700 }}
          >
            pasifikasc@gmail.com
          </a>
        </p>

        <div style={ctaRowStyle}>
          <CallToAction
            href="mailto:pasifikasc@gmail.com?subject=PSC%20Training%20Inquiry"
            variant="primary"
          >
            Send us an email
          </CallToAction>
        </div>
      </section>
    </main>
  );
}

/* Styles */

const pageStyle: React.CSSProperties = {
  maxWidth: 800,
  margin: "0 auto",
  padding: "40px 16px 56px",
  textAlign: "center",
};

const heroStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "40px 20px",
  background:
    "radial-gradient(700px 320px at 10% 0%, rgba(31,111,235,0.08), transparent 60%), var(--panel)",
  boxShadow: "0 10px 30px var(--shadow)",
  textAlign: "center",
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
  margin: "10px 0",
  fontSize: 36,
  color: "var(--navy)",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto 20px",
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.9,
  maxWidth: 600,
};

const emailStyle: React.CSSProperties = {
  marginBottom: 20,
  fontSize: 16,
  color: "var(--navy)",
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 12,
};