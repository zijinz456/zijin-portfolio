"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  impact?: string;
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
    impact: "Identifying design gaps and user friction points in real-world banking operations",
    type: "main",
    linkTo: "/experience#cba-case",
    status: "in-progress",
    icon: "\u{1F3E6}",
  },
  {
    id: "vectorpaths",
    year: "2025",
    title: "VectorPaths — Founder & Product Lead",
    impact: "Solo-built full-stack adaptive learning platform — from algorithm design to production",
    type: "main",
    linkTo: "/experience#vectorpaths-case",
    status: "in-progress",
    icon: "\u{1F680}",
  },
  {
    id: "unimelb",
    year: "2024",
    title: "University of Melbourne — B.Com (Finance & Business Analytics)",
    type: "main",
    status: "in-progress",
    icon: "\u{1F393}",
  },
];

const sideQuests: TimelineEvent[] = [
  {
    id: "llm",
    year: "2025",
    title: "Multi-Stage LLM Pipeline: PDF Scan → Structured Schema",
    type: "side",
    status: "completed",
    icon: "\u{1F916}",
  },
  {
    id: "adaptive",
    year: "2025",
    title: "Adaptive Learning System Design: 2,100+ Test Cases",
    type: "side",
    status: "completed",
    icon: "\u{1F4CA}",
  },
  {
    id: "ai-prototyping",
    year: "Ongoing",
    title: "Rapid Prototyping with AI & Workflow Automation",
    type: "side",
    status: "in-progress",
    icon: "\u{1F4BB}",
  },
];

export default function Timeline() {
  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-foreground mb-2">
            Earth Online <span className="highlight-pink">Game Progress</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Quests Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 border-2 border-foreground rounded-xl bg-white shadow-sketch-lg"
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
            className="p-6 border-2 border-foreground rounded-xl bg-white shadow-sketch-lg"
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
            ? "border-blue-light bg-tint-blue hover:shadow-md cursor-pointer"
            : "border-blue-light bg-tint-blue"
        }`}
      >
        {/* Year Badge */}
        <span className="inline-block text-xs font-bold text-white bg-blue px-2 py-0.5 rounded mb-2">
          {event.year}
        </span>
        <p className="text-foreground font-medium">{event.title}</p>
        {event.impact && (
          <p className="text-xs text-gray-500 mt-1">{event.impact}</p>
        )}
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
          quest.status === "completed"
            ? "border-mint bg-tint-green opacity-80"
            : "border-pink bg-tint-pink"
        } ${quest.linkTo ? "hover:shadow-md cursor-pointer" : ""}`}
      >
        {/* Year Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-block text-xs font-bold text-white px-2 py-0.5 rounded ${quest.status === "completed" ? "bg-mint" : "bg-pink"}`}>
            {quest.year}
          </span>
          {quest.status === "completed" && (
            <span className="text-xs text-mint font-medium">Done</span>
          )}
        </div>
        <p className="text-foreground font-medium">{quest.title}</p>
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
