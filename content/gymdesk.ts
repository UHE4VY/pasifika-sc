/**
 * Gymdesk booking for Pasifika Strength & Conditioning.
 *
 * Public booking: https://pasifika-strength-conditioning.gymdesk.com/book
 * Sign-up (waiver + register): https://pasifika-strength-conditioning.gymdesk.com/signup
 *
 * Gymdesk sends X-Frame-Options: SAMEORIGIN, so /book cannot be iframed.
 * Parents sign the waiver in Gymdesk, pick dates on /schedule, then pay via
 * dynamic Square checkout (/api/checkout). After payment, the site posts each
 * Sunday to GYMDESK_ROSTER_WEBHOOK_URL (Zapier → Gymdesk Create Booking).
 */
export type GymdeskClassId = "middle-school" | "high-school";
export type GymdeskPlan = "drop-in" | "monthly";

export const GYMDESK = {
  origin: "https://pasifika-strength-conditioning.gymdesk.com",
  bookingUrl: "https://pasifika-strength-conditioning.gymdesk.com/book",
  signupUrl: "https://pasifika-strength-conditioning.gymdesk.com/signup",
  loginUrl: "https://pasifika-strength-conditioning.gymdesk.com",
  gymId: "23528",
  dropInPrice: 45,
  monthlyPrice: 150,
  monthlySessionCount: 4,
  series: {
    startDate: "2026-09-06",
    endDate: "2026-12-06",
    sundayCount: 14,
    /** Synced from Gymdesk cancel_dates on both class series. */
    cancelledDates: ["2026-11-01", "2026-11-29"] as const,
  },
  schedules: {
    "middle-school": {
      scheduleId: "36061",
      sessionId: "1774027",
      title: "Middle School",
      audience: "Coed",
      startTime: "4:00 PM",
      endTime: "5:30 PM",
      dropInOption: "Standard Drop-In",
      monthlyOption: null as string | null,
      squareDropInUrl: "https://square.link/u/RrK3yuwu",
      squareMonthlyUrl: "https://square.link/u/1joWZmRg",
    },
    "high-school": {
      scheduleId: "36062",
      sessionId: "1774028",
      title: "High School",
      audience: "Girls only",
      startTime: "5:30 PM",
      endTime: "7:00 PM",
      dropInOption: "Drop-In Rate",
      monthlyOption: "Monthly Commitment Rate",
      squareDropInUrl: "https://square.link/u/LRGW4MhW",
      squareMonthlyUrl: "https://square.link/u/XcwsaOXt",
    },
  },
} as const;

function parseDateKey(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getGymdeskClassDates(options?: { includeCancelled?: boolean }) {
  const start = parseDateKey(GYMDESK.series.startDate);
  const cancelled = new Set<string>(GYMDESK.series.cancelledDates);
  const dates: string[] = [];

  for (let index = 0; index < GYMDESK.series.sundayCount; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index * 7);
    const dateKey = toDateKey(date);

    if (!options?.includeCancelled && cancelled.has(dateKey)) continue;
    dates.push(dateKey);
  }

  return dates;
}

export function getGymdeskDatesForMonth(
  month: number,
  options?: { includeCancelled?: boolean }
) {
  return getGymdeskClassDates(options).filter((dateKey) => {
    const date = parseDateKey(dateKey);
    return date.getMonth() + 1 === month;
  });
}

export function getGymdeskBookUrl(options?: {
  classId?: GymdeskClassId;
  date?: string;
}) {
  const url = new URL(GYMDESK.bookingUrl);
  const schedule = options?.classId
    ? GYMDESK.schedules[options.classId]
    : undefined;

  if (schedule) {
    url.searchParams.set("schedule", schedule.scheduleId);
    url.searchParams.set("s", schedule.sessionId);
  }

  if (options?.date) {
    url.searchParams.set("date", options.date);
  }

  return url.toString();
}

/** @deprecated Static links — booking uses /api/checkout for dynamic totals. */
export function getSquareCheckoutUrl(
  classId: GymdeskClassId,
  plan: GymdeskPlan
) {
  const schedule = GYMDESK.schedules[classId];
  return plan === "monthly"
    ? schedule.squareMonthlyUrl
    : schedule.squareDropInUrl;
}

/** @deprecated Prefer getSquareCheckoutUrl for payment. */
export function getMonthlyCheckoutUrl(classId: GymdeskClassId) {
  return getSquareCheckoutUrl(classId, "monthly");
}
