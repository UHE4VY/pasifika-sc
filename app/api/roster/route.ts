import { NextResponse } from "next/server";
import {
  CheckoutValidationError,
  validateCheckoutRequest,
} from "../../../lib/checkout/pricing";
import { rosterAthleteOnGymdesk } from "../../../lib/gymdesk/roster";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const checkout = validateCheckoutRequest(body);
    const orderId =
      typeof body?.orderId === "string" ? body.orderId.trim() : undefined;

    const result = await rosterAthleteOnGymdesk({
      athleteName: checkout.athleteName,
      email: checkout.email,
      classId: checkout.classId,
      plan: checkout.plan,
      selectedDates: checkout.selectedDates,
      orderId,
    });

    if (!result.configured) {
      return NextResponse.json(
        {
          error:
            "Auto-roster is not configured yet. Add GYMDESK_ROSTER_WEBHOOK_URL (Zapier Catch Hook).",
          result,
        },
        { status: 503 }
      );
    }

    if (!result.ok) {
      console.error("Gymdesk roster webhook errors:", result.errors);
      return NextResponse.json(
        {
          error: "Could not add every date to the Gymdesk roster.",
          result,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    if (error instanceof CheckoutValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Roster API error:", error);
    return NextResponse.json(
      { error: "Unable to create Gymdesk roster bookings." },
      { status: 500 }
    );
  }
}
