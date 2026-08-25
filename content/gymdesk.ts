/**
 * Gymdesk booking for Pasifika Strength & Conditioning.
 *
 * Public booking: https://pasifika-strength-conditioning.gymdesk.com/book
 * Sign-up (waiver + register): https://pasifika-strength-conditioning.gymdesk.com/signup
 *
 * Gymdesk sends X-Frame-Options: SAMEORIGIN, so /book cannot be iframed.
 * Open booking and sign-up in a new tab. An on-site widget requires the
 * dashboard embed snippet (Website → Schedule → Embed Code).
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
      monthlyOption: null,
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

export function getGymdeskClassDates() {
  const start = parseDateKey(GYMDESK.series.startDate);
  const dates: string[] = [];

  for (let index = 0; index < GYMDESK.series.sundayCount; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index * 7);
    dates.push(toDateKey(date));
  }

  return dates;
}

export function getGymdeskDatesForMonth(month: number) {
  return getGymdeskClassDates().filter((dateKey) => {
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

export function getMonthlyCheckoutUrl(classId: GymdeskClassId) {
  const schedule = GYMDESK.schedules[classId];
  if (schedule.monthlyOption) {
    return getGymdeskBookUrl({ classId });
  }
  return schedule.squareMonthlyUrl;
}
