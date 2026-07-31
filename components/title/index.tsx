import type { HTMLAttributes } from "react";

import { cn } from "@/utils";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subTitle?: string;
  description?: string;

  center?: boolean;
  white?: boolean;

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

  className,
  titleClassName,
  subTitleClassName,
  descriptionClassName,

  as: Component = "div",
  headingLevel: HeadingTag = "h2",

  ...props
}: TitleProps) => {
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
