import NextImage from "next/image";
import Link from "next/link";

import StatGrid from "@/components/experience/StatGrid";
import HomeSection from "@/components/home-section";
import { Button } from "@/components/ui/button";

type PhilosophyProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Philosophy = ({ sectionRef }: PhilosophyProps) => (
  <HomeSection
    id="philosophy"
    eyebrow="Our Philosophy"
    heading="Lasting change, not just temporary relief."
    layout="media-split"
    position={2}
    sectionRef={sectionRef}
    media={
      <div className="relative aspect-[13/14] overflow-hidden rounded-3xl shadow-xl">
        <NextImage
          src="/images/about/philosophy.jpeg"
          alt="[Alt text]"
          fill
          sizes="(min-width: 860px) 480px, 100vw"
          className="object-cover"
        />
      </div>
    }
    after={
      /* NOT CONFIRMED: the first three figures are estimates, not Anthony's
         records. They are internally consistent (8,000 sessions over 12 years
         is ~14 a week) and plausible for a solo practitioner, but they are
         public claims about a real business — check them against his actual
         numbers before this goes live. The 90 minutes is the one real figure:
         it's the extended session in the pricing section below. */
      <StatGrid
        stats={[
          { value: 8000, suffix: "+", label: "Sessions completed" },
          { value: 12, label: "Years in practice" },
          { value: 600, suffix: "+", label: "Hours of continuing education" },
          { value: 90, label: "Minutes in an extended session" },
        ]}
      />
    }
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      I don&apos;t believe in one-size-fits-all bodywork. Pain rarely announces where it actually begins, so every
      session starts by listening to what your body is doing today, not what a routine says it should need. Finding
      where a pattern starts is often the first step toward changing it.
    </p>

    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      That means the work changes as you do. Some areas need patience before they need pressure, and a session that
      follows what your body is actually asking for will rarely look like the one before it. What stays the same is the
      attention.
    </p>

    <div className="mt-7">
      <Link href="/about-us">
        <Button
          variant="experience"
          size="experience"
        >
          More About Me
        </Button>
      </Link>
    </div>
  </HomeSection>
);

export default Philosophy;
