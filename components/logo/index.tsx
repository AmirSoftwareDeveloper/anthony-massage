import Link from "next/link";

import { cn } from "@/utils";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  const words = INFO.BUSINESS_NAME.split(" ");
  const lastWord = words.pop();
  const leadWords = words.join(" ");

  return (
    <Link
      href={Routes.HOME}
      aria-label={`${INFO.BUSINESS_NAME} home`}
      className={cn("exp-nav-name", className)}
    >
      {leadWords}
      <br />
      <span>{lastWord}</span>
    </Link>
  );
};

export default Logo;
