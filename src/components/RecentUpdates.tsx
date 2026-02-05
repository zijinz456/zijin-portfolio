"use client";

import { motion } from "framer-motion";

interface Update {
  icon: string;
  label: string;
  content: string;
  platform?: string;
}

const updates: Update[] = [
  {
    icon: "📚",
    label: "最近在读",
    content: "《纳瓦尔宝典》",
    platform: "微信读书",
  },
  {
    icon: "🎬",
    label: "最近在刷",
    content: "葛太头失业视频",
    platform: "B站",
  },
  {
    icon: "💻",
    label: "最近感兴趣",
    content: "AI 编程",
    platform: "Cursor",
  },
];

export default function RecentUpdates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* 标题 */}
      <div className="text-center mb-8">
        <h3 className="inline-block text-xl font-bold">
          <span className="highlight-pink px-3 py-1">近日生活</span>
          <span className="mx-2">|</span>
          <span className="text-gray-600">RECENT UPDATES</span>
        </h3>
      </div>

      {/* 更新卡片 - 手绘风格连接 */}
      <div className="relative flex flex-wrap justify-center gap-6">
        {/* 装饰性元素 */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 border-t-2 border-dashed border-gray-300" />

        {updates.map((update, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5, rotate: index % 2 === 0 ? 2 : -2 }}
            className="relative bg-white border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0_#1a1a1a] w-full md:w-48"
          >
            {/* 平台标签 */}
            {update.platform && (
              <div className="absolute -top-2 -right-2 bg-[#4a90d9] text-white text-xs px-2 py-0.5 rounded border border-[#1a1a1a]">
                {update.platform}
              </div>
            )}

            {/* 图标和标签 */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{update.icon}</span>
              <span className="text-sm font-medium text-gray-500">{update.label}</span>
            </div>

            {/* 内容 */}
            <p className="text-base font-semibold text-[#1a1a1a]">{update.content}</p>

            {/* 装饰性箭头 */}
            <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 text-gray-400">
              ↓
            </div>
          </motion.div>
        ))}
      </div>

      {/* 装饰性元素 */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 bg-[#ff6b9d] rounded-full" />
        <span className="w-2 h-2 bg-[#ffe135] rounded-full" />
        <span className="w-2 h-2 bg-[#4a90d9] rounded-full" />
      </div>
    </motion.div>
  );
}
