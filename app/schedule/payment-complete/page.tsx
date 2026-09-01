import Link from "next/link";
import { GYMDESK, type GymdeskClassId, type GymdeskPlan } from "../../../content/gymdesk";
import { BOOK_SESSIONS_HREF } from "../../../content/schoolYearGroupClasses";
import {
  getRosterWebhookUrl,
  rosterAthleteOnGymdesk,
} from "../../../lib/gymdesk/roster";

type SearchParams = {
  class?: string;
  plan?: string;
  dates?: string;
  athlete?: string;
  email?: string;
  orderId?: string;
  order_id?: string;
};

function formatDateLabel(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  if (!year || !month || !day) return dateKey;
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function isClassId(value: string | undefined): value is GymdeskClassId {
  return value === "middle-school" || value === "high-school";
}

function isPlan(value: string | undefined): value is GymdeskPlan {
  return value === "drop-in" || value === "monthly";
}

export default async function PaymentCompletePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const classId = isClassId(params.class) ? params.class : null;
  const plan = isPlan(params.plan) ? params.plan : null;
  const athlete = params.athlete?.trim() || null;
  const email = params.email?.trim().toLowerCase() || null;
  const orderId =
    params.orderId?.trim() || params.order_id?.trim() || undefined;
  const dates = (params.dates || "")
    .split(",")
    .map((date) => date.trim())
    .filter(Boolean);

  const schedule = classId ? GYMDESK.schedules[classId] : null;
  const hasBookingSummary = Boolean(schedule && dates.length > 0 && athlete && email);

  let rosterMessage =
    "If Square confirmed your payment, you’re all set. We’ll add your athlete to the Gymdesk class roster for those Sundays.";

  const rosterWebhookConfigured = Boolean(getRosterWebhookUrl());

  if (hasBookingSummary && classId && plan && athlete && email) {
    if (rosterWebhookConfigured) {
      const roster = await rosterAthleteOnGymdesk({
        athleteName: athlete,
        email,
        classId,
        plan,
        selectedDates: dates,
        orderId,
      });

      if (roster.ok) {
        rosterMessage =
          "Payment received and your athlete was added to the Gymdesk class roster for the Sundays below. You’re done — no second booking step.";
      } else {
        rosterMessage =
          "Payment received. We’re finishing the Gymdesk roster update — if a Sunday is missing, contact us and we’ll fix it from your Square receipt.";
        console.error("payment-complete roster errors:", roster.errors);
      }
    } else {
      rosterMessage =
        "Payment received. Auto-roster isn’t connected yet — we’ll add your athlete to the Gymdesk roster from this booking.";
    }
  }

  return (
    <main style={pageStyle}>
      <section style={panelStyle}>
        <p style={eyebrowStyle}>Payment</p>
        <h1 style={titleStyle}>You’re booked</h1>
        <p style={bodyStyle}>{rosterMessage}</p>

        {hasBookingSummary ? (
          <div style={summaryBoxStyle}>
            {athlete ? <p style={summaryLineStyle}>Athlete: {athlete}</p> : null}
            {email ? <p style={summaryLineStyle}>Email: {email}</p> : null}
            {schedule ? (
              <p style={summaryLineStyle}>
                {schedule.title} ({schedule.audience}) · {schedule.startTime}–
                {schedule.endTime}
              </p>
            ) : null}
            {plan ? (
              <p style={summaryLineStyle}>
                {plan === "monthly" ? "Monthly plan" : "Drop-in"}
              </p>
            ) : null}
            <ul style={dateListStyle}>
              {dates.map((dateKey) => (
                <li key={dateKey}>{formatDateLabel(dateKey)}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div style={ctaRowStyle}>
          <Link href={BOOK_SESSIONS_HREF} style={primaryLinkStyle}>
            Back to schedule
          </Link>
          <a
            href={GYMDESK.loginUrl}
            style={secondaryLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Member login
          </a>
        </div>
      </section>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "48px 16px 64px",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "32px 20px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  textAlign: "center",
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 12px",
  fontSize: 32,
  color: "var(--navy)",
};

const bodyStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 520,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
};

const summaryBoxStyle: React.CSSProperties = {
  margin: "20px auto 0",
  maxWidth: 420,
  padding: "16px 18px",
  borderRadius: 14,
  border: "1px solid var(--border)",
  background: "var(--panel2)",
  textAlign: "left",
};

const summaryLineStyle: React.CSSProperties = {
  margin: "0 0 8px",
  color: "var(--navy)",
  fontWeight: 700,
  lineHeight: 1.5,
};

const dateListStyle: React.CSSProperties = {
  margin: "10px 0 0",
  paddingLeft: 18,
  color: "var(--navy)",
  lineHeight: 1.7,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 22,
};

const primaryLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
  color: "#ffffff",
  border: "1px solid #1f6feb",
  background: "#1f6feb",
  boxShadow: "0 8px 20px rgba(31,111,235,0.22)",
};

const secondaryLinkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
  color: "#0b1f3a",
  border: "1px solid #e6e1d8",
  background: "#ffffff",
};
