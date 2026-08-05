"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import Title from "@/components/title";

type HomeSectionProps = {
  id: string;
  eyebrow: string;
  heading: string;
  position: number;
  sectionRef: (el: HTMLElement | null) => void;
  decoration?: ReactNode;
  /** "split" places the eyebrow/heading in a left column beside the section's content, instead of stacked above it.
   *  "centered" stacks eyebrow/heading/lead paragraph centered on the page, for a wide hero-style opener. */
  layout?: "default" | "split" | "centered";
  children: ReactNode;
};

const HomeSection = ({
  id,
  eyebrow,
  heading,
  position,
  sectionRef,
  decoration,
  layout = "default",
  children,
}: HomeSectionProps) => {
  const title = (
    <Title
      variant="exp"
      subTitle={eyebrow}
      title={heading}
    />
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("exp-section exp-reveal", `exp-pos-${position}`)}
    >
      {decoration}

      {layout === "split" ? (
        <div className="container exp-section-inner exp-section-inner--split exp-container">
          <div className="exp-split-head">{title}</div>
          <div className="exp-split-body">{children}</div>
        </div>
      ) : (
        <div className={cn("exp-section-inner exp-container", layout === "centered" && "exp-section-inner--centered")}>
          {title}
          {children}
        </div>
      )}
    </section>
  );
};

export default HomeSection;
