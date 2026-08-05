import Link from "next/link";

import HomeSection from "@/components/home-section";
import { Button } from "@/components/ui/button";

type WhyAnthonyProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const WhyAnthony = ({ sectionRef }: WhyAnthonyProps) => (
  <HomeSection
    id="why-anthony"
    eyebrow="Why Anthony"
    heading="Why people keep coming back."
    position={9}
    sectionRef={sectionRef}
  >
    <p>
      I don&apos;t walk in with a plan already decided. Every session starts by finding where a pattern actually
      begins — not just where it hurts right now.
    </p>

    <ul className="exp-condition-list">
      <li>Root-cause focus, not just symptom relief</li>
      <li>Fully individualized sessions — no fixed routine</li>
      <li>Trained in fascia-focused, nervous-system-aware bodywork</li>
      <li>[Add years of experience / certifications]</li>
      <li>Lived experience with chronic pain — I know the other side of the table</li>
    </ul>

    <p className="exp-quiet">
      Every person teaches me something. Helping someone understand what&apos;s happening in their own body remains
      one of the things I love most about this work.
    </p>

    <div className="exp-inline-cta">
      <Link href="/about-us">
        <Button
          variant="experience"
          size="experience"
        >
          Meet Anthony
        </Button>
      </Link>
    </div>
  </HomeSection>
);

export default WhyAnthony;
