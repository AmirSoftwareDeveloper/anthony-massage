"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/utils";

/** Matches the hero's own scroll-hint threshold: the control appears once the
 *  billboard has been scrolled past, not while the visitor is still in it. */
const THRESHOLD = 300;

/** r=21 in a 48px box leaves room for the 1px ring to sit inside the border. */
const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const progressRef = useRef<SVGCircleElement | null>(null);
  const reducedMotionRef = useRef(false);

  /* Progress is written straight to the SVG attribute inside a rAF loop rather
     than held in state: the arc updates every frame while scrolling, and routing
     that through React would re-render the tree on every one. Same approach the
     wave frontier uses. */
  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;
    let queued = false;

    const read = () => {
      queued = false;
      const scrollY = window.scrollY || 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollY > THRESHOLD);

      if (progressRef.current) {
        const progress = scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0;
        progressRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotionRef.current ? "auto" : "smooth",
    });
  }, []);

  return (
    /* Kept mounted and faded rather than unmounted, so it eases out the way the
       hero's replay chip and scroll hint do instead of vanishing on a frame.
       `pointer-events-none` while hidden keeps it unclickable and out of the
       tab order is handled by `tabIndex`/`aria-hidden` below. */
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed right-5 bottom-5 z-50 grid size-12 place-items-center rounded-full",
        "border border-exp-glow/40 bg-exp-dusk/80 text-exp-glow backdrop-blur-md",
        "transition-[opacity,transform,border-color,background-color] duration-500 ease-exp-release",
        "hover:border-exp-glow hover:bg-exp-glow/10",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-exp-gold",
        "motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      {/* Progress arc: the same gold the section spine warms toward, drawn as a
          ring around the arrow so the control doubles as a read of how far down
          the page the visitor is. Rotated so it fills clockwise from 12 o'clock. */}
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          ref={progressRef}
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="opacity-70"
        />
      </svg>

      {/* Hairline arrow, matching the 1px rules and 1.5px nav bars used elsewhere
          rather than a filled glyph, which would read heavier than anything else
          on the page. Lifts slightly on hover, like the CTA buttons do. */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="relative size-4 transition-transform duration-300 ease-exp-release group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
