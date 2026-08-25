import {
  GYMDESK,
  getGymdeskClassDates,
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

export function validateCheckoutRequest(body: unknown): ValidatedCheckout {
  if (!body || typeof body !== "object") {
    throw new CheckoutValidationError("Invalid request body.");
  }

  const { classId, plan, selectedDates, athleteName, email } =
    body as Partial<CheckoutRequest>;
  const normalizedName = normalizeAthleteName(athleteName);
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedName) {
    throw new CheckoutValidationError("Enter the athlete’s name.");
  }

  if (!normalizedEmail || !EMAIL_PATTERN.test(normalizedEmail)) {
    throw new CheckoutValidationError("Enter a valid parent email.");
  }

  if (classId !== "middle-school" && classId !== "high-school") {
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

  const allowedDates = new Set(getGymdeskClassDates());
  const invalidDates = uniqueDates.filter((dateKey) => !allowedDates.has(dateKey));
  if (invalidDates.length > 0) {
    throw new CheckoutValidationError("One or more dates are not bookable.");
  }

  const sortedDates = [...uniqueDates].sort();
  const schedule = GYMDESK.schedules[classId];
  const dateSummary = sortedDates.map(formatDateForNote).join(", ");
  const who = normalizedName;

  const paymentNote = encodeRosterPaymentNote({
    athleteName: who,
    email: normalizedEmail,
    classId,
    plan,
    selectedDates: sortedDates,
  });

  if (plan === "monthly") {
    if (sortedDates.length !== GYMDESK.monthlySessionCount) {
      throw new CheckoutValidationError(
        `Monthly checkout requires exactly ${GYMDESK.monthlySessionCount} Sundays.`
      );
    }

    return {
      classId,
      plan,
      selectedDates: sortedDates,
      athleteName: who,
      email: normalizedEmail,
      lineItems: [
        {
          name: `${schedule.title} monthly (${GYMDESK.monthlySessionCount} sessions)`,
          quantity: 1,
          unitAmountCents: GYMDESK.monthlyPrice * 100,
        },
      ],
      totalCents: GYMDESK.monthlyPrice * 100,
      description: `${schedule.title} monthly · ${who} · ${dateSummary}`,
      paymentNote,
    };
  }

  return {
    classId,
    plan,
    selectedDates: sortedDates,
    athleteName: who,
    email: normalizedEmail,
    lineItems: [
      {
        name: `${schedule.title} drop-in`,
        quantity: sortedDates.length,
        unitAmountCents: GYMDESK.dropInPrice * 100,
      },
    ],
    totalCents: sortedDates.length * GYMDESK.dropInPrice * 100,
    description: `${schedule.title} drop-in · ${who} · ${dateSummary}`,
    paymentNote,
  };
}

export class CheckoutValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutValidationError";
  }
}
