"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Trait {
  id: string;
  icon: string;
  label: string;
  description: string;
  href: string;
}

const traits: Trait[] = [
  {
    id: "fast-learner",
    icon: "⚡",
    label: "Fast Learner",
    description: "System design in 1 month, full-stack in another",
    href: "/traits/fast-learner",
  },
  {
    id: "complexity-clarity",
    icon: "🎯",
    label: "Complexity → Clarity",
    description: "Making complex things simple",
    href: "/traits/complexity-clarity",
  },
  {
    id: "end-to-end",
    icon: "🚀",
    label: "End-to-End Builder",
    description: "From idea to product, ship the whole thing",
    href: "/traits/end-to-end-builder",
  },
];

export default function TraitBubbles() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {traits.map((trait, index) => (
        <motion.div
          key={trait.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <Link href={trait.href}>
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Speech Bubble */}
              <div className="relative bg-white border-2 border-[#1a1a1a] rounded-2xl px-5 py-4 shadow-[3px_3px_0_#1a1a1a] flex items-center gap-4 min-w-[200px]">
                {/* Text on left */}
                <div className="flex-1">
                  <p className="font-bold text-[#1a1a1a] text-sm md:text-base">
                    {trait.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {trait.description}
                  </p>
                </div>

                {/* Icon on right */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fef9f3] border-2 border-[#1a1a1a] flex items-center justify-center text-xl">
                  {trait.icon}
                </div>
              </div>

              {/* Small circle tail (thought bubble style) */}
              <div className="absolute -bottom-3 left-6 flex items-end gap-1">
                <div className="w-3 h-3 bg-white border-2 border-[#1a1a1a] rounded-full" />
                <div className="w-2 h-2 bg-white border-2 border-[#1a1a1a] rounded-full -mb-1" />
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#ffe135] rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 translate-y-1" />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
