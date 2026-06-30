export type GroupClassTemplate = {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  title: string;
  subtitle: string;
  programKey: "intensive" | "jam";
  endDate: string;
};

export const GROUP_SCHEDULE_YEAR = 2026;

export const GROUP_SCHEDULE_MONTHS = [
  { month: 7, label: "July 2026" },
  { month: 8, label: "August 2026" },
];

export const WEEKLY_GROUP_CLASSES: GroupClassTemplate[] = [
  {
    dayOfWeek: 1,
    startTime: "7:30 PM",
    endTime: "9:00 PM",
    title: "Summer Intensive",
    subtitle: "Incoming HS & HS female athletes",
    programKey: "intensive",
    endDate: "2026-08-17",
  },
  {
    dayOfWeek: 2,
    startTime: "7:30 PM",
    endTime: "9:00 PM",
    title: "Summer Jam",
    subtitle: "Ages 10-13",
    programKey: "jam",
    endDate: "2026-07-21",
  },
  {
    dayOfWeek: 5,
    startTime: "7:00 PM",
    endTime: "8:30 PM",
    title: "Summer Jam",
    subtitle: "Ages 10-13",
    programKey: "jam",
    endDate: "2026-07-21",
  },
];

export const CANCELLED_CLASS_DATES = ["2026-07-03", "2026-07-06"];

export const PROGRAM_END_NOTES = [
  {
    program: "Summer Intensive",
    endDate: "August 17",
    detail: "Incoming HS & HS female athletes",
  },
  {
    program: "Summer Jam",
    endDate: "July 21",
    detail: "Ages 10-13",
  },
];
