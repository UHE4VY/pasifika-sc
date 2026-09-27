"use client";

import { useMemo, useState } from "react";
import CallToAction from "./CallToAction";
import { GROUP_SCHEDULE_MONTHS } from "../content/groupSchedule";
import {
  GYMDESK,
  getUpcomingGymdeskDatesForMonth,
  type GymdeskClassId,
  type GymdeskPlan,
} from "../content/gymdesk";
import { WAIVER_HREF } from "../content/schoolYearGroupClasses";

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

export default function ScheduleBooking() {
  const [waiverDone, setWaiverDone] = useState(false);
  const [classId, setClassId] = useState<GymdeskClassId>("middle-school");
  const [plan, setPlan] = useState<GymdeskPlan>("drop-in");
  const [month, setMonth] = useState(9);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [athleteName, setAthleteName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const monthDates = useMemo(
    () => getUpcomingGymdeskDatesForMonth(month),
    [month]
  );
  const selectedCount = selectedDates.length;
  const dropInTotal = selectedCount * GYMDESK.dropInPrice;
  const fourSessionReady =
    plan === "drop-in" || selectedCount === GYMDESK.monthlySessionCount;
  const trimmedAthleteName = athleteName.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const phoneOk = trimmedPhone.replace(/\D/g, "").length >= 10;
  const canCheckout =
    waiverDone &&
    trimmedAthleteName.length > 0 &&
    trimmedEmail.includes("@") &&
    phoneOk &&
    selectedCount > 0 &&
    fourSessionReady;

  function choosePlan(nextPlan: GymdeskPlan) {
    setPlan(nextPlan);
    if (nextPlan === "monthly") {
      setSelectedDates((current) =>
        current.slice(0, GYMDESK.monthlySessionCount)
      );
    }
  }

  function toggleDate(dateKey: string) {
    setSelectedDates((current) => {
      if (current.includes(dateKey)) {
        return current.filter((date) => date !== dateKey);
      }

      if (
        plan === "monthly" &&
        current.length >= GYMDESK.monthlySessionCount
      ) {
        return current;
      }

      return [...current, dateKey].sort();
    });
  }

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
          phone: trimmedPhone,
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
    <section
      id="book-sessions"
      className="schedule-booking-panel"
      style={panelStyle}
    >
      <h2 style={sectionTitleStyle}>Book and pay</h2>
      <p style={panelBodyStyle}>
        A drop-in is ${GYMDESK.dropInPrice}. Pay ${GYMDESK.monthlyPrice} and
        choose any {GYMDESK.monthlySessionCount} Sundays. No class on November
        1 or November 29.
      </p>

      <ol className="booking-steps" style={stepsStyle}>
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
          <strong>2. Choose class, plan, and Sundays</strong>
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
                  onChange={() => choosePlan("drop-in")}
                />
                <span>Drop-in · ${GYMDESK.dropInPrice} each</span>
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
                  onChange={() => choosePlan("monthly")}
                />
                <span>
                  {GYMDESK.monthlySessionCount} sessions · $
                  {GYMDESK.monthlyPrice}
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
                  onClick={() => setMonth(option.month)}
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
              <p style={panelBodyStyle}>No remaining Sundays this month.</p>
            ) : (
              <div className="september-session-picker">
                {monthDates.map((dateKey) => {
                  const checked = selectedDates.includes(dateKey);
                  const locked =
                    plan === "monthly" &&
                    !checked &&
                    selectedCount >= GYMDESK.monthlySessionCount;
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
                        disabled={locked}
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
          <strong>3. Pay</strong>
          <p style={{ ...panelBodyStyle, textAlign: "left", margin: "8px 0 0" }}>
            {!waiverDone
              ? "Sign the training waiver to unlock booking."
              : selectedCount === 0
                ? "Select the Sundays you want."
                : plan === "monthly" &&
                    selectedCount !== GYMDESK.monthlySessionCount
                  ? `Choose ${GYMDESK.monthlySessionCount} Sundays. You have ${selectedCount} selected.`
                  : !trimmedAthleteName
                    ? "Enter the athlete’s name."
                    : !trimmedEmail.includes("@")
                      ? "Enter the parent email."
                      : !phoneOk
                        ? "Enter a phone number."
                        : plan === "monthly"
                          ? `${trimmedAthleteName} · ${selectedCount} Sundays · $${GYMDESK.monthlyPrice}.`
                          : `${trimmedAthleteName} · ${selectedCount} Sunday${
                              selectedCount === 1 ? "" : "s"
                            } · $${dropInTotal}.`}
          </p>
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
                  ? "Opening checkout…"
                  : plan === "monthly"
                    ? `Pay $${GYMDESK.monthlyPrice}`
                    : `Pay $${dropInTotal}`}
              </button>
            ) : (
              <button
                type="button"
                disabled
                style={{ ...primaryButtonStyle, opacity: 0.55, cursor: "not-allowed" }}
              >
                Finish booking details
              </button>
            )}
          </div>
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
