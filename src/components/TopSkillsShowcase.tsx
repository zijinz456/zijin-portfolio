"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Skill 1: Complexity to Clarity
const clarityTransformations = [
  {
    before: "10+ dimensions of question classification",
    after: "\"Here's the next best question for you\"",
    context: "VectorPaths",
  },
  {
    before: "\"I want to transfer money\"",
    after: "Real need: \"I'm not sure how to use the app\"",
    context: "CBA Service",
  },
  {
    before: "3000+ raw question data",
    after: "Structured knowledge graph + ROI ranking",
    context: "LLM Extraction",
  },
];

const clarityPrinciples = [
  { text: "Hide complexity, surface simplicity", icon: "🎭" },
  { text: "Progressive disclosure", icon: "📚" },
  { text: "Context-aware responses", icon: "🎯" },
  { text: "Design for frustrated users first", icon: "💪" },
];

// Skill 2: Fast Learner
const learningExamples = [
  {
    title: "Zero to Portfolio in 3 Hours",
    description: "Built this entire site from scratch with Next.js + Tailwind + Framer Motion",
    icon: "🚀",
  },
  {
    title: "AI Tools Mastery",
    description: "Self-taught Figma, n8n, and various AI-powered design & automation tools",
    icon: "🎨",
  },
  {
    title: "Full-Stack in 1 Month",
    description: "Learned React, Node.js, PostgreSQL, testing, CI/CD from zero",
    icon: "💻",
  },
];

// Skill 3: End-to-End Builder
const builderMindset = [
  { title: "Ownership", description: "If I see a problem, I fix it.", icon: "🔧" },
  { title: "Iteration", description: "Ship MVP first, iterate based on feedback.", icon: "🔄" },
  { title: "Full Stack Thinking", description: "Understand how the whole system works.", icon: "🧠" },
  { title: "Ship > Perfect", description: "Make it work first, then make it better.", icon: "🚢" },
];

const projectStats = [
  { label: "Questions Processed", value: "3,000+" },
  { label: "Test Cases", value: "2,100+" },
  { label: "R² Correlation", value: "0.87" },
];

export default function TopSkillsShowcase() {
  return (
    <div id="top-skills" className="mt-16 space-y-0">
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-48 h-48 bg-[#ffe135] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/fast-learner.png"
                  alt="Fast Learner"
                  width={180}
                  height={180}
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

            <p className="text-gray-600 mb-4 leading-relaxed">
              I learn by building, not by watching tutorials. Designed a complete system architecture in one month, learned full-stack development in another.
            </p>

            {/* Philosophy */}
            <div className="p-3 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-lg mb-4">
              <p className="text-sm text-[#1a1a1a]">
                <strong>My approach:</strong> Hands-on testing everything. I tested Claude, GPT-4, Gemini, DeepSeek to understand when to use each — not just reading docs.
              </p>
            </div>

            {/* Learning Examples */}
            <div className="grid md:grid-cols-3 gap-3">
              {learningExamples.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                >
                  <span className="text-xl mb-1 block">{item.icon}</span>
                  <p className="font-bold text-sm text-[#1a1a1a]">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-48 h-48 bg-[#87ceeb] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/clarity.png"
                  alt="Complexity to Clarity"
                  width={180}
                  height={180}
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

            <p className="text-gray-600 mb-4 leading-relaxed">
              I turn messy data into clear flows. The goal is understanding, not information overload. Users shouldn&apos;t need to think — the system should think for them.
            </p>

            {/* Design Principles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {clarityPrinciples.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-2 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-lg text-center"
                >
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-xs font-medium text-[#1a1a1a] mt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Real Transformations */}
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Real Transformations</p>
            <div className="space-y-2">
              {clarityTransformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-[#f0f9ff] border-2 border-[#1a1a1a] rounded-lg"
                >
                  <span className="inline-block px-2 py-0.5 bg-[#87ceeb] border border-[#1a1a1a] text-[#1a1a1a] text-xs font-bold rounded mb-2">
                    {item.context}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="flex-1 text-gray-600">{item.before}</span>
                    <span className="text-[#1a1a1a] font-bold">→</span>
                    <span className="flex-1 text-[#1a1a1a] font-medium">{item.after}</span>
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-48 h-48 bg-[#ff6b9d] rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/end-to-end.png"
                  alt="End-to-End Builder"
                  width={180}
                  height={180}
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

            <p className="text-gray-600 mb-4 leading-relaxed">
              I ship from idea to working product. Not just designs. Not just code. The whole thing — including deployment, testing, and iteration based on real user feedback.
            </p>

            {/* VectorPaths Stats */}
            <div className="p-4 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a] mb-4">
              <p className="text-sm font-bold text-white mb-2">VectorPaths — Built from scratch</p>
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
            <div className="grid grid-cols-2 gap-3 mb-4">
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

            {/* Quote */}
            <div className="p-3 bg-[#1a1a1a] rounded-lg text-center">
              <p className="text-white text-sm">
                &quot;The best way to learn is to <span className="text-[#ffe135]">build</span>. The best way to grow is to <span className="text-[#ff6b9d]">ship</span>.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
