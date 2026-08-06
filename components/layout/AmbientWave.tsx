"use client";

import { usePathname } from "next/navigation";

import { useWaveFrontier } from "@/lib/experience/useWaveFrontier";

import { Routes } from "@/constants/routes";

import WaveFrontier from "@/components/wave-frontier";

const AmbientWave = () => {
  const pathname = usePathname();
  const engine = useWaveFrontier();

  if (pathname === Routes.HOME) return null;

  return <WaveFrontier engine={engine} />;
};

export default AmbientWave;
