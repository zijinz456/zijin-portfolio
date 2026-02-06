"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface HoverSlideProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}

export default function HoverSlide({
  children,
  className,
  delay = 0,
  x = 4,
}: HoverSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ x }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
