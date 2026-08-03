"use client";

import { usePathname } from "next/navigation";

import { Routes } from "@/constants/routes";

import { useWaveFrontier } from "@/lib/experience/useWaveFrontier";

import WaveFrontier from "@/components/wave-frontier";

// The homepage drives its own wave frontier off the full scroll-story engine
// (see screens/home/index.tsx) — this mounts the same ground-glow effect,
// scroll-linked but story-agnostic, on every other page.
const AmbientWave = () => {
  const pathname = usePathname();
  const engine = useWaveFrontier();

  if (pathname === Routes.HOME) return null;

  return <WaveFrontier engine={engine} />;
};

export default AmbientWave;
