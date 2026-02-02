import TierClientPage from "../../../components/TierClientPage";
import CallToAction from "../../../components/CallToAction";

export default function OneOnOnePage() {
  return (
    <>
      <TierClientPage
        tierLabel="1:1 Coaching"
        primaryCategory="one_on_one_clarification"
        categories={["one_on_one_clarification"]}
      />

      <div style={{ marginTop: 12 }}>
        <CallToAction href="/contact">
          Talk through whether 1:1 makes sense
        </CallToAction>
      </div>
    </>
  );
}