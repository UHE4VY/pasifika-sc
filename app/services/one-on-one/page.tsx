"use client";

import React, { useState } from "react";
import CallToAction from "../../../components/CallToAction";
import { useAnalytics } from "@/hooks/useAnalytics";
import PageViewTracker from "@/app/schedule/PageViewTracker";

export default function OneOnOneServicePage() {
  const [showMore, setShowMore] = useState(false);
  const { trackEvent } = useAnalytics();

  return (
    <>
      <PageViewTracker page="/services/one-on-one" component="one_on_one_page" />

      <main style={pageStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <p style={eyebrowStyle}>Training Program</p>

          <h1 style={titleStyle}>1:1 Coaching</h1>

          <p style={subtitleStyle}>
            Fully individualized coaching for athletes who want faster feedback,
            targeted development, and a training plan built around their sport,
            body, and goals.
          </p>

          <div style={ctaRowStyle}>
            <CallToAction href="/intake" variant="primary">
              Start athlete intake
            </CallToAction>

            <CallToAction href="/schedule" variant="secondary">
              Book a consultation
            </CallToAction>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* TOP CARDS */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Why athletes choose 1:1 coaching</h2>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitle}>Real-time coaching</h3>
              <p style={cardBody}>
                Every rep gets coached. Adjustments happen immediately so
                technique, mechanics, and movement quality improve faster.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Fully customized sessions</h3>
              <ul style={cardList}>
                <li>Training built around your sport</li>
                <li>Adjustments for injuries or movement limitations</li>
                <li>Programming tailored to your goals</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Faster development</h3>
              <ul style={cardList}>
                <li>Strength and power improve faster</li>
                <li>Movement becomes more efficient</li>
                <li>Benchmarks evolve as you improve</li>
              </ul>
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* MORE GUIDANCE */}
        <div style={{ marginBottom: 18 }}>
          <button
            type="button"
            onClick={() => {
              const next = !showMore;

              trackEvent("cta_click", {
                component: "one_on_one_page",
                action: next ? "open_more_guidance" : "close_more_guidance",
                location: "one_on_one_more_guidance",
              });

              setShowMore(next);
            }}
            style={moreGuidanceBtn}
          >
            {showMore ? "Hide guidance" : "More guidance"}
          </button>

          <p style={{ marginTop: 8, opacity: 0.75, fontSize: 14 }}>
            {showMore
              ? "Extra clarity to help you decide if 1:1 is the best fit."
              : "Get extra clarity on when 1:1 coaching makes the most sense."}
          </p>
        </div>

        {/* REVEAL CARDS */}
        {showMore && (
          <section style={panelStyle}>
            <div style={gridStyle}>
              <div style={cardStyle}>
                <h3 style={cardTitle}>1:1 vs Small Group</h3>
                <p style={cardBody}>
                  Small Group provides structured coaching in a team setting.
                  1:1 gives you full customization and faster adjustments every
                  session.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>How to choose</h3>
                <p style={cardBody}>
                  Choose 1:1 if you want maximum coaching attention, have a
                  specific performance goal, or are managing pain or injury.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>You’re not late</h3>
                <p style={cardBody}>
                  The best time to build a strong base is now. We meet you where
                  you are and stack progress week after week.
                </p>
              </div>
            </div>
          </section>
        )}

        <div style={dividerStyle} />

       {/* NEW CLIENT SPECIAL */}
<section style={panelStyle}>
  <h2 style={sectionTitleStyle}>New Client Special</h2>

  <p style={pricingNoteStyle}>
    A simple entry point for athletes and families who want to experience 1:1
    coaching before committing to a longer-term training plan.
  </p>

  <div style={pricingGridStyle}>
    <div style={pricingCardFeaturedStyle}>
      <p style={pricingBadgeStyle}>New client special</p>

      <p style={pricingTierStyle}>5 Private Coaching Sessions</p>

      <h3 style={pricingPriceStyle}>
        $500<span style={pricingMonthStyle}> / 5 sessions</span>
      </h3>

      <p style={pricingFreqStyle}>$100 per session</p>

      <p style={pricingDescStyle}>
        Includes a free initial consultation so we can understand the athlete’s
        goals, training history, schedule, and best path forward.
      </p>

      <ul style={pricingListStyle}>
        <li>Free initial consultation</li>
        <li>5 private coaching sessions</li>
        <li>Movement and training needs review</li>
        <li>Individualized coaching recommendations</li>
        <li>Best for athletes getting started with 1:1 support</li>
        <li>Expires 90 days from purchase</li>
      </ul>

      <p style={pricingMiniNoteStyle}>
        Longer-term training options can be discussed after the consultation.
      </p>

      <div style={{ marginTop: 16 }}>
        <CallToAction
          href="/services/one-on-one/5-session-package"
          variant="primary"
        >
          Claim new client special
        </CallToAction>
      </div>
    </div>
  </div>
</section>

<div style={dividerStyle} />

{/* ADULT TRAINING */}
<section style={panelStyle}>
  <h2 style={sectionTitleStyle}>Adult training</h2>

  <p style={cardBody}>
    Adult clients are welcome. Pricing and package recommendations are discussed
    during the free consultation so we can match the plan to your goals,
    schedule, and level of support needed.
  </p>

  <div style={{ marginTop: 16 }}>
    <CallToAction href="/schedule" variant="secondary">
      Schedule free consultation
    </CallToAction>
  </div>
</section>

        {/* CTA */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Ready to get started?</h2>

          <p style={cardBody}>
            Start the athlete intake so we can understand your goals and guide
            you to the best package for your schedule and level of support.
          </p>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CallToAction href="/intake" variant="primary">
              Start athlete intake
            </CallToAction>

            <CallToAction href="/services" variant="secondary">
              Back to services
            </CallToAction>
          </div>
        </section>
      </main>
    </>
  );
}

