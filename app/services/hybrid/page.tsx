"use client";

import React, { useState } from "react";
import CallToAction from "../../../components/CallToAction";
import { useAnalytics } from "@/hooks/useAnalytics";
import PageViewTracker from "@/app/schedule/PageViewTracker";

export default function HybridCoachingServicePage() {
  const [showMore, setShowMore] = useState(false);
  const { trackEvent } = useAnalytics();

  return (
    <>
      <PageViewTracker page="/services/hybrid" component="hybrid_page" />

      <main style={pageStyle}>
        {/* HERO */}
        <section style={heroStyle}>
          <p style={eyebrowStyle}>Training Program</p>

          <h1 style={titleStyle}>Hybrid Coaching</h1>

          <p style={subtitleStyle}>
            A flexible mix of in-person coaching and remote programming for
            athletes who want hands-on guidance, measurable progress, and a
            system they can follow between sessions.
          </p>

          <div style={ctaRowStyle}>
            <CallToAction href="/intake" variant="primary">
              Start athlete intake
            </CallToAction>

            <CallToAction href="/schedule" variant="secondary">
              Book a consult
            </CallToAction>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* TOP CARDS */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Why athletes choose hybrid coaching</h2>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitle}>Best of both worlds</h3>
              <p style={cardBody}>
                Hybrid combines the accountability of in-person coaching with
                the flexibility of remote programming, so athletes can keep
                progressing even when they are not in the facility.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Who this is best for</h3>
              <ul style={cardList}>
                <li>You want some in-person coaching, but not every session</li>
                <li>You need flexibility around school, work, or travel</li>
                <li>You want a structured plan between coached sessions</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>What progress looks like</h3>
              <ul style={cardList}>
                <li>Better consistency across the month</li>
                <li>Clear skill and strength progression</li>
                <li>Coaching support without losing flexibility</li>
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
                component: "hybrid_page",
                action: next ? "open_more_guidance" : "close_more_guidance",
                location: "hybrid_more_guidance",
              });

              setShowMore(next);
            }}
            style={moreGuidanceBtn}
          >
            {showMore ? "Hide guidance" : "More guidance"}
          </button>

          <p style={{ marginTop: 8, opacity: 0.75, fontSize: 14 }}>
            {showMore
              ? "Extra clarity to help you decide if hybrid coaching is the best fit."
              : "Get extra clarity on when hybrid coaching makes the most sense."}
          </p>
        </div>

        {/* REVEAL CARDS */}
        {showMore && (
          <section style={panelStyle}>
            <div style={gridStyle}>
              <div style={cardStyle}>
                <h3 style={cardTitle}>Hybrid vs 1:1</h3>
                <p style={cardBody}>
                  1:1 gives you full coaching attention every session. Hybrid
                  gives you strategic in-person coaching touchpoints plus independent work
                  between sessions.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>Hybrid vs Remote</h3>
                <p style={cardBody}>
                  Remote programming gives you structure from a distance.
                  Hybrid adds live coaching touchpoints so technique and progress
                  stay sharper.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>How to choose</h3>
                <p style={cardBody}>
                  Choose hybrid if you want coaching support and flexibility at
                  the same time. It’s ideal for athletes who can train
                  independently but still benefit from in-person feedback.
                </p>
              </div>
            </div>
          </section>
        )}

        <div style={dividerStyle} />

{/* ADULT TRAINING OPTIONS */}
<section style={panelStyle}>
  <h2 style={sectionTitleStyle}>Adult Training Options</h2>

  <p style={cardBodyStyle}>
    While many of our programs are designed for youth athlete development,
    we also offer individualized coaching solutions for adult clients seeking
    improved strength, performance, and long-term health.
  </p>

  <p style={{ ...cardBodyStyle, marginTop: 12 }}>
    Adult training options for <strong>Remote Programming</strong> and
    <strong> Hybrid Coaching</strong> are customized based on goals,
    schedule, and the level of coaching support required.
    <br /><br />
    <strong>Please inquire for more information on adult coaching and pricing.</strong>
  </p>

  <p style={{ ...cardBodyStyle, marginTop: 12 }}>
    Adult 1:1 coaching begins at a base rate of <strong>$165 per session</strong>,
    with remote and hybrid options tailored to individual needs.
  </p>

  <div style={{ marginTop: 18, textAlign: "center" }}>
    <CallToAction href="/contact" variant="primary">
      Inquire about adult training
    </CallToAction>
  </div>
