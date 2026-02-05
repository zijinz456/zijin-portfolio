"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fef9f3] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <span className="text-8xl font-bold text-[#1a1a1a]">4</span>
          <span className="text-8xl font-bold text-[#ff6b9d]">0</span>
          <span className="text-8xl font-bold text-[#1a1a1a]">4</span>
        </div>

        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Oops! Page not found
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-xl font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/skills"
            className="px-6 py-3 bg-white border-2 border-[#1a1a1a] rounded-xl font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            View My Skills
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