/* styles */

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
  margin: "10px auto 10px",
  fontSize: 38,
  lineHeight: 1.12,
  color: "var(--navy)",
  textAlign: "center",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 760,
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

const dividerStyle: React.CSSProperties = {
  height: 1,
  background: "var(--border)",
  margin: "18px 2px",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 12,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 17,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBody: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",
};

const cardList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.9,
  opacity: 0.88,
  color: "var(--navy)",
  textAlign: "left",
};

const moreGuidanceBtn: React.CSSProperties = {
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--navy)",
  padding: "10px 14px",
  borderRadius: 12,
  cursor: "pointer",
};

const testimonialCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
};

const quoteStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.7,
  opacity: 0.9,
  textAlign: "center",
};

const quoteMetaStyle: React.CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.75,
  textAlign: "center",
};

const pricingGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
};

const pricingCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: 18,
  background: "var(--panel2)",
  boxShadow: "0 10px 24px var(--shadow)",
};

const pricingCardFeaturedStyle: React.CSSProperties = {
  border: "2px solid var(--accent)",
  borderRadius: 18,
  padding: 18,
  background: "var(--panel)",
  boxShadow: "0 12px 28px var(--shadow)",
};

const pricingBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  margin: "0 0 10px",
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(31,111,235,0.12)",
  color: "var(--accent)",
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: 0.3,
};

const pricingTierStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 13,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: 0.3,
  color: "var(--navy)",
  opacity: 0.8,
  textAlign: "center",
};

const pricingPriceStyle: React.CSSProperties = {
  margin: "8px 0 6px",
  fontSize: 34,
  lineHeight: 1,
  color: "var(--navy)",
  textAlign: "center",
};

const pricingMonthStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  opacity: 0.7,
};

const pricingFreqStyle: React.CSSProperties = {
  margin: "0 0 10px",
  fontWeight: 700,
  color: "var(--navy)",
  textAlign: "center",
};

const pricingDescStyle: React.CSSProperties = {
  margin: "0 0 12px",
  lineHeight: 1.65,
  opacity: 0.85,
  color: "var(--navy)",
  textAlign: "center",
};

const pricingListStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.85,
  color: "var(--navy)",
  opacity: 0.88,
};

const pricingNoteStyle: React.CSSProperties = {
  margin: "0 0 14px",
  lineHeight: 1.65,
  opacity: 0.82,
  color: "var(--navy)",
  textAlign: "center",
};

const pricingMiniNoteStyle: React.CSSProperties = {
  margin: "12px 0 0",
  fontSize: 13,
  lineHeight: 1.5,
  opacity: 0.78,
  color: "var(--navy)",
  textAlign: "center",
};
