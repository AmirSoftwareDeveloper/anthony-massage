"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import navLinks from "@/constants/navLinks";

import Logo from "@/components/logo";

import MobileNavSheet from "./MobileNavSheet";

const Nav = () => {
  const pathname = usePathname();
  const navRef = React.useRef<HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);

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

  return (
    <nav
      ref={navRef as React.RefObject<HTMLElement>}
      className="exp-nav"
    >
      <Logo />

      <div className="exp-nav-links">
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(pathname === item.href && "exp-current")}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <MobileNavSheet
        open={open}
        onOpenChange={setOpen}
      />
    </nav>
  );
};

export default Nav;
