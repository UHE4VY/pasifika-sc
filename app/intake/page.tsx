"use client";

export default function IntakePage() {
  return (
    <main style={wrap}>
      <h1 style={title}>Athlete Intake</h1>

      <p style={subtitle}>
        Tell us about the athlete so we can recommend the right training path.
      </p>

      <iframe
        src="https://tally.so/embed/pbLjzy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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
  marginBottom: 30,
  opacity: 0.8,
};