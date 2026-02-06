"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  x = 0,
  y = 20,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      animate={{ opacity: 1, y: 0, x: 0, transition: { delay, duration: 0.6 } }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "100px 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
