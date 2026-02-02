export interface DecisionContext {
  pageType?: "home" | "tier" | "onboarding";
  userRole?: "parent" | "athlete";
  funnelStage?: "exploring" | "comparing" | "committing";
}

export function detectDecisionMoments(context: DecisionContext): string[] {
  const { pageType, userRole, funnelStage } = context;

  const signals: string[] = [];

  // On the tier page while comparing, we ALWAYS want tier clarification prompts.
  if (pageType === "tier" && funnelStage === "comparing") {
    signals.push("tier_clarification");
  }

  // If they are comparing services, show service comparison prompts too.
  if (pageType === "tier" && funnelStage === "comparing") {
    signals.push("service_comparison");
  }

  // If user is a parent, also show parent reassurance prompts.
  if (pageType === "tier" && userRole === "parent") {
    signals.push("parent_reassurance");
  }

  // Example for later expansion:
  if (pageType === "onboarding") {
    signals.push("commitment_onboarding");
  }

  return signals;
}