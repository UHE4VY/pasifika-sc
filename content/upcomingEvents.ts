import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  type SchoolYearSession,
} from "./schoolYearGroupClasses";

export type UpcomingEventDetail = {
  label: string;
  value: string;
};

export type UpcomingEventRegisterAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "waiver";
};

export type UpcomingEventSession = Pick<
  SchoolYearSession,
  "id" | "title" | "audience" | "description" | "startTime" | "endTime"
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
  imageSrc?: string;
  imageAlt?: string;
  registerHref?: string;
  registerActions?: UpcomingEventRegisterAction[];
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const STARTERS_FLYER = {
  imageSrc: "/events/psc-starters-flyer.jpg",
  imageAlt:
    "PSC Starters flyer for four 90-minute Monday sessions, November 23 through December 14, 7:30–9:00 PM, ages 12 and up, $180",
} as const;

export const STARTERS_SIBLING_NOTE =
  "Families with a sibling in PSC Starters receive 15% off ($153).";

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "psc-elite-2026",
    type: "class",
    title: "PSC Elite",
    subtitle: SCHOOL_YEAR_FLYER.headline,
    sessions: SCHOOL_YEAR_SESSIONS.map((session) => ({
      id: session.id,
      title: session.title,
      audience: session.audience,
      description: session.description,
      startTime: session.startTime,
      endTime: session.endTime,
    })),
    details: [
      { label: "Schedule", value: "Sundays, 4:00–5:30 PM, through December 6" },
      { label: "Format", value: SCHOOL_YEAR_FLYER.duration },
      {
        label: "Investment",
        value: `${SCHOOL_YEAR_FLYER.priceSummary}. ${SCHOOL_YEAR_FLYER.proEdgeNote}`,
      },
    ],
    locationName: SCHOOL_YEAR_FLYER.venueName,
    locationAddress: SCHOOL_YEAR_FLYER.venueAddress,
    imageSrc: SCHOOL_YEAR_FLYER.imageSrc,
    imageAlt: SCHOOL_YEAR_FLYER.imageAlt,
    registerActions: [
      {
        href: "/schedule#book-sessions",
        label: "Book PSC Elite",
      },
    ],
    secondaryHref: "/group-schedule",
    secondaryLabel: "View class schedule",
  },
  {
    id: "psc-starters-2026",
    type: "class",
    title: "PSC Starters",
    subtitle:
      "Four-week trial for athletes new to training, or returning after 6 or more weeks away.",
    details: [
      {
        label: "Schedule",
        value:
          "Mondays, November 23, November 30, December 7, and December 14",
      },
      { label: "Time", value: "7:30–9:00 PM · 90 minutes" },
      {
        label: "Investment",
        value: "$180 for four weeks, paid in full.",
      },
      { label: "Sibling discount", value: STARTERS_SIBLING_NOTE },
    ],
    locationName: SCHOOL_YEAR_FLYER.venueName,
    locationAddress: SCHOOL_YEAR_FLYER.venueAddress,
    imageSrc: STARTERS_FLYER.imageSrc,
    imageAlt: STARTERS_FLYER.imageAlt,
    registerActions: [
      {
        href: "/schedule#psc-starters",
        label: "Sign up for PSC Starters",
      },
    ],
    secondaryHref: "/group-schedule",
    secondaryLabel: "View class schedule",
  },
];
