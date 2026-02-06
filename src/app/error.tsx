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
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-pink border-2 border-foreground rounded-xl shadow-sketch-lg flex items-center justify-center">
          <span className="text-4xl">!</span>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-light border-2 border-foreground rounded-xl font-semibold text-foreground shadow-sketch-lg hover:shadow-sketch-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
