import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  `relative overflow-hidden group/button inline-flex items-center justify-center duration-400 whitespace-nowrap font-bold rounded ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
        "outline-secondary": "border border-secondary text-secondary hover:bg-secondary hover:text-white",
        link: "text-neutral-900 underline-offset-4 hover:underline",
        neutral: "bg-white text-primary-dark hover:text-white",
        experience: "exp-btn rounded-full font-medium",
      },
      size: {
        default: "px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-xs sm:text-sm",
        sm: "px-6 lg:px-7 py-3.5 lg:py-3.5",
        lg: "px-6 py-5",
        icon: "h-10 w-10",
        experience: "px-[1.7rem] py-[0.85rem] text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
