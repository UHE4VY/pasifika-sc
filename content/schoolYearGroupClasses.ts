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
  registerHref: "https://square.link/u/AvHYq975",
  priceSummary: "$45 drop-in · $150/mo for four sessions · 15% sibling discount",
} as const;

export const SCHOOL_YEAR_SESSIONS = [
  {
    id: "middle-school",
    title: "Middle School",
    audience: "Coed",
    startTime: "4:00 PM",
    endTime: "5:30 PM",
    programKey: "jam" as const,
  },
  {
    id: "high-school",
    title: "High School",
    audience: "Girls only",
    startTime: "5:30 PM",
    endTime: "7:00 PM",
    programKey: "intensive" as const,
  },
] as const;
