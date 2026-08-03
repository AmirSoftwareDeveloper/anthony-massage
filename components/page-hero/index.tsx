import { cn } from "@/utils";

export type PageHeroFrame = "compressed" | "light-enters" | "rising" | "open";

const FRAME_SRC: Record<PageHeroFrame, string> = {
  compressed: "/images/hero/billboard-1-compressed.jpg",
  "light-enters": "/images/hero/billboard-2-light-enters.jpg",
  rising: "/images/hero/billboard-3-rising.jpg",
  open: "/images/hero/billboard-4-open.jpg",
};

type PageHeroProps = {
  srTitle: string;
  eyebrow: string;
  caption: string;
  frame?: PageHeroFrame;
  className?: string;
};

const PageHero = ({ srTitle, eyebrow, caption, frame = "open", className }: PageHeroProps) => {
  return (
    <header className={cn("exp-hero exp-page-hero", className)}>
      <h1 className="sr-only">{srTitle}</h1>

      <div
        className="exp-stage"
        role="img"
        aria-label={caption}
      >
        <img
          src={FRAME_SRC[frame]}
          alt=""
          width={1280}
          height={853}
          loading="eager"
          fetchPriority="high"
          className="exp-page-hero-image"
        />

        <div
          className="exp-page-hero-shine"
          aria-hidden="true"
        />

        <div
          className="exp-page-hero-scrim"
          aria-hidden="true"
        />

        <div
          className="exp-page-hero-grain"
          aria-hidden="true"
        />

        <div
          className="exp-stage-vignette"
          aria-hidden="true"
        />
      </div>

      <div className="exp-phase-strip">
        <p className="exp-eyebrow">{eyebrow}</p>
        <p className="exp-phase-caption exp-page-hero-caption-line">{caption}</p>
      </div>
    </header>
  );
};

export default PageHero;
