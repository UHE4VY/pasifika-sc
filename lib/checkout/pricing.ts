import {
  GYMDESK,
  isStartersSignupOpen,
  type GymdeskClassId,
  type GymdeskPlan,
} from "../../content/gymdesk";
import { encodeRosterPaymentNote } from "../roster/payload";

export type CheckoutRequest = {
  classId: GymdeskClassId;
  plan: GymdeskPlan;
  selectedDates: string[];
  athleteName: string;
  email: string;
  phone: string;
  siblingDiscount?: boolean;
};

export type CheckoutLineItem = {
  name: string;
  quantity: number;
  unitAmountCents: number;
};

export type ValidatedCheckout = {
  classId: GymdeskClassId;
  plan: GymdeskPlan;
  selectedDates: string[];
  athleteName: string;
  email: string;
  phone: string;
  siblingDiscount: boolean;
  lineItems: CheckoutLineItem[];
  totalCents: number;
  paymentNote: string;
  description: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeAthleteName(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, 80);
}

function normalizeEmail(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase().slice(0, 120);
}

function normalizePhone(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 20);
}

export function validateCheckoutRequest(body: unknown): ValidatedCheckout {
  if (!body || typeof body !== "object") {
    throw new CheckoutValidationError("Invalid request body.");
  }

  const { classId, plan, selectedDates, athleteName, email, phone, siblingDiscount } =
    body as Partial<CheckoutRequest>;
  const sibling = siblingDiscount === true;
  const normalizedName = normalizeAthleteName(athleteName);
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);

  if (!normalizedName) {
    throw new CheckoutValidationError("Enter the athlete’s name.");
  }

  if (!normalizedEmail || !EMAIL_PATTERN.test(normalizedEmail)) {
    throw new CheckoutValidationError("Enter a valid parent email.");
  }

  if (normalizedPhone.replace(/\D/g, "").length < 10) {
    throw new CheckoutValidationError("Enter a valid phone number.");
  }

  if (classId === "high-school" || classId === "middle-school") {
    throw new CheckoutValidationError(
      "That class is no longer open for booking."
    );
  }

  if (classId === "psc-starters") {
    if (!isStartersSignupOpen()) {
      throw new CheckoutValidationError(
        "PSC Starters signup closed on November 19."
      );
    }

    if (plan !== "drop-in") {
      throw new CheckoutValidationError(
        "PSC Starters is a four-week package."
      );
    }

    const starterDates = [...GYMDESK.starters.dates];
    if (
      !Array.isArray(selectedDates) ||
      selectedDates.length !== starterDates.length ||
      starterDates.some((dateKey) => !selectedDates.includes(dateKey))
    ) {
      throw new CheckoutValidationError(
        "PSC Starters includes all four Mondays."
      );
    }

    if (!normalizedName) {
      throw new CheckoutValidationError("Enter the athlete’s name.");
    }

    const totalCents = sibling
      ? GYMDESK.starters.siblingPriceCents
      : GYMDESK.starters.priceCents;
    const paymentNote = encodeRosterPaymentNote({
      athleteName: normalizedName,
      email: normalizedEmail,
      classId,
      plan,
      selectedDates: starterDates,
      phone: normalizedPhone,
      siblingDiscount: sibling,
    });

    return {
      classId,
      plan,
      selectedDates: starterDates,
      athleteName: normalizedName,
      email: normalizedEmail,
      phone: normalizedPhone,
      siblingDiscount: sibling,
      lineItems: [
        {
          name: sibling
            ? "PSC Starters 4-week trial, sibling discount"
            : "PSC Starters 4-week trial",
          quantity: 1,
          unitAmountCents: totalCents,
        },
      ],
      totalCents,
      description: `PSC Starters · ${normalizedName} · Nov 23, Nov 30, Dec 7, Dec 14`,
      paymentNote,
    };
  }

  throw new CheckoutValidationError("Choose a valid class.");
}

export class CheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutValidationError";
  }
}
