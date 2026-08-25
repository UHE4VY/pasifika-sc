"use client";

import { useMemo, useState } from "react";
import CallToAction from "./CallToAction";
import { GROUP_SCHEDULE_MONTHS } from "../content/groupSchedule";
import {
  GYMDESK,
  getGymdeskBookUrl,
  getGymdeskDatesForMonth,
  getMonthlyCheckoutUrl,
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
  if (plan === "monthly") return dates.slice(0, GYMDESK.monthlySessionCount);
  return dates;
}

export default function ScheduleBooking() {
  const [classId, setClassId] = useState<GymdeskClassId>("middle-school");
  const [plan, setPlan] = useState<GymdeskPlan>("drop-in");
  const [month, setMonth] = useState(9);
  const [selectedDates, setSelectedDates] = useState<string[]>(() =>
    defaultDatesForPlan(9, "drop-in")
  );

  const monthDates = useMemo(() => getGymdeskDatesForMonth(month), [month]);
  const selectedCount = selectedDates.length;
  const dropInTotal = selectedCount * GYMDESK.dropInPrice;
  const monthlyHref = getMonthlyCheckoutUrl(classId);
  const firstDate = selectedDates[0];
  const firstBookHref = firstDate
    ? getGymdeskBookUrl({ classId, date: firstDate })
    : getGymdeskBookUrl({ classId });
  const remainingDates = selectedDates.slice(1);
  const schedule = GYMDESK.schedules[classId];
  const monthlyUsesGymdesk = Boolean(schedule.monthlyOption);

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
      <h2 style={sectionTitleStyle}>Choose sessions and check out</h2>
      <p style={panelBodyStyle}>
        Dates match Gymdesk: {SCHOOL_YEAR_FLYER.startLabel}{" "}
        {SCHOOL_YEAR_FLYER.endLabel}. Pick drop-ins or a month commitment, then
        check out in Gymdesk. Card payments go through Square.
      </p>

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>Plan</legend>
        <div className="schedule-plan-toggle">
          <label
            className={`schedule-plan-toggle__option${
              plan === "drop-in" ? " schedule-plan-toggle__option--selected" : ""
            }`}
          >
            <input
              type="radio"
              name="schedule-plan"
              value="drop-in"
              checked={plan === "drop-in"}
              onChange={() => applyPlanAndMonth("drop-in", month)}
            />
            <span>
              Drop-in · {SCHOOL_YEAR_FLYER.dropInPrice} each
            </span>
          </label>
          <label
            className={`schedule-plan-toggle__option${
              plan === "monthly" ? " schedule-plan-toggle__option--selected" : ""
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

      <fieldset style={fieldsetStyle}>
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

      <fieldset style={fieldsetStyle}>
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

      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>
          {plan === "monthly"
            ? `Choose ${GYMDESK.monthlySessionCount} Sundays`
            : "Choose Sundays"}
        </legend>
        <div className="september-session-picker">
          {monthDates.map((dateKey) => {
            const checked = selectedDates.includes(dateKey);
            return (
              <label
                key={dateKey}
                className={`september-session-picker__date${
                  checked ? " september-session-picker__date--selected" : ""
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
      </fieldset>

      <div style={summaryStyle}>
        {selectedCount === 0 ? (
          <p style={panelBodyStyle}>
            Select at least one Sunday to continue to checkout.
          </p>
        ) : plan === "monthly" ? (
          <p style={panelBodyStyle}>
            {selectedCount} Sunday{selectedCount === 1 ? "" : "s"} selected.
            Month commitment is ${GYMDESK.monthlyPrice} for{" "}
            {GYMDESK.monthlySessionCount} sessions
            {selectedCount === GYMDESK.monthlySessionCount
              ? " — one checkout."
              : `. Select ${GYMDESK.monthlySessionCount} dates, or switch to drop-in.`}
            {monthlyUsesGymdesk
              ? ` In Gymdesk, choose ${schedule.monthlyOption}.`
              : " Middle School monthly still checks out with Square until the $150 option is added in Gymdesk."}
          </p>
        ) : (
          <p style={panelBodyStyle}>
            {selectedCount} Sunday{selectedCount === 1 ? "" : "s"} selected · $
            {dropInTotal} drop-in. Gymdesk checks out one Sunday at a time;
            use the list below for each date.
          </p>
        )}
      </div>

      {selectedCount > 0 && plan === "drop-in" ? (
        <div className="september-session-checkout">
          {selectedDates.map((dateKey) => (
            <CallToAction
              key={dateKey}
              href={getGymdeskBookUrl({ classId, date: dateKey })}
              variant="primary"
            >
              Checkout {formatDateLabel(dateKey)} · {SCHOOL_YEAR_FLYER.dropInPrice}
            </CallToAction>
          ))}
        </div>
      ) : null}

      {selectedCount > 0 && plan === "monthly" ? (
        <>
          <div style={ctaRowStyle}>
            <CallToAction href={monthlyHref} variant="primary">
              Checkout month commitment · ${GYMDESK.monthlyPrice}
            </CallToAction>
            <CallToAction href={GYMDESK.signupUrl} variant="secondary">
              Sign waiver and register
            </CallToAction>
          </div>
          {remainingDates.length > 0 ? (
            <p style={remainingStyle}>
              After checkout, reserve the rest of the month in Gymdesk:
            </p>
          ) : null}
          <div className="september-session-checkout">
            {selectedDates.map((dateKey) => (
              <CallToAction
                key={dateKey}
                href={getGymdeskBookUrl({ classId, date: dateKey })}
                variant="secondary"
              >
                Reserve {formatDateLabel(dateKey)}
              </CallToAction>
            ))}
          </div>
        </>
      ) : null}

      {plan === "drop-in" && remainingDates.length > 0 && firstDate ? (
        <p style={remainingStyle}>
          Start with {formatDateLabel(firstDate)}, then check out the remaining
          Sundays from this list.
        </p>
      ) : null}

      {plan === "drop-in" && selectedCount > 0 ? (
        <div style={ctaRowStyle}>
          <CallToAction href={firstBookHref} variant="secondary">
            Open first date in Gymdesk
          </CallToAction>
          <CallToAction href={GYMDESK.signupUrl} variant="waiver">
            Sign waiver and register
          </CallToAction>
        </div>
      ) : null}
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

const fieldsetStyle: React.CSSProperties = {
  border: "none",
  margin: "18px 0 0",
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
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 16,
  justifyContent: "center",
};

const summaryStyle: React.CSSProperties = {
  marginTop: 16,
};

const remainingStyle: React.CSSProperties = {
  margin: "12px auto 0",
  maxWidth: 720,
  lineHeight: 1.6,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
  fontSize: 14,
};
