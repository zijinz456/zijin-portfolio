"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
              What I bring to the table as a Product Builder
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
            <span className="highlight-blue">Conversation Design Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🎯</span> Multi-turn Conversation Design
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Define context collection and usage patterns</li>
                <li>• Design branching, sequencing, and decision points</li>
                <li>• Plan fallback and escalation paths</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🤖</span> Understanding LLM Behavior
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Influence outputs through patterns, examples, and guardrails</li>
                <li>• Understand LLM strengths and limitations</li>
                <li>• Use Schema constraints to ensure output stability</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>🧪</span> Experimentation & Iteration
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Form hypotheses and design tests</li>
                <li>• Iterate based on user behavior data</li>
                <li>• R² correlation to validate design decisions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
            >
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                <span>💬</span> Adaptive Communication
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Adjust tone and pace based on user needs</li>
                <li>• Identify real intent vs. literal requests</li>
                <li>• De-escalation and handoff design</li>
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Photography × K-Pop</h3>

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
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-2xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/skills/photography.png"
                    alt="Photography"
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#fff5f7] border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-white rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] flex items-center justify-center overflow-hidden">
                <Image
                  src="/skills/baking.png"
                  alt="Baking"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a]">Baking</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Creative experiments in the kitchen. I love the precision and creativity involved in baking —
              it&apos;s like coding, but delicious!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-lg text-sm">Cakes</span>
              <span className="px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-lg text-sm">Cookies</span>
              <span className="px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-lg text-sm">Bread</span>
              <span className="px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-lg text-sm">Pastries</span>
            </div>
          </motion.div>
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
