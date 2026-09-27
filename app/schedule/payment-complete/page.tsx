import Link from "next/link";
import { GYMDESK, type GymdeskClassId, type GymdeskPlan } from "../../../content/gymdesk";
import { BOOK_SESSIONS_HREF } from "../../../content/schoolYearGroupClasses";
import {
  CheckoutValidationError,
  validateCheckoutRequest,
} from "../../../lib/checkout/pricing";
import { rosterAthleteOnGymdesk } from "../../../lib/gymdesk/roster";
import { parseRosterPaymentNote } from "../../../lib/roster/payload";
import { getSquarePayment } from "../../../lib/square/client";

type SearchParams = {
  class?: string;
  plan?: string;
  dates?: string;
  athlete?: string;
  email?: string;
  phone?: string;
  orderId?: string;
  order_id?: string;
  transactionId?: string;
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

export default async function PaymentCompletePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const transactionId = params.transactionId?.trim() || "";

  let classId: GymdeskClassId | null = null;
  let plan: GymdeskPlan | null = null;
  let athlete: string | null = null;
  let email: string | null = null;
  let dates: string[] = [];
  let rosterMessage =
    "Choose a class on the schedule, then pay $45 per Sunday or $150 for any 4 Sundays.";

  if (transactionId) {
    try {
      const payment = await getSquarePayment(transactionId);

      if (payment.status !== "COMPLETED") {
        rosterMessage =
          "Square has not confirmed this payment, so nothing was booked.";
      } else {
        const parsed = parseRosterPaymentNote(payment.note);
        if (!parsed?.phone) {
          rosterMessage =
            "Payment received, but the booking details were missing. Contact us with your Square receipt.";
        } else {
          const checkout = validateCheckoutRequest(parsed);
          const roster = await rosterAthleteOnGymdesk({
            ...checkout,
            orderId: payment.order_id || payment.id,
          });

          classId = checkout.classId;
          plan = checkout.plan;
          athlete = checkout.athleteName;
          email = checkout.email;
          dates = checkout.selectedDates;
          rosterMessage = roster.ok
            ? "Payment received. Your athlete is booked for the Sundays below."
            : "Payment received. If a Sunday is missing from Gymdesk, contact us with your Square receipt.";

          if (!roster.ok) {
            console.error("payment-complete roster errors:", roster.errors);
          }
        }
      }
    } catch (error) {
      if (!(error instanceof CheckoutValidationError)) {
        console.error("payment-complete confirmation error:", error);
      }
      rosterMessage =
        "We couldn't confirm this Square payment, so nothing was booked. Contact us with your receipt if you were charged.";
    }
  }

  const schedule = classId ? GYMDESK.schedules[classId] : null;
  const hasBookingSummary = Boolean(
    schedule && dates.length > 0 && athlete && email
  );

  return (
    <main style={pageStyle}>
      <section style={panelStyle}>
        <p style={eyebrowStyle}>Payment</p>
        <h1 style={titleStyle}>
          {hasBookingSummary ? "You’re booked" : "Book a session"}
        </h1>
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
                {plan === "monthly" ? "4 sessions · $150" : "Drop-in"}
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
