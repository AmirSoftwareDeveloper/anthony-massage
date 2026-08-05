import Link from "next/link";

import { cn } from "@/utils";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

import { PHASE_DOT_LABELS } from "@/constants/homeExperience";
import { Routes } from "@/constants/routes";

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

      {/* <div className="exp-hero-cta-row">
        <Link href={Routes.CONTACT}>
          <Button
            variant="experience"
            size="experience"
          >
            Book Your First Session
          </Button>
        </Link>
        <Link href={Routes.SERVICES}>
          <Button
            variant="experience-outline"
            size="experience"
          >
            Explore Services
          </Button>
        </Link>
      </div> */}

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

      <Link
        href={Routes.SERVICES}
        className={cn("exp-scroll-hint", engine.hintVisible && "exp-show")}
      >
        <span> Explore Services</span>
        <div className="exp-scroll-line" />
      </Link>
    </div>
  );
};

export default PhaseStrip;
