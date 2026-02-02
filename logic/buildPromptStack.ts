// logic/buildPromptStack.ts
import type { Prompt, PromptCategory } from "../types/prompts";

type Options = {
  primaryCategory?: PromptCategory;
  maxPrompts?: number;
};

function normalizeText(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function buildPromptStack(
  categories: PromptCategory[],
  promptBank: Record<PromptCategory, Prompt[]>,
  options: Options = {}
) {
  const { primaryCategory, maxPrompts = 12 } = options;

  // Primary first, then the rest in provided order (dedup categories)
  const orderedCategories = Array.from(
    new Set([primaryCategory, ...categories].filter(Boolean) as PromptCategory[])
  );

  const seenIds = new Set<string>();
  const seenFingerprints = new Set<string>();

  const prompts: Prompt[] = [];

  for (const cat of orderedCategories) {
    const list = promptBank[cat] ?? [];

    for (const p of list) {
      if (!p?.id) continue;

      // 1) Dedupe by ID
      if (seenIds.has(p.id)) continue;

      // 2) Dedupe by content (title + body) even if IDs differ
      const fp = `${normalizeText(p.title)}|${normalizeText(p.body)}`;
      if (seenFingerprints.has(fp)) continue;

      seenIds.add(p.id);
      seenFingerprints.add(fp);
      prompts.push(p);

      if (prompts.length >= maxPrompts) break;
    }

    if (prompts.length >= maxPrompts) break;
  }

  return { prompts, categories: orderedCategories };
}