import NextImage from "next/image";

import type { TestimonialItem } from "@/types";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Stars = ({ rating = 5 }: { rating?: number }) => (
  <div
    className="flex justify-center gap-1.5"
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={i < rating ? "size-5 fill-exp-glow" : "size-5 fill-white/15"}
      >
        <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.35l-5.8 3.05 1.1-6.47L2.6 9.35l6.5-.95z" />
      </svg>
    ))}
  </div>
);

const TestimonialGrid = ({ items }: { items: TestimonialItem[] }) => (
  <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
    {items.map((item, i) =>
      item.kind === "media" ? (
        <div
          key={`media-${i}`}
          className="relative mb-6 aspect-4/5 break-inside-avoid overflow-hidden rounded-2xl bg-exp-ink/30"
        >
          <NextImage
            src={item.imgSrc}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {item.videoUrl && (
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play video testimonial"
              className="absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-exp-gold"
            >
              <span className="grid size-16 place-items-center rounded-full bg-exp-dusk/55 text-white backdrop-blur-sm transition-transform duration-300 ease-exp-release hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6 translate-x-0.5 fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
          )}
        </div>
      ) : (
        <figure
          key={`quote-${i}`}
          className="mb-6 break-inside-avoid rounded-2xl border border-white/10 bg-exp-dusk/35 px-8 py-9 text-center backdrop-blur-sm"
        >
          <Stars rating={item.rating} />

          <blockquote className="mt-6 text-base leading-loose font-light text-white/85">
            &ldquo;{item.testimonial}&rdquo;
          </blockquote>

          <figcaption className="mt-7 flex flex-col items-center gap-3">
            {item.imgSrc ? (
              <NextImage
                src={item.imgSrc}
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="grid size-14 place-items-center rounded-full border border-white/15 bg-white/5 font-display text-lg text-exp-glow italic"
              >
                {initialsOf(item.name)}
              </span>
            )}
            <span className="text-sm font-medium text-white">{item.name}</span>
          </figcaption>
        </figure>
      )
    )}
  </div>
);

export default TestimonialGrid;
