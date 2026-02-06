"use client";

import { motion } from "framer-motion";

const segments = [
  {
    label: "Elderly / Digital Transition",
    need: "Patience + guided self-serve coaching",
    icon: "👴",
    color: "var(--mint)",
  },
  {
    label: "ESL Customers",
    need: "Plain language + visual confirmation",
    icon: "🌏",
    color: "var(--tint-green)",
  },
  {
    label: "Business Clients",
    need: "Multi-product context + efficient handoffs",
    icon: "💼",
    color: "var(--mint)",
  },
  {
    label: "Digital Natives",
    need: "Fast resolution when app/online fails",
    icon: "📱",
    color: "var(--tint-green)",
  },
];

export default function CustomerSegmentDiagram() {
  return (
    <div className="w-full flex flex-col gap-2">
      {segments.map((segment, index) => (
        <motion.div
          key={segment.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 px-4 py-3 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm"
          style={{ backgroundColor: segment.color }}
        >
          <span className="text-lg shrink-0 mt-0.5">{segment.icon}</span>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground">{segment.label}</p>
            <p className="text-xs text-foreground/70">{segment.need}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
