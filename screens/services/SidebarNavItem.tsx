"use client";

import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { cn } from "@/utils";

interface Props {
  href: string;
  title: string;
  active?: boolean;
}

const SidebarNavItem = ({ href, title, active }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center justify-between rounded px-5 py-4 transition-colors duration-300",
        "bg-primary-dark hover:bg-secondary",
        active && "bg-secondary"
      )}
    >
      <span className="text-white font-medium">{title}</span>

      <FontAwesomeIcon
        icon={faLongArrowRight}
        className="w-4 h-4 text-white"
      />
    </Link>
  );
};

export default SidebarNavItem;
