import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Group Training",
  description:
    "Coach-led small group training for athletes who want more feedback and structure than a large class, without full 1:1 pricing.",
};

export default function SmallGroupTrainingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
