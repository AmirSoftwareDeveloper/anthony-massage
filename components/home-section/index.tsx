"use client";

import type { ReactNode } from "react";

import { cn } from "@/utils";

import Title from "@/components/title";

type HomeSectionProps = {
  id: string;
  eyebrow?: string;
  heading: string;
  position: number;
  sectionRef: (el: HTMLElement | null) => void;
  decoration?: ReactNode;
  layout?: "default" | "split" | "centered" | "header-media" | "media-split" | "aside-media";
  lead?: ReactNode;
  media?: ReactNode;
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
        <div className="container section-y exp-section-inner">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-x-12">
            <div className="static lg:sticky lg:top-32">{title}</div>
            <div className="min-w-0">{children}</div>
          </div>
        </div>
      ) : layout === "header-media" ? (
        <div className="container section-y exp-section-inner">
          <div className="mb-9 grid grid-cols-1 items-start gap-6 lg:mb-14 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8">
            <div className="[&_h2]:mb-0 [&_h2]:max-w-[11em]">{title}</div>
            <div>{lead}</div>
          </div>
          {children}
          {after}
        </div>
      ) : layout === "media-split" ? (
        <div className="container section-y exp-section-inner">
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
        <div className="container section-y exp-section-inner">
          <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-stretch lg:gap-x-8 lg:gap-y-10">
            <div className="flex flex-col lg:h-full [&_h2]:mb-8 [&_h2]:max-w-[8em]">
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
            "container section-y exp-section-inner",
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
