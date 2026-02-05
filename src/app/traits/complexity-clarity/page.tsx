"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const transformations = [
  {
    before: "10+ 维度的题目分类（难度、知识点、题型、易错点...）",
    after: "「这是下一道最适合你的题」",
    context: "VectorPaths 学习系统",
  },
  {
    before: "用户说「我要转账」",
    after: "理解真实需求：「我不确定怎么操作 app」",
    context: "CBA 客户服务",
  },
  {
    before: "3000+ 道题目的原始数据",
    after: "结构化的知识图谱 + ROI 排序算法",
    context: "LLM + Schema 数据提取",
  },
];

const principles = [
  {
    title: "Hide complexity, surface simplicity",
    description: "用户不需要知道背后有多复杂，他们只需要一个简单的答案。",
    icon: "🎭",
    color: "#87ceeb",
  },
  {
    title: "Progressive disclosure",
    description: "先给结论，想了解更多再展开。就像这个网站的设计一样。",
    icon: "📚",
    color: "#ffe135",
  },
  {
    title: "Context-aware responses",
    description: "同样的问题，不同的用户背景，需要不同的回答方式。",
    icon: "🎯",
    color: "#ff6b9d",
  },
  {
    title: "Design for the frustrated user",
    description: "如果对困惑的用户有效，对所有人都有效。",
    icon: "💪",
    color: "#98d4bb",
  },
];

export default function ComplexityClarityPage() {
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
              className="w-24 h-24 mx-auto mb-6 bg-[#87ceeb] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center text-5xl"
            >
              🎯
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-wide">
              Complexity → <span className="highlight-blue">Clarity</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide">
              I turn messy data into clear flows.
              <br />
              The goal is understanding, not information overload.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transformation Examples */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Real <span className="highlight-yellow">Transformations</span>
          </motion.h2>

          <div className="space-y-8">
            {transformations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-r from-[#87ceeb]/10 to-[#ffe135]/10 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
              >
                <span className="inline-block px-3 py-1 bg-[#87ceeb] text-[#1a1a1a] text-xs font-bold rounded-full mb-4">
                  {item.context}
                </span>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Before */}
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <p className="text-xs text-red-500 font-bold mb-2">BEFORE (Complex)</p>
                    <p className="text-sm text-gray-700">{item.before}</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 text-2xl">
                    →
                  </div>

                  {/* After */}
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <p className="text-xs text-green-600 font-bold mb-2">AFTER (Clear)</p>
                    <p className="text-sm text-gray-700 font-medium">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            My Design <span className="highlight-pink">Principles</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((item, index) => (
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
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VectorPaths Deep Dive */}
      <section className="py-16 px-6 bg-[#fff9e6]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Case Study: <span className="highlight-yellow">VectorPaths</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <h3 className="font-bold text-xl mb-6">How I simplified adaptive learning:</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#ff6b9d] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a]">Collected 10+ dimensions per question</p>
                  <p className="text-sm text-gray-600">难度、知识点、题型、易错点、时间估计、关联概念...</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#87ceeb] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a]">Built ROI calculation algorithm</p>
                  <p className="text-sm text-gray-600">根据用户目标分数和当前水平，计算每道题的「投资回报率」</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#ffe135] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a]">Surfaced one simple output</p>
                  <p className="text-sm text-gray-600">用户只看到：「这是你现在最应该练的一道题」</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#87ceeb]/20 rounded-lg">
              <p className="text-sm text-gray-700 italic text-center">
                &quot;The complexity lives in the system. The simplicity lives in the experience.&quot;
              </p>
            </div>
          </motion.div>
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
              &quot;Good design is <span className="text-[#87ceeb]">invisible</span>.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/experience#vectorpaths-case"
                className="px-6 py-3 bg-[#87ceeb] text-[#1a1a1a] rounded-lg font-medium hover:bg-[#a8ddf5] transition-colors"
              >
                See Full Case Study →
              </Link>
              <Link
                href="/traits/end-to-end-builder"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Next: End-to-End Builder
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
