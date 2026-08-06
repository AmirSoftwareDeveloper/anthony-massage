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
    position={10}
    sectionRef={sectionRef}
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      I don&apos;t walk in with a plan already decided. Every session starts by finding where a pattern actually begins,
      not just where it hurts right now.
    </p>

    <ul className="mt-1.5 columns-1 list-none gap-x-10 sm:columns-2">
      <li className="border-b border-(--s-rule) py-1.5 text-base font-light break-inside-avoid transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)">
        Root-cause focus, not just symptom relief
      </li>
      <li className="border-b border-(--s-rule) py-1.5 text-base font-light break-inside-avoid transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)">
        Fully individualized sessions, no fixed routine
      </li>
      <li className="border-b border-(--s-rule) py-1.5 text-base font-light break-inside-avoid transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)">
        Trained in fascia-focused, nervous-system-aware bodywork
      </li>
      <li className="border-b border-(--s-rule) py-1.5 text-base font-light break-inside-avoid transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)">
        [Add years of experience / certifications]
      </li>
      <li className="border-b border-(--s-rule) py-1.5 text-base font-light break-inside-avoid transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)">
        Lived experience with chronic pain: I know the other side of the table
      </li>
    </ul>

    <p className="exp-quiet mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      Every person teaches me something. Helping someone understand what&apos;s happening in their own body remains one
      of the things I love most about this work.
    </p>

    <div className="mt-7">
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
