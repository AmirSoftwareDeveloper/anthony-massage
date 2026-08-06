"use client";

import * as React from "react";

import {
  type BoardBox,
  type BoardRect,
  PAGE_HERO_SPILL_REST,
  computeBloom,
  computeLifeMask,
  measureBoardRect,
} from "./engine";

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
