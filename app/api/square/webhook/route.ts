import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { rosterAthleteOnGymdesk } from "../../../../lib/gymdesk/roster";
import { parseRosterPaymentNote } from "../../../../lib/roster/payload";

function verifySquareSignature(
  signatureKey: string,
  notificationUrl: string,
  body: string,
  signatureHeader: string | null
) {
  if (!signatureHeader) return false;

  const hmac = createHmac("sha256", signatureKey);
  hmac.update(notificationUrl + body);
  const expected = hmac.digest("base64");

  try {
    const left = Buffer.from(expected);
    const right = Buffer.from(signatureHeader);
    return left.length === right.length && timingSafeEqual(left, right);
  } catch {
    return false;
  }
}

type SquareWebhookBody = {
  type?: string;
  data?: {
    object?: {
      payment?: {
        id?: string;
        status?: string;
        note?: string;
        order_id?: string;
      };
    };
  };
};

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signatureKey = process.env.SQUARE_WEBHOOK_SIGNATURE_KEY?.trim();
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ).replace(/\/$/, "");
  const notificationUrl = `${siteUrl}/api/square/webhook`;

  if (signatureKey) {
    const signature = request.headers.get("x-square-hmacsha256-signature");
    if (!verifySquareSignature(signatureKey, notificationUrl, rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
    }
  } else if (process.env.SQUARE_ENVIRONMENT === "production") {
    console.error("SQUARE_WEBHOOK_SIGNATURE_KEY missing in production.");
    return NextResponse.json(
      { error: "Webhook signature key not configured." },
      { status: 503 }
    );
  }

  let body: SquareWebhookBody;
  try {
    body = JSON.parse(rawBody) as SquareWebhookBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const eventType = body.type || "";
  const payment = body.data?.object?.payment;

  if (!eventType.includes("payment") || !payment) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (payment.status && payment.status !== "COMPLETED") {
    return NextResponse.json({ ok: true, ignored: true, status: payment.status });
  }

  const roster = parseRosterPaymentNote(payment.note);
  if (!roster) {
    return NextResponse.json({ ok: true, ignored: true, reason: "not_psc_roster" });
  }

  const result = await rosterAthleteOnGymdesk({
    ...roster,
    orderId: payment.order_id || payment.id,
  });

  if (!result.configured) {
    console.warn("Square webhook: roster webhook URL not configured.");
    return NextResponse.json({ ok: true, roster: result });
  }

  if (!result.ok) {
    console.error("Square webhook roster errors:", result.errors);
    return NextResponse.json({ ok: false, roster: result }, { status: 502 });
  }

  return NextResponse.json({ ok: true, roster: result });
}
