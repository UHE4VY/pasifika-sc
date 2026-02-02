// app/schedule/page.tsx

export default function SchedulePage() {
    return (
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <h1>Schedule Your Training</h1>
  
        <p style={{ marginTop: 16, opacity: 0.85 }}>
          If you’re ready to begin, this is where training gets scheduled and set
          in motion.
        </p>
  
        <ul style={{ marginTop: 24, lineHeight: 1.8 }}>
          <li>• Choose session times that fit your week</li>
          <li>• Get placed into the appropriate training environment</li>
          <li>• Keep things simple and consistent</li>
        </ul>
  
        <p style={{ marginTop: 32, fontStyle: "italic", opacity: 0.75 }}>
          Scheduling integration coming next.
        </p>
      </main>
    );
  }