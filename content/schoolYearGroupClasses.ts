import { type GymdeskClassId } from "./gymdesk";

export const BOOK_SESSIONS_HREF = "/schedule#book-sessions";
export const WAIVER_HREF = "/waiver";

export const SCHOOL_YEAR_FLYER = {
  imageSrc: "/events/psc-elite.png",
  imageAlt:
    "Pasifika Strength & Conditioning logo with PSC Elite class details: Sundays 4:00–5:30 PM, $45 per class",
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
    "PRO-EDGE athletes receive a 15% discount. Please contact Coach Josh for the code.",
  tryFirstNote:
    "Each class is $45. PRO-EDGE athletes receive a 15% discount. Please contact Coach Josh for the code.",
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
    eyebrow: "PRO-EDGE athletes",
    title: "15% discount",
    price: "",
    description:
      "PRO-EDGE athletes receive a 15% discount. Please contact Coach Josh for the code.",
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
      "7th grade and up. Athletes must be able to execute the core barbell lifts. Includes Olympic lifts, plyometrics, power development, and more.",
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    programKey: "jam",
    registerHref: BOOK_SESSIONS_HREF,
    registerLabel: "Book PSC Elite",
    dropInHref: BOOK_SESSIONS_HREF,
    dropInLabel: "Book PSC Elite",
  },
];
