// components/BookingEmbed.tsx
"use client";

type Props = {
  title?: string;
  /** Use the EMBED iframe src (from Google "Website embed"), not the calendar.app.google share link */
  embedSrc?: string;
  /** Optional: fallback button opens booking page in new tab (your calendar.app.google link) */
  fallbackHref?: string;
  height?: number;
};

export default function BookingEmbed({
  title,
  embedSrc,
  fallbackHref,
  height = 720,
}: Props) {
  if (!embedSrc) {
    return (
      <div style={{ opacity: 0.85 }}>
        <p style={{ marginTop: 0 }}>
          Embed not set yet. Use Google Calendar → Booking pages → Website embed → Inline booking page,
          then paste the iframe <code>src</code> into <code>embedSrc</code>.
        </p>
        {fallbackHref ? (
          <p style={{ marginBottom: 0 }}>
            <a href={fallbackHref} target="_blank" rel="noreferrer">
              Open booking page
            </a>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {title ? <p style={{ opacity: 0.8, marginTop: 0 }}>{title}</p> : null}

      <iframe
        src={embedSrc}
        style={{
          width: "100%",
          height,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          background: "white",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {fallbackHref ? (
        <div style={{ marginTop: 10 }}>
          <a href={fallbackHref} target="_blank" rel="noreferrer">
            Open booking page
          </a>
        </div>
      ) : null}
    </div>
  );
}