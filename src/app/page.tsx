"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AvatarWithBubbles from "@/components/AvatarWithBubbles";
import AboutMe from "@/components/AboutMe";
import TopSkillsShowcase from "@/components/TopSkillsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fef9f3]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left - Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 leading-relaxed tracking-wide">
                Hi, I&apos;m <span className="highlight-pink">Zijin</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-6 tracking-wide">
                Product Builder & <span className="highlight-yellow">AI Enthusiast</span>
              </p>

              <div className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed tracking-wide max-w-lg space-y-2">
                <p>
                  By day, I work at a bank. By night, I build with AI — including an{" "}
                  <a href="https://vectorpaths.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1a1a1a] transition-colors">education platform</a>{" "}
                  that helps students practice smarter.
                </p>
                <p>
                  I love using AI to solve real-world problems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-lg font-medium shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all tracking-wide"
                  >
                    View My Work →
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#1a1a1a] rounded-lg font-medium shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all tracking-wide"
                  >
                    Say Hello
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Avatar with Trait Bubbles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <AvatarWithBubbles />
            </motion.div>
          </div>

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-sm text-gray-400 mt-4 tracking-wide"
          >
            Click the bubbles to explore
          </motion.p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide"
          >
            Welcome to <span className="highlight-yellow">Zijin&apos;s World!</span>
          </motion.h2>

          {/* About Me Section */}
          <AboutMe />

          {/* My Top 3 Skills */}
          <TopSkillsShowcase />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 bg-[#fff9e6]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 tracking-wide"
          >
            Explore <span className="highlight-pink">More</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Link
                href="/experience"
                className="block p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="inline-block w-8 h-8 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-lg mb-3 text-center leading-7 font-bold text-sm">01</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Experience</h3>
                <p className="text-sm text-gray-600">Case studies & timeline</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href="/skills"
                className="block p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="inline-block w-8 h-8 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-lg mb-3 text-center leading-7 font-bold text-sm text-white">02</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Skills</h3>
                <p className="text-sm text-gray-600">Tech stack & capabilities</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href="/contact"
                className="block p-6 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] hover:shadow-[1px_1px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="inline-block w-8 h-8 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-lg mb-3 text-center leading-7 font-bold text-sm">03</span>
                <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Contact</h3>
                <p className="text-sm text-gray-600">Let&apos;s connect</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-wide">
              Let&apos;s <span className="text-[#ffe135]">Build</span> Together
            </h2>
            <p className="text-gray-300 mb-10 tracking-wide">
              Want to chat about AI or have an interesting project idea?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#ffe135] text-[#1a1a1a] rounded-full font-semibold hover:bg-[#fff59d] transition-colors tracking-wide"
            >
              Get in Touch
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
