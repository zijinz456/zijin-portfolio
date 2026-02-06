"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Avatar from "./Avatar";

interface Trait {
  id: string;
  label: string;
  href: string;
}

const traits: Trait[] = [
  {
    id: "fast-learner",
    label: "Fast Learner",
    href: "/traits/fast-learner",
  },
  {
    id: "complexity-clarity",
    label: "Complexity to Clarity",
    href: "/traits/complexity-clarity",
  },
  {
    id: "end-to-end",
    label: "End-to-End Builder",
    href: "/traits/end-to-end-builder",
  },
];

export default function AvatarWithBubbles() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center">
      {/* Trait Bubbles - row above avatar */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {traits.map((trait, index) => (
          <motion.div
            key={trait.id}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1, duration: 0.4 }}
          >
            <Link href={trait.href} className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              >
                {/* Speech Bubble */}
                <div className="relative bg-white border-2 border-foreground rounded-full px-4 py-2 shadow-sketch-sm whitespace-nowrap">
                  <p className="font-medium text-foreground text-sm">
                    {trait.label}
                  </p>
                </div>

                {/* Small circle tail pointing down */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-2 h-2 bg-white border-2 border-foreground rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white border-[1.5px] border-foreground rounded-full" />
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-yellow rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0.5 translate-y-0.5" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Avatar */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
        className="mt-2"
      >
        <Avatar size="xl" priority />
      </motion.div>

      {/* Label + Hint */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.6 }}
        className="mt-6 text-center"
      >
        <p className="text-base font-bold text-foreground tracking-widest uppercase">
          MY TOP 3 SKILLS
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Click the bubbles to explore
        </p>
      </motion.div>
    </div>
  );
}
