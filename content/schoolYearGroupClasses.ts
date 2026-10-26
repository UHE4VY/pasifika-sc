import { type GymdeskClassId } from "./gymdesk";

export const BOOK_SESSIONS_HREF = "/schedule#book-sessions";
export const WAIVER_HREF = "/waiver";

export const SCHOOL_YEAR_FACTS = [
  {
    label: "Who",
    value: "Coed, age 13 and up. High school athletes welcome.",
  },
  {
    label: "When",
    value: "Sundays, 4:00–5:30 PM. 90-minute sessions.",
  },
  {
    label: "Price",
    value: "$45 per session. 15 athletes per class.",
  },
  {
    label: "To join",
    value: "Squat, hinge, and press with at least 75 lb.",
  },
  {
    label: "PRO-EDGE",
    value: "Academy students save 15% with code PROEDGE.",
  },
  {
    label: "Where",
    value: "1700 Industrial Rd, Suite C, San Carlos.",
  },
] as const;

export const SCHOOL_YEAR_FLYER = {
  imageSrc: "/events/psc-elite-flyer.jpg",
  imageAlt:
    "PSC Elite flyer for coed Sunday sessions, ages 13 and up, 4:00–5:30 PM, $45 per 90-minute session",
  headline: "Maintain and level up your gains this school year",
  startDate: "2026-09-06",
  endDate: "2026-12-06",
  startLabel: "Sundays starting September 6, 2026",
  endLabel: "through December 6, 2026",
  duration: "90-minute sessions",
  dropInPrice: "$45",
  monthlyPrice: "$150",
  monthlyDetail: "four sessions",
  siblingDiscount: "15% off for siblings",
  priceSummary: "$45 per class",
  proEdgeNote:
    "PRO-EDGE Academy students receive 15% off with code PROEDGE.",
  tryFirstNote:
    "Each class is $45. PRO-EDGE Academy students receive 15% off with code PROEDGE.",
  venueName: "Maximum Fitness & Performance",
  venueAddress: "1700 Industrial Rd, STE C, San Carlos, CA 94070",
} as const;

export const PAYMENT_OPTIONS = {
  dropIn: {
    eyebrow: "Each class",
    title: "PSC Elite",
    price: "$45 per class",
    description: "Pick the Sundays you want. Each class is $45.",
  },
  monthly: {
    eyebrow: "PRO-EDGE Academy",
    title: "15% off",
    price: "Code PROEDGE",
    description: "Academy students receive 15% off each class.",
  },
} as const;

export type SchoolYearSession = {
  id: GymdeskClassId;
  title: string;
  audience: string;
  description?: string;
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
    title: "PSC Elite",
    audience: "Coed",
    description:
      "Ages 13 and up. High school athletes welcome. Athletes must squat, hinge, and press at least 75 lb.",
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    programKey: "jam",
    registerHref: BOOK_SESSIONS_HREF,
    registerLabel: "Book PSC Elite",
    dropInHref: BOOK_SESSIONS_HREF,
    dropInLabel: "Book PSC Elite",
  },
];
