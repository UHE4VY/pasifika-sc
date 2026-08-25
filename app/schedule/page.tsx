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
            Pick drop-in Sundays or a {SCHOOL_YEAR_FLYER.monthlyPrice} month
            commitment, then check out in Gymdesk. Card payments go through
            Square. Classes are limited to 15 athletes.
          </p>

          <p style={scheduleNoteStyle}>
            {SCHOOL_YEAR_FLYER.startLabel} {SCHOOL_YEAR_FLYER.endLabel} at{" "}
            {SCHOOL_YEAR_FLYER.venueName}. Class dates match the Gymdesk
            calendar.
          </p>

          <div style={ctaRowStyle}>
            <CallToAction href={GYMDESK.bookingUrl} variant="primary">
              Book now
            </CallToAction>

            <CallToAction href="#book-sessions" variant="secondary">
              Pick dates and check out
            </CallToAction>

            <CallToAction href="/group-schedule" variant="secondary">
              View class schedule
            </CallToAction>

            <CallToAction href={GYMDESK.signupUrl} variant="waiver">
              Sign waiver and register
            </CallToAction>
          </div>
        </section>

        <ScheduleBooking />

        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Sunday group classes</h2>
          <p style={panelBodyStyle}>
            Middle School (Coed) is 4:00–5:30 PM. High School (Girls only) is
            5:30–7:00 PM. Book the sessions you want in Gymdesk — several
            drop-ins or a month commitment — and we will see the roster for
            each class.
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
  maxWidth: 720,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const scheduleNoteStyle: React.CSSProperties = {
  margin: "14px auto 0",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.9,
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
  margin: "0 auto",
  maxWidth: 680,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
};
