// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>PSC MVP</h1>
      <p style={{ marginTop: 0, opacity: 0.9 }}>
        Static-first decision support (rules + curated language).
      </p>

      <div style={{ marginTop: 24 }}>
        <Link href="/services">Go to Services →</Link>
      </div>
    </main>
  );
}