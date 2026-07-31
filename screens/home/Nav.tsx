"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import navLinks from "@/constants/navLinks";

import { useMobileNav } from "@/lib/experience/useMobileNav";

const Nav = () => {
  const pathname = usePathname();
  const { navRef, open, setOpen } = useMobileNav();

  return (
    <nav
      ref={navRef as React.RefObject<HTMLElement>}
      className="exp-nav"
    >
      <div className="exp-nav-name">
        Anthony Massage
        <br />
        <span>Works</span>
      </div>

      <button
        type="button"
        className="exp-nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>

      <div
        id="primary-nav"
        className={cn("exp-nav-links", open && "exp-open")}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(pathname === item.href && "exp-current")}
            onClick={() => setOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
