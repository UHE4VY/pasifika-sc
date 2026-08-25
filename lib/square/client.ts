import type { CheckoutLineItem } from "../checkout/pricing";

type CreatePaymentLinkInput = {
  idempotencyKey: string;
  locationId: string;
  lineItems: CheckoutLineItem[];
  paymentNote: string;
  redirectUrl: string;
  description?: string;
  buyerEmail?: string;
};

function getSquareBaseUrl() {
  return process.env.SQUARE_ENVIRONMENT === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";
}

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export function assertSquareConfigured() {
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    throw new Error("SQUARE_ACCESS_TOKEN is not configured.");
  }

  if (!process.env.SQUARE_LOCATION_ID) {
    throw new Error("SQUARE_LOCATION_ID is not configured.");
  }
}

export async function createSquarePaymentLink(
  input: CreatePaymentLinkInput
): Promise<string> {
  assertSquareConfigured();

  const response = await fetch(
    `${getSquareBaseUrl()}/v2/online-checkout/payment-links`,
    {
      method: "POST",
      headers: {
        "Square-Version": "2024-11-20",
        Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idempotency_key: input.idempotencyKey,
        description: input.description,
        order: {
          location_id: process.env.SQUARE_LOCATION_ID,
          line_items: input.lineItems.map((item) => ({
            name: item.name,
            quantity: String(item.quantity),
            item_type: "ITEM",
            base_price_money: {
              amount: item.unitAmountCents,
              currency: "USD",
            },
          })),
        },
        checkout_options: {
          redirect_url: input.redirectUrl,
        },
        payment_note: input.paymentNote,
        ...(input.buyerEmail
          ? {
              pre_populated_data: {
                buyer_email: input.buyerEmail,
              },
            }
          : {}),
      }),
    }
  );

  const data = (await response.json()) as {
    payment_link?: { url?: string; long_url?: string };
    errors?: Array<{ detail?: string; code?: string }>;
  };

  if (!response.ok) {
    const detail =
      data.errors?.map((error) => error.detail).filter(Boolean).join(" ") ||
      "Square checkout failed.";
    throw new Error(detail);
  }

  const checkoutUrl = data.payment_link?.url || data.payment_link?.long_url;
  if (!checkoutUrl) {
    throw new Error("Square did not return a checkout URL.");
  }

  return checkoutUrl;
}
