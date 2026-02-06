"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scaleHover?: number;
  scaleTap?: number;
}

export default function HoverScale({
  children,
  className,
  scaleHover = 1.02,
  scaleTap = 0.98,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
