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
        PSC Starters is a four-week Monday trial for athletes new to training,
        or returning after time away.
      </p>

      <div style={eventsStackStyle}>
        {upcomingEvents.map((event) => (
          <article
            key={event.id}
            className={`upcoming-event-card${
              event.imageSrc ? "" : " upcoming-event-card--text"
            }`}
          >
            {event.imageSrc ? (
              <div className="upcoming-event-card__poster">
                <img
                  src={event.imageSrc}
                  alt={event.imageAlt}
                  className="upcoming-event-card__image"
                />
              </div>
            ) : null}

            <div className="upcoming-event-card__content">
              <p style={eventTypeStyle}>{eventTypeLabels[event.type]}</p>
              <h3 style={eventTitleStyle}>{event.title}</h3>
              <p style={eventSubtitleStyle}>{event.subtitle}</p>

              {event.details.length > 0 ? (
                <dl style={detailsListStyle}>
                  {event.details.map((detail) => (
                    <div key={detail.label}>
                      <dt style={detailLabelStyle}>{detail.label}</dt>
                      <dd style={detailValueStyle}>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {event.locationName ? (
                <p style={locationStyle}>
                  {event.locationName}
                  {event.locationAddress ? ` · ${event.locationAddress}` : ""}
                </p>
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

              <div style={ctaColumnStyle}>
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

const detailsListStyle: React.CSSProperties = {
  margin: "16px 0 0",
  display: "grid",
  gap: 10,
};

const detailLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const detailValueStyle: React.CSSProperties = {
  margin: "2px 0 0",
  lineHeight: 1.6,
  color: "var(--navy)",
};

const locationStyle: React.CSSProperties = {
  margin: "14px 0 0",
  lineHeight: 1.6,
  color: "var(--navy)",
  opacity: 0.88,
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

const ctaColumnStyle: React.CSSProperties = {
  display: "grid",
  gap: 16,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};
