import {
  buildRosterWebhookEvents,
  type RosterPayload,
} from "../roster/payload";

export type RosterResult = {
  ok: boolean;
  configured: boolean;
  attempted: number;
  succeeded: number;
  errors: string[];
};

export async function rosterAthleteOnGymdesk(
  payload: RosterPayload
): Promise<RosterResult> {
  const webhookUrl = process.env.GYMDESK_ROSTER_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return {
      ok: false,
      configured: false,
      attempted: 0,
      succeeded: 0,
      errors: ["GYMDESK_ROSTER_WEBHOOK_URL is not configured."],
    };
  }

  if (!payload.email) {
    return {
      ok: false,
      configured: true,
      attempted: 0,
      succeeded: 0,
      errors: ["Parent email is required to create Gymdesk bookings."],
    };
  }

  const events = buildRosterWebhookEvents(payload);
  const errors: string[] = [];
  let succeeded = 0;

  for (const event of events) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        const text = await response.text();
        errors.push(
          `${event.date}: webhook failed (${response.status}) ${text.slice(0, 160)}`
        );
        continue;
      }

      succeeded += 1;
    } catch (error) {
      errors.push(
        `${event.date}: ${
          error instanceof Error ? error.message : "webhook request failed"
        }`
      );
    }
  }

  return {
    ok: succeeded === events.length && errors.length === 0,
    configured: true,
    attempted: events.length,
    succeeded,
    errors,
  };
}
