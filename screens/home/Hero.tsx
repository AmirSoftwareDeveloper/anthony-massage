"use client";

import { INFO } from "@/constants";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import HeroStage from "./hero/HeroStage";
import PhaseStrip from "./hero/PhaseStrip";

const Hero = ({ engine }: { engine: HeroExperienceEngine }) => {
  return (
    <header
      ref={engine.heroRef as React.RefObject<HTMLElement>}
      className="exp-hero"
    >
      <h1 className="sr-only">
        {INFO.BUSINESS_NAME} — Massage Therapy for Pain Relief, Injury Recovery & Mobility in Issaquah, WA
      </h1>

      <HeroStage engine={engine} />
      <PhaseStrip engine={engine} />
    </header>
  );
};

export default Hero;
