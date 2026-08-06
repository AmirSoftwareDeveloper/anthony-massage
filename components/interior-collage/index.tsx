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

  return (
    <section
      id={id}
      ref={reveal}
      className="exp-reveal exp-collage-section"
    >
      {/* Container and rhythm mirror the home page's media-split section
          (components/home-section, layout="media-split") so a chapter here
          breathes exactly like a section there. */}
      <div className="mx-auto grid w-full max-w-340 grid-cols-1 items-stretch gap-9 px-6 py-24 md:px-9 md:py-36 lg:grid-cols-2 lg:gap-x-18 lg:gap-y-10">
        <div className={cn("order-none flex min-w-0 flex-col gap-10", flip && "lg:order-2")}>
          {media?.main && (
            <Figure
              image={media.main}
              className="min-h-104 flex-1"
            />
          )}
        </div>

        {/* Centered against the figure beside it rather than dropped down it:
            the column still stretches to the row height, so the two columns end
            flush, but the copy sits on the figure's vertical midline the way the
            home page's media-split section does. */}
        <div className="flex min-w-0 flex-col justify-center gap-0">
          <Title
            variant="exp"
            subTitle={eyebrow}
            title={title}
            titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
          />
          {/* `exp-collage-copy` is kept: `.exp-collage-copy .exp-quiet` in globals.css
              sets its color with `!important`, which no utility can beat. */}
          <div className="exp-collage-copy">{children}</div>

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
      </div>
    </section>
  );
};

export default InteriorCollage;
