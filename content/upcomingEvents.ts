export type UpcomingEvent = {
  id: string;
  type: "workshop" | "class" | "seminar";
  title: string;
  subtitle: string;
  instructor: string;
  credentials: string[];
  schedule: string;
  time: string;
  duration: string;
  audience: string;
  price: string;
  skills: string[];
  locationName: string;
  locationAddress: string;
  imageSrc: string;
  imageAlt: string;
  registerHref: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "intro-olympic-weightlifting-2026",
    type: "workshop",
    title: "Intro to Olympic Weightlifting",
    subtitle: "Weightlifting Workshop",
    instructor: "Coach Joshua Uikilifi",
    credentials: [
      "2x IWF World Championship competitor",
      "Oceania & Commonwealth Championship medalist",
    ],
    schedule: "Sundays, August 8 – September 5",
    time: "1:30 PM – 3:00 PM",
    duration: "Five 90-minute sessions",
    audience: "Ages 13+",
    price: "$350",
    skills: ["Clean", "Jerk", "Snatch"],
    locationName: "Maximum Fitness & Performance",
    locationAddress: "1700 Industrial Rd, Ste C, San Carlos",
    imageSrc: "/events/weightlifting-workshop.png",
    imageAlt:
      "Intro to Olympic Weightlifting workshop poster featuring Coach Joshua Uikilifi",
    registerHref:
      "mailto:pasifikasc@gmail.com?subject=Olympic%20Weightlifting%20Workshop%20Registration",
  },
];
