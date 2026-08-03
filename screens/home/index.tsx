"use client";

import { useHeroExperience } from "@/lib/experience/useHeroExperience";

import Footer from "@/components/layout/Footer";
import WaveFrontier from "@/components/wave-frontier";

import Hero from "./Hero";
import Sections from "./Sections";

const HomeExperience = () => {
  const engine = useHeroExperience();

  return (
    <div className="bg-exp-paper font-experience text-exp-ink leading-[1.65]">
      <WaveFrontier engine={engine} />
      <Hero engine={engine} />

      <Sections engine={engine} />
      <Footer engine={engine} />
    </div>
  );
};

export default HomeExperience;
