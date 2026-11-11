import {
  GYMDESK,
  getUpcomingGymdeskClassDates,
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

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatDateForNote(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

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

  if (classId === "high-school") {
    throw new CheckoutValidationError("High School is not open for booking.");
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

  if (classId !== "middle-school") {
    throw new CheckoutValidationError("Choose a valid class.");
  }

  if (plan !== "drop-in" && plan !== "monthly") {
    throw new CheckoutValidationError("Choose a valid plan.");
  }

  if (!Array.isArray(selectedDates) || selectedDates.length === 0) {
    throw new CheckoutValidationError("Select at least one Sunday.");
  }

  const uniqueDates = [...new Set(selectedDates)];
  if (uniqueDates.length !== selectedDates.length) {
    throw new CheckoutValidationError("Duplicate dates are not allowed.");
  }

  for (const dateKey of uniqueDates) {
    if (typeof dateKey !== "string" || !DATE_KEY_PATTERN.test(dateKey)) {
      throw new CheckoutValidationError("One or more dates are invalid.");
    }
  }

  const allowedDates = new Set(getUpcomingGymdeskClassDates());
  const invalidDates = uniqueDates.filter((dateKey) => !allowedDates.has(dateKey));
  if (invalidDates.length > 0) {
    throw new CheckoutValidationError("One or more dates are not bookable.");
  }

  const sortedDates = [...uniqueDates].sort();
  const schedule = GYMDESK.schedules[classId];
  const dateSummary = sortedDates.map(formatDateForNote).join(", ");

  if (plan === "monthly") {
    throw new CheckoutValidationError(
      "Classes are $45 each. The 4-session pack is no longer available."
    );
  }

  return {
    classId,
    plan,
    selectedDates: sortedDates,
    athleteName: normalizedName,
    email: normalizedEmail,
    phone: normalizedPhone,
    siblingDiscount: false,
    lineItems: [
      {
        name: `${schedule.title} class`,
        quantity: sortedDates.length,
        unitAmountCents: GYMDESK.dropInPrice * 100,
      },
    ],
    totalCents: sortedDates.length * GYMDESK.dropInPrice * 100,
    description: `${schedule.title} · ${normalizedName} · ${dateSummary}`,
    paymentNote: encodeRosterPaymentNote({
      athleteName: normalizedName,
      email: normalizedEmail,
      classId,
      plan,
      selectedDates: sortedDates,
      phone: normalizedPhone,
    }),
  };
}

export class CheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutValidationError";
  }
}
