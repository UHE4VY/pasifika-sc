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
      <h2 style={sectionTitleStyle}>Upcoming classes</h2>
      <p style={sectionIntroStyle}>
        Sunday group classes for middle school and high school athletes are open
        for early registration.
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

              {event.sessions && event.sessions.length > 0 ? (
                <div className="upcoming-event-card__sessions">
                  {event.sessions.map((session, index) => (
                    <div key={session.id} style={sessionCardStyle}>
                      <p style={sessionEyebrowStyle}>Session {index + 1}</p>
                      <h4 style={sessionTitleStyle}>{session.title}</h4>
                      <p style={sessionAudienceStyle}>{session.audience}</p>
                      <p style={sessionTimeStyle}>
                        {session.startTime} – {session.endTime}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {event.instructor ? (
                <p style={eventInstructorStyle}>{event.instructor}</p>
              ) : null}

              {event.credentials && event.credentials.length > 0 ? (
                <ul style={credentialsListStyle}>
                  {event.credentials.map((credential) => (
                    <li key={credential}>{credential}</li>
                  ))}
                </ul>
              ) : null}

              <div className="upcoming-event-card__details">
                {event.details.map((detail) => (
                  <div key={detail.label} style={detailItemStyle}>
                    <p style={detailLabelStyle}>{detail.label}</p>
                    <p style={detailValueStyle}>{detail.value}</p>
                  </div>
                ))}
              </div>

              {event.locationName ? (
                <div style={locationStyle}>
                  <p style={detailLabelStyle}>Location</p>
                  <p style={detailValueStyle}>{event.locationName}</p>
                  {event.locationAddress ? (
                    <p style={locationAddressStyle}>{event.locationAddress}</p>
                  ) : null}
                </div>
              ) : null}

              <div style={ctaRowStyle}>
                {(event.registerActions ??
                  (event.registerHref
                    ? [{ href: event.registerHref, label: "Register now" }]
                    : [])
                ).map((action) => (
                  <CallToAction
                    key={action.href}
                    href={action.href}
                    variant={action.variant ?? "primary"}
                  >
                    {action.label}
                  </CallToAction>
                ))}
                <CallToAction
                  href={event.secondaryHref ?? "/contact"}
                  variant="secondary"
                >
                  {event.secondaryLabel ?? "Ask a question"}
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

const sessionCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 14,
  padding: "12px 14px",
  background: "var(--panel)",
};

const sessionEyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const sessionTitleStyle: React.CSSProperties = {
  margin: "8px 0 4px",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: 1.2,
  color: "var(--navy)",
};

const sessionAudienceStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 15,
  fontWeight: 700,
  color: "var(--accent2)",
};

const sessionTimeStyle: React.CSSProperties = {
  margin: "8px 0 0",
  fontSize: 15,
  fontWeight: 700,
  color: "var(--navy)",
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
