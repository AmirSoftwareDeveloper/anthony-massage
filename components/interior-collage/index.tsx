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

  const copy = <div className="exp-collage-copy">{children}</div>;

  const mainImage = media?.main;

  return (
    <section
      id={id}
      ref={reveal}
      className="exp-reveal exp-collage-section"
    >
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
              <Figure
                image={mainImage}
                className="aspect-13/14 lg:aspect-auto lg:h-full"
              />
            </div>

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
