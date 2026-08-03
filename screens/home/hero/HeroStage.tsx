import { HOME_EXPERIENCE_HERO_FRAMES } from "@/constants/homeExperience";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import LightSweep from "./LightSweep";

const HERO_FRAME_WIDTH = 1280;
const HERO_FRAME_HEIGHT = 853;

const HeroStage = ({ engine }: { engine: HeroExperienceEngine }) => {
  return (
    <div
      className="exp-stage"
      role="img"
      aria-label="A billboard for Anthony Massage Works stands over a quiet street at sunrise. An anatomical figure, curled tight in a compressed crouch, slowly unfolds as golden light grows and moves across the scene — bowing, rising, and finally standing tall with arms open and face lifted to the light."
    >
      <div className="exp-layer exp-world-gray">
        {HOME_EXPERIENCE_HERO_FRAMES.map((src, i) => (
          <img
            key={src}
            ref={engine.registerGrayFrame(i)}
            className="exp-frame"
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
        className="exp-layer exp-board-color"
      >
        {HOME_EXPERIENCE_HERO_FRAMES.map((src, i) => (
          <img
            key={src}
            ref={engine.registerColorFrame(i)}
            className="exp-frame"
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
        className="exp-layer exp-street-bloom"
      >
        {HOME_EXPERIENCE_HERO_FRAMES.map((src, i) => (
          <img
            key={src}
            ref={engine.registerStreetFrame(i)}
            className="exp-frame"
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

      <img
        ref={engine.headPatchRef}
        className="exp-head-patch"
        src={HOME_EXPERIENCE_HERO_FRAMES[3]}
        width={HERO_FRAME_WIDTH}
        height={HERO_FRAME_HEIGHT}
        alt=""
      />

      <div
        className="exp-stage-vignette"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroStage;
