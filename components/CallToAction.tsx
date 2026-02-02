// components/CallToAction.tsx
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function CallToAction({ href, children }: Props) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        fontSize: 13,
        fontStyle: "italic",
        opacity: 0.75,
        textDecoration: "underline",
        textUnderlineOffset: 3,
      }}
    >
      {children}
    </Link>
  );
}