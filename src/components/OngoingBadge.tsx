"use client";

import { motion, useReducedMotion } from "framer-motion";

interface OngoingBadgeProps {
  size?: "sm" | "md";
  showBar?: boolean;
}

export default function OngoingBadge({ size = "md", showBar = true }: OngoingBadgeProps) {
  const isSmall = size === "sm";
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Badge */}
      <motion.div
        animate={prefersReducedMotion ? undefined : { opacity: [1, 0.7, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={`
          flex items-center gap-1.5
          ${isSmall ? "px-2 py-1" : "px-3 py-1.5"}
          bg-yellow border-2 border-foreground rounded-full
          shadow-sketch-sm
        `}
      >
        <span className={isSmall ? "text-xs" : "text-sm"}>🔄</span>
        <span className={`font-bold text-foreground ${isSmall ? "text-xs" : "text-sm"}`}>
          Ongoing
        </span>
      </motion.div>

      {/* Shimmer bar */}
      {showBar && (
        <div className={`
          relative overflow-hidden
          ${isSmall ? "w-20 h-1.5" : "w-32 h-2"}
          bg-foreground/20 rounded-full
        `}>
          <motion.div
            animate={prefersReducedMotion ? undefined : { x: ["-100%", "100%"] }}
            transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-yellow via-mint to-yellow rounded-full"
          />
        </div>
      )}
    </div>
  );
}
