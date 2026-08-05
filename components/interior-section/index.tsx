"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import { useReveal } from "@/lib/experience/useReveal";

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
            <p className="exp-eyebrow">{eyebrow}</p>
            <h2 className="exp-lead-title">{title}</h2>
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
          <p className="exp-eyebrow">{eyebrow}</p>
          <h2 className="exp-divider-title">{title}</h2>
        </div>
      </div>

      <div className="exp-interior-body">
        <div className={cn("exp-interior-inner", className)}>{children}</div>
      </div>
    </section>
  );
};

export default InteriorSection;
