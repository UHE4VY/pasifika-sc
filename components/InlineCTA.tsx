import Link from "next/link";

export default function InlineCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 6 }}>
      <Link
        href={href}
        style={{
          fontSize: 13,
          fontStyle: "italic",
          opacity: 0.75,
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        {children}
      </Link>
    </div>
  );
}