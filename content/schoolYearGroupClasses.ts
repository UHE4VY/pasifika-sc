export const SCHOOL_YEAR_FLYER = {
  imageSrc: "/events/school-year-group-classes.png",
  imageAlt:
    "Pasifika S&C school-year group classes flyer for Sunday middle school and high school sessions",
  headline: "Maintain and level up your gains this school year",
  startDate: "2026-09-06",
  startLabel: "Sundays starting September 6, 2026",
  duration: "90-minute sessions",
  dropInPrice: "$45",
  monthlyPrice: "$150/mo",
  monthlyDetail: "four sessions",
  siblingDiscount: "15% off for siblings",
  priceSummary: "$45 drop-in · $150/mo for four sessions · 15% sibling discount",
  venueName: "Maximum Fitness & Performance",
  venueAddress: "1700 Industrial Rd, STE C, San Carlos, CA 94070",
} as const;

export type SchoolYearSession = {
  id: string;
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

export function getSessionCtas(session: {
  registerHref: string;
  registerLabel: string;
  dropInHref?: string;
  dropInLabel?: string;
}): SessionCta[] {
  const actions: SessionCta[] = [
    {
      href: session.registerHref,
      label: session.registerLabel,
      variant: "primary",
    },
  ];

  if (session.dropInHref && session.dropInLabel) {
    actions.push({
      href: session.dropInHref,
      label: session.dropInLabel,
      variant: "secondary",
    });
  }

  return actions;
}

export const SCHOOL_YEAR_SESSIONS: SchoolYearSession[] = [
  {
    id: "middle-school",
    title: "Middle School",
    audience: "Coed",
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    programKey: "jam",
    registerHref: "https://square.link/u/1joWZmRg",
    registerLabel: "Register — Middle School",
    dropInHref: "https://square.link/u/RrK3yuwu",
    dropInLabel: "Drop-in — Middle School",
  },
  {
    id: "high-school",
    title: "High School",
    audience: "Girls only",
    startTime: "5:30 PM",
    endTime: "7:00 PM",
    programKey: "intensive",
    registerHref: "https://square.link/u/XcwsaOXt",
    registerLabel: "Register — High School Girls",
    dropInHref: "https://square.link/u/LRGW4MhW",
    dropInLabel: "Drop-in — High School Girls",
  },
];
