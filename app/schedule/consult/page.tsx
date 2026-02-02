import CallToAction from "../../../components/CallToAction";
import GoogleSchedulingButton from "../../../components/GoogleSchedulingButton";

const CONSULT_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0YGuvXrFwnIF4citGnbrODqI6KFusJGfWk49dfaRTrEt2mXu5KN34UXjOrXwmXyZXDt-P9njmp?gv=true";

export default function ConsultSchedulePage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginBottom: 12 }}>Book a consultation</h1>

      <p style={{ opacity: 0.75, marginBottom: 18 }}>
        Pick a time that works. We’ll confirm next steps after the consult.
      </p>

      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Training scheduling unlocks after a consultation (or purchase).
        Book your consult here first.
      </p>

      {/* Google Appointment Scheduling Button */}
      <GoogleSchedulingButton
        url={CONSULT_BOOKING_URL}
        label="Book your consult"
        color="#039BE5"
      />

      <div style={{ marginTop: 24 }}>
        <CallToAction href="/contact">Back to contact</CallToAction>
      </div>
    </main>
  );
}