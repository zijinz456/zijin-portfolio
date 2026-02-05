"use client";

import { motion } from "framer-motion";

const philosophies = [
  {
    icon: "🎯",
    title: "Understand the Real Goal",
    subtitle: "Not the literal request",
    example: "At CBA, when a customer says 'I want to transfer money', the real need might be 'I'm not sure how to use the app'",
    color: "#ffe135",
  },
  {
    icon: "🧠",
    title: "Reduce Cognitive Load",
    subtitle: "Make complex things simple",
    example: "In VectorPaths, hide 10+ dimensions of question classification from users, only show 'Here's the next best question for you'",
    color: "#87ceeb",
  },
  {
    icon: "⚠️",
    title: "Design Failure Paths",
    subtitle: "Not just success paths",
    example: "What happens when users answer wrong? When they're confused? When they give up?",
    color: "#ffb6c1",
  },
  {
    icon: "📊",
    title: "Validate Intuition with Data",
    subtitle: "Not just gut feeling",
    example: "Use R² correlation from Exam Reports to validate difficulty classification accuracy",
    color: "#98d4bb",
  },
];

export default function DesignPhilosophy() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {philosophies.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="p-5 border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] transition-all"
          style={{ backgroundColor: item.color }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.subtitle}</p>
            </div>
          </div>
          <div className="mt-3 p-3 bg-white/60 rounded-lg border border-[#1a1a1a]/20">
            <p className="text-xs text-gray-600 italic">→ {item.example}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
