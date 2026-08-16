import { SCHOOL_YEAR_FLYER, SCHOOL_YEAR_SESSIONS } from "./schoolYearGroupClasses";

export type GroupClassTemplate = {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  title: string;
  subtitle: string;
  programKey: "intensive" | "jam";
  startDate: string;
  endDate: string;
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
    dayOfWeek: 0,
    startTime: session.startTime,
    endTime: session.endTime,
    title: session.title,
    subtitle: session.audience,
    programKey: session.programKey,
    startDate: SCHOOL_YEAR_FLYER.startDate,
    endDate: "2026-12-31",
  })
);

export const CANCELLED_CLASS_DATES: string[] = [];

export const PROGRAM_NOTES = [
  SCHOOL_YEAR_FLYER.startLabel,
  "Each class is 90 minutes.",
  SCHOOL_YEAR_FLYER.priceSummary,
];
