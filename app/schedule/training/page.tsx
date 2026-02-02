// app/schedule/training/page.tsx
import { redirect } from "next/navigation";
import CallToAction from "../../../components/CallToAction";

type SearchParams =
  | { token?: string }
  | Promise<{ token?: string }>; // keeps you safe if your Next version types this as a Promise

type Props = {
  searchParams?: SearchParams;
};

export default async function TrainingSchedulePage({ searchParams }: Props) {
  // ✅ Support both “plain object” and “Promise” searchParams (Next versions differ)
  const sp = await Promise.resolve(searchParams as any);
  const token = sp?.token;

  // ✅ Guard: block training scheduling unless they have the access token
  const requiredToken = process.env.TRAINING_ACCESS_TOKEN;

  // If token missing or invalid -> send them to consult scheduler first
  if (!requiredToken || token !== requiredToken) {
    redirect("/schedule/consult?reason=consult_required");
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginBottom: 12 }}>Schedule your training</h1>

      <p style={{ opacity: 0.75, marginBottom: 24 }}>
        You’re cleared to book training sessions. Choose a time that fits your week.
      </p>

      <div
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          padding: 16,
          opacity: 0.9,
        }}
      >
        <p style={{ marginTop: 0, marginBottom: 12 }}>
          <strong>Placeholder:</strong> add your training scheduling embed or link here.
        </p>

        <ul style={{ marginBottom: 0 }}>
          <li>Client-only calendar booking link</li>
          <li>Optional “new client intake required” gate</li>
          <li>Confirmation + next steps</li>
        </ul>
      </div>

      <div style={{ marginTop: 18 }}>
        <CallToAction href="/contact">Back to contact</CallToAction>
      </div>
    </main>
  );
}