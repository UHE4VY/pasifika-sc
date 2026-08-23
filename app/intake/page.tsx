"use client";

import CallToAction from "../../components/CallToAction";

export default function IntakePage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Athlete Intake</h1>

      <p style={subtitle}>
        Tell us about the athlete so we can recommend the right training path.
      </p>

      <p style={note}>
        After intake, parents and guardians also need to complete the waiver
        before their athlete can train.
      </p>

      <div style={ctaWrap}>
        <CallToAction href="/waiver" variant="waiver">
          Sign waiver
        </CallToAction>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScHagjfrQeiFE4wDAXcuojunsiglJeVebAfWDvilANzVI-cKQ/viewform?usp=header"
        title="Pasifika S&C athlete intake"
        width="100%"
        height="900"
        frameBorder="0"
        style={{ borderRadius: 12 }}
      />
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
};

const note: React.CSSProperties = {
  marginBottom: 16,
  opacity: 0.8,
  lineHeight: 1.7,
};

const ctaWrap: React.CSSProperties = {
  marginBottom: 24,
};
