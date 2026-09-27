import { type GymdeskClassId, type GymdeskPlan } from "../../content/gymdesk";

export type RosterPayload = {
  athleteName: string;
  email: string;
  classId: GymdeskClassId;
  plan: GymdeskPlan;
  selectedDates: string[];
  phone?: string;
  orderId?: string;
};

const NOTE_PREFIX = "PSC1:";

export function encodeRosterPaymentNote(payload: RosterPayload) {
  return (
    NOTE_PREFIX +
    JSON.stringify({
      n: payload.athleteName,
      e: payload.email,
      c: payload.classId,
      p: payload.plan,
      d: payload.selectedDates,
      h: payload.phone || undefined,
    })
  );
}

export function parseRosterPaymentNote(
  note: string | null | undefined
): RosterPayload | null {
  if (!note) return null;

  if (note.startsWith(NOTE_PREFIX)) {
    try {
      const raw = JSON.parse(note.slice(NOTE_PREFIX.length)) as {
        n?: string;
        e?: string;
        c?: string;
        p?: string;
        d?: string[];
        h?: string;
      };

      if (
        !raw.n ||
        !raw.e ||
        (raw.c !== "middle-school" && raw.c !== "high-school") ||
        (raw.p !== "drop-in" && raw.p !== "monthly") ||
        !Array.isArray(raw.d) ||
        raw.d.length === 0
      ) {
        return null;
      }

      return {
        athleteName: raw.n,
        email: raw.e,
        classId: raw.c,
        plan: raw.p,
        selectedDates: raw.d,
        phone: raw.h,
      };
    } catch {
      return null;
    }
  }

  // Legacy pipe format from earlier checkouts
  const parts = note.split("|").map((part) => part.trim());
  if (parts[0] !== "PSC roster" || parts.length < 4) return null;

  const athleteName = parts[1];
  const classPart = parts[2] || "";
  const datesPart = parts[parts.length - 1] || "";
  const classId = classPart.includes("high-school")
    ? "high-school"
    : classPart.includes("middle-school")
      ? "middle-school"
      : null;
  const plan = classPart.includes("monthly") ? "monthly" : "drop-in";
  const selectedDates = datesPart
    .split(",")
    .map((date) => date.trim())
    .filter(Boolean);

  if (!athleteName || !classId || selectedDates.length === 0) return null;

  return {
    athleteName,
    email: "",
    classId,
    plan,
    selectedDates,
  };
}

