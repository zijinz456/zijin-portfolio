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

const clarityPrinciples = [
  { title: "Hide complexity, surface simplicity", icon: "🎭" },
  { title: "Progressive disclosure", icon: "📚" },
  { title: "Context-aware responses", icon: "🎯" },
  { title: "Design for the frustrated user", icon: "💪" },
];

// Skill 2: Fast Learner
const learningExamples = [
  {
    title: "AI Tools Mastery",
    description: "Learned Figma, Pencil, n8n and various AI-powered design & automation tools",
    icon: "🎨",
  },
  {
    title: "LLM Evaluation",
    description: "Tested Claude, GPT-4, Gemini, DeepSeek — understanding each model's strengths and weaknesses",
    icon: "🤖",
  },
  {
    title: "Full-Stack in 1 Month",
    description: "Learned frontend, backend, testing, and deployment from scratch",
    icon: "💻",
  },
];

const learningTimeline = [
  { period: "Month 1", event: "Explored AI tools: Figma, Pencil; Started comparing different LLMs" },
  { period: "Month 2", event: "Designed complete VectorPaths system architecture" },
  { period: "Month 3-4", event: "Learned full-stack development: React, Node.js, PostgreSQL, CI/CD" },
  { period: "Now", event: "Building n8n workflows and iterating on VectorPaths" },
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
        className="py-16 px-6 bg-gradient-to-r from-[#ffe135]/10 to-[#ffe135]/5 border-y-2 border-[#1a1a1a]/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Hero Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-28 h-28 bg-[#ffe135]/20 rounded-2xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/skills/fast-learner.png"
                    alt="Fast Learner"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#ffe135] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                    Quick to Master New Tech
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Fast Learner
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Designed a complete system in one month. Learned full-stack development in another. I immerse myself in tools to truly understand them.
              </p>

              {/* Philosophy Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#ffe135]/30 border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] mb-6"
              >
                <p className="text-sm text-gray-700">
                  <strong>Not just reading docs — but hands-on testing everything.</strong>
                  <br />
                  I tested multiple LLMs to know when to use each. I learned full-stack by building, not by watching tutorials.
                </p>
              </motion.div>

              {/* Learning Examples */}
              <div className="space-y-3">
                {learningExamples.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-sm text-[#1a1a1a]">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                Learning Timeline
              </h4>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1a1a1a]/20" />
                {learningTimeline.map((item, index) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex items-start gap-4 mb-6"
                  >
                    <div className="w-8 h-8 bg-[#ffe135] rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold z-10 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 bg-white border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]">
                      <span className="text-xs font-bold text-[#ff6b9d]">{item.period}</span>
                      <p className="text-sm text-gray-700 mt-1">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ==================== Skill 2: Complexity to Clarity ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gradient-to-r from-[#87ceeb]/10 to-[#87ceeb]/5 border-b-2 border-[#1a1a1a]/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Hero Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-28 h-28 bg-[#87ceeb]/20 rounded-2xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/skills/clarity.png"
                    alt="Complexity to Clarity"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#87ceeb] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                    Making Complex Things Simple
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Complexity → Clarity
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I turn messy data into clear flows. The goal is understanding, not information overload.
              </p>

              {/* Design Principles */}
              <div className="grid grid-cols-2 gap-3">
                {clarityPrinciples.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-white border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]"
                  >
                    <span className="text-xl mr-2">{item.icon}</span>
                    <span className="text-xs font-medium text-[#1a1a1a]">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Transformations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                Real Transformations
              </h4>
              {clarityTransformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
                >
                  <span className="inline-block px-2 py-0.5 bg-[#87ceeb] text-[#1a1a1a] text-xs font-bold rounded-full mb-3">
                    {item.context}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-xs text-red-500 font-bold mb-1">BEFORE</p>
                      <p className="text-xs text-gray-700">{item.before}</p>
                    </div>
                    <span className="text-lg">→</span>
                    <div className="flex-1 p-2 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-xs text-green-600 font-bold mb-1">AFTER</p>
                      <p className="text-xs text-gray-700 font-medium">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ==================== Skill 3: End-to-End Builder ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gradient-to-r from-[#ff6b9d]/10 to-[#ff6b9d]/5 border-b-2 border-[#1a1a1a]/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Hero Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-28 h-28 bg-[#ff6b9d]/20 rounded-2xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/skills/end-to-end.png"
                    alt="End-to-End Builder"
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#ff6b9d] text-white text-xs font-bold rounded-full mb-1">
                    From Idea to Product, End-to-End
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    End-to-End Builder
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I ship from idea to working product. Not just designs. Not just code. The whole thing.
              </p>

              {/* VectorPaths Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] mb-6"
              >
                <p className="text-sm font-bold text-[#1a1a1a] mb-3">VectorPaths Project Stats</p>
                <div className="flex justify-around">
                  {projectStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-xl font-bold text-[#ff6b9d]">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#ff6b9d]/10 border-2 border-[#1a1a1a] rounded-xl shadow-[2px_2px_0_#1a1a1a]"
              >
                <p className="text-sm text-gray-700">
                  Real problems often emerge at <strong>the handoffs</strong> — between design and development, between frontend and backend. When you own the entire project end-to-end, you see these gaps, and you fix them.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Builder Mindset */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                Builder Mindset
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {builderMindset.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-4 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <h5 className="font-bold text-sm text-[#1a1a1a]">{item.title}</h5>
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-4 bg-[#1a1a1a] rounded-xl text-center"
              >
                <p className="text-white text-sm italic">
                  &quot;The best way to grow is to <span className="text-[#ff6b9d]">ship</span>.&quot;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
