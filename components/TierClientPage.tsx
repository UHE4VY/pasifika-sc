// components/TierClientPage.tsx

import PromptRenderer from "./PromptRenderer";
import { buildPromptStack } from "../logic/buildPromptStack";
import type { Prompt, PromptCategory } from "../types/prompts";
import CallToAction from "./CallToAction";

// JSON prompt banks
import tierClarification from "../content/prompts/tierClarification.json";
import serviceComparison from "../content/prompts/serviceComparison.json";
import oneOnOneClarification from "../content/prompts/oneOnOneClarification.json";
import smallGroupClarification from "../content/prompts/smallGroupClarification.json";
import remoteClarification from "../content/prompts/remoteClarification.json";

// NOTE: We are NOT importing/using parentReassurance here on purpose.
// Parent reassurance is handled per-service in each service JSON.

type Props = {
  tierLabel: string;
  categories: PromptCategory[];
  primaryCategory: PromptCategory;
};

function pickFirstByTitle(prompts: Prompt[], patterns: RegExp[]) {
  return prompts.find((p) => patterns.some((rx) => rx.test(p.title)));
}

function reorderForStandardTop3(prompts: Prompt[]) {
      // 1) Pick the three “standard” cards by title patterns
      const why = pickFirstByTitle(prompts, [
        /^why\b/i,
        /why this tier exists\b/i,
        /why .* works\b/i,
      ]);
    
      const who = pickFirstByTitle(prompts, [
        /^who\b/i,
        /who .* is best for\b/i,
        /who this is best for\b/i,
      ]);
    
      const progress = pickFirstByTitle(prompts, [
        /^what progress looks like\b/i,
        /^progress\b/i,
        /\bwhat progress\b/i,
      ]);
    
      const top = [why, who, progress].filter(Boolean) as Prompt[];
      const topIds = new Set(top.map((p) => p.id));
    
      // Helper to normalize titles for matching
      const t = (p: Prompt) => (p.title || "").toLowerCase().trim();
    
      // 2) Sort the rest so “More guidance” is consistent
      const rankRest = (p: Prompt) => {
        const title = t(p);
    
        // Always force reassurance to the very bottom (if it ever gets in here)
        if (title.includes("you're not behind") || title.includes("you’re not behind")) return 999;
    
        // Put comparisons first
        if (title.includes(" vs ")) return 10;
    
        // Then “How to choose…”
        if (title.includes("how to choose")) return 20;
    
        // Everything else
        return 50;
      };
    
      const rest = prompts
        .filter((p) => !topIds.has(p.id))
        .slice()
        .sort((a, b) => rankRest(a) - rankRest(b));
    
      return [...top, ...rest];
    }

export default function TierClientPage({ tierLabel, categories, primaryCategory }: Props) {
  // Must include EVERY PromptCategory key (even if empty) because it's typed as a Record.
  const promptBank: Record<PromptCategory, Prompt[]> = {
    tier_clarification: tierClarification as Prompt[],
    service_comparison: serviceComparison as Prompt[],
    one_on_one_clarification: oneOnOneClarification as Prompt[],
    small_group_clarification: smallGroupClarification as Prompt[],
    remote_clarification: remoteClarification as Prompt[],

    // IMPORTANT: keep this EMPTY so it never auto-renders via the stack
    parent_reassurance: [],

    // Keep unused categories as empty arrays (only if they exist in your PromptCategory union)
    commitment_onboarding: [],
    expansion_addon: [],
  };

  const { prompts } = buildPromptStack(categories, promptBank, {
    primaryCategory,
    maxPrompts: 12,
  });

  // Standardize top-of-page order
  const orderedPrompts = reorderForStandardTop3(prompts);

return (
    <>
      <PromptRenderer tierLabel={tierLabel} prompts={orderedPrompts} />
  
     
    </>
  );
}