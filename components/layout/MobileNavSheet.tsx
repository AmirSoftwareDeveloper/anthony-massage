"use client";

import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import navLinks from "@/constants/navLinks";
import { Routes } from "@/constants/routes";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNavSheet = ({ open, onOpenChange }: Props) => {
  const pathname = usePathname();

  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >
      <SheetTrigger asChild>
        <button
          type="button"
          className="exp-nav-toggle block lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <span />
          <span />
        </button>
      </SheetTrigger>

      <SheetContent
        id="primary-nav"
        side="right"
        className="flex flex-col gap-0 border-l border-white/10 bg-exp-dusk p-0 text-exp-parchment sm:max-w-sm"
      >
        <SheetTitle className="sr-only">Site navigation</SheetTitle>

        <div className="border-b border-white/10 px-8 pt-7 pr-12 pb-6">
          <SheetClose asChild>
            <Logo className="text-lg" />
          </SheetClose>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 px-8 pt-6 pb-6"
        >
          {navLinks.map((item) => (
            <SheetClose
              key={item.id}
              asChild
            >
              <Link
                href={item.href}
                className={cn(
                  "border-b border-white/10 py-4 font-display text-2xl italic text-exp-parchment/90 transition-colors duration-200 hover:text-exp-glow",
                  pathname === item.href && "text-exp-glow"
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-white/10 px-8 py-8">
          <Link
            href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
            className="flex items-center gap-3 text-sm+ text-exp-parchment/80 transition-colors hover:text-exp-glow"
          >
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="w-4"
            />
            {INFO.PHONE_NUMBER}
          </Link>

          <SheetClose asChild>
            <Link href={Routes.CONTACT}>
              <Button
                variant="experience"
                size="experience"
                className="w-full justify-center bg-exp-glow text-exp-dusk hover:opacity-90"
              >
                Get In Touch
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
