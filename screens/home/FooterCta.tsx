"use client";

import Link from "next/link";

import { cn } from "@/utils";

import type { HeroExperienceEngine } from "@/lib/experience/useHeroExperience";
import { useReveal } from "@/lib/experience/useReveal";

import { HOME_EXPERIENCE_FOOTER } from "@/constants/homeExperience";
import { Routes } from "@/constants/routes";

import { Button } from "@/components/ui/button";

const FooterCta = ({ engine }: { engine: HeroExperienceEngine }) => {
  const reveal = useReveal<HTMLElement>();
  const sectionIndex = HOME_EXPERIENCE_FOOTER.position - 1;

  return (
    <footer
      ref={(el) => {
        engine.registerSection(sectionIndex)(el);
        engine.footerRef.current = el;
        reveal(el);
      }}
      className={cn(
        "exp-section exp-footer exp-reveal flex flex-col items-center",
        `exp-pos-${HOME_EXPERIENCE_FOOTER.position}`
      )}
    >
      <p
        className="exp-eyebrow"
        style={{ marginBottom: "1.2rem" }}
      >
        {HOME_EXPERIENCE_FOOTER.eyebrow}
      </p>
      <h2 className="exp-footer-title">{HOME_EXPERIENCE_FOOTER.title}</h2>
      <p className="exp-footer-sub">{HOME_EXPERIENCE_FOOTER.sub}</p>

      <Link href={Routes.CONTACT}>
        <Button
          variant="experience"
          size="experience"
        >
          {HOME_EXPERIENCE_FOOTER.cta}
        </Button>
      </Link>

      <p className="exp-footer-fine">{HOME_EXPERIENCE_FOOTER.fine}</p>
    </footer>
  );
};

export default FooterCta;
