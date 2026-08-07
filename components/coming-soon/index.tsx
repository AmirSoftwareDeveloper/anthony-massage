"use client";

import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { useReveal } from "@/lib/experience/useReveal";

import { INFO } from "@/constants";
import type { PageHeroVariant } from "@/constants/pageHero";
import { Routes } from "@/constants/routes";

import PageHero from "@/components/page-hero";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

type ComingSoonProps = {
  srTitle: string;
  eyebrow: string;
  caption: string;
  variant?: PageHeroVariant;
  title: string;
  intro: string;
  note?: string;
};

const ComingSoon = ({ srTitle, eyebrow, caption, variant = "rising", title, intro, note }: ComingSoonProps) => {
  const reveal = useReveal<HTMLElement>();

  return (
    <>
      <PageHero
        srTitle={srTitle}
        eyebrow={eyebrow}
        caption={caption}
        variant={variant}
      />

      <section
        id="coming-soon"
        ref={reveal}
        className="exp-reveal exp-collage-section"
      >
        <div className="container section-y flex max-w-3xl flex-col items-center text-center">
          <Title
            variant="exp"
            subTitle="Coming Soon"
            title={title}
            className="[&_p]:mx-auto"
            titleClassName="mb-6 font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
          />

          <div className="exp-collage-copy [&_p]:mx-auto">
            <p>{intro}</p>
            {note ? <p className="exp-quiet">{note}</p> : null}
          </div>

          <div className="mt-10 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href={Routes.CONTACT}
              className="w-full sm:w-auto"
            >
              <Button
                variant="experience"
                size="experience"
                className="w-full justify-center bg-exp-glow text-exp-dusk hover:opacity-90 sm:w-auto"
              >
                Book a Session
              </Button>
            </Link>

            <Link
              href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="experience-outline"
                size="experience"
                className="w-full justify-center sm:w-auto"
              >
                Call {INFO.PHONE_NUMBER}
              </Button>
            </Link>
          </div>

          <Link
            href={Routes.HOME}
            className="mt-9 text-2xs tracking-[0.18em] text-exp-tan uppercase underline decoration-exp-tan/40 underline-offset-6 transition-colors hover:text-exp-glow hover:decoration-exp-glow"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
