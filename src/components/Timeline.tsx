"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  type: "main" | "side";
  linkTo?: string;
  status?: "completed" | "in-progress";
  icon?: string;
}

const mainQuests: TimelineEvent[] = [
  {
    id: "cba",
    year: "2025.03",
    title: "Commonwealth Bank — Customer Banking Specialist",
    type: "main",
    linkTo: "#cba-case",
    status: "in-progress",
    icon: "🏦",
  },
  {
    id: "vectorpaths",
    year: "2025.12",
    title: "VectorPaths — Founder & Product Lead",
    type: "main",
    linkTo: "#vectorpaths-case",
    status: "in-progress",
    icon: "🚀",
  },
  {
    id: "unimelb",
    year: "2024",
    title: "University of Melbourne — B.Com (Finance & Business Analytics)",
    type: "main",
    status: "in-progress",
    icon: "🎓",
  },
];

const sideQuests: TimelineEvent[] = [
  {
    id: "llm",
    year: "2025",
    title: "LLM + Schema Data Extraction: 3,000+ Questions Structured",
    type: "side",
    status: "completed",
    icon: "🤖",
  },
  {
    id: "adaptive",
    year: "2025",
    title: "Adaptive Learning System Design: 2,100+ Test Cases",
    type: "side",
    status: "completed",
    icon: "📊",
  },
  {
    id: "vibe-coding",
    year: "Ongoing",
    title: "Learning Vibe Coding & AI Workflow",
    type: "side",
    status: "in-progress",
    icon: "💻",
  },
];

export default function Timeline() {
  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            Earth Online <span className="highlight-pink">Game Progress</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Quests Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 border-2 border-[#1a1a1a] rounded-2xl bg-white shadow-[4px_4px_0_#1a1a1a]"
          >
            {/* Main Quest Header */}
            <h3 className="inline-block text-lg font-bold mb-6">
              <span className="highlight-pink px-2 py-1">Main Quests</span>
            </h3>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Dotted Timeline Line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-gray-300" />

              {/* Events */}
              <div className="space-y-6">
                {mainQuests.map((event, index) => (
                  <MainQuestNode key={event.id} event={event} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Quests Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 border-2 border-[#1a1a1a] rounded-2xl bg-white shadow-[4px_4px_0_#1a1a1a]"
          >
            {/* Side Quest Header */}
            <h3 className="inline-block text-lg font-bold mb-6">
              <span className="highlight-pink px-2 py-1">Side Quests</span>
            </h3>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Dotted Timeline Line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-gray-300" />

              {/* Events */}
              <div className="space-y-6">
                {sideQuests.map((quest, index) => (
                  <SideQuestNode key={quest.id} quest={quest} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MainQuestNode({ event, index }: { event: TimelineEvent; index: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Icon on timeline */}
      <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xs">
        {event.icon}
      </div>

      {/* Card */}
      <div
        className={`p-4 border-2 rounded-xl transition-all ${
          event.linkTo
            ? "border-[#87ceeb] bg-[#f0f9ff] hover:shadow-md cursor-pointer"
            : "border-[#87ceeb] bg-[#f0f9ff]"
        }`}
      >
        {/* Year Badge */}
        <span className="inline-block text-xs font-bold text-white bg-[#4a90d9] px-2 py-0.5 rounded mb-2">
          {event.year}
        </span>
        <p className="text-[#1a1a1a] font-medium">{event.title}</p>
      </div>
    </motion.div>
  );

  if (event.linkTo) {
    return (
      <Link href={event.linkTo} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

function SideQuestNode({ quest, index }: { quest: TimelineEvent; index: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="relative"
    >
      {/* Icon on timeline */}
      <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-xs">
        {quest.icon}
      </div>

      {/* Card */}
      <div
        className={`p-4 border-2 rounded-xl transition-all ${
          quest.status === "in-progress"
            ? "border-[#ff6b9d] bg-[#fff0f5]"
            : "border-[#ff6b9d] bg-[#fff0f5]"
        } ${quest.linkTo ? "hover:shadow-md cursor-pointer" : ""}`}
      >
        {/* Year Badge */}
        <span className="inline-block text-xs font-bold text-white bg-[#ff6b9d] px-2 py-0.5 rounded mb-2">
          {quest.year}
        </span>
        <p className="text-[#1a1a1a] font-medium">{quest.title}</p>
      </div>
    </motion.div>
  );

  if (quest.linkTo) {
    return (
      <Link href={quest.linkTo} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
