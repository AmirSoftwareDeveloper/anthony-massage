"use client";

import { useReveal } from "@/lib/experience/useReveal";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import Welcome from "./sections/Welcome";
import Philosophy from "./sections/Philosophy";
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
      <Adapting sectionRef={sectionRef(2)} />
      <WhatIHelpWith sectionRef={sectionRef(3)} />
      <Services sectionRef={sectionRef(4)} />
      <Pricing sectionRef={sectionRef(5)} />
      <HowSessionsWork sectionRef={sectionRef(6)} />
      <Showcase sectionRef={sectionRef(7)} />
      <WhyAnthony sectionRef={sectionRef(8)} />
      <Faq sectionRef={sectionRef(9)} />
    </>
  );
};

export default Sections;
