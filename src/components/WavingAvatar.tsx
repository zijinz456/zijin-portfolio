"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

interface WavingAvatarProps {
  size?: number;
  className?: string;
}

export default function WavingAvatar({ size = 180, className = "" }: WavingAvatarProps) {
  const [frame, setFrame] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 0 ? 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      className={`rounded-xl bg-white ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: "url('/skills/waving-avatar-sprite.webp')",
        backgroundSize: "200%",
        backgroundPosition: frame === 0 ? "0% 50%" : "100% 50%",
        backgroundRepeat: "no-repeat",
      }}
      animate={prefersReducedMotion ? undefined : { scale: [1, 1.02, 1] }}
      transition={prefersReducedMotion ? undefined : { duration: 0.25, ease: "easeOut" }}
      key={prefersReducedMotion ? "static" : frame}
      role="img"
      aria-label="Waving Avatar"
    />
  );
}
