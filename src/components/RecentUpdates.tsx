"use client";

import { motion } from "framer-motion";

interface Update {
  label: string;
  content: string;
  description?: string;
  color: string;
}

const updates: Update[] = [
  {
    label: "Building",
    content: "Finishing VectorPaths",
    description: "AI-powered adaptive learning platform",
    color: "var(--yellow)",
  },
  {
    label: "Learning",
    content: "AI Model Deployment",
    description: "Local deployment & training workflows",
    color: "var(--pink)",
  },
  {
    label: "Creating",
    content: "Photography",
    description: "Helping others capture moments",
    color: "var(--blue-light)",
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
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">
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
            className="p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-lg hover:shadow-sketch-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            {/* Number Badge */}
            <span
              className="inline-block w-8 h-8 border-2 border-foreground rounded-lg mb-4 text-center leading-7 font-bold text-sm"
              style={{ backgroundColor: update.color, color: update.color === "var(--pink)" ? "white" : "var(--foreground)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Label */}
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              {update.label}
            </p>

            {/* Content */}
            <h3 className="font-bold text-foreground mb-2">
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
