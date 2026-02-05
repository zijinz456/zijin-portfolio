"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "./Avatar";

const traits = [
  {
    id: "fast-learner",
    icon: "⚡",
    label: "Fast Learner",
    color: "#ffe135",
    position: { top: "-10%", left: "5%" },
    href: "/traits/fast-learner",
  },
  {
    id: "complexity-clarity",
    icon: "🎯",
    label: "Complexity → Clarity",
    color: "#87ceeb",
    position: { top: "-15%", left: "50%", transform: "translateX(-50%)" },
    href: "/traits/complexity-clarity",
  },
  {
    id: "end-to-end",
    icon: "🚀",
    label: "End-to-End Builder",
    color: "#ff6b9d",
    position: { top: "-10%", right: "5%" },
    href: "/traits/end-to-end-builder",
  },
];

export default function AvatarWithTraits() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Floating Trait Bubbles */}
      {traits.map((trait, index) => (
        <motion.div
          key={trait.id}
          className="absolute z-10"
          style={{
            top: trait.position.top,
            left: trait.position.left,
            right: trait.position.right,
            transform: trait.position.transform,
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
        >
          <Link href={trait.href}>
            <motion.div
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Bubble */}
              <motion.div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center text-xl md:text-2xl"
                style={{ backgroundColor: trait.color }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {trait.icon}
              </motion.div>

              {/* Tooltip on hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div
                  className="px-3 py-1.5 rounded-lg border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] text-xs font-medium whitespace-nowrap"
                  style={{ backgroundColor: trait.color }}
                >
                  {trait.label}
                </div>
              </div>

              {/* Connection line to avatar */}
              <motion.div
                className="absolute top-full left-1/2 w-0.5 h-6 md:h-8 bg-gray-300 -translate-x-1/2"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8 + index * 0.15 }}
                style={{ transformOrigin: "top" }}
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}

      {/* Avatar */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar scene="default" size="xl" />
      </motion.div>

      {/* Decorative ring */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-dashed border-gray-200 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.3 }}
      />
    </div>
  );
}
