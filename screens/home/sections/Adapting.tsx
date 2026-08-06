import HomeSection from "@/components/home-section";

type AdaptingProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Adapting = ({ sectionRef }: AdaptingProps) => (
  <HomeSection
    id="adapting"
    eyebrow="Understanding"
    heading="Your body is always adapting."
    position={4}
    sectionRef={sectionRef}
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      The body is remarkably intelligent. When movement becomes restricted, it doesn&apos;t simply stop moving. It
      adapts.
    </p>
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      Other muscles begin working harder. Posture changes. Movement patterns shift.
    </p>
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      Over time, those compensations become so familiar they begin to feel normal.
    </p>
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">Until they don&apos;t.</p>
  </HomeSection>
);

export default Adapting;
