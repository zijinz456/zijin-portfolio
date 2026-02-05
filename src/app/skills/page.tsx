"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: "🤖",
    skills: ["LLM Engineering", "AI Agents (LangChain, AutoGPT)", "AI Workflow (n8n)", "Vibe Coding", "Prompt Design"],
    color: "#e8d4f8",
  },
  {
    title: "Product & Design",
    icon: "🎨",
    skills: [
      "Conversational Flow Design",
      "Adaptive System Design",
      "Data Modelling",
      "User Journey Mapping",
      "Prototyping",
    ],
    color: "#87ceeb",
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Python", "CI/CD (GitHub, Vercel, Render)", "Automated Testing", "Schema Constraints"],
    color: "#98d4bb",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#fef9f3] pt-24">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Skills & <span className="highlight-yellow">Capabilities</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What I bring to the table as a Conversation Designer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#1a1a1a] mb-8 text-center"
          >
            <span className="highlight-pink">Technical Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                style={{ backgroundColor: category.color }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-lg text-sm text-[#1a1a1a] hover:bg-[#ffe135] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Design Skills */}
      <section className="py-12 px-6 bg-[#fff9e6]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#1a1a1a] mb-8 text-center"
          >
            <span className="highlight-blue">Conversation Design 能力</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🎯</span> 设计多轮对话旅程
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 定义上下文收集和使用方式</li>
                <li>• 设计分支、排序和决策点</li>
                <li>• 规划 fallback 和 escalation 路径</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🤖</span> 理解 LLM 行为
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 通过 patterns、examples 和 guardrails 影响输出</li>
                <li>• 了解 LLM 的优势和局限</li>
                <li>• 使用 Schema constraints 确保输出稳定性</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🧪</span> 实验和迭代
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 形成假设并设计测试</li>
                <li>• 基于用户行为数据迭代</li>
                <li>• R² 相关性验证设计决策</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>💬</span> 适应性沟通
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 根据用户需求调整语气和节奏</li>
                <li>• 识别真实意图 vs 字面请求</li>
                <li>• De-escalation 和 handoff 设计</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Work Section */}
      <section id="beyond-work" className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-[#1a1a1a] mb-8 text-center"
          >
            <span className="highlight-yellow">Beyond Work</span>
          </motion.h2>

          {/* Kpop × Photography Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-8 bg-gradient-to-r from-[#ff6b9d]/20 to-[#87ceeb]/20 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📷</span>
              <span className="text-2xl">×</span>
              <span className="text-3xl">🎵</span>
              <h3 className="text-xl font-bold text-[#1a1a1a] ml-2">Photography × K-Pop</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ff6b9d] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <p className="text-gray-700">Started with a passion for <strong>K-pop culture</strong></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#87ceeb] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <p className="text-gray-700">Picked up <strong>photography</strong> to capture concerts & events</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#ffe135] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">3</div>
                <p className="text-gray-700">Built skills and portfolio through practice</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#98d4bb] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <p className="text-gray-700">Turned it into a <strong>side business</strong></p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/60 rounded-lg border border-[#1a1a1a]/20">
              <p className="text-sm text-gray-600 italic text-center">
                &quot;I don&apos;t just have hobbies—I <span className="highlight-yellow">build things</span> from them.&quot;
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                This is my &quot;End-to-End Builder&quot; mindset in action outside of tech!
              </p>
            </div>
          </motion.div>

          {/* Other Hobbies */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#fff5f7] border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🧁</span>
                <h3 className="text-lg font-bold text-[#1a1a1a]">Baking</h3>
              </div>
              <p className="text-sm text-gray-600">
                Creative experiments in the kitchen. I love the precision and creativity involved in baking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#f0f9ff] border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎵</span>
                <h3 className="text-lg font-bold text-[#1a1a1a]">K-Pop</h3>
              </div>
              <p className="text-sm text-gray-600">
                Music & culture enthusiast. Following my favorite artists and attending concerts!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
              &quot;The best way to learn is to build. The best way to grow is to ship.&quot;
            </p>
            <p className="text-[#ffe135]">— My philosophy</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
