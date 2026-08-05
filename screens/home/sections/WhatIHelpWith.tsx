import HomeSection from "@/components/home-section";
import CategoryGrid from "@/components/experience/CategoryGrid";

type WhatIHelpWithProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const WhatIHelpWith = ({ sectionRef }: WhatIHelpWithProps) => (
  <HomeSection
    id="what-i-help-with"
    eyebrow="What I Help With"
    heading="Here's where most people begin."
    position={5}
    sectionRef={sectionRef}
  >
    <p>People come to the table for all kinds of reasons. Most of them fall into a few familiar shapes.</p>

    <CategoryGrid
      entries={[
        {
          title: "Pain Relief",
          text: "Tension that's settled in and stayed — in the neck, the low back, the jaw. Work aimed at the pattern underneath it, not just the spot that's loudest.",
        },
        {
          title: "Injury Recovery",
          text: "Old injuries the body worked around instead of resolving, and new ones still finding their way back to full movement.",
        },
        {
          title: "Mobility Improvement",
          text: "Range that narrowed gradually, without one moment to point to — restored the same way it was lost, a little at a time.",
        },
        {
          title: "Stress & Tension Relief",
          text: "A nervous system that hasn't fully downshifted in a while. Sessions built to help it find that gear again.",
        },
      ]}
    />

    <p className="exp-quiet">
      If what brought you here isn&apos;t listed above, that&apos;s alright. The body doesn&apos;t organize itself
      into categories. People don&apos;t either.
    </p>
  </HomeSection>
);

export default WhatIHelpWith;
