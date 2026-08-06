import type { HTMLAttributes } from "react";

import { cn } from "@/utils";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subTitle?: string;
  description?: string;

  center?: boolean;
  white?: boolean;
  variant?: "default" | "exp";

  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;

  as?: "section" | "div" | "header";
  headingLevel?: "h1" | "h2" | "h3" | "h4";
}

const Title = ({
  title,
  subTitle,
  description,

  center = false,
  white = false,
  variant = "default",

  className,
  titleClassName,
  subTitleClassName,
  descriptionClassName,

  as: Component = "div",
  headingLevel: HeadingTag = "h2",

  ...props
}: TitleProps) => {
  if (variant === "exp") {
    return (
      <div className={cn("exp-title-block", className)}>
        {subTitle ? (
          <p
            className={cn(
              "exp-eyebrow mb-4 text-2xs font-medium tracking-[0.32em] text-(--s-eyebrow,var(--color-exp-gold)) uppercase transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-eyebrow-lit,var(--s-eyebrow))",
              subTitleClassName
            )}
          >
            {subTitle}
          </p>
        ) : null}
        {title ? <HeadingTag className={titleClassName}>{title}</HeadingTag> : null}
      </div>
    );
  }

  const alignmentClass = center ? "items-center text-center" : "items-start text-left";

  const textColorClass = white ? "text-white" : "text-black";

  return (
    <Component
      className={cn(
        "relative mb-6 flex h-fit flex-col gap-2.5 sm:mb-8 md:mb-10 lg:gap-3",
        alignmentClass,
        white && "text-white",
        className
      )}
      {...props}
    >
      {subTitle ? (
        <p
          className={cn(
            "text-secondary w-fit rounded-sm text-sm font-semibold uppercase tracking-[0.15em] sm:text-base",
            white && "text-gray-200",
            subTitleClassName
          )}
        >
          {subTitle}
        </p>
      ) : null}

      {title ? (
        <HeadingTag
          className={cn(
            "max-w-3xl text-pretty font-bold leading-[1.15] tracking-tight",
            textColorClass,
            titleClassName
          )}
        >
          {title}
        </HeadingTag>
      ) : null}

      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-relaxed text-muted-foreground",
            white && "text-gray-200",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </Component>
  );
};

export default Title;
