import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  getSessionCtas,
  type SchoolYearSession,
} from "./schoolYearGroupClasses";

export type UpcomingEventDetail = {
  label: string;
  value: string;
};

export type UpcomingEventRegisterAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export type UpcomingEventSession = Pick<
  SchoolYearSession,
  "id" | "title" | "audience" | "startTime" | "endTime"
>;

export type UpcomingEvent = {
  id: string;
  type: "workshop" | "class" | "seminar";
  title: string;
  subtitle: string;
  instructor?: string;
  credentials?: string[];
  sessions?: UpcomingEventSession[];
  details: UpcomingEventDetail[];
  locationName?: string;
  locationAddress?: string;
  imageSrc: string;
  imageAlt: string;
  registerHref?: string;
  registerActions?: UpcomingEventRegisterAction[];
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "school-year-group-classes-2026",
    type: "class",
    title: "School Year Group Classes",
    subtitle: SCHOOL_YEAR_FLYER.headline,
    sessions: SCHOOL_YEAR_SESSIONS.map((session) => ({
      id: session.id,
      title: session.title,
      audience: session.audience,
      startTime: session.startTime,
      endTime: session.endTime,
    })),
    details: [
      { label: "Schedule", value: SCHOOL_YEAR_FLYER.startLabel },
      { label: "Format", value: SCHOOL_YEAR_FLYER.duration },
      { label: "Investment", value: SCHOOL_YEAR_FLYER.priceSummary },
    ],
    imageSrc: SCHOOL_YEAR_FLYER.imageSrc,
    imageAlt: SCHOOL_YEAR_FLYER.imageAlt,
    registerActions: [
      ...SCHOOL_YEAR_SESSIONS.flatMap((session) => getSessionCtas(session)),
      { href: "/waiver", label: "Sign waiver", variant: "secondary" },
    ],
    secondaryHref: "/group-schedule",
    secondaryLabel: "View class schedule",
  },
];
