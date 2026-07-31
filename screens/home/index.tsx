"use client";

import { HOME_EXPERIENCE_SECTIONS } from "@/constants/homeExperience";

import { useHeroExperience } from "@/lib/experience/useHeroExperience";

import FooterCta from "./FooterCta";
import Hero from "./Hero";
import Nav from "./Nav";
import Sections from "./Sections";
import WaveFrontier from "./WaveFrontier";

const HomeExperience = () => {
  const engine = useHeroExperience(HOME_EXPERIENCE_SECTIONS.length + 1);

  return (
    <div className="bg-exp-paper font-experience text-exp-ink leading-[1.65]">
      <WaveFrontier engine={engine} />
      <Nav />
      <Hero engine={engine} />

      <Sections engine={engine} />
      <FooterCta engine={engine} />
    </div>
  );
};

export default HomeExperience;
