"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CallToAction from "@/components/CallToAction";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header style={wrap}>
      <nav style={nav}>
        <Link href="/" style={brandWrap}>
          <Image
            src="/psc_logo.png"
            alt="Pasifika Strength & Conditioning"
            width={52}
            height={52}
            priority
            style={logoStyle}
          />

          <div style={brandTextWrap}>
            <span style={brandTop}>Pasifika</span>
            <span style={brandBottom}>Strength &amp; Conditioning</span>
          </div>
        </Link>

        <div style={links}>
          <Link href="/" style={link(isActive("/"))}>
            Home
          </Link>
          <Link href="/services" style={link(isActive("/services"))}>
            Services
          </Link>
          <Link href="/schedule" style={link(isActive("/schedule"))}>
            Schedule
          </Link>
          <Link href="/contact" style={link(isActive("/contact"))}>
            Contact
          </Link>
        </div>

        <div style={cta}>
          <CallToAction href="/schedule" variant="primary">
            Book a consult
          </CallToAction>
        </div>
      </nav>
    </header>
  );
}

const wrap: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: "var(--panel)",
  borderBottom: "1px solid var(--border)",
  backdropFilter: "blur(10px)",
};

const nav: React.CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
  flexWrap: "wrap",
};

const brandWrap: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  textDecoration: "none",
  minWidth: 0,
  flexShrink: 0,
};

const logoStyle: React.CSSProperties = {
  width: 60,
  height: 60,
  objectFit: "contain",
  flexShrink: 0,
};

const brandTextWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1,
};

const brandTop: React.CSSProperties = {
  fontWeight: 900,
  fontSize: 18,
  letterSpacing: 0.3,
  color: "var(--navy)",
};

const brandBottom: React.CSSProperties = {
  marginTop: 4,
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: 0.2,
  color: "var(--muted)",
};

const links: React.CSSProperties = {
  display: "flex",
  gap: 14,
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
};

const link = (active: boolean): React.CSSProperties => ({
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 13,
  paddingBottom: 6,
  color: active ? "var(--navy)" : "var(--muted)",
  borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
});

const cta: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
};