"use client";

import { motion } from "framer-motion";
import IDCard from "./IDCard";

export default function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Left - Personal Intro */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Main intro */}
        <p className="text-gray-700 leading-relaxed">
          I&apos;m currently studying <strong>Finance & Business Analytics</strong> at the University of Melbourne.
        </p>

        {/* AI & Tech Passion */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#ffe135] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0_#1a1a1a]"
        >
          <p className="font-bold text-[#1a1a1a] mb-2">
            Passionate about <span className="highlight-pink px-1">AI & Emerging Tech</span>
          </p>
          <p className="text-sm text-gray-700">
            Self-taught in <strong>AI prompting, prompt engineering, AI workflows, and agentic systems</strong>.
          </p>
          <p className="text-sm text-gray-700">
            Always exploring how these tools can reshape the way we work and learn.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0_#1a1a1a]"
        >
          <p className="text-lg font-semibold text-[#1a1a1a] italic mb-3">
            &ldquo;Always curious. Always building.&rdquo;
          </p>
          <p className="text-sm text-gray-600">
            I love exploring unconventional solutions and turning ideas into reality.
          </p>
        </motion.div>

        {/* Current status */}
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Commonwealth Bank</strong> — Customer Banking Specialist</p>
          <p><strong>VectorPaths</strong> — Founder, AI-powered adaptive learning platform</p>
        </div>
      </motion.div>

      {/* Right - ID Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <IDCard className="w-full max-w-sm" />
      </motion.div>
    </div>
  );
}
