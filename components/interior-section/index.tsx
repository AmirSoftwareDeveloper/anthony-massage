"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import { useReveal } from "@/lib/experience/useReveal";

import Title from "@/components/title";

type InteriorSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: boolean;
  className?: string;
  children: ReactNode;
};

const InteriorSection = ({ id, eyebrow, title, lead, className, children }: InteriorSectionProps) => {
  const reveal = useReveal<HTMLElement>();

  if (lead) {
    return (
      <section
        id={id}
        ref={reveal}
        className="exp-reveal"
      >
        <div className="bg-exp-panel px-6 pt-12 pb-14 md:px-8 md:pt-17 md:pb-18">
          {/* `exp-interior-inner` is kept: `.exp-interior-inner .exp-quiet` in globals.css
              sets its color with `!important`, which no utility can beat. */}
          <div className={cn("exp-interior-inner mx-auto max-w-[660px]", className)}>
            <Title
              variant="exp"
              subTitle={eyebrow}
              title={title}
              titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-cream italic md:text-4xl"
            />
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={reveal}
      className="exp-reveal"
    >
      <div className="xs:min-h-22 flex min-h-31 items-center bg-exp-dusk px-8 pt-4 pb-3.5">
        <div className="mx-auto w-full max-w-[720px]">
          <Title
            variant="exp"
            subTitle={eyebrow}
            title={title}
            titleClassName="mb-0 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
          />
        </div>
      </div>

      <div className="bg-exp-panel px-6 pt-10 pb-14 md:px-8 md:pt-12 md:pb-18">
        {/* `exp-interior-inner` is kept: `.exp-interior-inner .exp-quiet` in globals.css
            sets its color with `!important`, which no utility can beat.
            The `before:*` utilities reproduce the chapter rule that
            `.exp-interior-chapter .exp-interior-inner::before` used to draw. */}
        <div
          className={cn(
            "exp-interior-inner mx-auto max-w-[660px] before:mx-auto before:mb-12 before:block before:h-px before:w-10 before:bg-exp-tan/15 before:content-['']",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;
