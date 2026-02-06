"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 20,
  scale,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        ...(scale !== undefined ? { scale } : {}),
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        ...(scale !== undefined ? { scale: 1 } : {}),
      }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
