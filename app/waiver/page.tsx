"use client";

import CallToAction from "../../components/CallToAction";
import { GYMDESK } from "../../content/gymdesk";

const WAIVER_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe4tsv_tA2-mDXFiNkLnnNbfZyd6Hl9LOpkWkWEhBcZ20cKrw/viewform?embedded=true";
const WAIVER_FALLBACK_URL = "https://forms.gle/UeXCzsjC1iHvzV9N9";

export default function WaiverPage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Parent Waiver</h1>

      <p style={subtitle}>
        Sign the waiver in Gymdesk, then register. Gymdesk keeps the signed
        copy on the athlete’s profile and can require it before a booking is
        complete. Parents and guardians must finish this before the first
        session.
      </p>

      <div style={ctaWrap}>
        <CallToAction href={GYMDESK.signupUrl} variant="waiver">
          Sign waiver and register
        </CallToAction>
        <CallToAction href="/schedule#book-sessions" variant="secondary">
          Book sessions
        </CallToAction>
      </div>

      <p style={subtitle}>
        The Google Form below is still available if you already started it.
        New families should use Gymdesk so the waiver and registration stay
        together.
      </p>

      <iframe
        src={WAIVER_EMBED_URL}
        title="Pasifika S&C parent waiver"
        width="100%"
        height="900"
        frameBorder="0"
        style={{ borderRadius: 12 }}
      />

      <p style={fallbackNote}>
        If the form does not load,{" "}
        <a href={WAIVER_FALLBACK_URL} target="_blank" rel="noopener noreferrer">
          open the Google Form in a new tab
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
