"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import { HOME_EXPERIENCE_FOOTER } from "@/constants/homeExperience";
import { Routes } from "@/constants/routes";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";
import { useReveal } from "@/lib/experience/useReveal";

import { Button } from "@/components/ui/button";

interface Props {
  engine?: HeroExperienceEngine;
}

const Footer = ({ engine }: Props) => {
  const pathname = usePathname();
  const reveal = useReveal<HTMLElement>();

  // The homepage renders this same component itself, wired to its scroll engine
  // (see screens/home/index.tsx) — skip the plain global render there.
  if (!engine && pathname === Routes.HOME) return null;

  const sectionIndex = HOME_EXPERIENCE_FOOTER.position - 1;

  return (
    <footer
      ref={(el) => {
        engine?.registerSection(sectionIndex)(el);
        reveal(el);
      }}
      className={cn(
        "exp-section exp-reveal group flex flex-col items-center px-[2.2rem] pt-26 pb-16 text-center",
        `exp-pos-${HOME_EXPERIENCE_FOOTER.position}`
      )}
    >
      <span className="mb-[1.2rem] block text-2xs font-medium tracking-[0.32em] text-(--s-eyebrow,var(--color-exp-gold)) uppercase transition-colors duration-2200 ease-exp-release group-[.lit]:text-(--s-eyebrow-lit,var(--s-eyebrow))">
        {HOME_EXPERIENCE_FOOTER.eyebrow}
      </span>
      <h2 className="mb-[0.7rem] font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-normal text-(--s-heading,var(--color-exp-olive-deep)) italic transition-colors duration-2200 ease-exp-release group-[.lit]:text-(--s-heading-lit,var(--s-heading))">
        {HOME_EXPERIENCE_FOOTER.title}
      </h2>
      <span className="mb-[1.9rem] block max-w-120 text-base+ font-light">{HOME_EXPERIENCE_FOOTER.sub}</span>

      <Link href={Routes.CONTACT}>
        <Button
          variant="experience"
          size="experience"
        >
          {HOME_EXPERIENCE_FOOTER.cta}
        </Button>
      </Link>

      <span className="mt-18 block text-2xs tracking-[0.16em] uppercase opacity-60">{HOME_EXPERIENCE_FOOTER.fine}</span>
    </footer>
  );
};

export default Footer;
