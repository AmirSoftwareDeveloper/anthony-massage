import HomeSection from "@/components/home-section";

type AdaptingProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Adapting = ({ sectionRef }: AdaptingProps) => (
  <HomeSection
    id="adapting"
    eyebrow="Understanding"
    heading="Your body is always adapting."
    position={3}
    sectionRef={sectionRef}
  >
    <p>The body is remarkably intelligent. When movement becomes restricted, it doesn&apos;t simply stop moving. It adapts.</p>
    <p>Other muscles begin working harder. Posture changes. Movement patterns shift.</p>
    <p>Over time, those compensations become so familiar they begin to feel normal.</p>
    <p>Until they don&apos;t.</p>
  </HomeSection>
);

export default Adapting;
