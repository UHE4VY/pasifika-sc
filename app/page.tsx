"use client";

import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../content/testimonials";
import PageViewTracker from "./schedule/PageViewTracker";

export default function HomePage() {
  return (
    <>
      <PageViewTracker page="home" component="home_page" />

      <main style={pageStyle}>
       

        {/* HERO */}
        <section style={heroWrapStyle}>
          <div style={heroTopStyle}>
            <div style={heroLogoWrapStyle}>
              <img
                src="/psc_logo.png"
                alt="Pasifika Strength & Conditioning"
                style={heroLogoStyle}
              />
            </div>

            <p style={kickerStyle}>Stronger Roots. Stronger athletes.</p>

            <h1 style={titleStyle}>
              Science-backed training for athletes built on discipline, respect and community.
            </h1>

            <p style={subtitleStyle}>
              We coach what actually moves the needle. We build movement
              quality and confidence, all measured, tracked, and progressed intentionally.
            </p>

            <div style={ctaRowStyle}>
              <CallToAction href="/schedule" variant="primary">
                Book a consult
              </CallToAction>

              <CallToAction href="/services" variant="secondary">
                Explore services
              </CallToAction>

              <CallToAction href="/contact" variant="link">
                Questions? Contact us
              </CallToAction>
            </div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section style={credStyle}>
          <div style={trustBarStyle}>
            <div style={trustTitleStyle}>
              Trusted by Peninsula athletes &amp; families
            </div>

            <div style={trustItemsStyle}>
              <span style={trustPillStyle}>🥎 Softball</span>
              <span style={trustPillStyle}>🏈 Football</span>
              <span style={trustPillStyle}>🏃 Track &amp; Field</span>
              <span style={trustPillStyle}>⚽ Soccer</span>
              <span style={trustPillStyle}>🏋️ Weightlifting</span>
              <span style={trustPillStyle}>🥋 Martial Arts</span>
            </div>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* WHY PSC */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Why PSC</h2>
          <p style={{ margin: 0, lineHeight: 1.75 }}>
  PSC is rooted in discipline and community.
  We hold high standards, coach with intention and develop athletes
  who carry themselves with confidence and integrity on and off the field.

  <br /><br />

  Our training is grounded in science-based programming and measurable results.
  We don’t chase hype, we focus on what works, track progress and refine it over time.

</p>
        </section>

        <div style={dividerStyle} />

        {/* TRAINING YOU CAN MEASURE */}
<section style={panelStyle}>
  <h2 style={sectionTitleCenteredStyle}>Training you can measure</h2>

  <div style={gridStyle}>
    <div style={cardStyle}>
      <h3 style={cardTitleCenteredStyle}>Strength benchmarks</h3>
      <p style={cardBodyCenteredStyle}>
        Key lifts and strength metrics are tracked to monitor improvement over time.
        You will know exactly how your base is developing.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitleCenteredStyle}>Speed &amp; movement quality</h3>
      <p style={cardBodyCenteredStyle}>
        Sprint mechanics, acceleration, and movement efficiency improve
        through structured progressions.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitleCenteredStyle}>Consistency</h3>
      <p style={cardBodyCenteredStyle}>
        The biggest driver of improvement is consistent training. Our
        program is designed for sustainable and responsible progress so
        athletes can stay consistent week after week.
      </p>
    </div>
  </div>

  <p style={progressNoteStyle}>
    <strong>
      Progress isn’t guesswork. It’s tracked and adjusted intentionally.
    </strong>
  </p>