</section>

        {/* TESTIMONIALS */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>What families notice first</h2>

          <div style={gridStyle}>
            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “The flexibility helped us stay consistent, but it still felt
                like there was real coaching behind the plan.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>
                — Parent of youth athlete
              </figcaption>
            </figure>

            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “I liked having structure between sessions and knowing exactly
                what to work on.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>
                — High school athlete
              </figcaption>
            </figure>

            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “It felt like the right middle ground—flexible, but still
                measured and organized.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>— Parent</figcaption>
            </figure>
          </div>
        </section>

        <div style={dividerStyle} />

       {/* PRICING */}
<section style={panelStyle}>
<h2 style={sectionTitleStyle}>Pricing options</h2>
<p style={pricingNoteStyle}>
  Not sure which tier fits best? Book a consult and we’ll recommend the right
  option based on goals, schedule, and support needed.
</p>

  <div style={pricingGridStyle}>
    <div style={pricingCardStyle}>
      <p style={pricingTierStyle}>Starter</p>
      <h3 style={pricingPriceStyle}>
        $249<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>1 in-person session / month + remote programming</p>
      <p style={pricingDescStyle}>
        A flexible entry point for athletes who want a monthly live coaching
        touchpoint while following a structured plan between sessions.
      </p>

      <ul style={pricingListStyle}>
        <li>1 in-person coaching session per month</li>
        <li>Remote programming between sessions</li>
        <li>Clear structure and progression</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/hybrid/1x-month" variant="primary">
          View starter option
        </CallToAction>
      </div>
    </div>

    <div style={pricingCardFeaturedStyle}>
      <p style={pricingBadgeStyle}>Most popular</p>
      <p style={pricingTierStyle}>Performance</p>
      <h3 style={pricingPriceStyle}>
        $399<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>Biweekly in-person sessions (2x / month) + remote programming</p>
      <p style={pricingDescStyle}>
        Our most balanced hybrid option for athletes who want regular live
        coaching without needing weekly in-person sessions.
      </p>

      <ul style={pricingListStyle}>
        <li>2 in-person coaching sessions per month</li>
        <li>Remote programming between sessions</li>
        <li>More accountability and a stronger feedback loop</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/hybrid/2x-month" variant="primary">
          View performance option
        </CallToAction>
      </div>
    </div>

    <div style={pricingCardStyle}>
      <p style={pricingTierStyle}>Elite</p>
      <h3 style={pricingPriceStyle}>
        $549<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>3 touchpoints / month + remote programming</p>
      <p style={pricingDescStyle}>
        Our highest-support hybrid option for athletes who want more coaching,
        more feedback, and more structure across the month.
      </p>

      <ul style={pricingListStyle}>
        <li>3 in-person coaching touchpoints per month</li>
        <li>Remote programming between sessions</li>
        <li>Highest level of hybrid support</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/hybrid/3x-month" variant="primary">
          View elite option
        </CallToAction>
      </div>
    </div>
  </div>
</section>

        <div style={dividerStyle} />

        {/* CTA */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Ready to get started?</h2>

          <p style={cardBody}>
            Start the athlete intake so we can understand your schedule, goals,
            and whether hybrid coaching is the best fit.
          </p>

          <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
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
  textAlign: "center",          // Centers all text
  display: "flex",
  flexDirection: "column",
  alignItems: "center",         // Centers child elements horizontally
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
  maxWidth: 720,                // Keeps line length readable
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
  justifyContent: "center",     // Centers CTA buttons
  alignItems: "center",
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
  textAlign: "center",
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
  textAlign: "center",
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 17,
  color: "var(--navy)",
};

const cardBody: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
};

const cardList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.9,
  opacity: 0.88,
  color: "var(--navy)",
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
};

const quoteMetaStyle: React.CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.75,
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
};

const pricingPriceStyle: React.CSSProperties = {
  margin: "8px 0 6px",
  fontSize: 34,
  lineHeight: 1,
  color: "var(--navy)",
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
};

const pricingDescStyle: React.CSSProperties = {
  margin: "0 0 12px",
  lineHeight: 1.65,
  opacity: 0.85,
  color: "var(--navy)",
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
};

const cardBodyStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center", // Keeps text centered for consistency
};