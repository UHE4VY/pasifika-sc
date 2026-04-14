"use client";

import React, { useState } from "react";
import CallToAction from "../../../components/CallToAction";
import { useAnalytics } from "@/hooks/useAnalytics";
import PageViewTracker from "@/app/schedule/PageViewTracker";

export default function RemoteTrainingServicePage() {
  const [showMore, setShowMore] = useState(false);
  const { trackEvent } = useAnalytics();

  return (
    <>
      <PageViewTracker page="/services/remote" component="remote_page" />

      <main style={pageStyle}>

        {/* HERO */}
        <section style={heroStyle}>
          <p style={eyebrowStyle}>Training Program</p>

          <h1 style={titleStyle}>Remote Programming</h1>

          <p style={subtitleStyle}>
            Structured training programs for athletes and professionals who want
            clear direction, accountability, and measurable progress—even when
            they’re not training inside our facility.
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

        {/* VALUE CARDS */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Why athletes choose remote programming</h2>

          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitle}>Structure anywhere</h3>
              <p style={cardBody}>
                Train at home, a commercial gym, or while traveling with a clear
                plan that tells you exactly what to do and why.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Real programming</h3>
              <ul style={cardList}>
                <li>Progressive strength & conditioning plans</li>
                <li>Clear intent for every session</li>
                <li>Adjustments based on progress</li>
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Consistency wins</h3>
              <ul style={cardList}>
                <li>Better weekly training consistency</li>
                <li>Strength that compounds over time</li>
                <li>Clear benchmarks and measurable progress</li>
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
                component: "remote_page",
                action: next ? "open_more_guidance" : "close_more_guidance",
                location: "remote_more_guidance",
              });

              setShowMore(next);
            }}
            style={moreGuidanceBtn}
          >
            {showMore ? "Hide guidance" : "More guidance"}
          </button>

          <p style={{ marginTop: 8, opacity: 0.75, fontSize: 14 }}>
            {showMore
              ? "Extra clarity on how remote coaching works."
              : "Get extra clarity on whether remote programming is right for you."}
          </p>
        </div>

        {/* EXPANDED GUIDANCE */}
        {showMore && (
          <section style={panelStyle}>
            <div style={gridStyle}>
              <div style={cardStyle}>
                <h3 style={cardTitle}>What you actually get</h3>
                <p style={cardBody}>
                  A structured program, progression week to week, and check-ins
                  to adjust training based on performance and feedback.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>Remote vs in-person</h3>
                <p style={cardBody}>
                  In-person coaching gives real-time feedback every rep. Remote
                  programming is best if you can execute independently but still
                  want expert guidance and accountability.
                </p>
              </div>

              <div style={cardStyle}>
                <h3 style={cardTitle}>You’re not behind</h3>
                <p style={cardBody}>
                  Remote training builds consistency. With the right structure,
                  progress compounds week after week.
                </p>
              </div>
            </div>
          </section>
        )}

        <div style={dividerStyle} />

        {/* TESTIMONIALS */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>What families notice first</h2>

          <div style={gridStyle}>
            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “The structure is the difference. My kid knows exactly what to
                do each session.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>
                — Parent of youth athlete
              </figcaption>
            </figure>

            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “It feels organized and intentional, not random workouts.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>
                — High school athlete
              </figcaption>
            </figure>

            <figure style={testimonialCardStyle}>
              <blockquote style={quoteStyle}>
                “This is the first program where we can actually track progress.”
              </blockquote>
              <figcaption style={quoteMetaStyle}>
                — Parent
              </figcaption>
            </figure>
          </div>
        </section>

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
        $149<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>Programming only</p>
      <p style={pricingDescStyle}>
        A clear training plan for athletes who want structure and direction
        without ongoing live coaching touchpoints.
      </p>

      <ul style={pricingListStyle}>
        <li>Monthly training plan</li>
        <li>Structured weekly progression</li>
        <li>Best for independent athletes</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/remote/programming-only" variant="primary">
          View starter option
        </CallToAction>
      </div>
    </div>

    <div style={pricingCardFeaturedStyle}>
      <p style={pricingBadgeStyle}>Most popular</p>
      <p style={pricingTierStyle}>Performance</p>
      <h3 style={pricingPriceStyle}>
        $249<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>Programming + biweekly check-ins</p>
      <p style={pricingDescStyle}>
        Our most balanced remote option for athletes who want accountability,
        adjustments, and regular coaching feedback.
      </p>

      <ul style={pricingListStyle}>
        <li>Monthly training plan</li>
        <li>Biweekly check-ins</li>
        <li>Adjustments based on progress</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/remote/check-ins" variant="primary">
          View performance option
        </CallToAction>
      </div>
    </div>

    <div style={pricingCardStyle}>
      <p style={pricingTierStyle}>Elite</p>
      <h3 style={pricingPriceStyle}>
        $399<span style={pricingMonthStyle}>/month</span>
      </h3>
      <p style={pricingFreqStyle}>High-support remote coaching</p>
      <p style={pricingDescStyle}>
        Our highest-support remote option for athletes who want the strongest
        feedback loop without training in person full time.
      </p>

      <ul style={pricingListStyle}>
        <li>Monthly training plan</li>
        <li>Frequent check-ins and adjustments</li>
        <li>Highest level of remote support</li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <CallToAction href="/services/remote/high-support" variant="primary">
          View elite option
        </CallToAction>
      </div>
    </div>
  </div>
</section>

        <div style={dividerStyle} />
        <section style={panelStyle}>
  <h2 style={sectionTitleStyle}>How we measure progress</h2>

  <div style={gridStyle}>
    <div style={cardStyle}>
      <h3 style={cardTitle}>Strength benchmarks</h3>
      <p style={cardBody}>
        Key lifts and strength metrics improve steadily over time. We track
        progress so you know exactly how your base is developing.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitle}>Speed & movement quality</h3>
      <p style={cardBody}>
        Sprint mechanics, acceleration, and movement efficiency improve
        through structured progressions.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitle}>Consistency</h3>
      <p style={cardBody}>
        The biggest driver of improvement is consistent training. Our
        programming is designed so athletes can stay consistent week after
        week.
      </p>
    </div>
  </div>

  <p style={{ marginTop: 14, opacity: 0.8 }}>
    Progress isn’t guesswork. It’s tracked and adjusted intentionally.
  </p>
