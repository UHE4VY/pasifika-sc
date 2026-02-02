export type PromptCategory =
  | "tier_clarification"
  | "parent_reassurance"
  | "service_comparison"
  | "commitment_onboarding"
  | "expansion_addon"
  | "remote_clarification"
  | "one_on_one_clarification"
  | "small_group_clarification";
export interface Prompt {
  id: string;
  title: string;
  body: string;
  ui?: "inline" | "sidepanel" | "expandable";

  // Optional because some JSON files may not include it.
  // If missing, we'll set it later in buildPromptStack.
  category?: PromptCategory;
}