"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "@/components/Avatar";

const examples = [
  {
    title: "AI Design Tools",
    description: "Mastered Figma, Pencil, and various AI-powered design tools to create product mockups and prototypes",
    icon: "🎨",
    color: "#e8d4f8",
  },
  {
    title: "LLM Comparison & Evaluation",
    description: "Tested Claude, GPT-4, Gemini, DeepSeek and more — understanding each model's strengths, weaknesses, and optimal use cases",
    icon: "🤖",
    color: "#87ceeb",
  },
  {
    title: "VectorPaths System Design",
    description: "Designed the entire VectorPaths architecture in one month — from knowledge graph structure to learning path algorithms",
    icon: "📐",
    color: "#98d4bb",
  },
  {
    title: "Full-Stack Development",
    description: "Learned the complete dev workflow in one month — frontend, backend, database, testing, and deployment",
    icon: "💻",
    color: "#ffe135",
  },
  {
    title: "Workflow Automation",
    description: "Built automated workflows with n8n, connecting AI agents with external services for intelligent data processing",
    icon: "⚙️",
    color: "#ff6b9d",
  },
];

const timeline = [
  { period: "Month 1", event: "Explored AI tools: Figma, Pencil, various design software; Started comparing different LLMs" },
  { period: "Month 2", event: "Designed the complete VectorPaths system architecture — knowledge graphs, learning algorithms, user experience flow" },
  { period: "Month 3", event: "Intensive full-stack learning: React/Next.js frontend, Node.js backend, PostgreSQL database design" },
  { period: "Month 4", event: "Mastered testing, CI/CD, deployment pipelines; Built n8n automation workflows with AI agents" },
  { period: "Now", event: "Continuously iterating on VectorPaths while exploring new AI capabilities and tools" },
];

export default function FastLearnerPage() {
  return (
    <div className="min-h-screen bg-[#fef9f3] pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
            >
              ← Back to Home
            </Link>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 bg-[#ffe135] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center text-5xl"
            >
              ⚡
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-wide">
              <span className="highlight-yellow">Fast Learner</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Designed a complete system in one month. Learned full-stack development in another.
              <br />
              Learning is not just consuming—it&apos;s building and comparing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#ffe135]/20 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 tracking-wide">
              My Learning Philosophy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Not &quot;learn then do&quot; — but &quot;learn by doing&quot;.</strong>
              </p>
              <p>
                I don&apos;t just read documentation — I immerse myself in tools. From Figma to n8n, from Claude to GPT-4, I&apos;ve hands-on tested every major AI tool to truly understand their capabilities and limitations.
              </p>
              <p>
                With VectorPaths, I spent one month designing the complete system architecture before writing a single line of code. Then in the next month, I taught myself the entire development stack — frontend, backend, testing, deployment. Not from courses, but from building.
              </p>
              <p>
                <strong>Understanding the landscape matters.</strong> By testing multiple LLMs, I know when to use Claude for nuanced reasoning, when GPT excels, and where open-source models fit. This breadth enables better decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Rapid Learning <span className="highlight-pink">Examples</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
                style={{ backgroundColor: item.color }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Timeline */}
      <section className="py-16 px-6 bg-[#fff9e6]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Learning <span className="highlight-yellow">Timeline</span>
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1a1a1a]/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-4 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-8 h-8 bg-[#ffe135] rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                <div className="flex-1 p-4 bg-white border-2 border-[#1a1a1a] rounded-lg shadow-[2px_2px_0_#1a1a1a]">
                  <span className="text-xs font-bold text-[#ff6b9d]">{item.period}</span>
                  <p className="text-sm text-gray-700 mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-light mb-8 tracking-wide">
              &quot;The best way to learn is to <span className="text-[#ffe135]">build</span>.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/experience#vectorpaths-case"
                className="px-6 py-3 bg-[#ffe135] text-[#1a1a1a] rounded-lg font-medium hover:bg-[#fff59d] transition-colors"
              >
                See VectorPaths Case →
              </Link>
              <Link
                href="/traits/complexity-clarity"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Next: Complexity → Clarity
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
