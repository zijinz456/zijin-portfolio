"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index: number;
  baseDelay?: number;
  style?: React.CSSProperties;
}

export default function StaggerItem({
  children,
  className,
  index,
  baseDelay = 0,
  style,
}: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: baseDelay + index * 0.1 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
