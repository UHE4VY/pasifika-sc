"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
};

export default function CallToAction({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={`cta-button cta-${variant}`}
    >
      {children}
    </Link>
  );
}