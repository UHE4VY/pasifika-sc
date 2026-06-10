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
  whiteSpace: "nowrap",
};

const primaryStyle: React.CSSProperties = {
  ...baseStyle,
  backgroundColor: "#1f6feb",
  color: "#ffffff",
  border: "1px solid #1f6feb",
  boxShadow: "0 8px 20px rgba(31,111,235,0.22)",
};

const secondaryStyle: React.CSSProperties = {
  ...baseStyle,
  backgroundColor: "#ffffff",
  color: "#0b1f3a",
  border: "1px solid #e6e1d8",
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
};

const linkStyle: React.CSSProperties = {
  ...baseStyle,
  padding: 0,
  borderRadius: 0,
  backgroundColor: "transparent",
  color: "#1f6feb",
  border: "none",
  boxShadow: "none",
  fontWeight: 700,
};