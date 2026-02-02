import Link from "next/link";

export default function ServicesPage() {
  const items = [
    { slug: "small-group", label: "Small Group" },
    { slug: "one-on-one", label: "1:1 Coaching" },
    { slug: "remote", label: "Remote" },
  ];

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Services</h1>
      <p style={{ marginTop: 0, marginBottom: 24 }}>
        Choose a tier to see decision-support prompts in context.
      </p>

      <ul style={{ lineHeight: 2 }}>
        {items.map((i) => (
          <li key={i.slug}>
            <Link href={`/services/${i.slug}`}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}