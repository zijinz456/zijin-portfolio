"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "VectorPaths",
    subtitle: "AI-Powered Adaptive Learning Platform",
    stats: [
      { label: "Questions Processed", value: "3,000+" },
      { label: "Test Cases", value: "2,100+" },
      { label: "R² Correlation", value: "0.87" },
    ],
    phases: [
      "Problem identification",
      "Data architecture design",
      "LLM + Schema extraction",
      "Algorithm development",
      "Frontend implementation",
      "Testing & validation",
    ],
    color: "#ffe135",
  },
  {
    title: "K-Pop Photography",
    subtitle: "From Hobby to Side Business",
    stats: [
      { label: "Started", value: "Hobby" },
      { label: "Built", value: "Portfolio" },
      { label: "Became", value: "Business" },
    ],
    phases: [
      "K-pop culture passion",
      "Learned photography basics",
      "Practiced at events",
      "Built online presence",
      "Started taking clients",
      "Running side business",
    ],
    color: "#ff6b9d",
  },
];

const mindset = [
  {
    title: "Ownership",
    description: "Don't wait for someone else to solve it. If I see a problem, I fix it.",
    icon: "🔧",
  },
  {
    title: "Iteration",
    description: "Ship an MVP first, then iterate fast based on feedback.",
    icon: "🔄",
  },
  {
    title: "Full Stack Thinking",
    description: "Not just frontend or backend — understanding how the whole system works.",
    icon: "🧠",
  },
  {
    title: "Ship > Perfect",
    description: "Perfect is the enemy of progress. Make it work first, then make it better.",
    icon: "🚢",
  },
];

export default function EndToEndBuilderPage() {
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
              className="w-24 h-24 mx-auto mb-6 bg-[#ff6b9d] rounded-full border-4 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center text-5xl"
            >
              🚀
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-wide">
              End-to-End <span className="highlight-pink">Builder</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide">
              I ship from idea to working product.
              <br />
              Not just designs. Not just code. The whole thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Builder Mindset */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Builder <span className="highlight-yellow">Mindset</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {mindset.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            From Idea to <span className="highlight-pink">Reality</span>
          </motion.h2>

          <div className="space-y-12">
            {projects.map((project, projectIndex) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: projectIndex * 0.2 }}
                className="p-8 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">{project.title}</h3>
                    <p className="text-gray-600">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-xl font-bold" style={{ color: project.color === "#ffe135" ? "#1a1a1a" : project.color }}>
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Journey Timeline */}
                <div className="relative">
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#1a1a1a]/20" />
                  <div className="flex justify-between relative">
                    {project.phases.map((phase, phaseIndex) => (
                      <motion.div
                        key={phase}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + phaseIndex * 0.1 }}
                        className="flex flex-col items-center text-center flex-1"
                      >
                        <div
                          className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold mb-2 z-10"
                          style={{ backgroundColor: project.color }}
                        >
                          {phaseIndex + 1}
                        </div>
                        <p className="text-xs text-gray-600 hidden md:block max-w-[80px]">{phase}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile phases list */}
                <div className="md:hidden mt-6 space-y-2">
                  {project.phases.map((phase, phaseIndex) => (
                    <div key={phase} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-bold" style={{ color: project.color === "#ffe135" ? "#1a1a1a" : project.color }}>
                        {phaseIndex + 1}.
                      </span>
                      {phase}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 bg-[#fff9e6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] text-center"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-wide">
              Why <span className="highlight-pink">End-to-End</span> Matters
            </h2>
            <div className="space-y-4 text-gray-700 max-w-2xl mx-auto">
              <p>
                Many people only do their part: designers just design, developers just code.
              </p>
              <p>
                But real problems often emerge at <strong>the handoffs</strong> — between design and development, between frontend and backend, between product and user.
              </p>
              <p>
                When you own the entire project end-to-end, you see these gaps, and you fix them.
              </p>
              <p className="font-bold text-[#1a1a1a]">
                That&apos;s why I don&apos;t just &quot;do&quot; — I ship.
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
              &quot;The best way to grow is to <span className="text-[#ff6b9d]">ship</span>.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/skills#beyond-work"
                className="px-6 py-3 bg-[#ff6b9d] text-white rounded-lg font-medium hover:bg-[#ff8fb3] transition-colors"
              >
                See More Projects →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Let&apos;s Build Together
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
