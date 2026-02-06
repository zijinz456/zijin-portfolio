"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";

interface IDCardProps {
  className?: string;
}

export default function IDCard({ className = "" }: IDCardProps) {
  return (
    <motion.div
      className={`relative bg-yellow-light border-2 border-foreground rounded-xl overflow-hidden shadow-sketch-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ rotate: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card header */}
      <div className="bg-blue text-white px-4 py-2 text-center">
        <p className="text-xs tracking-wider">THE UNIVERSITY OF MELBOURNE</p>
        <p className="text-sm font-bold">ID CARD</p>
      </div>

      <div className="p-4">
        <div className="flex gap-4">
          {/* Avatar area */}
          <div className="flex-shrink-0">
            <div className="w-20 h-24 bg-tint-blue border-2 border-foreground rounded-lg overflow-hidden flex items-center justify-center">
              <Avatar size="md" />
            </div>
          </div>

          {/* Info area */}
          <div className="flex-1 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">NAME</span>
              <span className="font-semibold text-foreground highlight-yellow px-1">Zijin Zhang</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">MAJOR</span>
              <span className="text-gray-700 text-xs">Finance & Business Analytics</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">ROLE</span>
              <span className="text-gray-700 text-xs">AI Product Manager</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">NOW @</span>
              <span className="text-gray-700 text-xs">Commonwealth Bank</span>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">ID</p>
              <p className="text-sm font-mono font-semibold">UNIMELB-2026</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">STATUS</p>
              <p className="text-xs font-mono font-semibold">ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Decorative stamp */}
        <div className="absolute top-16 right-4 w-12 h-12 border-2 border-pink rounded-full flex items-center justify-center rotate-12 opacity-60">
          <span className="text-pink text-[8px] font-bold text-center leading-tight">AI<br/>PRODUCT</span>
        </div>
      </div>

    </motion.div>
  );
}
