"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";
import { useReveal } from "@/lib/experience/useReveal";

import { HOME_EXPERIENCE_FOOTER } from "@/constants/homeExperience";
import { Routes } from "@/constants/routes";

import { Button } from "@/components/ui/button";

interface Props {
  engine?: HeroExperienceEngine;
}

const Footer = ({ engine }: Props) => {
  const pathname = usePathname();
  const reveal = useReveal<HTMLElement>();

  if (!engine && pathname === Routes.HOME) return null;

  const isInterior = !engine;
  const sectionIndex = HOME_EXPERIENCE_FOOTER.position - 1;

  return (
    <footer
      ref={(el) => {
        engine?.registerSection(sectionIndex)(el);
        reveal(el);
      }}
      className={cn(
        "exp-reveal group flex flex-col items-center px-[2.2rem] pt-26 pb-20 text-center",
        isInterior ? "exp-interior-tone" : cn("exp-section", `exp-pos-${HOME_EXPERIENCE_FOOTER.position}`)
      )}
    >
      <span className="mb-[1.2rem] block text-2xs font-medium tracking-[0.32em] text-(--s-eyebrow,var(--color-exp-gold)) uppercase transition-colors duration-2200 ease-exp-release group-[.lit]:text-(--s-eyebrow-lit,var(--s-eyebrow))">
        {HOME_EXPERIENCE_FOOTER.eyebrow}
      </span>
      <h2
        className={cn(
          "mb-[0.7rem] font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-normal italic transition-colors duration-2200 ease-exp-release",
          isInterior
            ? "text-exp-cream"
            : "text-(--s-heading,var(--color-exp-olive-deep)) group-[.lit]:text-(--s-heading-lit,var(--s-heading))"
        )}
      >
        {HOME_EXPERIENCE_FOOTER.title}
      </h2>
      <span className={cn("mb-[1.9rem] block max-w-120 text-base+ font-light", isInterior && "text-exp-tan")}>
        {HOME_EXPERIENCE_FOOTER.sub}
      </span>

      <Link href={Routes.CONTACT}>
        <Button
          variant="experience"
          size="experience"
          className={isInterior ? "bg-exp-glow text-exp-dusk hover:opacity-90" : undefined}
        >
          {HOME_EXPERIENCE_FOOTER.cta}
        </Button>
      </Link>

      <span
        className={cn(
          "mt-18 block text-2xs tracking-[0.16em] uppercase",
          isInterior ? "text-exp-muted opacity-75" : "opacity-60"
        )}
      >
        {HOME_EXPERIENCE_FOOTER.fine}
      </span>
    </footer>
  );
};

export default Footer;
