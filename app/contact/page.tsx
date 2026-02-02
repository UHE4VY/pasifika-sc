// app/contact/page.tsx

import CallToAction from "../../components/CallToAction";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginBottom: 12 }}>Contact</h1>

      {/* Direct contact */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Email</h2>

        <p style={{ marginBottom: 6 }}>
          General questions:{" "}
          <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
        </p>

        <p>
          Scheduling & clients:{" "}
          <a href="mailto:training@yourdomain.com">
            training@yourdomain.com
          </a>
        </p>
      </section>

      {/* Action paths */}
      <section>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>
          What would you like to do?
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <CallToAction href="/schedule/consult">
            Book a consultation
          </CallToAction>

          <CallToAction href="/schedule/training">
            Schedule your training
          </CallToAction>
        </div>
      </section>
    </main>
  );
}