</section>

        <div style={dividerStyle} />

        {/* PROOF STRIP */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>What progress looks like</h2>

          <div style={proofGridStyle}>
            <div style={proofCardStyle}>
              <h3 style={proofMetricStyle}>+1–2 mph</h3>
              <p style={proofLabelStyle}>Sprint speed improvements</p>
            </div>

            <div style={proofCardStyle}>
              <h3 style={proofMetricStyle}>+20–40 lbs</h3>
              <p style={proofLabelStyle}>Strength gains in key lifts</p>
            </div>

            <div style={proofCardStyle}>
              <h3 style={proofMetricStyle}>8–12 weeks</h3>
              <p style={proofLabelStyle}>Typical progress window</p>
            </div>

            <div style={proofCardStyle}>
              <h3 style={proofMetricStyle}>100%</h3>
              <p style={proofLabelStyle}>Progress tracked</p>
            </div>
          </div>

            
        </section>

        <div style={dividerStyle} />


        {/* MEET THE COACHES */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Meet the Coaches</h2>

          <div style={coachSectionStyle}>
            <div style={coachCardStyle}>
              <div style={coachImageWrapStyle}>
                <img
                  src="/coaches/josh.jpeg"
                  alt="Coach Josh Uikilifi"
                  style={coachImageStyle}
                />
              </div>

              <div style={coachTextStyle}>
                <h3 style={coachNameStyle}>Coach Josh</h3>
                <p style={coachBodyStyle}>
                  Josh’s path in sport was shaped by both setbacks and
                  high-level competition. After a season-ending football injury
                  in high school, he rebuilt through track &amp; field and went
                  on to earn All-American honors in the shot put, set the CSU
                  Stanislaus school record, and represent the Kingdom of Tonga
                  on the world stage in weightlifting.
                </p>
                <p style={coachBodyStyle}>
                  His coaching reflects PSC’s values: discipline, humility,
                  structure, and measurable development. He believes athletes
                  grow best when training is intentional, standards are clear,
                  and progress is tracked.
                </p>

                <ul style={coachListStyle}>
                  <li>All-American in Shot Put</li>
                  <li>CSU Stanislaus school record holder</li>
                  <li>Tongan national record holder</li>
                  <li>2x Weightlifting World Championships competitor</li>
                </ul>
              </div>
            </div>

            <div style={coachCardStyle}>
              <div style={coachImageWrapStyle}>
                <img
                  src="/coaches/rachael.jpeg"
                  alt="Coach Rachael Simbra"
                  style={coachImageStyle}
                />
              </div>

              <div style={coachTextStyle}>
                <h3 style={coachNameStyle}>Coach Rachael</h3>
                <p style={coachBodyStyle}>
                  Rachael’s background in softball and her own recovery journey
                  shaped the way she coaches today. After competing at a high
                  level through her youth and having her competitive career cut
                  short by injury, she found her way into coaching and athlete
                  development.
                </p>
                <p style={coachBodyStyle}>
                  She brings a warm but standards-driven approach that helps
                  young athletes build confidence, movement quality, and
                  long-term athletic ability. Her work reflects PSC’s belief
                  that strong athletes are built through consistency, care, and
                  community.
                </p>

                <ul style={coachListStyle}>
                  <li>Former high-level softball athlete</li>
                  <li>Youth athlete development focused</li>
                  <li>Experience coaching club and youth athletes</li>
                  <li>Performance + confidence-driven approach</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <CallToAction href="/services" variant="secondary">
              Explore services
            </CallToAction>
          </div>
        </section>

        <div style={dividerStyle} />

       {/* TESTIMONIALS */}
<section style={panelStyle}>
<h2 style={testimonialsTitleStyle}>
  What parents &amp; athletes are saying
</h2>
  <Testimonials items={testimonials} />
</section>

        <div style={dividerStyle} />

        {/* HOW TO START */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>How to start</h2>

          <div style={gridStyle}>
  <div style={cardStyle}>
    <h3 style={cardTitleStyle}>1) Fill out the intake form</h3>
    <p style={cardBodyStyle}>
      Tell us your sport, schedule, training background, and what you want to improve.
    </p>
  </div>

  <div style={cardStyle}>
    <h3 style={cardTitleStyle}>2) Book a performance evaluation</h3>
    <p style={cardBodyStyle}>
      We assess movement quality, strength baseline, and performance goals.
    </p>
  </div>

  <div style={cardStyle}>
    <h3 style={cardTitleStyle}>3) Start your training plan</h3>
    <p style={cardBodyStyle}>
      We recommend the right coaching structure and guide you into a plan built for your goals.
    </p>
  </div>
</div>

          <div
            style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <CallToAction href="/intake" variant="primary">
              Start athlete intake
            </CallToAction>

            <CallToAction href="/schedule" variant="secondary">
              Book performance evaluation
            </CallToAction>

            <CallToAction href="/services" variant="secondary">
              Explore services
            </CallToAction>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* FINAL CTA */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Ready for the next step?</h2>
          <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>
            Fill out the intake form and book a performance evaluation and we’ll
            guide you to the best coaching option based on your sport, schedule,
            and goals.
          </p>

          <div
            style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <CallToAction href="/schedule" variant="primary">
              Book a consult
            </CallToAction>

            <CallToAction href="/services" variant="secondary">
              Explore services
            </CallToAction>
          </div>
        </section>

        <footer style={footerStyle}>
          <span style={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Pasifika Strength &amp; Conditioning
          </span>
        </footer>
      </main>
    </>
  );
}

