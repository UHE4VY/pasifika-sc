"use client";

import { useState } from "react";
import CallToAction from "./CallToAction";
import {
  GYMDESK,
  isStartersSignupOpen,
} from "../content/gymdesk";
import { WAIVER_HREF } from "../content/schoolYearGroupClasses";
import {
  STARTERS_FLYER,
  STARTERS_SIBLING_NOTE,
} from "../content/upcomingEvents";

const STARTER_DATES = [...GYMDESK.starters.dates];

function formatDateLabel(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function StartersBooking() {
  const signupOpen = isStartersSignupOpen();
  const [waiverDone, setWaiverDone] = useState(false);
  const [siblingDiscount, setSiblingDiscount] = useState(false);
  const [athleteName, setAthleteName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const trimmedAthleteName = athleteName.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const phoneOk = trimmedPhone.replace(/\D/g, "").length >= 10;
  const total = siblingDiscount ? 153 : 180;
  const canCheckout =
    signupOpen &&
    waiverDone &&
    trimmedAthleteName.length > 0 &&
    trimmedEmail.includes("@") &&
    phoneOk;

  async function startCheckout() {
    if (!canCheckout || isPaying) return;

    setIsPaying(true);
    setPayError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classId: "psc-starters",
          plan: "drop-in",
          selectedDates: STARTER_DATES,
          athleteName: trimmedAthleteName,
          email: trimmedEmail,
          phone: trimmedPhone,
          siblingDiscount,
        }),
      });

      const data = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setPayError(
        error instanceof Error ? error.message : "Unable to start checkout."
      );
      setIsPaying(false);
    }
  }

  return (
    <section id="psc-starters" style={panelStyle}>
      <img
        src={STARTERS_FLYER.imageSrc}
        alt={STARTERS_FLYER.imageAlt}
        className="starters-flyer"
      />
      <h2 style={sectionTitleStyle}>PSC Starters</h2>
      <p style={panelBodyStyle}>{STARTERS_SIBLING_NOTE}</p>
      <p style={panelBodyStyle}>
        A four-week trial for youth athletes who are new to training, or
        coming back after 6 or more weeks away. Sessions rebuild fundamentals
        for sport and for future PSC programs. Two coaches are on the floor.
        Classes need at least 10 athletes and are capped at 15.
      </p>
      <p style={panelBodyStyle}>
        Mondays, 7:30–9:00 PM. Athletes commit to all four weeks and pay $180
        ahead of November 23. Reserve a spot by November 19.
      </p>

      <ul style={dateListStyle}>
        {STARTER_DATES.map((dateKey) => (
          <li key={dateKey}>{formatDateLabel(dateKey)}</li>
        ))}
      </ul>

      {signupOpen ? (
        <ol style={stepsStyle}>
          <li style={stepStyle}>
            <strong>1. Sign training waiver</strong>
            <div style={ctaRowStyle}>
              <CallToAction href={WAIVER_HREF} variant="waiver">
                Sign training waiver
              </CallToAction>
            </div>
            <label style={choiceStyle}>
              <input
                type="checkbox"
                checked={waiverDone}
                onChange={(event) => setWaiverDone(event.target.checked)}
              />
              <span>I signed the training waiver</span>
            </label>
          </li>

          <li
            style={{
              ...stepStyle,
              opacity: waiverDone ? 1 : 0.45,
              pointerEvents: waiverDone ? "auto" : "none",
            }}
          >
            <strong>2. Athlete details</strong>
            <fieldset style={fieldsetStyle} disabled={!waiverDone}>
              <legend style={legendStyle}>Athlete name</legend>
              <input
                type="text"
                value={athleteName}
                onChange={(event) => setAthleteName(event.target.value)}
                placeholder="First and last name"
                autoComplete="name"
                style={inputStyle}
              />
            </fieldset>
            <fieldset style={fieldsetStyle} disabled={!waiverDone}>
              <legend style={legendStyle}>Parent email</legend>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="parent@email.com"
                autoComplete="email"
                style={inputStyle}
              />
            </fieldset>
            <fieldset style={fieldsetStyle} disabled={!waiverDone}>
              <legend style={legendStyle}>Phone</legend>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="(650) 555-0100"
                autoComplete="tel"
                style={inputStyle}
              />
            </fieldset>
            <label style={choiceStyle}>
              <input
                type="checkbox"
                checked={siblingDiscount}
                onChange={(event) => setSiblingDiscount(event.target.checked)}
              />
              <span>A sibling is also enrolled in PSC Starters (15% off)</span>
            </label>
          </li>

          <li
            style={{
              ...stepStyle,
              opacity: waiverDone ? 1 : 0.45,
              pointerEvents: waiverDone ? "auto" : "none",
            }}
          >
            <strong>3. Pay for all four weeks</strong>
            <p style={{ ...panelBodyStyle, textAlign: "left", margin: "8px 0 0" }}>
              {canCheckout
                ? `${trimmedAthleteName} · 4 Mondays · $${total}.`
                : "Sign the waiver and enter the athlete details to pay."}
            </p>
            {payError ? <p style={errorStyle}>{payError}</p> : null}
            <div style={ctaRowStyle}>
              <button
                type="button"
                onClick={startCheckout}
                disabled={!canCheckout || isPaying}
                style={{
                  ...primaryButtonStyle,
                  opacity: !canCheckout || isPaying ? 0.55 : 1,
                  cursor: !canCheckout ? "not-allowed" : isPaying ? "wait" : "pointer",
                }}
              >
                {isPaying ? "Opening checkout…" : `Pay $${total}`}
              </button>
            </div>
          </li>
        </ol>
      ) : (
        <p style={panelBodyStyle}>
          Signup for this trial closed on November 19.
        </p>
      )}
    </section>
  );
}

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  marginTop: 22,
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 12,
  fontSize: 20,
  color: "var(--navy)",
  textAlign: "center",
};

const panelBodyStyle: React.CSSProperties = {
  margin: "0 auto 10px",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const dateListStyle: React.CSSProperties = {
  margin: "8px auto 0",
  maxWidth: 420,
  paddingLeft: 20,
  lineHeight: 1.7,
  color: "var(--navy)",
  fontWeight: 700,
};

const stepsStyle: React.CSSProperties = {
  listStyle: "none",
  margin: "18px 0 0",
  padding: 0,
  display: "grid",
  gap: 18,
};

const stepStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
  color: "var(--navy)",
};

const fieldsetStyle: React.CSSProperties = {
  border: "none",
  margin: "14px 0 0",
  padding: 0,
};

const legendStyle: React.CSSProperties = {
  fontWeight: 800,
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "12px 14px",
  font: "inherit",
  color: "var(--navy)",
  background: "#fff",
};

const choiceStyle: React.CSSProperties = {
  display: "flex",
  gap: 10,
  alignItems: "flex-start",
  marginTop: 14,
  fontWeight: 700,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 12,
};

const primaryButtonStyle: React.CSSProperties = {
  border: "none",
  borderRadius: 999,
  padding: "12px 18px",
  background: "var(--accent)",
  color: "#fff",
  fontWeight: 800,
  font: "inherit",
};

const errorStyle: React.CSSProperties = {
  margin: "10px 0 0",
  color: "#9f1239",
  fontWeight: 700,
};
