"use client";

import { useReveal } from "@/lib/experience/useReveal";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import Welcome from "./sections/Welcome";
import Philosophy from "./sections/Philosophy";
import OurApproach from "./sections/OurApproach";
import Adapting from "./sections/Adapting";
import WhatIHelpWith from "./sections/WhatIHelpWith";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import HowSessionsWork from "./sections/HowSessionsWork";
import Showcase from "./sections/Showcase";
import WhyAnthony from "./sections/WhyAnthony";
import Faq from "./sections/Faq";

const Sections = ({ engine }: { engine: HeroExperienceEngine }) => {
  const reveal = useReveal<HTMLElement>();

  const sectionRef = (index: number) => (el: HTMLElement | null) => {
    engine.registerSection(index)(el);
    reveal(el);
  };

  return (
    <>
      <Welcome sectionRef={sectionRef(0)} />
      <Philosophy sectionRef={sectionRef(1)} />
      <OurApproach sectionRef={sectionRef(2)} />
      <Adapting sectionRef={sectionRef(3)} />
      <WhatIHelpWith sectionRef={sectionRef(4)} />
      <Services sectionRef={sectionRef(5)} />
      <Pricing sectionRef={sectionRef(6)} />
      <HowSessionsWork sectionRef={sectionRef(7)} />
      <Showcase sectionRef={sectionRef(8)} />
      <WhyAnthony sectionRef={sectionRef(9)} />
      <Faq sectionRef={sectionRef(10)} />
    </>
  );
};

export default Sections;
