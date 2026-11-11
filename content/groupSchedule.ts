import { GYMDESK, type GymdeskClassId } from "./gymdesk";
import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
} from "./schoolYearGroupClasses";
import { STARTERS_SIBLING_NOTE } from "./upcomingEvents";

export type GroupClassTemplate = {
  id: GymdeskClassId;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  title: string;
  subtitle: string;
  description?: string;
  programKey: "intensive" | "jam" | "starters";
  startDate: string;
  endDate: string;
  registerHref: string;
  registerLabel: string;
  dropInHref?: string;
  dropInLabel?: string;
};

export const GROUP_SCHEDULE_YEAR = 2026;

export const GROUP_SCHEDULE_MONTHS = [
  { month: 11, label: "November 2026" },
  { month: 12, label: "December 2026" },
];

export const WEEKLY_GROUP_CLASSES: GroupClassTemplate[] = SCHOOL_YEAR_SESSIONS.map(
  (session) => ({
    id: session.id,
    dayOfWeek: 0,
    startTime: session.startTime,
    endTime: session.endTime,
    title: session.title,
    subtitle: session.audience,
    description: session.description,
    programKey: session.programKey,
    startDate: SCHOOL_YEAR_FLYER.startDate,
    endDate: GYMDESK.series.endDate,
    registerHref: session.registerHref,
    registerLabel: session.registerLabel,
    dropInHref: session.dropInHref,
    dropInLabel: session.dropInLabel,
  })
);

const starters = GYMDESK.schedules["psc-starters"];

WEEKLY_GROUP_CLASSES.push({
  id: "psc-starters",
  dayOfWeek: 1,
  startTime: starters.startTime,
  endTime: starters.endTime,
  title: starters.title,
  subtitle: starters.audience,
  description:
    "For athletes new to training, or returning after 6 or more weeks away. Four Mondays, paid in full.",
  programKey: "starters",
  startDate: GYMDESK.starters.dates[0],
  endDate: GYMDESK.starters.dates[GYMDESK.starters.dates.length - 1],
  registerHref: "/schedule#psc-starters",
  registerLabel: "Sign up for PSC Starters",
});

export const CANCELLED_CLASS_DATES: string[] = [
  ...GYMDESK.series.cancelledDates,
];

export const PROGRAM_NOTES = [
  "PSC Elite meets Sundays, 4:00–5:30 PM, through December 6, 2026.",
  "No class on November 1 or November 29.",
  SCHOOL_YEAR_FLYER.priceSummary,
  SCHOOL_YEAR_FLYER.proEdgeNote,
  "PSC Starters meets Mondays, November 23, November 30, December 7, and December 14, 7:30–9:00 PM.",
  `Four weeks are $180, paid in full before November 23. ${STARTERS_SIBLING_NOTE}`,
  "Each class is 90 minutes.",
  `At ${SCHOOL_YEAR_FLYER.venueName}, ${SCHOOL_YEAR_FLYER.venueAddress}.`,
];
