"use client";

import { motion } from "framer-motion";
import { fadeInUpView } from "@/lib/animations";
import Link from "next/link";

const skills = [
  {
    title: "Fast Learner",
    tag: "Adaptability",
    color: "bg-yellow",
    metricBg: "bg-yellow/20",
    metricBorder: "border-yellow/30",
    hook: "Zero to shipped product in 4 months",
    metrics: [
      { value: "4", label: "months" },
      { value: "0→1", label: "shipped product" },
    ],
    href: "/traits/fast-learner",
  },
  {
    title: "Complexity → Clarity",
    tag: "Problem Solving",
    color: "bg-blue-light",
    metricBg: "bg-blue-light/20",
    metricBorder: "border-blue-light/30",
    hook: "I turn chaos into systems",
    metrics: [
      { value: "2,138+", label: "questions structured" },
      { value: "6", label: "core topics extracted" },
    ],
    href: "/traits/complexity-clarity",
  },
  {
    title: "End-to-End Ownership",
    tag: "Execution",
    color: "bg-pink",
    metricBg: "bg-pink/20",
    metricBorder: "border-pink/30",
    hook: "Idea to shipped product, alone",
    metrics: [
      { value: "0.87", label: "R² accuracy" },
      { value: "Full", label: "stack ownership" },
    ],
    href: "/traits/end-to-end-builder",
  },
];

export default function TopSkillsShowcase() {
  return (
    <div id="top-skills" className="mt-16">
      <motion.div {...fadeInUpView} className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">
          MY TOP 3 <span className="highlight-pink">SKILLS</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            {...fadeInUpView}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={skill.href}
              className="group block h-full bg-white border-2 border-foreground rounded-xl shadow-sketch-md hover-sketch overflow-hidden"
            >
              {/* Color accent bar */}
              <div className={`h-2 ${skill.color}`} />

              <div className="p-6">
                {/* Tag */}
                <span
                  className={`inline-block px-3 py-1 ${skill.color} border-2 border-foreground text-foreground text-xs font-bold rounded-full mb-4`}
                >
                  {skill.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {skill.title}
                </h3>

                {/* Hook - one punchy line */}
                <p className="text-sm text-gray-600 mb-6">{skill.hook}</p>

                {/* Metrics */}
                <div className="flex gap-3 mb-5">
                  {skill.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className={`flex-1 p-3 ${skill.metricBg} border-2 ${skill.metricBorder} rounded-lg text-center`}
                    >
                      <p className="text-xl font-bold text-foreground">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Link indicator */}
                <span className="text-sm font-semibold text-foreground group-hover:underline">
                  Deep Dive →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
