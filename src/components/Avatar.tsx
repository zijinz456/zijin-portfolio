"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface AvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export default function Avatar({ size = "lg", className = "", priority = false }: AvatarProps) {
  const sizeClass = sizeClasses[size];
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative ${sizeClass} ${className}`}
      animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
      role="img"
      aria-label="Zijin smiling warmly"
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-blue-50 to-pink-50">
        <Image
          src="/avatars/default.webp"
          alt="Zijin smiling warmly"
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </motion.div>
  );
}
