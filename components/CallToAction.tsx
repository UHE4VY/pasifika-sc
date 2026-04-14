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
  const style =
    variant === "primary"
      ? primaryStyle
      : variant === "secondary"
      ? secondaryStyle
      : linkStyle;

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: 12,
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
  lineHeight: 1.2,
  transition: "all 0.2s ease",
};

const primaryStyle: React.CSSProperties = {
  ...baseStyle,
  background: "var(--accent)",
  color: "#ffffff",
  border: "1px solid var(--accent)",
  boxShadow: "0 8px 20px rgba(31,111,235,0.22)",
};

const secondaryStyle: React.CSSProperties = {
  ...baseStyle,
  background: "#ffffff",
  color: "var(--navy)",
  border: "1px solid var(--border)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
};

const linkStyle: React.CSSProperties = {
  ...baseStyle,
  padding: 0,
  borderRadius: 0,
  background: "transparent",
  color: "var(--accent)",
  border: "none",
  boxShadow: "none",
  fontWeight: 700,
};