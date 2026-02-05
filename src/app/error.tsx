"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#fef9f3] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center">
          <span className="text-4xl">!</span>
        </div>

        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-xl font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
