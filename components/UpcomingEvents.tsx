import CallToAction from "./CallToAction";
import { upcomingEvents } from "../content/upcomingEvents";

const eventTypeLabels = {
  workshop: "Workshop",
  class: "Class",
  seminar: "Seminar",
} as const;

export default function UpcomingEvents() {
  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>Upcoming classes, workshops &amp; seminars</h2>
      <p style={sectionIntroStyle}>
        Stay up to date on special training opportunities at PSC and partner
        facilities across the Peninsula.
      </p>

      <div style={eventsStackStyle}>
        {upcomingEvents.map((event) => (
          <article key={event.id} className="upcoming-event-card">
            <div className="upcoming-event-card__poster">
              <img
                src={event.imageSrc}
                alt={event.imageAlt}
                className="upcoming-event-card__image"
              />
            </div>

            <div className="upcoming-event-card__content">
              <p style={eventTypeStyle}>{eventTypeLabels[event.type]}</p>
              <h3 style={eventTitleStyle}>{event.title}</h3>
              <p style={eventSubtitleStyle}>{event.subtitle}</p>

              <p style={eventInstructorStyle}>{event.instructor}</p>
              <ul style={credentialsListStyle}>
                {event.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>

              <div className="upcoming-event-card__details">
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Schedule</p>
                  <p style={detailValueStyle}>{event.schedule}</p>
                </div>
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Time</p>
                  <p style={detailValueStyle}>{event.time}</p>
                </div>
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Format</p>
                  <p style={detailValueStyle}>{event.duration}</p>
                </div>
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Ages</p>
                  <p style={detailValueStyle}>{event.audience}</p>
                </div>
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Investment</p>
                  <p style={detailValueStyle}>{event.price}</p>
                </div>
                <div style={detailItemStyle}>
                  <p style={detailLabelStyle}>Skills covered</p>
                  <p style={detailValueStyle}>{event.skills.join(", ")}</p>
                </div>
              </div>

              <div style={locationStyle}>
                <p style={detailLabelStyle}>Location</p>
                <p style={detailValueStyle}>{event.locationName}</p>
                <p style={locationAddressStyle}>{event.locationAddress}</p>
              </div>

              <div style={ctaRowStyle}>
                <CallToAction href={event.registerHref} variant="primary">
                  Register now
                </CallToAction>
                <CallToAction href="/contact" variant="secondary">
                  Ask a question
                </CallToAction>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "22px 18px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
};

const sectionTitleStyle: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: 28,
  fontWeight: 800,
  color: "var(--navy)",
  textAlign: "center",
};

const sectionIntroStyle: React.CSSProperties = {
  margin: "0 auto 22px",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const eventsStackStyle: React.CSSProperties = {
  display: "grid",
  gap: 22,
};

const eventTypeStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const eventTitleStyle: React.CSSProperties = {
  margin: "8px 0 4px",
  fontSize: 30,
  lineHeight: 1.15,
  color: "var(--navy)",
};

const eventSubtitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 700,
  color: "var(--accent2)",
};

const eventInstructorStyle: React.CSSProperties = {
  margin: "16px 0 8px",
  fontSize: 18,
  fontWeight: 800,
  color: "var(--navy)",
};

const credentialsListStyle: React.CSSProperties = {
  margin: "0 0 18px",
  paddingLeft: 18,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.9,
};

const detailItemStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 14,
  padding: "12px 14px",
  background: "var(--panel2)",
};

const detailLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const detailValueStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.5,
  color: "var(--navy)",
};

const locationStyle: React.CSSProperties = {
  marginBottom: 18,
  border: "1px solid var(--border)",
  borderRadius: 14,
  padding: "12px 14px",
  background: "var(--panel2)",
};

const locationAddressStyle: React.CSSProperties = {
  margin: "4px 0 0",
  lineHeight: 1.5,
  color: "var(--navy)",
  opacity: 0.88,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};
