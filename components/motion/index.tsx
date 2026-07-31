"use client";

import type { ReactNode } from "react";
import React from "react";

import { type MotionProps, type Variants, motion } from "framer-motion";

import motionVariants from "@/utils/motionVariants";

type Props = MotionProps & {
  children: ReactNode;

  delay?: number;
  duration?: number;
  distance?: number;

  once?: boolean;

  variants?: Variants;

  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

const Motion = ({
  children,

  as = "div",

  delay = 0,
  duration = 0.5,
  distance = 40,

  once = true,

  variants,
  transition,

  ...props
}: Props) => {
  const Component = (motion as any)[as];

  return (
    <Component
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
      variants={variants ?? motionVariants.fadeUp(distance)}
      transition={{
        duration,
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Motion;
