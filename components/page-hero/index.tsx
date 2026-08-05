"use client";

import { cn } from "@/utils";

import { PAGE_HERO_VARIANTS, type PageHeroVariant } from "@/constants/pageHero";

import { usePageHeroExperience } from "@/lib/experience/usePageHeroExperience";

import Title from "@/components/title";

const HERO_FRAME_WIDTH = 1672;
const HERO_FRAME_HEIGHT = 941;

type PageHeroProps = {
  srTitle: string;
  eyebrow: string;
  caption: string;
  variant?: PageHeroVariant;
  className?: string;
};

const PageHero = ({ srTitle, eyebrow, caption, variant = "arrived", className }: PageHeroProps) => {
  const { src, iso, spill, board } = PAGE_HERO_VARIANTS[variant];
  const engine = usePageHeroExperience(board);

  return (
    <header
      ref={engine.heroRef as React.RefObject<HTMLElement>}
      className={cn("exp-hero exp-page-hero", className)}
    >
      <h1 className="sr-only">{srTitle}</h1>

      <div
        ref={engine.stageRef}
        className="exp-stage"
        role="img"
        aria-label={caption}
      >
        <div className="exp-layer exp-world-gray">
          <img
            ref={engine.frameRef}
            className="exp-frame exp-frame-solo"
            src={src}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            loading="eager"
            fetchPriority="high"
            alt=""
          />
        </div>

        <div
          ref={engine.boardColorRef}
          className="exp-layer exp-board-color"
        >
          <img
            className="exp-frame exp-frame-solo"
            src={iso}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            loading="eager"
            fetchPriority="high"
            alt=""
          />
        </div>

        <div
          ref={engine.streetBloomRef}
          className="exp-layer exp-street-bloom"
        >
          <img
            className="exp-frame exp-frame-solo"
            src={spill}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            alt=""
          />
        </div>

        <div
          ref={engine.spillRef}
          className="exp-light-spill"
          aria-hidden="true"
        />

        <div
          className="exp-stage-vignette"
          aria-hidden="true"
        />
      </div>

      <div className="exp-phase-strip">
        <Title
          variant="exp"
          subTitle={eyebrow}
        />
        <p className="exp-phase-caption exp-page-hero-caption-line">{caption}</p>
      </div>
    </header>
  );
};

export default PageHero;