</section>
        <div style={dividerStyle} />

<section style={panelStyle}>
  <h2 style={sectionTitleStyle}>What a typical training week looks like</h2>

  <div style={gridStyle}>
    <div style={cardStyle}>
      <h3 style={cardTitle}>Day 1 – Strength</h3>
      <p style={cardBody}>
        Lower-body strength work paired with mobility and core stability.
        The goal is building a base that supports speed and durability.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitle}>Day 2 – Speed + power</h3>
      <p style={cardBody}>
        Sprint mechanics, explosive movements, and short acceleration work
        designed to transfer directly to sport performance.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitle}>Day 3 – Total body</h3>
      <p style={cardBody}>
        Full-body strength and conditioning to build resilience, work
        capacity, and confidence moving under fatigue.
      </p>
    </div>
  </div>

  <p style={{ marginTop: 14, opacity: 0.8 }}>
    Every program adapts based on your schedule, training age, and sport.
  </p>
</section>

        <div style={dividerStyle} />


        {/* CTA */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Ready to get started?</h2>

          <p style={cardBody}>
            Start the athlete intake so we can understand your goals and guide
            you to the right program.
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

/* STYLES */

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
  textAlign: "center",          // ✅ Centers all text
  display: "flex",              // ✅ Ensures proper alignment
  flexDirection: "column",
  alignItems: "center",         // ✅ Centers child elements horizontally
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
  textAlign: "center",          // ✅ Centered
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0 10px",
  fontSize: 38,
  lineHeight: 1.12,
  color: "var(--navy)",
  textAlign: "center",          // ✅ Centered
};

const subtitleStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: 760,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",          // ✅ Centered
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
  justifyContent: "center",     // ✅ Centers CTA buttons
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
  textAlign: "center",          // ✅ Centers section content
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 12,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",          // ✅ Centered
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
  alignItems: "stretch", // Ensures all cards are equal height
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
  textAlign: "center",          // ✅ Centers text within cards
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%", // Ensures equal height within the grid
};

const cardTitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 8,
  fontSize: 17,
  color: "var(--navy)",
  textAlign: "center",          // ✅ Centered
};

const cardBody: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",          // ✅ Centered
};

const cardList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.9,
  opacity: 0.88,
  color: "var(--navy)",
  textAlign: "center",          // ✅ Centered
};

const moreGuidanceBtn: React.CSSProperties = {
  border: "1px solid var(--border)",
  background: "var(--panel)",
  color: "var(--navy)",
  padding: "10px 14px",
  borderRadius: 12,
  cursor: "pointer",
  textAlign: "center",          // ✅ Centered
};

const testimonialCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
  textAlign: "center",          // ✅ Centers text within cards
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%", // Ensures equal height within the grid
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
  marginBottom: 10,
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