"use client";

import { cn } from "@/utils";

import { HOME_EXPERIENCE_SECTIONS } from "@/constants/homeExperience";

import { useReveal } from "@/lib/experience/useReveal";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import ContentBlock from "@/components/content-block";

import SpillCascade from "./sections/SpillCascade";

const Sections = ({ engine }: { engine: HeroExperienceEngine }) => {
  const reveal = useReveal<HTMLElement>();

  return (
    <>
      {HOME_EXPERIENCE_SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => {
            engine.registerSection(i)(el);
            reveal(el);
          }}
          className={cn("exp-section exp-reveal", `exp-pos-${section.position}`)}
        >
          {i === 0 && <SpillCascade />}

          <div className="exp-section-inner">
            <p className="exp-eyebrow">{section.eyebrow}</p>
            <h2>{section.heading}</h2>
            {section.blocks.map((block, bi) => (
              <ContentBlock
                key={bi}
                block={block}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Sections;
