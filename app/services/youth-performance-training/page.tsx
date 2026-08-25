"use client";

import React from "react";
import CallToAction from "../../../components/CallToAction";
import ClassPaymentOptions from "../../../components/ClassPaymentOptions";
import {
  BOOK_SESSIONS_HREF,
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  WAIVER_HREF,
  getSessionCtas,
} from "../../../content/schoolYearGroupClasses";

export default function YouthPerformancePage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Training Program</p>
        <h1 style={titleStyle}>Group Performance Training</h1>
        <p style={subtitleStyle}>
          Coach-led Sunday sessions for speed, strength, and movement quality.
        </p>

        <div style={ctaRowStyle}>
          <CallToAction href={BOOK_SESSIONS_HREF} variant="primary">
            Book and pay
          </CallToAction>
          <CallToAction href={WAIVER_HREF} variant="waiver">
            Sign waiver
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
              {SCHOOL_YEAR_FLYER.venueName}
              <br />
              {SCHOOL_YEAR_FLYER.venueAddress}
            </p>
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
                {SCHOOL_YEAR_FLYER.monthlyPrice} for{" "}
                {SCHOOL_YEAR_FLYER.monthlyDetail}
              </p>
              <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.siblingDiscount}</p>
            </div>
          </div>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>How to join</h2>
        <ClassPaymentOptions />
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Program Availability</h2>

        <p style={cardBodyStyle}>
          Group Performance Training runs Sundays through the school year.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Try September first</h3>
            <p style={cardBodyStyle}>
              Drop in for a few Sundays before joining the monthly plan.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited Class Size</h3>
            <p style={cardBodyStyle}>
              Groups are capped at 15 athletes so coaching stays sharp.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Best Fit First</h3>
            <p style={cardBodyStyle}>
              Drop-in to try the class, or book a consultation if you want help
              choosing a plan.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>School-Year Pricing</h3>
            <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.priceSummary}.</p>
          </div>
        </div>
      </section>

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>What Parents Can Expect</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Intentional Coaching</h3>
            <p style={cardBodyStyle}>
              Sessions are structured and outcome-driven — not random workouts.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited Group Sizes</h3>
            <p style={cardBodyStyle}>
              With a max of 15 athletes, each participant gets real feedback.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>A Clear Development Path</h3>
            <p style={cardBodyStyle}>
              Athletes progress through movement quality, strength, and long-term
              athletic development.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={panelStyle}>
        <h2 style={sectionTitleStyle}>Ready to Get Started?</h2>
        <p style={cardBodyStyle}>
          Sign the waiver, pick your Sundays, and pay once on Square. We add
          your athlete to the Gymdesk roster automatically after payment.
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
          <CallToAction href={BOOK_SESSIONS_HREF} variant="primary">
            Book and pay
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
  maxWidth: 560,
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
