"use client";

import { HOME_EXPERIENCE_SECTIONS } from "@/constants/homeExperience";

import { useReveal } from "@/lib/experience/useReveal";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import ContentBlock from "@/components/content-block";
import HomeSection from "@/components/home-section";

import SpillCascade from "./sections/SpillCascade";

const Sections = ({ engine }: { engine: HeroExperienceEngine }) => {
  const reveal = useReveal<HTMLElement>();

  return (
    <>
      {HOME_EXPERIENCE_SECTIONS.map((section, i) => (
        <HomeSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          position={section.position}
          layout={section.layout}
          sectionRef={(el) => {
            engine.registerSection(i)(el);
            reveal(el);
          }}
          decoration={i === 0 && <SpillCascade />}
        >
          {section.blocks.map((block, bi) => (
            <ContentBlock
              key={bi}
              block={block}
            />
          ))}
        </HomeSection>
      ))}
    </>
  );
};

export default Sections;
