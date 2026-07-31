"use client";

import { cn } from "@/utils";

import { HOME_EXPERIENCE_SECTIONS, type HomeExperienceBlock } from "@/constants/homeExperience";

import { useReveal } from "@/lib/experience/useReveal";
import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

const Block = ({ block }: { block: HomeExperienceBlock }) => {
  if (block.type === "list") {
    return (
      <ul className="exp-condition-list">
        {block.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "quiet") {
    return <p className="exp-quiet">{block.text}</p>;
  }

  return <p>{block.text}</p>;
};

const SpillCascade = () => (
  <div
    className="exp-spill-cascade"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 170"
      preserveAspectRatio="none"
    >
      <defs>
        <filter
          id="expSpillGlow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur
            stdDeviation="6"
            result="b"
          />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter="url(#expSpillGlow)"
        fill="#fff3d2"
      >
        {[
          [90, 9, 24],
          [215, 12, 30],
          [330, 7, 19],
          [470, 10, 26],
          [590, 6, 16],
          [710, 11, 28],
          [820, 8, 21],
          [940, 10, 25],
          [1060, 7, 18],
          [1150, 9, 23],
        ].map(([cx, rx, ry]) => (
          <ellipse
            key={cx}
            className="exp-drip"
            cx={cx}
            cy={0}
            rx={rx}
            ry={ry}
          />
        ))}
      </g>
    </svg>
  </div>
);

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
              <Block
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
