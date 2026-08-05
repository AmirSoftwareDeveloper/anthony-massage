"use client";

import * as React from "react";

/** long enough to read as a deliberate settle rather than a slot machine */
const DURATION = 1600;

/** decelerating — the figure races out and eases onto its final value */
const easeOut = (t: number) => 1 - (1 - t) ** 3;

type CountUpProps = {
  value: number;
  /** rendered immediately after the figure, e.g. "+" */
  suffix?: string;
};

/** Counts from zero to `value` the first time it scrolls into view, then stops.
 *  The final figure is what renders on the server and with JS disabled — the
 *  effect only rewinds to zero once it knows the animation can actually run,
 *  so a reader who never reaches the band still gets the real number. */
const CountUp = ({ value, suffix = "" }: CountUpProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [shown, setShown] = React.useState(value);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) return;

    setShown(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // counting again on every re-entry would make the band twitchy
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          setShown(Math.round(easeOut(t) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {shown.toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

export default CountUp;
