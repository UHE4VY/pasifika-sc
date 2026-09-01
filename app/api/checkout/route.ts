import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import {
  CheckoutValidationError,
  validateCheckoutRequest,
} from "../../../lib/checkout/pricing";
import { createSquarePaymentLink, getSiteUrl } from "../../../lib/square/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const checkout = validateCheckoutRequest(body);

    const redirect = new URL(`${getSiteUrl()}/schedule/payment-complete`);
    redirect.searchParams.set("class", checkout.classId);
    redirect.searchParams.set("plan", checkout.plan);
    redirect.searchParams.set("dates", checkout.selectedDates.join(","));
    redirect.searchParams.set("athlete", checkout.athleteName);
    redirect.searchParams.set("email", checkout.email);

    const checkoutReferenceId = randomUUID();
    redirect.searchParams.set("orderId", checkoutReferenceId);

    const checkoutUrl = await createSquarePaymentLink({
      idempotencyKey: checkoutReferenceId,
      locationId: process.env.SQUARE_LOCATION_ID ?? "",
      lineItems: checkout.lineItems,
      paymentNote: checkout.paymentNote,
      description: checkout.description,
      redirectUrl: redirect.toString(),
      buyerEmail: checkout.email,
    });

    return NextResponse.json({
      checkoutUrl,
      totalCents: checkout.totalCents,
    });
  } catch (error) {
    if (error instanceof CheckoutValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const message =
      error instanceof Error ? error.message : "Unable to start checkout.";

    if (
      message.includes("SQUARE_ACCESS_TOKEN") ||
      message.includes("SQUARE_LOCATION_ID")
    ) {
      return NextResponse.json(
        {
          error:
            "Square checkout is not configured yet. Add SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID to the site environment.",
        },
        { status: 503 }
      );
    }

    console.error("Square checkout error:", error);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
