"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Routes } from "@/constants/routes";

const FooterCredit = () => {
  const pathname = usePathname();

  if (pathname !== Routes.HOME) return null;

  return (
    <span className="text-xs">
      Developed by{" "}
      <Link
        href="https://truesocialmarketing.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        TSM
      </Link>
    </span>
  );
};

export default FooterCredit;
