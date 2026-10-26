"use client";

import React from "react";
import CallToAction from "../../../components/CallToAction";
import ClassFacts from "../../../components/ClassFacts";
import ClassPaymentOptions from "../../../components/ClassPaymentOptions";
import { SCHOOL_YEAR_FLYER } from "../../../content/schoolYearGroupClasses";

export default function YouthPerformancePage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Training Program</p>
        <h1 style={titleStyle}>Group Performance Training</h1>
        <p style={subtitleStyle}>
          Coach-led Sunday sessions for speed, strength, and movement quality.
        </p>

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

          <ClassFacts />
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
            <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.tryFirstNote}</p>
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
        <p style={cardBodyStyle}>{SCHOOL_YEAR_FLYER.tryFirstNote}</p>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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

