"use client";

import type { ReactNode } from "react";

import NextImage from "next/image";

import { cn } from "@/utils";

import { useReveal } from "@/lib/experience/useReveal";

import Title from "@/components/title";

import type { InteriorImage, InteriorMedia } from "@/types";

type InteriorCollageProps = {
  id?: string;
  eyebrow: string;
  title: string;
  media?: InteriorMedia;
  /** flips the feature image to the right column — alternated down the page so
   *  consecutive chapters don't stack their images on the same side */
  flip?: boolean;
  children: ReactNode;
};

const Figure = ({ image, className }: { image: InteriorImage; className?: string }) => (
  <div className={cn("relative overflow-hidden rounded-xl bg-exp-tan/5", className)}>
    <NextImage
      src={image.src}
      alt={image.alt}
      fill
      sizes="(min-width: 900px) 640px, 100vw"
      className="object-cover"
    />
  </div>
);

const InteriorCollage = ({ id, eyebrow, title, media, flip, children }: InteriorCollageProps) => {
  const reveal = useReveal<HTMLElement>();

  const heading = (
    <Title
      variant="exp"
      subTitle={eyebrow}
      title={title}
      titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
    />
  );

  /* `exp-collage-copy` is kept: `.exp-collage-copy .exp-quiet` in globals.css
     sets its color with `!important`, which no utility can beat. */
  const copy = <div className="exp-collage-copy">{children}</div>;

  /* Not every chapter earns a photograph — Services and Contact both run
     stretches of short, purely verbal ones. Rather than pad those with filler
     images or drop them into a narrower column of their own, they reuse the
     home page's "split" section: heading in a fixed left column, copy in the
     wider right one. Same container, same vertical rhythm, so a text chapter
     and an illustrated one read as the same kind of thing. */
  const mainImage = media?.main;

  return (
    <section
      id={id}
      ref={reveal}
      className="exp-reveal exp-collage-section"
    >
      {/* Container and rhythm mirror the home page's media-split section
          (components/home-section, layout="media-split") so a chapter here
          breathes exactly like a section there. */}
      <div
        className={cn(
          "container section-y grid grid-cols-1 gap-9",
          mainImage
            ? "items-stretch lg:grid-cols-2 lg:gap-x-18 lg:gap-y-10"
            : "items-start lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-x-12"
        )}
      >
        {!mainImage ? (
          <>
            <div className="static [&_h2]:mb-0 lg:sticky lg:top-32">{heading}</div>
            <div className="min-w-0">{copy}</div>
          </>
        ) : (
          <>
            <div className={cn("order-0 flex min-w-0 flex-col gap-10", flip && "lg:order-2")}>
              {/* Fixed ratio while the chapter is stacked; from lg it fills the row
                  instead, so the figure's top edge lines up with the eyebrow and its
                  bottom edge with the last thing in the text column (the paired
                  images, where a chapter has them). The section's vertical padding
                  sits outside the grid tracks, so filling the row can't eat it. */}
              <Figure
                image={mainImage}
                className="aspect-13/14 lg:aspect-auto lg:h-full"
              />
            </div>

            {/* Top-aligned rather than centered, so the eyebrow starts level with the
                figure's top edge. */}
            <div className="flex min-w-0 flex-col justify-start gap-0">
              {heading}
              {copy}

              {media?.pair && media.pair.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {media.pair.map((image) => (
                    <Figure
                      key={image.src}
                      image={image}
                      className="aspect-square"
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InteriorCollage;
