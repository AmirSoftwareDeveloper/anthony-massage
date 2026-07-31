"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/utils";

import { Routes } from "@/constants/routes";

import Logo from "@/components/logo";
import Sidebar from "@/components/sidebar";

import { Button } from "../ui/button";
import NavMenu from "./NavMenu";

const SCROLL_THRESHOLD = 40;

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  React.useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-divider transition-colors duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between py-5 gap-10">
        <Logo />

        <NavMenu />

        <Link
          href={Routes.CONTACT}
          className="hidden lg:block"
        >
          <Button>Get In Touch</Button>
        </Link>

        <div className="lg:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
