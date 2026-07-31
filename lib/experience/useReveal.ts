"use client";

import * as React from "react";

export function useReveal<T extends HTMLElement>(): React.RefCallback<T> {
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  return React.useCallback((el: T | null) => {
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      el.classList.add("in-view");
      return;
    }

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -18% 0px" }
      );
    }
    observerRef.current.observe(el);
  }, []);
}
