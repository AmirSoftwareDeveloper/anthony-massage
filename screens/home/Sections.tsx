"use client";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";
import { useReveal } from "@/lib/experience/useReveal";

import Faq from "./sections/Faq";
import OurApproach from "./sections/OurApproach";
import Philosophy from "./sections/Philosophy";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Welcome from "./sections/Welcome";

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
      <Services sectionRef={sectionRef(5)} />
      <Testimonials sectionRef={sectionRef(11)} />
      <Faq sectionRef={sectionRef(12)} />
    </>
  );
};

export default Sections;
