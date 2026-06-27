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
          <div style={heroGridStyle}>
            <div style={heroTopStyle}>
              <div style={{ ...heroLogoWrapStyle, marginBottom: 28 }}>
                <img
                  src="/psc_logo.png"
                  alt="Pasifika Strength & Conditioning"
                  style={{
                    ...heroLogoStyle,
                    width: 132,
                    height: 132,
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 4px 32px rgba(30,61,125,0.05)",
                  }}
                />
              </div>

              <p
                style={{
                  ...kickerStyle,
                  fontSize: 36,
                  fontWeight: 900,
                  textAlign: "center",
                  letterSpacing: "0.01em",
                  color: "var(--navy)",
                  marginBottom: 18,
                  marginTop: 0,
                  lineHeight: 1.13,
                }}
              >
                <span style={{ color: "var(--accent)" }}>
                  Stronger Roots. Stronger Athletes.
                </span>
              </p>

              <p
                style={{
                  ...subtitleStyle,
                  fontSize: 20,
                  maxWidth: 560,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                We coach what actually moves the needle to build movement
                quality and confidence. Training is measured, tracked and
                progressed intentionally – no guesswork.
              </p>

              <div style={{ ...ctaRowStyle, marginTop: 32 }}>
                <CallToAction href="/schedule" variant="primary">
                  Book a consultation
                </CallToAction>

                <CallToAction href="/services" variant="secondary">
                  Explore services
                </CallToAction>

                <CallToAction href="/contact" variant="link">
                  Questions? Contact us
                </CallToAction>
              </div>
            </div>

            <div style={heroImageWrapStyle}>
              <img
                src="/hero/hero.png"
                alt="Athletes training at Pasifika Strength and Conditioning"
                style={heroImageStyle}
              />
            </div>
          </div>
        </section>
  

        {/* CREDIBILITY STRIP */}
        <section style={credStyle}>
          <div style={trustBarStyle}>
            <div style={trustTitleStyle}>
              <span style={{ display: "block", textAlign: "center", width: "100%" }}>
                Trusted by Peninsula athletes &amp; families
              </span>
         
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

{/* NEW CLIENT SPECIAL */}
<section style={panelStyle}>
<h2
  style={{
    fontSize: 32,
    fontWeight: 800,
    color: "var(--accent)",
    marginBottom: 12,
    textAlign: "center",
  }}
>
  New Client Special
</h2>

  <p style={cardBodyStyle}>
    <span style={{ display: "block", textAlign: "center" }}>
      Experience individualized coaching before committing to a larger package.
    </span>
  </p>

  <div
  style={{
    maxWidth: 700,
    margin: "16px auto",
    padding: "24px",
    border: "1px solid var(--border)",
    borderRadius: 16,
    background: "var(--panel2)",
    textAlign: "center",
  }}
>

<h3
  style={{
    margin: "0 0 8px",
    fontSize: 34,
    fontWeight: 800,
    color: "var(--navy)",
    textAlign: "center",
  }}
>
  5 1:1 Coaching Sessions
</h3>

<p
  style={{
    margin: "8px 0",
    fontSize: 28,
    fontWeight: 800,
    color: "var(--accent)",
    textAlign: "center",
  }}
>
  5 Sessions for $500
</p>

<p
  style={{
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
    opacity: 0.8,
    textAlign: "center",
  }}
>
  $100 per session • New clients only
</p>

<p
  style={{
    marginTop: 16,
    lineHeight: 1.7,
    opacity: 0.88,
    textAlign: "center",
  }}
>
      An ideal starting point for athletes and families who want to experience
      Pasifika Strength & Conditioning's coaching process and training environment before committing to a larger package.
    </p>
  </div>

  <div style={{ marginTop: 16 }}>
    <CallToAction href="/intake" variant="primary">
      <span style={{ display: "block", textAlign: "center", width: "100%" }}>
        Claim New Client Special
      </span>
 
    </CallToAction>
  </div>
</section>

<div style={dividerStyle} />
       
        {/* WHY PSC */}
        <section style={panelStyle}>
          <h2 style={sectionTitleStyle}>Why PSC</h2>

          <div style={whyPscGridStyle}>
            <div style={whyPscImageWrapStyle}>
              <img
                src="/home/why-psc.png"
                alt="Athletes training barbell squats at Pasifika Strength and Conditioning"
                style={whyPscImageStyle}
              />
            </div>

            <p style={{ margin: 0, lineHeight: 1.75 }}>
              PSC is rooted in the belief that the strongest roots in training,
              values and community suport do in fact make the strongest athletes.
              They say it takes a village-- this is our part. We hold high
              standards, coach with intention and develop athletes who carry
              themselves with confidence and integrity on and off the field.
              <br />
              <br />
              Our training is grounded in science-based programming and
              measurable results. We don&apos;t chase hype or trends, but focus
              on what actually yields result while, tracking progress and
              refining what the athlete needsover time.
            </p>
          </div>
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
        Sprint mechanics, acceleration and movement efficiency improve
        through structured progressions.
      </p>
    </div>

    <div style={cardStyle}>
      <h3 style={cardTitleCenteredStyle}>Consistency</h3>
      <p style={cardBodyCenteredStyle}>
        The biggest driver of improvement is consistent training; yes, even during your athlete's time in-season. Our
        program is designed so that
        athletes can make sustainable progress week after week, without wasting valuable time and energy.
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
              <p style={proofLabelStyle}>Linear sprint speed improvements</p>
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

  <div className="coach-section">
    <article className="coach-card">
      <div className="coach-image-wrap">
        <img
          src="/coaches/josh.jpeg"
          alt="Coach Josh Uikilifi"
          className="coach-image"
        />
      </div>

      <div className="coach-text">
        <h3 style={coachNameStyle}>Coach Josh</h3>

        <p style={coachBodyStyle}>
          Josh’s path in sport was shaped by both setbacks and high-level
          competition. After a season-ending football injury in high school, he
          rebuilt through track &amp; field and went on to earn All-American
          honors in the shot put, set the CSU Stanislaus school record and
          represent the Kingdom of Tonga on the world stage in the sport of
          Olympic weightlifting.
        </p>

        <p style={coachBodyStyle}>
          His coaching reflects PSC’s values: discipline, humility, structure
          and measurable development. He believes athletes grow best when
          training is intentional, standards are clear and progress is tracked.
        </p>

        <ul style={coachListStyle}>
          <li>2x All-American in the Shot Put</li>
          <li>CSU Stanislaus school record holder</li>
          <li>Tongan national record holder in the shot put</li>
          <li>2x Weightlifting World Championships competitor</li>
          <li>B.A. in Kinesiology from CSU Stanislaus</li>
          <li>USAW Level 1 and 2 Certified</li>
          <li>Certified Strength and Conditioning Specialist</li>
          <li>Certified Personal Trainer</li>
          <li>
            Over 10 years of coaching experience working with athletes of all
            ages and abilities
          </li>
        </ul>
      </div>
    </article>

    <article className="coach-card">
      <div className="coach-image-wrap">
        <img
          src="/coaches/rachael.png"
          alt="Coach Rachael Simbra coaching in the gym"
          className="coach-image"
        />
      </div>

      <div className="coach-text">
        <h3 style={coachNameStyle}>Coach Rachael</h3>

        <p style={coachBodyStyle}>
          Rachael’s background in softball and her own recovery journey shaped
          the way she coaches today. After competing at a high level through her
          youth and having her competitive career cut short by injury, she found
          her way into coaching and athlete development.
        </p>

        <p style={coachBodyStyle}>
          She brings a warm but standards-driven approach that helps young
          athletes build confidence, movement quality, and long-term athletic
          ability. Her work reflects PSC’s belief that strong athletes are built
          through consistency, care, and community.
        </p>

        <ul style={coachListStyle}>
          <li>Former high-level softball athlete</li>
          <li>Youth athlete development focused</li>
          <li>Experience coaching club and youth athletes</li>
          <li>Performance + confidence-driven approach</li>
          <li>NASM CPT Certified</li>
          <li>
            B.A. in English from CSU East Bay
          </li>
          <li>
            Over 10 years of coaching experience working with athletes of all
            ages and abilities
          </li>
        </ul>
      </div>
    </article>
  </div>

  <div style={{ marginTop: 18, textAlign: "center" }}>
    <CallToAction href="/services" variant="secondary">
      Explore services
    </CallToAction>
  </div>
</section>

<div style={dividerStyle} />

       {/* TESTIMONIALS */}
<section style={panelStyle}>
<h2 style={testimonialsTitleStyle}>
  What athletes are saying about PSC
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
      We assess movement quality, strength baseline, and program for your performance goals.
    </p>
  </div>

  <div style={cardStyle}>
    <h3 style={cardTitleStyle}>3) Start your training plan</h3>
    <p style={cardBodyStyle}>
      We recommend the right coaching structure and guide you in your custom trainingplan built for your goals.
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
            guide you to the best coaching option based on your sport, schedule and goals.
          </p>

          <div style={{ ...ctaRowStyle, marginTop: 14 }}>
            <CallToAction href="/schedule" variant="primary">
              Book a consultation
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

const heroGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 28,
  alignItems: "center",
  width: "100%",
};

const heroImageWrapStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 280,
};

const heroImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: 280,
  maxHeight: 420,
  objectFit: "cover",
  borderRadius: 16,
  display: "block",
  border: "1px solid var(--border)",
  boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
};

const whyPscGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
  alignItems: "center",
};

const whyPscImageWrapStyle: React.CSSProperties = {
  width: "100%",
};

const whyPscImageStyle: React.CSSProperties = {
  width: "100%",
  height: 260,
  objectFit: "cover",
  borderRadius: 16,
  display: "block",
  border: "1px solid var(--border)",
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

