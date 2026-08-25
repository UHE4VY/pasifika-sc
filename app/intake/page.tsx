"use client";

import CallToAction from "../../components/CallToAction";
import { GYMDESK } from "../../content/gymdesk";

export default function IntakePage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Athlete Intake</h1>

      <p style={subtitle}>
        Complete intake in Gymdesk so medical history, goals, and scheduling
        stay on the athlete’s profile with booking and waiver.
      </p>

      <div style={ctaWrap}>
        <CallToAction href={GYMDESK.signupUrl} variant="primary">
          Complete intake in Gymdesk
        </CallToAction>
        <CallToAction href="/schedule#book-sessions" variant="secondary">
          Book and pay
        </CallToAction>
      </div>
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
  marginBottom: 16,
  opacity: 0.8,
  lineHeight: 1.7,
};

const ctaWrap: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginBottom: 24,
};
