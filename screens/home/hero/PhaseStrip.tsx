import { cn } from "@/utils";

import { PHASE_DOT_LABELS } from "@/constants/homeExperience";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

const PhaseStrip = ({ engine }: { engine: HeroExperienceEngine }) => {
  return (
    <div className="exp-phase-strip">
      <p
        className="exp-phase-caption"
        aria-live="polite"
        style={{ opacity: engine.captionVisible ? 1 : 0 }}
      >
        {engine.captionText}
      </p>

      <div className="exp-phase-row">
        <div
          className="exp-phase-dots"
          role="group"
          aria-label="Transformation phases"
        >
          {PHASE_DOT_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              className={cn("exp-dot", i === engine.captionIndex && "exp-active")}
              aria-label={label}
              onClick={() => engine.goToPhase(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className={cn("exp-replay", engine.replayVisible && "exp-show")}
          aria-label="Replay the transformation"
          onClick={engine.replay}
        >
          ↺ replay
        </button>
      </div>

      <div className={cn("exp-scroll-hint", engine.hintVisible && "exp-show")}>
        <span>The light follows you down</span>
        <div className="exp-scroll-line" />
      </div>
    </div>
  );
};

export default PhaseStrip;
