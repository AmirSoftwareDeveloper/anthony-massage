"use client";

import { cn } from "@/utils";

import { INFO } from "@/constants";
import { HOME_EXPERIENCE_HERO_FRAMES, PHASE_DOT_LABELS } from "@/constants/homeExperience";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";

const HERO_FRAME_WIDTH = 1280;
const HERO_FRAME_HEIGHT = 853;

const Hero = ({ engine }: { engine: HeroExperienceEngine }) => {
  return (
    <header
      ref={engine.heroRef as React.RefObject<HTMLElement>}
      className="exp-hero"
    >
      <h1 className="sr-only">
        {INFO.BUSINESS_NAME} — Massage Therapy for Pain Relief, Injury Recovery & Mobility in Issaquah, WA
      </h1>

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

          <svg
            ref={engine.sweepRef}
            className="exp-light-sweep"
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 400 300"
          >
            <defs>
              <linearGradient
                id="expSweepGrad"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#fff8d6"
                  stopOpacity="0"
                />
                <stop
                  offset="42%"
                  stopColor="#ffefb8"
                  stopOpacity="0.2"
                />
                <stop
                  offset="50%"
                  stopColor="#fffdf2"
                  stopOpacity="0.4"
                />
                <stop
                  offset="58%"
                  stopColor="#ffefb8"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="#fff8d6"
                  stopOpacity="0"
                />
              </linearGradient>
              <filter
                id="expSweepGlow"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
              >
                <feGaussianBlur
                  stdDeviation="9"
                  result="b"
                />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#expSweepGlow)">
              <path
                ref={engine.sweepGlowRef}
                fill="url(#expSweepGrad)"
                opacity="0.2"
              />
              <path
                ref={engine.sweepCoreRef}
                fill="url(#expSweepGrad)"
                opacity="0.46"
              />
              <path
                ref={engine.sweepRib1Ref}
                fill="#fffdf2"
                opacity="0.16"
              />
              <path
                ref={engine.sweepRib2Ref}
                fill="#ffe9a8"
                opacity="0.12"
              />
            </g>
          </svg>
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
    </header>
  );
};

export default Hero;
