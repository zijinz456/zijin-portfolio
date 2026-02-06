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
        viewport={{ once: true, margin: "-50px 0px" }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Main intro */}
        <p className="text-gray-700 leading-relaxed">
          I&apos;m a <strong>Finance & Business Analytics</strong> student at the University of Melbourne who builds AI-powered products — turning complex problems into clear, data-driven solutions.
        </p>

        {/* AI & Tech Passion */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-yellow border-2 border-foreground rounded-xl p-4 shadow-sketch-md"
        >
          <p className="font-bold text-foreground mb-2">
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
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-cream border-2 border-foreground rounded-xl p-4 shadow-sketch-md"
        >
          <p className="text-lg font-semibold text-foreground italic mb-3">
            &ldquo;Always curious. Always building.&rdquo;
          </p>
          <p className="text-sm text-gray-600">
            I love exploring unconventional solutions and turning ideas into reality.
          </p>
        </motion.div>

      </motion.div>

      {/* Right - ID Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px 0px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <IDCard className="w-full max-w-sm" />
      </motion.div>
    </div>
  );
}