/* ===== styles ===== */

const pageStyle: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "28px 18px 56px",
};

const heroWrapStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "28px 22px",
  background:
    "radial-gradient(700px 320px at 10% 0%, rgba(31,111,235,0.12), transparent 60%), radial-gradient(600px 280px at 90% 20%, rgba(125,183,255,0.10), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
  backdropFilter: "blur(6px)",
  boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
};

const heroTopStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  margin: "10px auto",
  maxWidth: 820,
  textAlign: "center",
  fontSize: 44,
  lineHeight: 1.1,
  color: "var(--navy)",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 680,
  textAlign: "center",
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
};

const kickerStyle: React.CSSProperties = {
  margin: 0,
  color: "var(--accent2)",
  fontWeight: 700,
  letterSpacing: 0.2,
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

  // ✅ center all section titles
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 14,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 14,
  background: "var(--panel2)",
};

const cardTitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 16,
};

const cardBodyStyle: React.CSSProperties = {
  margin: 0,
  opacity: 0.85,
  lineHeight: 1.7,
};

const footerStyle: React.CSSProperties = {
  marginTop: 22,
  paddingTop: 14,
  borderTop: "1px solid var(--border)",
};

const credStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  marginTop: 14,
};

const trustBarStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const trustTitleStyle: React.CSSProperties = {
  fontWeight: 800,
  color: "var(--navy)",
};

const trustItemsStyle: React.CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const trustPillStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  padding: "8px 10px",
  borderRadius: 999,
  border: "1px solid var(--border)",
  background: "var(--panel2)",
  color: "var(--navy)",
};

const proofGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
  marginTop: 8,
};

const proofCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 18,
  background: "var(--panel2)",
  textAlign: "center",
};

const proofMetricStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 28,
  fontWeight: 800,
  color: "var(--navy)",
};

const proofLabelStyle: React.CSSProperties = {
  marginTop: 6,
  fontSize: 14,
  opacity: 0.85,
};

const proofNoteStyle: React.CSSProperties = {
  marginTop: 14,
  opacity: 0.75,
  lineHeight: 1.6,
};

const coachSectionStyle: React.CSSProperties = {
  display: "grid",
  gap: 22,
};

const coachCardStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  gap: 18,
  alignItems: "start",
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: 18,
  background: "var(--panel2)",
};

const coachImageWrapStyle: React.CSSProperties = {
  width: "100%",
};

const coachImageStyle: React.CSSProperties = {
  width: "100%",
  height: 280,
  objectFit: "cover",
  borderRadius: 16,
  display: "block",
  border: "1px solid var(--border)",
};

const coachTextStyle: React.CSSProperties = {
  minWidth: 0,
};

const coachNameStyle: React.CSSProperties = {
  margin: "0 0 8px",
  fontSize: 22,
  color: "var(--navy)",
};

const coachBodyStyle: React.CSSProperties = {
  margin: "0 0 10px",
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
};

const coachListStyle: React.CSSProperties = {
  margin: "8px 0 0",
  paddingLeft: 18,
  lineHeight: 1.8,
  color: "var(--navy)",
  opacity: 0.88,
};

const heroLogoWrapStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 14,
};

const heroLogoStyle: React.CSSProperties = {
  width: 130,
  height: 130,
  objectFit: "contain",
  borderRadius: 999,
  boxShadow: "0 12px 32px rgba(31,111,235,0.18)",
};
const sectionTitleCenteredStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 16,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",
};

const cardTitleCenteredStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 16,
  color: "var(--navy)",
  textAlign: "center",
};

const cardBodyCenteredStyle: React.CSSProperties = {
  margin: 0,
  opacity: 0.88,
  lineHeight: 1.7,
  color: "var(--navy)",
  textAlign: "center",
};

const progressNoteStyle: React.CSSProperties = {
  marginTop: 18,
  textAlign: "center",
  fontWeight: 700,
  fontSize: 16,
  color: "var(--navy)",
};

const testimonialsTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 18,
  fontSize: 26,
  fontWeight: 800,
  textAlign: "center",
  color: "var(--navy)",
};

