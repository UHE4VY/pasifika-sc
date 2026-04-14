export type ServiceKey = "small-group" | "one-on-one" | "hybrid" | "remote";
export type TierKey =
  | "1x-week"
  | "2x-week"
  | "3x-week"
  | "programming-only"
  | "check-ins"
  | "high-support";

export type TierData = {
  label: string;
  price: string;
  description: string;
  features: string[];
};

export const pricing: Record<ServiceKey, Record<string, TierData>> = {
  "small-group": {
    "1x-week": {
      label: "1x / week",
      price: "$249/month",
      description: "A strong entry point for athletes building consistency.",
      features: [
        "1 coached small group session per week",
        "Structured progression",
        "Great for building routine and fundamentals",
      ],
    },
    "2x-week": {
      label: "2x / week",
      price: "$449/month",
      description: "Our core option for athletes who want steady measurable progress.",
      features: [
        "2 coached small group sessions per week",
        "Better consistency and accountability",
        "Ideal for long-term athletic development",
      ],
    },
    "3x-week": {
      label: "3x / week",
      price: "$629/month",
      description: "For athletes ready to prioritize training at a higher level.",
      features: [
        "3 coached small group sessions per week",
        "Highest small-group frequency",
        "Best for athletes pursuing bigger performance goals",
      ],
    },
  },

  "one-on-one": {
    "1x-week": {
      label: "1x / week",
      price: "$499/month",
      description: "Focused individualized coaching with a sustainable cadence.",
      features: [
        "1 private coaching session per week",
        "Individualized programming",
        "Best for athletes needing targeted support",
      ],
    },
    "2x-week": {
      label: "2x / week",
      price: "$949/month",
      description: "For athletes who want more frequent coaching and faster refinement.",
      features: [
        "2 private sessions per week",
        "More coaching touchpoints",
        "Accelerated development and feedback",
      ],
    },
    "3x-week": {
      label: "3x / week",
      price: "$1,379/month",
      description: "Maximum coaching attention for high-priority performance goals.",
      features: [
        "3 private sessions per week",
        "Highest level of individual support",
        "Best for athletes needing maximum attention",
      ],
    },
  },

  hybrid: {
    "1x-week": {
      label: "1 in-person + remote",
      price: "$349/month",
      description: "A flexible entry point with coaching support and structure.",
      features: [
        "1 in-person session per week",
        "Remote programming between sessions",
        "Ideal for athletes needing flexibility",
      ],
    },
    "2x-week": {
      label: "2 in-person + remote",
      price: "$649/month",
      description: "Balanced support for athletes who want flexibility without losing momentum.",
      features: [
        "2 in-person sessions per week",
        "Remote programming between sessions",
        "More accountability and consistency",
      ],
    },
    "3x-week": {
      label: "3 touchpoints / week",
      price: "$899/month",
      description: "For athletes who want more coaching support plus independent work.",
      features: [
        "Multiple coaching touchpoints weekly",
        "In-person + remote blend",
        "Strongest hybrid support option",
      ],
    },
  },

  remote: {
    "programming-only": {
      label: "Programming only",
      price: "$149/month",
      description: "A clear plan for athletes who need structure from anywhere.",
      features: [
        "Monthly training plan",
        "Structured weekly programming",
        "Best for self-directed athletes",
      ],
    },
    "check-ins": {
      label: "Programming + check-ins",
      price: "$249/month",
      description: "Added accountability and feedback for athletes who want more support.",
      features: [
        "Monthly training plan",
        "Regular coaching check-ins",
        "Adjustments based on progress",
      ],
    },
    "high-support": {
      label: "High-support remote",
      price: "$399/month",
      description: "For athletes who want the most guidance without being in person full time.",
      features: [
        "Programming",
        "Frequent check-ins",
        "Highest level of remote coaching support",
      ],
    },
  },
};