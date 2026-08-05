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
        className="exp-reveal exp-interior-lead"
      >
        <div className="exp-interior-body">
          <div className={cn("exp-interior-inner", className)}>
            <Title
              variant="exp"
              subTitle={eyebrow}
              title={title}
              titleClassName="exp-lead-title"
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
      className="exp-reveal exp-interior-chapter"
    >
      <div className="exp-divider-band">
        <div className="exp-divider-inner">
          <Title
            variant="exp"
            subTitle={eyebrow}
            title={title}
            titleClassName="exp-divider-title"
          />
        </div>
      </div>

      <div className="exp-interior-body">
        <div className={cn("exp-interior-inner", className)}>{children}</div>
      </div>
    </section>
  );
};

export default InteriorSection;
