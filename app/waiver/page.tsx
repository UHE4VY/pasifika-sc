"use client";

import CallToAction from "../../components/CallToAction";

const WAIVER_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfw4ZJOMzBxBRzEPoNiA6JZXwP6SQ8RLMZJqAtESATG9zY_dw/viewform?embedded=true";
const WAIVER_FALLBACK_URL = "https://forms.gle/2cFrfQcDwp74DMJ78";

export default function WaiverPage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Training Waiver</h1>

      <p style={subtitle}>
        Parents and guardians must complete this training waiver before their
        athlete can participate in PSC programs. Please fill it out prior to the
        first session so we can provide safe, structured training.
      </p>

      <div style={ctaWrap}>
        <CallToAction href={WAIVER_FALLBACK_URL} variant="waiver">
          Sign training waiver
        </CallToAction>
        <CallToAction href="/schedule#book-sessions" variant="secondary">
          Book and pay
        </CallToAction>
      </div>

      <iframe
        src={WAIVER_EMBED_URL}
        title="Pasifika S&C training waiver"
        width="100%"
        height="900"
        frameBorder="0"
        style={{ borderRadius: 12 }}
      />

      <p style={fallbackNote}>
        If the form does not load,{" "}
        <a href={WAIVER_FALLBACK_URL} target="_blank" rel="noopener noreferrer">
          open the training waiver in a new tab
        </a>
        .
      </p>
    </main>
  );
}

const wrap: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "40px 20px",
};

const title: React.CSSProperties = {
  fontSize: 32,
  marginBottom: 10,
};

const subtitle: React.CSSProperties = {
  marginBottom: 18,
  opacity: 0.8,
  lineHeight: 1.7,
};

const ctaWrap: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginBottom: 24,
};

const fallbackNote: React.CSSProperties = {
  marginTop: 16,
  opacity: 0.75,
  fontSize: 14,
  lineHeight: 1.6,
};
