"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Update {
  label: string;
  content: string;
  description?: string;
  color: string;
  image?: string;
}

const updates: Update[] = [
  {
    label: "Building",
    content: "Finishing VectorPaths",
    description: "My first AI vibe coding project",
    color: "#ffe135",
  },
  {
    label: "Learning",
    content: "AI Model Deployment",
    description: "Local deployment & training workflows",
    color: "#ff6b9d",
  },
  {
    label: "Creating",
    content: "Photography",
    description: "Helping others capture moments",
    color: "#87ceeb",
    image: "/skills/photography.png",
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

      {/* Update Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {updates.map((update, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {/* Image or Number Badge */}
            {update.image ? (
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={update.image}
                  alt={update.content}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ) : (
              <span
                className="inline-block w-8 h-8 border-2 border-[#1a1a1a] rounded-lg mb-4 text-center leading-7 font-bold text-sm"
                style={{ backgroundColor: update.color, color: update.color === "#ff6b9d" ? "white" : "#1a1a1a" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            )}

            {/* Label */}
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              {update.label}
            </p>

            {/* Content */}
            <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">
              {update.content}
            </h3>

            {/* Description */}
            {update.description && (
              <p className="text-sm text-gray-600">{update.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
