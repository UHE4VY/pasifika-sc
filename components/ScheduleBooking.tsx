"use client";

import { useMemo, useState } from "react";
import CallToAction from "./CallToAction";
import { GROUP_SCHEDULE_MONTHS } from "../content/groupSchedule";
import {
  GYMDESK,
  getGymdeskDatesForMonth,
  type GymdeskClassId,
  type GymdeskPlan,
} from "../content/gymdesk";
import { SCHOOL_YEAR_FLYER } from "../content/schoolYearGroupClasses";

const CLASS_OPTIONS: { id: GymdeskClassId; label: string }[] = [
  {
    id: "middle-school",
    label: `${GYMDESK.schedules["middle-school"].title} (${GYMDESK.schedules["middle-school"].audience}) · ${GYMDESK.schedules["middle-school"].startTime}–${GYMDESK.schedules["middle-school"].endTime}`,
  },
  {
    id: "high-school",
    label: `${GYMDESK.schedules["high-school"].title} (${GYMDESK.schedules["high-school"].audience}) · ${GYMDESK.schedules["high-school"].startTime}–${GYMDESK.schedules["high-school"].endTime}`,
  },
];

function formatDateLabel(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function defaultDatesForPlan(month: number, plan: GymdeskPlan) {
  const dates = getGymdeskDatesForMonth(month);
  if (plan === "monthly") {
    return dates.slice(0, Math.min(GYMDESK.monthlySessionCount, dates.length));
  }
  return [];
}

export default function ScheduleBooking() {
  const [waiverDone, setWaiverDone] = useState(false);
  const [classId, setClassId] = useState<GymdeskClassId>("middle-school");
  const [plan, setPlan] = useState<GymdeskPlan>("drop-in");
  const [month, setMonth] = useState(9);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [athleteName, setAthleteName] = useState("");
  const [email, setEmail] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const monthDates = useMemo(() => getGymdeskDatesForMonth(month), [month]);
  const selectedCount = selectedDates.length;
  const dropInTotal = selectedCount * GYMDESK.dropInPrice;
  const trimmedAthleteName = athleteName.trim();
  const trimmedEmail = email.trim();
  const canCheckout =
    waiverDone &&
    trimmedAthleteName.length > 0 &&
    trimmedEmail.includes("@") &&
    selectedCount > 0 &&
    (plan === "drop-in" || selectedCount === GYMDESK.monthlySessionCount);

  async function startCheckout() {
    if (!canCheckout || isPaying) return;

    setIsPaying(true);
    setPayError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classId,
          plan,
          selectedDates,
          athleteName: trimmedAthleteName,
          email: trimmedEmail,
        }),
      });

      const data = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Unable to start Square checkout.");
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setPayError(
        error instanceof Error ? error.message : "Unable to start Square checkout."
      );
      setIsPaying(false);
    }
  }

  function applyPlanAndMonth(nextPlan: GymdeskPlan, nextMonth: number) {
    setPlan(nextPlan);
    setMonth(nextMonth);
    setSelectedDates(defaultDatesForPlan(nextMonth, nextPlan));
  }

  function toggleDate(dateKey: string) {
    setSelectedDates((current) => {
      if (current.includes(dateKey)) {
        return current.filter((date) => date !== dateKey);
      }

      if (plan === "monthly" && current.length >= GYMDESK.monthlySessionCount) {
        return current;
      }

      return [...current, dateKey].sort();
    });
  }

  return (
    <section
      id="book-sessions"
      className="schedule-booking-panel"
      style={panelStyle}
    >
      <h2 style={sectionTitleStyle}>Book and pay</h2>
      <p style={panelBodyStyle}>
        Sign the waiver once, pick your Sundays here, and pay on Square. We
        automatically add your athlete to the Gymdesk class roster after
        payment. No class on November 1 or November 29.
      </p>

      <ol className="booking-steps" style={stepsStyle}>
        <li style={stepStyle}>
          <strong>1. Sign waiver</strong>
          <div style={ctaRowStyle}>
            <CallToAction href={GYMDESK.signupUrl} variant="waiver">
              Sign waiver and register
            </CallToAction>
          </div>
          <label style={choiceStyle}>
            <input
              type="checkbox"
              checked={waiverDone}
              onChange={(event) => setWaiverDone(event.target.checked)}
            />
            <span>I signed the waiver in Gymdesk</span>
          </label>
        </li>

        <li
          style={{
            ...stepStyle,
            opacity: waiverDone ? 1 : 0.45,
            pointerEvents: waiverDone ? "auto" : "none",
          }}
        >
          <strong>2. Choose athlete, class, month, and Sundays</strong>

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
            <legend style={legendStyle}>Plan</legend>
            <div className="schedule-plan-toggle">
              <label
                className={`schedule-plan-toggle__option${
                  plan === "drop-in"
                    ? " schedule-plan-toggle__option--selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="schedule-plan"
                  value="drop-in"
                  checked={plan === "drop-in"}
                  onChange={() => applyPlanAndMonth("drop-in", month)}
                />
                <span>Drop-in · {SCHOOL_YEAR_FLYER.dropInPrice} each</span>
              </label>
              <label
                className={`schedule-plan-toggle__option${
                  plan === "monthly"
                    ? " schedule-plan-toggle__option--selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="schedule-plan"
                  value="monthly"
                  checked={plan === "monthly"}
                  onChange={() => applyPlanAndMonth("monthly", month)}
                />
                <span>
                  Month commitment · {SCHOOL_YEAR_FLYER.monthlyPrice}
                </span>
              </label>
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle} disabled={!waiverDone}>
            <legend style={legendStyle}>Class</legend>
            <div style={classRowStyle}>
              {CLASS_OPTIONS.map((option) => (
                <label key={option.id} style={choiceStyle}>
                  <input
                    type="radio"
                    name="schedule-class"
                    value={option.id}
                    checked={classId === option.id}
                    onChange={() => setClassId(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle} disabled={!waiverDone}>
            <legend style={legendStyle}>Month</legend>
            <div className="schedule-month-toggle">
              {GROUP_SCHEDULE_MONTHS.map((option) => (
                <button
                  key={option.month}
                  type="button"
                  className={`schedule-month-toggle__option${
                    month === option.month
                      ? " schedule-month-toggle__option--selected"
                      : ""
                  }`}
                  onClick={() => applyPlanAndMonth(plan, option.month)}
                >
                  {option.label.replace(" 2026", "")}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset style={fieldsetStyle} disabled={!waiverDone}>
            <legend style={legendStyle}>
              {plan === "monthly"
                ? `Choose ${GYMDESK.monthlySessionCount} Sundays`
                : "Choose Sundays"}
            </legend>
            {monthDates.length === 0 ? (
              <p style={panelBodyStyle}>No open Sundays this month.</p>
            ) : (
              <div className="september-session-picker">
                {monthDates.map((dateKey) => {
                  const checked = selectedDates.includes(dateKey);
                  return (
                    <label
                      key={dateKey}
                      className={`september-session-picker__date${
                        checked
                          ? " september-session-picker__date--selected"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleDate(dateKey)}
                      />
                      <span>{formatDateLabel(dateKey)}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </fieldset>
        </li>

        <li
          style={{
            ...stepStyle,
            opacity: waiverDone ? 1 : 0.45,
            pointerEvents: waiverDone ? "auto" : "none",
          }}
        >
          <strong>3. Pay on Square</strong>
          <div style={summaryStyle}>
            {!waiverDone ? (
              <p style={panelBodyStyle}>Sign the waiver to unlock booking.</p>
            ) : selectedCount === 0 ? (
              <p style={panelBodyStyle}>
                Select the Sundays you want, then continue to Square.
              </p>
            ) : !trimmedAthleteName ? (
              <p style={panelBodyStyle}>
                Enter the athlete’s name so we can put them on the roster.
              </p>
            ) : !trimmedEmail.includes("@") ? (
              <p style={panelBodyStyle}>
                Enter the parent email used for Gymdesk registration.
              </p>
            ) : plan === "monthly" &&
              selectedCount !== GYMDESK.monthlySessionCount ? (
              <p style={panelBodyStyle}>
                Monthly is ${GYMDESK.monthlyPrice} for{" "}
                {GYMDESK.monthlySessionCount} Sundays. You have {selectedCount}{" "}
                selected
                {monthDates.length < GYMDESK.monthlySessionCount
                  ? ` (${monthDates.length} available this month — switch to drop-in or another month).`
                  : "."}
              </p>
            ) : plan === "monthly" ? (
              <p style={panelBodyStyle}>
                {trimmedAthleteName} · {selectedCount} Sundays · $
                {GYMDESK.monthlyPrice} on Square. After payment we add them to
                the Gymdesk roster automatically.
              </p>
            ) : (
              <p style={panelBodyStyle}>
                {trimmedAthleteName} · {selectedCount} Sunday
                {selectedCount === 1 ? "" : "s"} · ${dropInTotal} on Square.
                After payment we add them to the Gymdesk roster automatically.
              </p>
            )}
          </div>

          {payError ? <p style={errorStyle}>{payError}</p> : null}

          <div style={ctaRowStyle}>
            {canCheckout ? (
              <button
                type="button"
                onClick={startCheckout}
                disabled={isPaying}
                style={{
                  ...primaryButtonStyle,
                  opacity: isPaying ? 0.7 : 1,
                  cursor: isPaying ? "wait" : "pointer",
                }}
              >
                {isPaying
                  ? "Opening Square…"
                  : plan === "monthly"
                    ? `Pay $${GYMDESK.monthlyPrice} on Square`
                    : `Pay $${dropInTotal} on Square`}
              </button>
            ) : !waiverDone ? (
              <CallToAction href={GYMDESK.signupUrl} variant="primary">
                Sign waiver first
              </CallToAction>
            ) : (
              <button type="button" disabled style={{ ...primaryButtonStyle, opacity: 0.55, cursor: "not-allowed" }}>
                {!trimmedAthleteName
                  ? "Enter athlete name"
                  : !trimmedEmail.includes("@")
                    ? "Enter parent email"
                    : selectedCount === 0
                      ? "Select Sundays"
                      : "Finish selecting Sundays"}
              </button>
            )}
          </div>

          {canCheckout ? (
            <p style={remainingStyle}>
              Selected: {selectedDates.map(formatDateLabel).join("; ")}. You’re
              done after Square confirms payment.
            </p>
          ) : null}
        </li>
      </ol>
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
  margin: "0 auto",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
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
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
  marginBottom: 10,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 420,
  boxSizing: "border-box",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "#ffffff",
  color: "var(--navy)",
  fontSize: 15,
  fontWeight: 600,
};

const classRowStyle: React.CSSProperties = {
  display: "grid",
  gap: 10,
};

const choiceStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  lineHeight: 1.5,
  color: "var(--navy)",
  fontWeight: 600,
  marginTop: 12,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 12,
  justifyContent: "flex-start",
};

const summaryStyle: React.CSSProperties = {
  marginTop: 8,
};

const remainingStyle: React.CSSProperties = {
  margin: "12px 0 0",
  maxWidth: 720,
  lineHeight: 1.6,
  color: "var(--navy)",
  opacity: 0.88,
  fontSize: 14,
};

const primaryButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  backgroundColor: "#1f6feb",
  color: "#ffffff",
  border: "1px solid #1f6feb",
  boxShadow: "0 8px 20px rgba(31,111,235,0.22)",
};

const errorStyle: React.CSSProperties = {
  margin: "12px 0 0",
  maxWidth: 720,
  lineHeight: 1.6,
  color: "#b42318",
  fontSize: 14,
  fontWeight: 600,
};
