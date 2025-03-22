"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Speed factor (negative values move in opposite direction)
  className?: string;
  direction?: Direction;
  // Using the correct type for offset
  offset?: Array<"start end" | "end start" | string>;
}

export default function Parallax({
  children,
  speed = 0.3,
  className = "",
  direction = "up",
  offset = ["start end", "end start"] as Array<
    "start end" | "end start" | string
  >,
}: ParallaxProps) {
  // Create ref unconditionally
  const ref = useRef<HTMLDivElement>(null);

  // Create scroll progress unconditionally
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  // Create all transforms unconditionally
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  // Choose the correct transform based on direction
  let transformStyle = {};
  if (direction === "up") {
    transformStyle = { y: yUp };
  } else if (direction === "down") {
    transformStyle = { y: yDown };
  } else if (direction === "left") {
    transformStyle = { x: xLeft };
  } else if (direction === "right") {
    transformStyle = { x: xRight };
  }

  return (
    <motion.div ref={ref} style={transformStyle} className={className}>
      {children}
    </motion.div>
  );
}
