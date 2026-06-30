"use client";

import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import { testimonials } from "../content/testimonials";
import PageViewTracker from "./schedule/PageViewTracker";

export default function HomePage() {
  return (
    <>
      <PageViewTracker page="home" component="home_page" />

      <main style={pageStyle}>
       

        {/* HERO */}
        <section className="home-image-section home-image-section--hero">
          <img
            src="/hero/hero.png"
            alt=""
            aria-hidden="true"
            className="home-image-section__img"
          />
          <div className="home-image-section__scrim" aria-hidden="true" />

          <div className="home-image-section__content">
            <div style={heroContentInnerStyle}>
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
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
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
                color: "#ffffff",
                marginBottom: 18,
                marginTop: 0,
                lineHeight: 1.13,
                textShadow: "0 2px 16px rgba(0,0,0,0.35)",
              }}
            >
              <span style={{ color: "var(--accent-soft)" }}>
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
                color: "rgba(255,255,255,0.92)",
                opacity: 1,
                textShadow: "0 1px 12px rgba(0,0,0,0.3)",
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

        <UpcomingEvents />

        <div style={dividerStyle} />

{/* NEW CLIENT SPECIAL */}
<section className="home-image-section home-image-section--new-client">
  <img
    src="/home/new-client-special.png"
    alt=""
    aria-hidden="true"
    className="home-image-section__img"
  />
  <div className="home-image-section__scrim" aria-hidden="true" />

  <div className="home-image-section__content">
    <h2 style={newClientSpecialTitleStyle}>New Client Special</h2>

    <p style={newClientSpecialIntroStyle}>
      Experience individualized coaching before committing to a larger package.
    </p>

    <h3 style={newClientSpecialHeadingStyle}>5 1:1 Coaching Sessions</h3>

    <p style={newClientSpecialPriceStyle}>5 Sessions for $500</p>

    <p style={newClientSpecialMetaStyle}>
      $100 per session • New clients only
    </p>

    <p style={newClientSpecialBodyStyle}>
      An ideal starting point for athletes and families who want to experience
      Pasifika Strength &amp; Conditioning&apos;s coaching process and training
      environment before committing to a larger package.
    </p>

    <div style={{ marginTop: 20 }}>
      <CallToAction href="/intake" variant="primary">
        Claim New Client Special
      </CallToAction>
    </div>
  </div>
</section>

<div style={dividerStyle} />
       
        {/* WHY PSC */}
        <section className="home-image-section home-image-section--why-psc">
          <img
            src="/home/why-psc.png"
            alt=""
            aria-hidden="true"
            className="home-image-section__img"
          />
          <div className="home-image-section__scrim" aria-hidden="true" />

          <div className="home-image-section__content">
            <h2 style={whyPscTitleStyle}>Why PSC</h2>

            <p style={whyPscBodyStyle}>
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
          Rachael’s background as a softball athlete and her own recovery journey shaped
          the way she coaches today. After competing in club ball through her
          youth and high school and having her competitive career cut short by injury, she found
          her way into coaching and athlete development.
        </p>

        <p style={coachBodyStyle}>
          She brings a warm, but standards-driven approach that helps young
          athletes build confidence, movement quality and long-term athletic
          ability. Her work deeply reflects PSC’s belief that the strongest athletes are built
          with consistency, care, and community support.
        </p>

        <ul style={coachListStyle}>
          <li>Former club softball athlete</li>
          <li>Student and youth athlete development focused</li>
          <li>Experience as head and pitching coach for club and student athletes</li>
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

const heroContentInnerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 720,
};

const newClientSpecialTitleStyle: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: 32,
  fontWeight: 800,
  color: "var(--accent-soft)",
  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
};

const newClientSpecialIntroStyle: React.CSSProperties = {
  margin: "0 0 16px",
  maxWidth: 560,
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.92)",
  textShadow: "0 1px 10px rgba(0,0,0,0.3)",
};

const newClientSpecialHeadingStyle: React.CSSProperties = {
  margin: "0 0 8px",
  fontSize: 34,
  fontWeight: 800,
  color: "#ffffff",
  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
};

const newClientSpecialPriceStyle: React.CSSProperties = {
  margin: "8px 0",
  fontSize: 28,
  fontWeight: 800,
  color: "var(--accent-soft)",
  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
};

const newClientSpecialMetaStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 600,
  color: "rgba(255,255,255,0.88)",
  textShadow: "0 1px 10px rgba(0,0,0,0.3)",
};

const newClientSpecialBodyStyle: React.CSSProperties = {
  margin: "16px 0 0",
  maxWidth: 640,
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.9)",
  textShadow: "0 1px 10px rgba(0,0,0,0.3)",
};

const whyPscTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 14,
  fontSize: 18,
  color: "#ffffff",
  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
};

const whyPscBodyStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: 720,
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.92)",
  textShadow: "0 1px 10px rgba(0,0,0,0.3)",
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
  justifyContent: "center",
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
  opacity: 1,
};

const coachListStyle: React.CSSProperties = {
  margin: "8px 0 0",
  paddingLeft: 18,
  lineHeight: 1.8,
  color: "var(--navy)",
  opacity: 1,
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

