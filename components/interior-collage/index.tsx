"use client";

import type { ReactNode } from "react";
import NextImage from "next/image";

import { cn } from "@/utils";

import { useReveal } from "@/lib/experience/useReveal";

import type { InteriorImage, InteriorMedia } from "@/types";

import Title from "@/components/title";

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
  <div className={cn("exp-collage-figure", className)}>
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
      className={cn("exp-reveal exp-collage-section", flip && "exp-collage-section--flip")}
    >
      <div className="exp-collage">
        <div className="exp-collage-col exp-collage-col--media">
          {media?.main && <Figure image={media.main} />}
        </div>

        <div className="exp-collage-col exp-collage-col--copy">
          <Title
            variant="exp"
            subTitle={eyebrow}
            title={title}
            titleClassName="exp-collage-title"
          />
          <div className="exp-collage-copy">{children}</div>

          {media?.pair && media.pair.length > 0 && (
            <div className="exp-collage-pair">
              {media.pair.map((image) => (
                <Figure
                  key={image.src}
                  image={image}
                  className="exp-collage-figure--small"
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
