"use client";

import * as React from "react";

const NAV_BREAKPOINT = 1000;

export function useMobileNav() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const linksRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const scrollYRef = React.useRef(0);

  React.useEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty("--exp-nav-h", `${navRef.current.offsetHeight}px`);
      }
    };
    setNavHeight();
    window.addEventListener("resize", setNavHeight);
    window.addEventListener("load", setNavHeight);
    return () => {
      window.removeEventListener("resize", setNavHeight);
      window.removeEventListener("load", setNavHeight);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `${-scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
  }, [open]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > NAV_BREAKPOINT && open) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return { navRef, linksRef, open, setOpen };
}
