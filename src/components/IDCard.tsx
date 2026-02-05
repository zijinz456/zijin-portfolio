"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";

interface IDCardProps {
  className?: string;
}

export default function IDCard({ className = "" }: IDCardProps) {
  return (
    <motion.div
      className={`relative bg-[#fef3c7] border-2 border-[#1a1a1a] rounded-xl overflow-hidden shadow-[4px_4px_0_#1a1a1a] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ rotate: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* 卡片顶部 - 学校名称 */}
      <div className="bg-[#4a90d9] text-white px-4 py-2 text-center">
        <p className="text-xs tracking-wider">THE UNIVERSITY OF MELBOURNE</p>
        <p className="text-sm font-bold">ID CARD</p>
      </div>

      <div className="p-4">
        <div className="flex gap-4">
          {/* 头像区域 */}
          <div className="flex-shrink-0">
            <div className="w-20 h-24 bg-[#e8f4f8] border-2 border-[#1a1a1a] rounded-lg overflow-hidden flex items-center justify-center">
              <Avatar scene="default" size="md" />
            </div>
          </div>

          {/* 信息区域 */}
          <div className="flex-1 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">NAME</span>
              <span className="font-semibold text-[#1a1a1a] highlight-yellow px-1">Zijin Zhang</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">MAJOR</span>
              <span className="text-gray-700 text-xs">Finance & Economics</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">ROLE</span>
              <span className="text-gray-700 text-xs">Conversation Designer</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs w-14">NOW @</span>
              <span className="text-gray-700 text-xs">Commonwealth Bank</span>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">PLAYER ID</p>
              <p className="text-sm font-mono font-semibold">ZJ-UNIMELB-2025</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">BUILDING</span>
              </div>
            </div>
          </div>
        </div>

        {/* 装饰性印章 */}
        <div className="absolute top-16 right-4 w-12 h-12 border-2 border-[#ff6b9d] rounded-full flex items-center justify-center rotate-12 opacity-60">
          <span className="text-[#ff6b9d] text-[8px] font-bold text-center leading-tight">AI<br/>BUILDER</span>
        </div>
      </div>
    </motion.div>
  );
}
