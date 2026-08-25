import { type GymdeskClassId } from "./gymdesk";

export const BOOK_SESSIONS_HREF = "/schedule#book-sessions";
export const WAIVER_HREF = "/waiver";

export const SCHOOL_YEAR_FLYER = {
  imageSrc: "/events/school-year-group-classes.png",
  imageAlt:
    "Pasifika S&C school-year group classes flyer for Sunday middle school and high school sessions",
  headline: "Maintain and level up your gains this school year",
  startDate: "2026-09-06",
  endDate: "2026-12-06",
  startLabel: "Sundays starting September 6, 2026",
  endLabel: "through December 6, 2026",
  duration: "90-minute sessions",
  dropInPrice: "$45",
  monthlyPrice: "$150/mo",
  monthlyDetail: "four sessions",
  siblingDiscount: "15% off for siblings",
  priceSummary:
    "$45 drop-in · $150/mo for four sessions · 15% sibling discount",
  tryFirstNote:
    "Sign the waiver first, pick the Sundays you want for the month, then pay once on Square — $45 per drop-in or $150 for four sessions.",
  venueName: "Maximum Fitness & Performance",
  venueAddress: "1700 Industrial Rd, STE C, San Carlos, CA 94070",
} as const;

export const PAYMENT_OPTIONS = {
  dropIn: {
    eyebrow: "No monthly commitment",
    title: "Drop-in sessions",
    price: "$45 per Sunday",
    description:
      "Pick one or more Sundays in a month, then pay on Square. Set the quantity to match how many Sundays you selected.",
  },
  monthly: {
    eyebrow: "Month commitment",
    title: "Monthly plan",
    price: "$150 per month",
    description:
      "Four sessions in the month you choose, one Square checkout. Best once your athlete is ready for the school year. 15% sibling discount.",
  },
} as const;

export type SchoolYearSession = {
  id: GymdeskClassId;
  title: string;
  audience: string;
  startTime: string;
  endTime: string;
  programKey: "jam" | "intensive";
  registerHref: string;
  registerLabel: string;
  dropInHref?: string;
  dropInLabel?: string;
};

export type SessionCta = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

type SessionPaymentLinks = {
  registerHref: string;
  registerLabel: string;
  dropInHref?: string;
  dropInLabel?: string;
};

export function getDropInCtas(
  _session: SessionPaymentLinks,
  variant: SessionCta["variant"] = "primary"
): SessionCta[] {
  return [
    {
      href: BOOK_SESSIONS_HREF,
      label: "Book drop-ins",
      variant,
    },
  ];
}

export function getMonthlyCtas(
  _session: SessionPaymentLinks,
  variant: SessionCta["variant"] = "primary"
): SessionCta[] {
  return [
    {
      href: BOOK_SESSIONS_HREF,
      label: "Book monthly",
      variant,
    },
  ];
}

export function getSessionCtas(_session: SessionPaymentLinks): SessionCta[] {
  return [
    {
      href: BOOK_SESSIONS_HREF,
      label: "Book and pay",
      variant: "primary",
    },
  ];
}

export const SCHOOL_YEAR_SESSIONS: SchoolYearSession[] = [
  {
    id: "middle-school",
    title: "Middle School",
    audience: "Coed",
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    programKey: "jam",
    registerHref: BOOK_SESSIONS_HREF,
    registerLabel: "Book Middle School",
    dropInHref: BOOK_SESSIONS_HREF,
    dropInLabel: "Book Middle School",
  },
  {
    id: "high-school",
    title: "High School",
    audience: "Girls only",
    startTime: "5:30 PM",
    endTime: "7:00 PM",
    programKey: "intensive",
    registerHref: BOOK_SESSIONS_HREF,
    registerLabel: "Book High School",
    dropInHref: BOOK_SESSIONS_HREF,
    dropInLabel: "Book High School",
  },
];
