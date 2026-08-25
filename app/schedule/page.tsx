"use client";

import CallToAction from "../../components/CallToAction";
import ClassPaymentOptions from "../../components/ClassPaymentOptions";
import ScheduleBooking from "../../components/ScheduleBooking";
import { GYMDESK } from "../../content/gymdesk";
import { SCHOOL_YEAR_FLYER } from "../../content/schoolYearGroupClasses";
import PageViewTracker from "./PageViewTracker";

export default function SchedulePage() {
  return (
    <>
      <PageViewTracker page="/schedule" component="schedule_page" />

      <main style={pageStyle}>
        <section style={heroStyle}>
          <p style={eyebrowStyle}>Scheduling</p>
          <h1 style={titleStyle}>Book a session</h1>
          <p style={subtitleStyle}>
            Sign the waiver, pick your Sundays, and pay once on Square. We add
            your athlete to the Gymdesk roster automatically after payment.
          </p>

          <div style={ctaRowStyle}>
            <CallToAction href="#book-sessions" variant="primary">
              Book and pay
            </CallToAction>
          </div>
        </section>

        <ScheduleBooking />

        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Pricing</h2>
          <p style={panelBodyStyle}>
            Middle School (Coed) 4:00–5:30 PM · High School (Girls only)
            5:30–7:00 PM · {SCHOOL_YEAR_FLYER.priceSummary}
          </p>
          <ClassPaymentOptions />
          <div style={ctaRowStyle}>
            <CallToAction href={GYMDESK.loginUrl} variant="secondary">
              Member login
            </CallToAction>
          </div>
        </section>
      </main>
    </>
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
  padding: "40px 20px",
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
  marginBottom: 12,
  fontSize: 20,
  color: "var(--navy)",
};

const panelBodyStyle: React.CSSProperties = {
  margin: "0 auto 8px",
  maxWidth: 680,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
};
