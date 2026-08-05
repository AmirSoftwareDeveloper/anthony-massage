"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import Title from "@/components/title";

type HomeSectionProps = {
  id: string;
  /** Omitted by sections whose heading alone carries the section — the eyebrow is dropped entirely. */
  eyebrow?: string;
  heading: string;
  position: number;
  sectionRef: (el: HTMLElement | null) => void;
  decoration?: ReactNode;
  /** "split" places the eyebrow/heading in a left column beside the section's content, instead of stacked above it.
   *  "centered" stacks eyebrow/heading/lead paragraph centered on the page, for a wide hero-style opener.
   *  "header-media" puts the heading and a `lead` block side by side in a header row, with `children`
   *  (typically a full-width image) filling the space below.
   *  "media-split" places a `media` figure in a left column beside the eyebrow/heading/copy. */
  layout?: "default" | "split" | "centered" | "header-media" | "media-split";
  /** Used only by layout="header-media" — rendered beside the heading in the header row. */
  lead?: ReactNode;
  /** Used only by layout="media-split" — the figure rendered in the left column. */
  media?: ReactNode;
  /** Rendered full-width beneath the section's main layout, inside the same container. */
  after?: ReactNode;
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
  lead,
  media,
  after,
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
      ) : layout === "header-media" ? (
        <div className="exp-section-inner exp-container">
          <div className="exp-header-row">
            <div className="exp-header-row-heading">{title}</div>
            <div className="exp-header-row-lead">{lead}</div>
          </div>
          {children}
          {after}
        </div>
      ) : layout === "media-split" ? (
        <div className="exp-section-inner exp-container">
          <div className="exp-media-split">
            <div className="exp-media-split-media">{media}</div>
            <div className="exp-media-split-body">
              {title}
              {children}
            </div>
          </div>
          {after}
        </div>
      ) : (
        <div className={cn("exp-section-inner exp-container", layout === "centered" && "exp-section-inner--centered")}>
          {title}
          {children}
          {after}
        </div>
      )}
    </section>
  );
};

export default HomeSection;
