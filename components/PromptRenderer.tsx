"use client";

import { useMemo, useState } from "react";
import type { Prompt } from "../types/prompts";

type Props = {
  tierLabel?: string;
  prompts: Prompt[];

  // Micro-CTAs (text only)
  ctaAfterTop3?: string;
  ctaAfterHowToChoose?: string;
  ctaAfterReassurance?: string;

  // Optional label tweaks
  moreGuidanceLabel?: string; // default "More guidance"
  lessGuidanceLabel?: string; // default "Show less"
};

function MicroCTA({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <p
      style={{
        marginTop: 6,
        marginBottom: 4,
        fontSize: 13,
        lineHeight: 1.5,
        fontStyle: "italic",
        opacity: 0.65,
      }}
    >
      {text}
    </p>
  );
}

function Card({ p }: { p: Prompt }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        background: "#fff",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{p.title}</div>
      <div style={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{p.body}</div>
    </div>
  );
}

export default function PromptRenderer({
  tierLabel,
  prompts,
  ctaAfterTop3,
  ctaAfterHowToChoose,
  ctaAfterReassurance,
  moreGuidanceLabel = "More guidance",
  lessGuidanceLabel = "Show less",
}: Props) {
  const [open, setOpen] = useState(false);

  const { top, guidance } = useMemo(() => {
    const topPrompts = prompts.slice(0, 3);
    const rest = prompts.slice(3);
    return { top: topPrompts, guidance: rest };
  }, [prompts]);

  const isHowToChoose = (p: Prompt) => /how to choose/i.test(p.title);
  const isReassurance = (p: Prompt) => /you[’']re not behind/i.test(p.title);

  return (
    <section style={{ marginTop: 16 }}>
      {tierLabel ? (
        <h1 style={{ fontSize: 28, marginBottom: 10 }}>{tierLabel}</h1>
      ) : null}

      {/* TOP 3 */}
      {top.map((p) => (
        <div key={p.id}>
          <Card p={p} />
          {/* CTA #3: after reassurance, if reassurance happens to be in top */}
          {isReassurance(p) && <MicroCTA text={ctaAfterReassurance} />}
        </div>
      ))}

      {/* CTA #1: after top 3 */}
      <MicroCTA text={ctaAfterTop3} />

      {/* MORE GUIDANCE */}
      {guidance.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              border: "1px solid #111",
              background: open ? "#111" : "#fff",
              color: open ? "#fff" : "#111",
              borderRadius: 10,
              padding: "10px 12px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {open ? lessGuidanceLabel : moreGuidanceLabel}
          </button>

          {open && (
            <div style={{ marginTop: 14 }}>
              {guidance.map((p) => (
                <div key={p.id}>
                  <Card p={p} />

                  {/* CTA #2: right after "How to choose..." */}
                  {isHowToChoose(p) && <MicroCTA text={ctaAfterHowToChoose} />}

                  {/* CTA #3: right after reassurance (if reassurance is in guidance) */}
                  {isReassurance(p) && <MicroCTA text={ctaAfterReassurance} />}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}