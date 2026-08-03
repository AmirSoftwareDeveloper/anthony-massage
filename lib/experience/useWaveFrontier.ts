"use client";

import * as React from "react";

import { WISP_COUNT, clamp01, computeWisp } from "./engine";

export function useWaveFrontier() {
  const waveFrontierRef = React.useRef<HTMLDivElement | null>(null);
  const wispRefs = React.useRef<(SVGPathElement | null)[]>([]);

  const registerWisp = React.useCallback(
    (index: number) => (el: SVGPathElement | null) => {
      wispRefs.current[index] = el;
    },
    []
  );

  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (waveFrontierRef.current) waveFrontierRef.current.style.display = "none";
      return;
    }

    const state = { scrollGlow: 0, lastScrollY: window.scrollY || 0, rafId: 0 };

    const loop = (now: number) => {
      const scrollY = window.scrollY || 0;
      const vh = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const moved = Math.abs(scrollY - state.lastScrollY);
      if (moved > 1.5) state.scrollGlow = Math.min(1, state.scrollGlow + 0.14);
      else state.scrollGlow *= 0.92;
      if (state.scrollGlow < 0.01) state.scrollGlow = 0;
      state.lastScrollY = scrollY;

      const atBottom = scrollY + vh >= docHeight - 2;
      const distanceToEnd = docHeight - (scrollY + vh);
      const flareRel = 1 - clamp01(distanceToEnd / (vh * 0.55));
      const flare = Math.sin(Math.PI * clamp01(flareRel));

      if (waveFrontierRef.current) {
        const restingOpacity = atBottom ? 0.85 : 0;
        waveFrontierRef.current.style.opacity = String(Math.max(state.scrollGlow, flare * 0.9, restingOpacity));
      }

      const wispPhase = now * 0.0016 * 1.4;
      for (let w = 0; w < WISP_COUNT; w++) {
        const el = wispRefs.current[w];
        if (!el) continue;
        const wisp = computeWisp(w, wispPhase, flare);
        el.setAttribute("d", wisp.d);
        el.style.opacity = String(wisp.opacity);
      }

      state.rafId = requestAnimationFrame(loop);
    };

    state.rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(state.rafId);
  }, []);

  return { waveFrontierRef, registerWisp };
}

export type WaveFrontierEngine = ReturnType<typeof useWaveFrontier>;
