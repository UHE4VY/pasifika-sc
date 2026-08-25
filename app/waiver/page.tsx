"use client";

import CallToAction from "../../components/CallToAction";
import { GYMDESK } from "../../content/gymdesk";

export default function WaiverPage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Parent Waiver</h1>

      <p style={subtitle}>
        Sign the waiver in Gymdesk, then register. The signed copy is stored
        on the athlete’s profile and can be required before a booking is
        complete. Parents and guardians must finish this before the first
        session.
      </p>

      <p style={subtitle}>
        Signing up more than one athlete? Complete the waiver for the first
        child, then add each sibling as a family member so each athlete has
        their own signed copy.
      </p>

      <div style={ctaWrap}>
        <CallToAction href={GYMDESK.signupUrl} variant="waiver">
          Sign waiver and register
        </CallToAction>
        <CallToAction href="/schedule#book-sessions" variant="secondary">
          Book sessions
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
