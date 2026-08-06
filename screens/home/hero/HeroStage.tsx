import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import {
  HOME_EXPERIENCE_HERO_FRAMES,
  HOME_EXPERIENCE_HERO_FRAMES_ISO,
  HOME_EXPERIENCE_HERO_FRAMES_SPILL,
} from "@/constants/homeExperience";

import LightSweep from "./LightSweep";

const HERO_FRAME_WIDTH = 1672;
const HERO_FRAME_HEIGHT = 941;

const HeroStage = ({ engine }: { engine: HeroExperienceEngine }) => {
  return (
    <div
      ref={engine.stageRef}
      className="exp-stage"
      role="img"
      aria-label="A billboard for Anthony Massage Works stands over a quiet street at sunrise. On it, an anatomical figure is curled tight in a compressed crouch. As golden light grows and moves across the scene, the figure slowly unfolds, bowing, rising onto one knee, and finally standing tall with arms open and face lifted to the light. The warmth then flows off the billboard and down through the page."
    >
      <div className="absolute inset-0 z-1 grayscale brightness-82 contrast-103">
        {HOME_EXPERIENCE_HERO_FRAMES.map((src, i) => (
          <img
            key={src}
            ref={engine.registerGrayFrame(i)}
            className="exp-frame object-cover"
            src={src}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            loading={i === 0 ? "eager" : undefined}
            fetchPriority={i === 0 ? "high" : undefined}
            alt=""
          />
        ))}
      </div>

      <div
        ref={engine.boardColorRef}
        className="exp-board-color absolute inset-0"
      >
        {HOME_EXPERIENCE_HERO_FRAMES_ISO.map((src, i) => (
          <img
            key={src}
            ref={engine.registerColorFrame(i)}
            className="exp-frame object-cover"
            src={src}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            loading={i === 0 ? "eager" : undefined}
            fetchPriority={i === 0 ? "high" : undefined}
            alt=""
          />
        ))}

        <LightSweep engine={engine} />
      </div>

      <div
        ref={engine.streetBloomRef}
        className="exp-street-bloom absolute inset-0"
      >
        {HOME_EXPERIENCE_HERO_FRAMES_SPILL.map((src, i) => (
          <img
            key={src}
            ref={engine.registerStreetFrame(i)}
            className="exp-frame object-cover"
            src={src}
            width={HERO_FRAME_WIDTH}
            height={HERO_FRAME_HEIGHT}
            alt=""
          />
        ))}
      </div>

      <div
        ref={engine.spillRef}
        className="exp-light-spill"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.42)]"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroStage;
