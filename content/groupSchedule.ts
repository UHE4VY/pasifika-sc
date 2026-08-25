import { GYMDESK } from "./gymdesk";
import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  type SchoolYearSession,
} from "./schoolYearGroupClasses";

export type GroupClassTemplate = {
  id: SchoolYearSession["id"];
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  title: string;
  subtitle: string;
  programKey: "intensive" | "jam";
  startDate: string;
  endDate: string;
  registerHref: string;
  registerLabel: string;
  dropInHref?: string;
  dropInLabel?: string;
};

export const GROUP_SCHEDULE_YEAR = 2026;

export const GROUP_SCHEDULE_MONTHS = [
  { month: 9, label: "September 2026" },
  { month: 10, label: "October 2026" },
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
    programKey: session.programKey,
    startDate: SCHOOL_YEAR_FLYER.startDate,
    endDate: GYMDESK.series.endDate,
    registerHref: session.registerHref,
    registerLabel: session.registerLabel,
    dropInHref: session.dropInHref,
    dropInLabel: session.dropInLabel,
  })
);

export const CANCELLED_CLASS_DATES: string[] = [
  ...GYMDESK.series.cancelledDates,
];

export const PROGRAM_NOTES = [
  `${SCHOOL_YEAR_FLYER.startLabel} ${SCHOOL_YEAR_FLYER.endLabel}.`,
  "No class on November 1 or November 29.",
  "Each class is 90 minutes.",
  SCHOOL_YEAR_FLYER.priceSummary,
  `At ${SCHOOL_YEAR_FLYER.venueName}, ${SCHOOL_YEAR_FLYER.venueAddress}.`,
  "Sign the waiver, pick Sundays, then pay once on Square.",
];
