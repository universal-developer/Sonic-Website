"use client";

import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "scaleIn";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollAnimationWrapper({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.7,
  className = "",
  threshold = 0.2,
  once = true,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const variants = {
    hidden: {
      opacity: 0,
      y: variant === "fadeInUp" ? 40 : 0,
      x: variant === "fadeInLeft" ? -40 : variant === "fadeInRight" ? 40 : 0,
      scale: variant === "zoomIn" ? 0.9 : variant === "scaleIn" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
