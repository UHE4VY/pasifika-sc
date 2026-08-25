import CallToAction from "./CallToAction";
import {
  PAYMENT_OPTIONS,
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  getDropInCtas,
  getMonthlyCtas,
} from "../content/schoolYearGroupClasses";

export default function ClassPaymentOptions({
  id = "how-to-join",
}: {
  id?: string;
}) {
  return (
    <div id={id} className="class-payment-options">
      <p style={introStyle}>{SCHOOL_YEAR_FLYER.tryFirstNote}</p>

      <div className="class-payment-options__grid">
        <article style={cardStyle}>
          <p style={eyebrowStyle}>{PAYMENT_OPTIONS.dropIn.eyebrow}</p>
          <h3 style={titleStyle}>{PAYMENT_OPTIONS.dropIn.title}</h3>
          <p style={priceStyle}>{PAYMENT_OPTIONS.dropIn.price}</p>
          <p style={bodyStyle}>{PAYMENT_OPTIONS.dropIn.description}</p>
          <div style={ctaRowStyle}>
            {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
              getDropInCtas(session).map((action) => (
                <CallToAction
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </CallToAction>
              ))
            )}
          </div>
        </article>

        <article style={cardStyle}>
          <p style={eyebrowStyle}>{PAYMENT_OPTIONS.monthly.eyebrow}</p>
          <h3 style={titleStyle}>{PAYMENT_OPTIONS.monthly.title}</h3>
          <p style={priceStyle}>{PAYMENT_OPTIONS.monthly.price}</p>
          <p style={bodyStyle}>{PAYMENT_OPTIONS.monthly.description}</p>
          <div style={ctaRowStyle}>
            {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
              getMonthlyCtas(session).map((action) => (
                <CallToAction
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </CallToAction>
              ))
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

const introStyle: React.CSSProperties = {
  margin: "0 auto 18px",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "#ffffff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const titleStyle: React.CSSProperties = {
  margin: "8px 0 0",
  fontSize: 20,
  fontWeight: 800,
  color: "var(--navy)",
};

const priceStyle: React.CSSProperties = {
  margin: "8px 0 0",
  fontSize: 22,
  fontWeight: 800,
  color: "var(--navy)",
};

const bodyStyle: React.CSSProperties = {
  margin: "10px 0 0",
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 16,
};
