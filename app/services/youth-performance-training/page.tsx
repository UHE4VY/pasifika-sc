"use client";

import React from "react";
import CallToAction from "../../../components/CallToAction";
import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  getSessionCtas,
} from "../../../content/schoolYearGroupClasses";

export default function YouthPerformancePage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Training Program</p>
        <h1 style={titleStyle}>Group Performance Training</h1>
        <p style={subtitleStyle}>
          Structured, coach-led training for youth athletes who thrive in a
          competitive environment and want consistent progress in speed,
          strength, movement quality, and confidence.
        </p>

        <div style={ctaRowStyle}>
          {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
            getSessionCtas(session).map((action) => (
              <CallToAction
                key={action.href}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </CallToAction>
            ))
          )}
          <CallToAction href="/waiver" variant="secondary">
            Sign waiver
          </CallToAction>
          <CallToAction href="/group-schedule" variant="secondary">
            View class schedule
          </CallToAction>
          <CallToAction href="/schedule" variant="secondary">
            Book a consultation
          </CallToAction>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Early Registration</h2>
        <p style={cardBodyStyle}>
          {SCHOOL_YEAR_FLYER.headline} in our Sunday group classes.
        </p>

        <div className="early-registration-layout" style={{ marginTop: 18 }}>
          <img
            src={SCHOOL_YEAR_FLYER.imageSrc}
            alt={SCHOOL_YEAR_FLYER.imageAlt}
            className="early-registration-flyer"
          />

          <div>
            <p style={startLabelStyle}>{SCHOOL_YEAR_FLYER.startLabel}</p>
            <p style={{ ...cardBodyStyle, marginTop: 8 }}>
              {SCHOOL_YEAR_FLYER.duration}. Limited to 15 athletes per class.
            </p>

            <div className="early-registration-sessions">
              {SCHOOL_YEAR_SESSIONS.map((session) => (
                <div key={session.id} style={cardStyle}>
                  <p style={sessionEyebrowStyle}>
                    {session.id === "middle-school" ? "Session 1" : "Session 2"}
                  </p>
                  <h3 style={cardTitleStyle}>{session.title}</h3>
                  <p style={cardBodyStyle}>{session.audience}</p>
                  <p style={sessionTimeStyle}>
                    {session.startTime} – {session.endTime}
                  </p>
                  <div style={sessionCtaStyle}>
                    {getSessionCtas(session).map((action) => (
                      <CallToAction
                        key={action.href}
                        href={action.href}
                        variant={action.variant}
                      >
                        {action.label}
                      </CallToAction>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={pricingBoxStyle}>
              <p style={pricingLabelStyle}>Pricing</p>
              <p style={pricingValueStyle}>
                {SCHOOL_YEAR_FLYER.dropInPrice} drop-in
              </p>
              <p style={cardBodyStyle}>
                {SCHOOL_YEAR_FLYER.monthlyPrice} for {SCHOOL_YEAR_FLYER.monthlyDetail}
              </p>
              <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.siblingDiscount}</p>
            </div>

            <div style={{ ...ctaRowStyle, justifyContent: "flex-start" }}>
              <CallToAction href="/waiver" variant="secondary">
                Sign waiver
              </CallToAction>
              <CallToAction href="/group-schedule" variant="secondary">
                View class schedule
              </CallToAction>
            </div>
          </div>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Program Availability</h2>

        <p style={cardBodyStyle}>
          Group Performance Training is offered through Sunday group classes
          designed to keep athletes progressing through the school year.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Flexible Packages</h3>
            <p style={cardBodyStyle}>
              Choose a drop-in or a monthly package based on your athlete’s
              schedule, training goals, and level of support needed.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited Class Size</h3>
            <p style={cardBodyStyle}>
              Group sizes are limited to 15 athletes per class to keep coaching
              quality high.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Best Fit First</h3>
            <p style={cardBodyStyle}>
              We recommend starting with the athlete intake so we can guide
              families toward the right training option.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>School-Year Pricing</h3>
            <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.priceSummary}.</p>
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
            getSessionCtas(session).map((action) => (
              <CallToAction
                key={action.href}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </CallToAction>
            ))
          )}
          <CallToAction href="/schedule" variant="secondary">
            Book a consultation
          </CallToAction>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>What Parents Can Expect</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Intentional Coaching</h3>
            <p style={cardBodyStyle}>
              Sessions are structured and outcome-driven, ensuring athletes
              receive purposeful coaching rather than random workouts.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited Group Sizes</h3>
            <p style={cardBodyStyle}>
              With a maximum of 15 athletes per class, each participant receives
              meaningful feedback and accountability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>A Clear Development Path</h3>
            <p style={cardBodyStyle}>
              Athletes progress through a structured system focused on movement
              quality, strength and long-term athletic development.
            </p>
          </div>
        </div>

        <p style={launchNoteStyle}>
          Families can expect a professional environment with clear standards
          and measurable progress.
        </p>
      </section>

      <div style={dividerStyle} />

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to Get Started?</h2>
        <p style={cardBodyStyle}>
          Start with the athlete intake so we can understand your athlete’s
          goals. Parents must also complete the waiver before their athlete can
          train.
        </p>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
            getSessionCtas(session).map((action) => (
              <CallToAction
                key={action.href}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </CallToAction>
            ))
          )}
          <CallToAction href="/waiver" variant="secondary">
            Sign waiver
          </CallToAction>
          <CallToAction href="/services" variant="secondary">
            Back to services
          </CallToAction>
        </div>
      </section>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "40px 16px 56px",
};

const heroStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "26px 20px",
  background:
    "radial-gradient(700px 320px at 10% 0%, rgba(31,111,235,0.08), transparent 60%), var(--panel)",
  boxShadow: "0 10px 30px var(--shadow)",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 10px",
  fontSize: 38,
  lineHeight: 1.12,
  color: "var(--navy)",
  textAlign: "center",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 720,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
  justifyContent: "center",
  alignItems: "center",
};

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: "var(--border)",
  margin: "24px 2px",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  textAlign: "center",
  marginTop: 22,
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 16,
  fontSize: 20,
  color: "var(--navy)",
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "#ffffff",
  textAlign: "center",
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 16,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBodyStyle: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",
};

const launchNoteStyle: React.CSSProperties = {
  marginTop: 14,
  lineHeight: 1.65,
  opacity: 0.82,
  color: "var(--navy)",
};

const startLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 800,
  color: "var(--navy)",
};

const sessionEyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const sessionTimeStyle: React.CSSProperties = {
  margin: "10px 0 0",
  fontSize: 18,
  fontWeight: 800,
  color: "var(--navy)",
};

const sessionCtaStyle: React.CSSProperties = {
  marginTop: 14,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
};

const pricingBoxStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
  marginTop: 16,
  textAlign: "center",
};

const pricingLabelStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--muted)",
};

const pricingValueStyle: React.CSSProperties = {
  margin: "8px 0 4px",
  fontSize: 22,
  fontWeight: 800,
  color: "var(--navy)",
};
