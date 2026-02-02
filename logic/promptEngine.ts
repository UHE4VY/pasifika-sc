import type { PromptCategory } from "../types/prompts";

export function signalsToCategories(signals: string[]): PromptCategory[] {
  const categories = new Set<PromptCategory>();

  for (const signal of signals) {
    if (signal === "tier_page") {
      categories.add("tier_clarification");
    }

    if (signal === "pricing_hesitation") {
      categories.add("parent_reassurance");
    }

    if (signal === "post_commitment") {
      categories.add("commitment_onboarding");
    }
  }

  return Array.from(categories);
}