"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Skill 1: Complexity to Clarity
const clarityTransformations = [
  {
    before: "10+ dimensions of question classification (difficulty, knowledge points, question type, common mistakes...)",
    after: "\"Here's the next best question for you\"",
    context: "VectorPaths",
  },
  {
    before: "User says \"I want to transfer money\"",
    after: "Understanding real need: \"I'm not sure how to use the app\"",
    context: "CBA Service",
  },
  {
    before: "3000+ raw question data",
    after: "Structured knowledge graph + ROI ranking algorithm",
    context: "LLM Extraction",
  },
];

// Skill 2: Fast Learner
const learningExamples = [
  {
    title: "This Website in 3 Hours",
    description: "Built this entire portfolio site from scratch using Next.js + Tailwind",
    icon: "🚀",
  },
  {
    title: "AI Tools Mastery",
    description: "Learned Figma, Pencil, n8n and various AI-powered design & automation tools",
    icon: "🎨",
  },
  {
    title: "Full-Stack in 1 Month",
    description: "Learned frontend, backend, testing, and deployment from scratch",
    icon: "💻",
  },
];

// Skill 3: End-to-End Builder
const builderMindset = [
  { title: "Ownership", description: "Don't wait for someone else to solve it. If I see a problem, I fix it.", icon: "🔧" },
  { title: "Iteration", description: "Ship an MVP first, then iterate fast based on feedback.", icon: "🔄" },
  { title: "Full Stack Thinking", description: "Not just frontend or backend — understanding how the whole system works.", icon: "🧠" },
  { title: "Ship > Perfect", description: "Perfect is the enemy of progress. Make it work first, then make it better.", icon: "🚢" },
];

const projectStats = [
  { label: "Questions Processed", value: "3,000+" },
  { label: "Test Cases", value: "2,100+" },
  { label: "R² Correlation", value: "0.87" },
];

export default function TopSkillsShowcase() {
  return (
    <div className="mt-16 space-y-0">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-wide">
          MY TOP 3 <span className="highlight-pink">SKILLS</span>
        </h2>
      </motion.div>

      {/* ==================== Skill 1: Fast Learner ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-6 bg-[#fff9e6]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#ffe135] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/fast-learner.png"
                  alt="Fast Learner"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#ffe135] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                  Quick to Master New Tech
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                  Fast Learner
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Designed a complete system in one month. Learned full-stack development in another. I immerse myself in tools to truly understand them.
            </p>

            {/* Learning Examples */}
            <div className="grid md:grid-cols-3 gap-4">
              {learningExamples.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <p className="font-bold text-sm text-[#1a1a1a]">{item.title}</p>
                  <p className="text-xs text-gray-700 mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== Skill 2: Complexity to Clarity ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-6 bg-[#fef9f3]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#87ceeb] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/clarity.png"
                  alt="Complexity to Clarity"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#87ceeb] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                  Making Complex Things Simple
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                  Complexity → Clarity
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I turn messy data into clear flows. The goal is understanding, not information overload.
            </p>

            {/* Real Transformations */}
            <div className="space-y-3">
              {clarityTransformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                >
                  <span className="inline-block px-2 py-0.5 bg-white border border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold rounded mb-2">
                    {item.context}
                  </span>
                  <div className="flex items-center gap-2">
                    <p className="flex-1 text-xs text-[#1a1a1a]">{item.before}</p>
                    <span className="text-[#1a1a1a] font-bold">→</span>
                    <p className="flex-1 text-xs text-[#1a1a1a] font-bold">{item.after}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== Skill 3: End-to-End Builder ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-6 bg-[#fff5f7]"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#ff6b9d] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/end-to-end.png"
                  alt="End-to-End Builder"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#ff6b9d] border-2 border-[#1a1a1a] text-white text-xs font-bold rounded-full mb-1">
                  From Idea to Product
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                  End-to-End Builder
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I ship from idea to working product. Not just designs. Not just code. The whole thing.
            </p>

            {/* VectorPaths Stats */}
            <div className="p-4 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a] mb-4">
              <p className="text-sm font-bold text-white mb-3">VectorPaths Project Stats</p>
              <div className="flex justify-around">
                {projectStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Builder Mindset */}
            <div className="grid grid-cols-2 gap-3">
              {builderMindset.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{item.icon}</span>
                    <h5 className="font-bold text-sm text-[#1a1a1a]">{item.title}</h5>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
