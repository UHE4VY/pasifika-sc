import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  getSessionCtas,
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

export type UpcomingEvent = {
  id: string;
  type: "workshop" | "class" | "seminar";
  title: string;
  subtitle: string;
  instructor?: string;
  credentials?: string[];
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
    details: [
      { label: "Schedule", value: SCHOOL_YEAR_FLYER.startLabel },
      {
        label: "Session 1",
        value: `${SCHOOL_YEAR_SESSIONS[0].title} (${SCHOOL_YEAR_SESSIONS[0].audience}) ${SCHOOL_YEAR_SESSIONS[0].startTime} – ${SCHOOL_YEAR_SESSIONS[0].endTime}`,
      },
      {
        label: "Session 2",
        value: `${SCHOOL_YEAR_SESSIONS[1].title} (${SCHOOL_YEAR_SESSIONS[1].audience}) ${SCHOOL_YEAR_SESSIONS[1].startTime} – ${SCHOOL_YEAR_SESSIONS[1].endTime}`,
      },
      { label: "Format", value: SCHOOL_YEAR_FLYER.duration },
      { label: "Investment", value: SCHOOL_YEAR_FLYER.priceSummary },
    ],
    imageSrc: SCHOOL_YEAR_FLYER.imageSrc,
    imageAlt: SCHOOL_YEAR_FLYER.imageAlt,
    registerActions: SCHOOL_YEAR_SESSIONS.flatMap((session) =>
      getSessionCtas(session)
    ),
    secondaryHref: "/group-schedule",
    secondaryLabel: "View class schedule",
  },
];
