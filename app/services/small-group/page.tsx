// app/services/small-group/page.tsx

import TierClientPage from "../../../components/TierClientPage";
import CallToAction from "../../../components/CallToAction";

export default function SmallGroupPage() {
  return (
    <>
      <TierClientPage
        tierLabel="Small Group Training"
        primaryCategory="small_group_clarification"
        categories={[
          "small_group_clarification",
          "service_comparison",
        ]}
      />

      {/* Micro CTA — intentionally subtle */}
      <div style={{ marginTop: 12 }}>
        <CallToAction href="/contact">
          See if Small Group is the right fit
        </CallToAction>
      </div>
    </>
  );
}