"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  type: "main" | "side";
  icon: string;
  color: string;
}

const mainQuests: TimelineItem[] = [
  {
    date: "2025.03",
    title: "Commonwealth Bank — Customer Banking Specialist",
    type: "main",
    icon: "🏦",
    color: "#4a90d9",
  },
  {
    date: "2025.12",
    title: "VectorPaths — Founder & Product Lead",
    type: "main",
    icon: "🚀",
    color: "#ffe135",
  },
  {
    date: "2024",
    title: "University of Melbourne — B.Com (Finance & Business Analytics)",
    type: "main",
    icon: "🎓",
    color: "#98d4bb",
  },
];

const sideQuests: TimelineItem[] = [
  {
    date: "2025",
    title: "LLM + Schema Data Extraction: 3,000+ Questions Structured",
    type: "side",
    icon: "🤖",
    color: "#e8d4f8",
  },
  {
    date: "2025",
    title: "Adaptive Learning System Design: 2,100+ Test Cases",
    type: "side",
    icon: "📊",
    color: "#87ceeb",
  },
  {
    date: "Ongoing",
    title: "Learning Vibe Coding & AI Workflow",
    type: "side",
    icon: "💻",
    color: "#ffe135",
  },
];

export default function GameTimeline() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* 主线任务 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white border-2 border-[#1a1a1a] rounded-xl p-6 shadow-[4px_4px_0_#1a1a1a]"
      >
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span className="highlight-yellow px-2">Main Quests</span>
        </h3>

        <div className="space-y-6 relative">
          {/* 连接线 */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-gray-300" />

          {mainQuests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-4 pl-2"
            >
              {/* 时间节点 */}
              <div
                className="w-5 h-5 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs z-10"
                style={{ backgroundColor: quest.color }}
              >
                {quest.icon}
              </div>

              {/* 内容 */}
              <div className="flex-1 bg-[#f0f9ff] border-2 border-[#4a90d9] rounded-lg p-3">
                <span className="tag tag-blue text-xs">{quest.date}</span>
                <p className="text-sm mt-2 text-gray-700">{quest.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 支线任务 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white border-2 border-[#1a1a1a] rounded-xl p-6 shadow-[4px_4px_0_#1a1a1a]"
      >
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span className="highlight-pink px-2">Side Quests</span>
        </h3>

        <div className="space-y-6 relative">
          {/* 连接线 */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-gray-300" />

          {sideQuests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-4 pl-2"
            >
              {/* 时间节点 */}
              <div
                className="w-5 h-5 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs z-10"
                style={{ backgroundColor: quest.color }}
              >
                {quest.icon}
              </div>

              {/* 内容 */}
              <div className="flex-1 bg-[#fff5f7] border-2 border-[#ff6b9d] rounded-lg p-3">
                <span className="tag tag-pink text-xs">{quest.date}</span>
                <p className="text-sm mt-2 text-gray-700">{quest.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
