"use client";

import * as React from "react";

import {
  PAGE_HERO_SPILL_REST,
  type BoardBox,
  type BoardRect,
  computeBloom,
  computeLifeMask,
  measureBoardRect,
} from "./engine";

/**
 * Interior page-hero engine — the quiet sibling of useHeroExperience. These
 * pages don't replay Home's full unfolding story; they inherit it. The
 * billboard shows one settled, already-lit pose from the moment the page
 * opens (no grayscale suspense, no scroll-driven reveal). The ambient
 * ground-light wisps that keep drifting at the bottom as the visitor scrolls
 * are handled globally by `AmbientWave` in the root layout (via
 * useWaveFrontier) — mounting a second copy here would double up and fight
 * that loop, so this hook only owns the billboard settle.
 */
export function usePageHeroExperience(board: BoardBox) {
  const heroRef = React.useRef<HTMLElement | null>(null);
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const frameRef = React.useRef<HTMLImageElement | null>(null);
  const boardColorRef = React.useRef<HTMLDivElement | null>(null);
  const streetBloomRef = React.useRef<HTMLDivElement | null>(null);
  const spillRef = React.useRef<HTMLDivElement | null>(null);

  const state = React.useRef({ BR: null as BoardRect | null });

  React.useEffect(() => {
    const s = state.current;

    // glues the ground-spill pool to the billboard's true on-screen rect, and
    // settles the board/street layers to their fully-lit state immediately —
    // interior heroes open already arrived, not mid-transition
    const measureBoard = () => {
      const stageEl = stageRef.current;
      const anyFrame = frameRef.current;
      if (!stageEl || !anyFrame) {
        s.BR = null;
        return;
      }
      const rect = stageEl.getBoundingClientRect();
      const fit = getComputedStyle(anyFrame).objectFit;
      s.BR = measureBoardRect({ width: rect.width, height: rect.height }, fit, board);

      if (boardColorRef.current) {
        const mask = computeLifeMask(1, s.BR);
        boardColorRef.current.style.maskImage = mask;
        boardColorRef.current.style.webkitMaskImage = mask;
      }
      const bloom = computeBloom(1, s.BR);
      if (streetBloomRef.current) {
        streetBloomRef.current.style.maskImage = bloom.maskImage;
        streetBloomRef.current.style.webkitMaskImage = bloom.maskImage;
      }
      // a defined, tight pool of light under the board rather than Home's
      // wider wash — spread too wide, a lift like this has no edge and reads
      // as "slightly less dark" instead of as a glow
      if (s.BR && spillRef.current) {
        spillRef.current.style.left = `${s.BR.x - s.BR.w * 0.14}px`;
        spillRef.current.style.top = `${s.BR.y + s.BR.h - s.BR.h * 0.02}px`;
        spillRef.current.style.width = `${s.BR.w * 0.86}px`;
        spillRef.current.style.height = `${Math.max(s.BR.sh - (s.BR.y + s.BR.h) + s.BR.h * 0.3, s.BR.h * 0.85)}px`;
        spillRef.current.style.opacity = String(PAGE_HERO_SPILL_REST);
      }
    };

    measureBoard();
    window.addEventListener("resize", measureBoard);
    window.addEventListener("orientationchange", measureBoard);
    const frameEl = frameRef.current;
    if (frameEl && !frameEl.complete) frameEl.addEventListener("load", measureBoard);
    const loadTimer = window.setTimeout(measureBoard, 250);

    return () => {
      window.removeEventListener("resize", measureBoard);
      window.removeEventListener("orientationchange", measureBoard);
      if (frameEl) frameEl.removeEventListener("load", measureBoard);
      window.clearTimeout(loadTimer);
    };
  }, [board]);

  return { heroRef, stageRef, frameRef, boardColorRef, streetBloomRef, spillRef };
}

export type PageHeroExperienceEngine = ReturnType<typeof usePageHeroExperience>;
