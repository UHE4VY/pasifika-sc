import {
  GYMDESK,
  getGymdeskBookUrl,
} from "../../content/gymdesk";
import { type RosterPayload } from "../roster/payload";

export type RosterResult = {
  ok: boolean;
  configured: boolean;
  attempted: number;
  succeeded: number;
  errors: string[];
};

function cookieHeader(response: Response) {
  const cookies =
    typeof response.headers.getSetCookie === "function"
      ? response.headers.getSetCookie()
      : [];
  return cookies
    .map((cookie) => cookie.split(";")[0])
    .filter(Boolean)
    .join("; ");
}

async function createGymdeskBooking(input: {
  classId: RosterPayload["classId"];
  date: string;
  athleteName: string;
  email: string;
  phone: string;
}) {
  const schedule = GYMDESK.schedules[input.classId];
  const pageUrl = getGymdeskBookUrl({
    classId: input.classId,
    date: input.date,
  });
  const page = await fetch(pageUrl, {
    headers: { Accept: "text/html" },
  });
  const cookie = cookieHeader(page);
  const body = new URLSearchParams({
    name: input.athleteName,
    email: input.email,
    phone: input.phone,
    event_id: schedule.sessionId,
    book_date: input.date,
    selected_pricing_id: schedule.dropInPricingId,
    form_id: GYMDESK.bookingFormId,
    waitlist: "0",
  });
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Referer: pageUrl,
    ...(cookie ? { Cookie: cookie } : {}),
  };

  const validate = await fetch(`${GYMDESK.origin}/book/validatebook`, {
    method: "POST",
    headers,
    body,
  });
  const validatePayload = (await validate.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!validate.ok || !validatePayload?.success) {
    throw new Error(
      validatePayload?.message || "Gymdesk could not accept this Sunday."
    );
  }

  const book = await fetch(`${GYMDESK.origin}/book`, {
    method: "POST",
    headers,
    body,
  });
  const bookPayload = (await book.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
    errors?: string[];
  } | null;
  const alreadyBooked = [bookPayload?.message, ...(bookPayload?.errors || [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (alreadyBooked.includes("already")) {
    return;
  }

  if (!book.ok || !bookPayload?.success) {
    throw new Error(
      bookPayload?.message ||
        bookPayload?.errors?.[0] ||
        "Gymdesk booking was not created."
    );
  }
}

export async function rosterAthleteOnGymdesk(
  payload: RosterPayload
): Promise<RosterResult> {
  if (!payload.email) {
    return {
      ok: false,
      configured: true,
      attempted: 0,
      succeeded: 0,
      errors: ["Parent email is required to create Gymdesk bookings."],
    };
  }

  if (!payload.phone) {
    return {
      ok: false,
      configured: true,
      attempted: 0,
      succeeded: 0,
      errors: ["A phone number is required to create Gymdesk bookings."],
    };
  }

  const errors: string[] = [];
  let succeeded = 0;

  for (const date of payload.selectedDates) {
    try {
      await createGymdeskBooking({
        classId: payload.classId,
        date,
        athleteName: payload.athleteName,
        email: payload.email,
        phone: payload.phone,
      });
      succeeded += 1;
    } catch (error) {
      errors.push(
        `${date}: ${
          error instanceof Error ? error.message : "Gymdesk booking failed"
        }`
      );
    }
  }

  return {
    ok: succeeded === payload.selectedDates.length && errors.length === 0,
    configured: true,
    attempted: payload.selectedDates.length,
    succeeded,
    errors,
  };
}
