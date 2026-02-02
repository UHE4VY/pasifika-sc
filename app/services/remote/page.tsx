// app/services/remote/page.tsx
import TierClientPage from "../../../components/TierClientPage";
import CallToAction from "../../../components/CallToAction";

export default function RemotePage() {
  return (
    <>
      <TierClientPage
        tierLabel="Remote Coaching"
        primaryCategory="remote_clarification"
        categories={["remote_clarification"]}
      />

      <CallToAction href="/contact">
        See if Remote fits your schedule
      </CallToAction>
    </>
  );
}