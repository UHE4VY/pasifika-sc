import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Training",
  description:
    "Structured, coach-led group training for athletes who want consistent progress in speed, strength, movement quality, and confidence.",
};

export default function GroupTrainingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
