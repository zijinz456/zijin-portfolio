"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Skill 1: Complexity to Clarity
const clarityTransformations = [
  {
    before: "10+ 维度的题目分类（难度、知识点、题型、易错点...）",
    after: "「这是下一道最适合你的题」",
    context: "VectorPaths",
  },
  {
    before: "用户说「我要转账」",
    after: "理解真实需求：「我不确定怎么操作 app」",
    context: "CBA 客服",
  },
  {
    before: "3000+ 道题目的原始数据",
    after: "结构化知识图谱 + ROI 排序算法",
    context: "LLM 提取",
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
    title: "LLM Engineering",
    description: "从零开始学习 prompt design、schema constraints、AI agents",
    icon: "🤖",
  },
  {
    title: "VectorPaths 全栈",
    description: "独立完成数据库设计到前端交互的完整开发",
    icon: "💻",
  },
  {
    title: "Vibe Coding",
    description: "快速适应 AI-assisted development 工作流",
    icon: "🎵",
  },
];

const learningTimeline = [
  { period: "2024 Q1", event: "开始接触 LLM，学习 prompt engineering" },
  { period: "2024 Q2", event: "掌握 LangChain、Schema constraints" },
  { period: "2024 Q3", event: "深入 AI Agents，自动化提取 3000+ 题目" },
  { period: "2025", event: "探索 Vibe Coding、n8n workflow" },
];

// Skill 3: End-to-End Builder
const builderMindset = [
  { title: "Ownership", description: "不等别人来解决问题。如果我看到问题，我就去修。", icon: "🔧" },
  { title: "Iteration", description: "先 ship 一个 MVP，然后根据反馈快速迭代。", icon: "🔄" },
  { title: "Full Stack Thinking", description: "不只是做前端或后端，而是理解整个系统如何运作。", icon: "🧠" },
  { title: "Ship > Perfect", description: "完美是进步的敌人。先让它工作，再让它更好。", icon: "🚢" },
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
                <div className="w-20 h-20 bg-[#ffe135] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center">
                  <Image
                    src="/skills/fast-learner.png"
                    alt="Fast Learner"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#ffe135] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                    快速掌握新技术
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Fast Learner
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I pick up new tools and concepts quickly, adapting to ambiguous environments with ease.
              </p>

              {/* Philosophy Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#ffe135]/30 border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] mb-6"
              >
                <p className="text-sm text-gray-700">
                  <strong>不是「学完再做」，而是「边做边学」。</strong>
                  <br />
                  当我遇到新技术时，我会找一个真实的问题，然后在解决问题的过程中学习需要的技能。
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
                <div className="w-20 h-20 bg-[#87ceeb] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center">
                  <Image
                    src="/skills/clarity.png"
                    alt="Complexity to Clarity"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#87ceeb] text-[#1a1a1a] text-xs font-bold rounded-full mb-1">
                    把复杂的东西变简单
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
                <div className="w-20 h-20 bg-[#ff6b9d] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center">
                  <Image
                    src="/skills/end-to-end.png"
                    alt="End-to-End Builder"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[#ff6b9d] text-white text-xs font-bold rounded-full mb-1">
                    从想法到产品，全程落地
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
                <p className="text-sm font-bold text-[#1a1a1a] mb-3">VectorPaths 项目数据</p>
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
                  真正的问题往往出现在<strong>交接的地方</strong>——设计和开发之间、前端和后端之间。当你能从头到尾负责整个项目时，你会看到这些缝隙，然后你会去修补它们。
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
