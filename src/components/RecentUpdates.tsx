"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Update {
  label: string;
  content: string;
  description?: string;
  color: string;
  image: string;
}

const updates: Update[] = [
  {
    label: "Building",
    content: "VectorPaths",
    description: "My first AI vibe coding project",
    color: "#ffe135",
    image: "/skills/coding.png",
  },
  {
    label: "Working",
    content: "Banking Specialist",
    description: "Customer service at CBA",
    color: "#4a90d9",
    image: "/skills/cba.png",
  },
  {
    label: "Hobby",
    content: "Photography",
    description: "Capturing moments for others",
    color: "#ff6b9d",
    image: "/skills/photography.png",
  },
  {
    label: "Hobby",
    content: "Baking",
    description: "Making cakes & desserts",
    color: "#87ceeb",
    image: "/skills/baking.png",
  },
];

export default function RecentUpdates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">
          <span className="highlight-pink">Recent Updates</span>
        </h2>
      </div>

      {/* Update Cards - 2x2 grid on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {updates.map((update, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-4 md:p-5 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {/* Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 relative">
              <Image
                src={update.image}
                alt={update.content}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Label */}
            <p
              className="text-[10px] md:text-xs font-medium uppercase tracking-wider mb-1 text-center"
              style={{ color: update.color }}
            >
              {update.label}
            </p>

            {/* Content */}
            <h3 className="font-bold text-[#1a1a1a] text-sm md:text-base text-center">
              {update.content}
            </h3>

            {/* Description */}
            {update.description && (
              <p className="text-xs text-gray-500 text-center mt-1 hidden md:block">{update.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
