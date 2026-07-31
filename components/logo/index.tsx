import Link from "next/link";

import { cn } from "@/utils";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className, variant = "dark" }: LogoProps) => {
  const isLight = variant === "light";
  const src = variant === "light" ? "/logo-white.png" : "/logo.png";

  return (
    <Link
      href={Routes.HOME}
      aria-label={`${INFO.BUSINESS_NAME} home`}
      className={cn("flex w-fit items-center", className)}
    >
      {/* <Image
        src={src}
        alt={INFO.BUSINESS_NAME}
        width={120}
        height={40}
        priority
        className="h-auto w-auto"
      /> */}

      <span className={cn("text-xl font-bold tracking-tight transition-colors", isLight ? "text-white" : "text-black")}>
        {INFO.BUSINESS_NAME}
      </span>
    </Link>
  );
};

export default Logo;
