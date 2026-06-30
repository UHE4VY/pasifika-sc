// app/services/page.tsx
import CallToAction from "../../components/CallToAction";
import ServiceCardLink from "../../components/ServiceCardLink";

type ServiceItem = {
  slug: "one-on-one" | "youth-performance-training" | "small-group-training";
  label: string;
  description: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
};

const ONE_ON_ONE: ServiceItem = {
  slug: "one-on-one",
  label: "1:1 Coaching",
  description:
    "Fully individualized coaching for athletes who want targeted attention, faster feedback, and a plan built around their sport, body, and goals.",
  highlight: "Most personalized support",
  imageSrc: "/services/one-on-one.png",
  imageAlt: "Athlete performing a box jump during a private coaching session",
};

const GROUP_SERVICES: ServiceItem[] = [
  {
    slug: "youth-performance-training",
    label: "Group Performance Training",
    description:
      "Structured, coach-led training in a competitive group environment that builds accountability, confidence, and measurable progress.",
    highlight: "Train with purpose in a team setting",
    imageSrc: "/services/group-performance-training.png",
    imageAlt: "Athletes training together during a group performance session",
  },
  {
    slug: "small-group-training",
    label: "Small Group Training",
    description:
      "Coach-led sessions in intentionally small groups for athletes who want more feedback and structure than a large class, without full 1:1 pricing.",
    highlight: "More coaching attention, still team energy",
    imageSrc: "/services/small-group-training.png",
    imageAlt: "Athletes performing barbell squats during a small group training session",
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
        PSC specializes in in-person coaching through private 1:1 sessions,
        small group training, and structured group performance programs. Every
        option is built around measurable progress, intentional coaching, and
        long-term athletic development.
      </p>

      <div className="service-card-layout">
        <div className="service-card-layout__primary">
          <ServiceCardLink
            href={`/services/${ONE_ON_ONE.slug}`}
            imageSrc={ONE_ON_ONE.imageSrc}
            imageAlt={ONE_ON_ONE.imageAlt}
            highlight={ONE_ON_ONE.highlight}
            title={ONE_ON_ONE.label}
            description={ONE_ON_ONE.description}
          />
        </div>

        <div className="service-card-layout__stack">
          {GROUP_SERVICES.map((service) => (
            <ServiceCardLink
              key={service.slug}
              href={`/services/${service.slug}`}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              highlight={service.highlight}
              title={service.label}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Which option is the best fit?</h2>

        <div className="service-compare-grid">
          <div style={compareCardStyle}>
            <h3 style={compareTitleStyle}>1:1 Coaching</h3>
            <p style={compareBodyStyle}>
              Best for athletes who want maximum coaching attention, targeted
              feedback, and a fully individualized plan built around specific
              goals, movement needs, or sport demands.
            </p>
          </div>

          <div style={compareCardStyle}>
            <h3 style={compareTitleStyle}>Small Group Training</h3>
            <p style={compareBodyStyle}>
              Best for athletes who want consistent coaching and accountability
              in a smaller setting, with more individual feedback than a full
              group class.
            </p>
          </div>

          <div style={compareCardStyle}>
            <h3 style={compareTitleStyle}>Group Performance Training</h3>
            <p style={compareBodyStyle}>
              Best for athletes who want structured coaching, team energy, and
              accountability in a competitive training environment with peers.
            </p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        <CallToAction href="/schedule" variant="primary">
          Book a consultation
        </CallToAction>
      </div>

      <div style={{ marginTop: 14, textAlign: "center" }}>
        <CallToAction href="/group-schedule" variant="secondary">
          View summer class schedule
        </CallToAction>
      </div>

      <div style={{ marginTop: 14, textAlign: "center" }}>
        <CallToAction href="/contact" variant="link">
          Questions first? Contact us
        </CallToAction>
      </div>
    </main>
  );
}

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

const compareCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "#ffffff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
  color: "var(--navy)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "center",
};

const compareTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 8,
  color: "var(--navy)",
  textAlign: "center",
};

const compareBodyStyle: React.CSSProperties = {
  opacity: 0.85,
  lineHeight: 1.6,
  textAlign: "center",
  margin: 0,
};
