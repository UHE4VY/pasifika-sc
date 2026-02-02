import type { Prompt } from "../types/prompts";

export default function InlineCallout({
  prompt,
}: {
  prompt: Prompt;
}) {
  return (
    <div
      style={{
        borderLeftWidth: 4,
        borderLeftStyle: "solid",
        borderLeftColor: "#000",

        padding: "16px 18px",
        margin: "18px 0",

        backgroundColor: "#ffffff",
        color: "#111111",

        borderRadius: 8,
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          marginBottom: 6,
          color: "#000000",
        }}
      >
        {prompt.title}
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.6,
          color: "#333333",
        }}
      >
        {prompt.body}
      </p>
    </div>
  );
}