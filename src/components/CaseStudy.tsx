"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { AvatarScene } from "./Avatar";

interface CaseStudyProps {
  id: string;
  title: string;
  subtitle: string;
  avatarScene: AvatarScene;
  challenge: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  color?: "yellow" | "pink" | "blue" | "green" | "purple";
}

const colorMap = {
  yellow: { bg: "#ffe135", light: "#fff9e6" },
  pink: { bg: "#ff6b9d", light: "#fff5f7" },
  blue: { bg: "#87ceeb", light: "#f0f9ff" },
  green: { bg: "#98d4bb", light: "#f0fdf4" },
  purple: { bg: "#e8d4f8", light: "#faf5ff" },
};

export default function CaseStudy({
  id,
  title,
  subtitle,
  avatarScene,
  challenge,
  sections,
  color = "yellow",
}: CaseStudyProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Header Card */}
      <div
        className="p-6 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] mb-4"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="flex items-center gap-4">
          <Avatar scene={avatarScene} size="md" />
          <div>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">{title}</h3>
            <p className="text-gray-700">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] overflow-hidden">
        {/* Challenge Section */}
        <div className="p-6 border-b-2 border-dashed border-[#1a1a1a]/30">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">❓</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                The Challenge
              </h4>
              <p className="text-gray-700 leading-relaxed">{challenge}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="p-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-5 border-2 border-[#1a1a1a] rounded-xl"
              style={{ backgroundColor: colors.light }}
            >
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                <span
                  className="w-8 h-8 border-2 border-[#1a1a1a] rounded-lg flex items-center justify-center text-sm font-bold text-[#1a1a1a]"
                  style={{ backgroundColor: colors.bg }}
                >
                  {index + 1}
                </span>
                {section.title}
              </h4>
              <div className="text-gray-700 leading-relaxed">{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Flow Diagram Component for Case Studies
export function FlowDiagram({ steps }: { steps: { label: string; branches?: string[] }[] }) {
  return (
    <div className="py-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-5 py-3 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0_#1a1a1a] text-center"
          >
            <span className="text-sm font-medium text-[#1a1a1a]">{step.label}</span>
          </motion.div>

          {/* Arrow or Branches */}
          {index < steps.length - 1 && (
            <div className="my-3">
              {step.branches ? (
                <div className="flex items-start gap-8">
                  {step.branches.map((branch, bi) => (
                    <div key={bi} className="flex flex-col items-center">
                      <span className="text-[#1a1a1a] text-xl font-bold">↓</span>
                      <span className="text-xs text-[#1a1a1a] px-3 py-1 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-lg font-medium">
                        {branch}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-[#1a1a1a] text-xl font-bold">↓</span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Validation Stats Component
export function ValidationStats({
  stats,
}: {
  stats: { label: string; value: string; highlight?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-4 border-2 border-[#1a1a1a] rounded-xl text-center shadow-[2px_2px_0_#1a1a1a] ${
            stat.highlight ? "bg-[#98d4bb]" : "bg-white"
          }`}
        >
          <p className="text-2xl font-bold text-[#1a1a1a]">{stat.value}</p>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
