import {
  getGymdeskBookUrl,
  getMonthlyCheckoutUrl,
  type GymdeskClassId,
} from "./gymdesk";

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
    "Pick the Sundays you want, then check out in Gymdesk. Pay $45 per drop-in, or $150 for a four-session month commitment. No extra charge until you check out.",
  venueName: "Maximum Fitness & Performance",
  venueAddress: "1700 Industrial Rd, STE C, San Carlos, CA 94070",
} as const;

export const PAYMENT_OPTIONS = {
  dropIn: {
    eyebrow: "No monthly commitment",
    title: "Drop-in sessions",
    price: "$45 per Sunday",
    description:
      "Select one or more Sundays, then check out each date in Gymdesk. A good way to try a month before committing.",
  },
  monthly: {
    eyebrow: "Month commitment",
    title: "Monthly plan",
    price: "$150 per month",
    description:
      "Four sessions in the month you choose, one checkout. Best once your athlete is ready to train through the school year. 15% sibling discount.",
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
  session: SessionPaymentLinks,
  variant: SessionCta["variant"] = "primary"
): SessionCta[] {
  if (!session.dropInHref || !session.dropInLabel) return [];

  return [
    {
      href: session.dropInHref,
      label: session.dropInLabel,
      variant,
    },
  ];
}

export function getMonthlyCtas(
  session: SessionPaymentLinks,
  variant: SessionCta["variant"] = "primary"
): SessionCta[] {
  return [
    {
      href: session.registerHref,
      label: session.registerLabel,
      variant,
    },
  ];
}

export function getSessionCtas(session: SessionPaymentLinks): SessionCta[] {
  return [
    ...getDropInCtas(session, "primary"),
    ...getMonthlyCtas(session, "secondary"),
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
    registerHref: getMonthlyCheckoutUrl("middle-school"),
    registerLabel: "Monthly — Middle School",
    dropInHref: getGymdeskBookUrl({ classId: "middle-school" }),
    dropInLabel: "Drop-in — Middle School",
  },
  {
    id: "high-school",
    title: "High School",
    audience: "Girls only",
    startTime: "5:30 PM",
    endTime: "7:00 PM",
    programKey: "intensive",
    registerHref: getMonthlyCheckoutUrl("high-school"),
    registerLabel: "Monthly — High School Girls",
    dropInHref: getGymdeskBookUrl({ classId: "high-school" }),
    dropInLabel: "Drop-in — High School Girls",
  },
];
