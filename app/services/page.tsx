// app/services/page.tsx
import Link from "next/link";
import CallToAction from "../../components/CallToAction";

type ServiceItem = {
  slug: "one-on-one" | "youth-performance-training";
  label: string;
  description: string;
  highlight: string;
};

const SERVICES: ServiceItem[] = [
  {
    slug: "one-on-one",
    label: "1:1 Coaching",
    description:
      "Fully individualized coaching for athletes who want targeted attention, faster feedback, and a plan built around their sport, body, and goals.",
    highlight: "Most personalized support",
  },
  {
    slug: "youth-performance-training",
    label: "Group Training",
    description:
      "Structured, coach-led training in a competitive group environment that builds accountability, confidence, and measurable progress.",
    highlight: "Train with purpose in a team setting",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 800,
          color: "var(--navy)",
          margin: "0 0 12px 0",
          textAlign: "center",
        }}
      >
        Training Programs
      </h1>

      <p
        style={{
          maxWidth: 680,
          margin: "0 auto 28px",
          lineHeight: 1.7,
          opacity: 0.85,
          color: "var(--navy)",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        PSC specializes in in-person coaching through private 1:1 sessions and
        structured group training. Every program is built around measurable
        progress, intentional coaching, and long-term athletic development.
      </p>

      {/* Service cards */}
      <div style={gridStyle}>
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            style={serviceCardLinkStyle}
          >
            <p style={highlightStyle}>{s.highlight}</p>
            <div style={cardTitle}>{s.label}</div>
            <div style={cardBody}>{s.description}</div>
            <div style={linkStyle}>View details →</div>
          </Link>
        ))}
      </div>

      {/* Best fit section */}
      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Which option is the best fit?</h2>

        <div style={compareGridStyle}>
          <div style={compareCardStyle}>
            <h3 style={cardTitle}>1:1 Coaching</h3>
            <p style={cardBody}>
              Best for athletes who want maximum coaching attention, targeted
              feedback, and a fully individualized plan built around specific
              goals, movement needs, or sport demands.
            </p>
          </div>

          <div style={compareCardStyle}>
            <h3 style={cardTitle}>Group Training</h3>
            <p style={cardBody}>
              Best for athletes who want consistent coaching, structure, and
              accountability in a competitive training environment with peers.
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <div style={{ marginTop: 28, textAlign: "center" }}>
        <CallToAction href="/schedule" variant="primary">
          Book a consultation
        </CallToAction>
      </div>

      {/* Secondary CTA */}
      <div style={{ marginTop: 14, textAlign: "center" }}>
        <CallToAction href="/contact" variant="link">
          Questions first? Contact us
        </CallToAction>
      </div>
    </main>
  );
}

/* ===== styles ===== */

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 16,
};

const highlightStyle: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const cardTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 8,
  color: "var(--navy)",
  textAlign: "center",
};
const cardBody: React.CSSProperties = {
  opacity: 0.85,
  lineHeight: 1.6,
  textAlign: "center",
};

const linkStyle: React.CSSProperties = {
  marginTop: 12,
  fontWeight: 700,
  color: "var(--accent)",
  textDecoration: "none",
  textAlign: "center",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  marginTop: 28,
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 16,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",
};

const compareGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 16,
};

const compareCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "#ffffff",
  minHeight: 180,
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
  color: "var(--navy)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const serviceCardLinkStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  textDecoration: "none",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "#ffffff",
  minHeight: 220,
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
  color: "var(--navy)",
  height: "100%",
};
