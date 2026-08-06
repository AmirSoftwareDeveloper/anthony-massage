"use client";

import * as React from "react";

const DURATION = 1600;

const easeOut = (t: number) => 1 - (1 - t) ** 3;

type CountUpProps = {
  value: number;
  suffix?: string;
};

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
