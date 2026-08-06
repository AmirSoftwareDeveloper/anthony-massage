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
   *  "media-split" places a `media` figure in a left column beside the eyebrow/heading/copy.
   *  "aside-media" stacks the eyebrow/heading over a `media` figure in a narrow left column,
   *  with `children` (typically a card grid) filling the wider right column. */
  layout?: "default" | "split" | "centered" | "header-media" | "media-split" | "aside-media";
  /** Used only by layout="header-media" — rendered beside the heading in the header row. */
  lead?: ReactNode;
  /** Used by layout="media-split" and layout="aside-media" — the figure rendered in the left column. */
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
        <div className="container exp-section-inner exp-section-inner--split grid grid-cols-1 items-start gap-8 py-24 md:py-36 lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-x-12">
          <div className="static lg:sticky lg:top-32">{title}</div>
          <div className="min-w-0">{children}</div>
        </div>
      ) : layout === "header-media" ? (
        <div className="exp-section-inner mx-auto w-full max-w-340 px-6 py-24 md:px-9 md:py-36">
          <div className="mb-9 grid grid-cols-1 items-start gap-6 lg:mb-14 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8">
            <div className="[&_h2]:mb-0 [&_h2]:max-w-[11em]">{title}</div>
            <div>{lead}</div>
          </div>
          {children}
          {after}
        </div>
      ) : layout === "media-split" ? (
        <div className="exp-section-inner mx-auto w-full max-w-340 px-6 py-24 md:px-9 md:py-36">
          <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-18 lg:gap-y-10">
            <div>{media}</div>
            <div className="[&_h2]:max-w-[13em]">
              {title}
              {children}
            </div>
          </div>
          {after}
        </div>
      ) : layout === "aside-media" ? (
        <div className="exp-section-inner mx-auto w-full max-w-340 px-6 py-24 md:px-9 md:py-36">
          <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-x-14 lg:gap-y-10">
            {/* The heading sits tight to the figure below it: the h2's own
                2.1rem margin is the whole gap, so it isn't doubled by a wrapper. */}
            <div className="[&_h2]:mb-8 [&_h2]:max-w-[8em]">
              {title}
              {media}
            </div>
            <div className="min-w-0">{children}</div>
          </div>
          {after}
        </div>
      ) : (
        <div
          className={cn(
            "exp-section-inner mx-auto w-full max-w-340 px-6 py-24 md:px-9 md:py-36",
            layout === "centered" && "text-center [&>p]:mx-auto [&_h2]:mx-auto [&_h2]:max-w-[46em]"
          )}
        >
          {title}
          {children}
          {after}
        </div>
      )}
    </section>
  );
};

export default HomeSection;
