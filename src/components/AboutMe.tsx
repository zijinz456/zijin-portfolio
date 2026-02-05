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
          我出生于 2000 年 5 月，在墨尔本大学读书，Finance & Business Analytics 专业。家庭环境比较自由，家人都不会对我的选择做过多干涉。这导致我在肆意生长的过程中，拥有了很多复杂的成分。
        </p>

        <p className="text-lg font-medium text-gray-800">
          Anyway，欢迎来到 Zijin 的世界！
        </p>

        {/* 高精力死宅 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#ffe135] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0_#1a1a1a]"
        >
          <p className="font-bold text-[#1a1a1a] mb-2">
            我是一只 <span className="highlight-pink px-1">高精力死宅</span>
          </p>
          <p className="text-sm text-gray-700">
            对出去游山玩水无感，但精力异常旺盛，脑子里 idea 疯狂溢出。
          </p>
          <p className="text-sm text-gray-700">
            现实中轻微社恐，但在网络上结交了一群素未谋面的电子好友！
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-xl p-4 shadow-[3px_3px_0_#1a1a1a]"
        >
          <p className="text-lg font-semibold text-[#1a1a1a] italic mb-3">
            &ldquo;每一个大多数人看起来离经叛道的选择都让我很兴奋&rdquo;
          </p>
          <p className="text-sm text-gray-600">
            我正在朝着自己喜欢的方向前进！
          </p>
          <p className="text-sm text-gray-500">
            不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？
          </p>
        </motion.div>

        {/* Current status */}
        <div className="space-y-2 text-sm text-gray-600">
          <p>目前在 Commonwealth Bank 做 Customer Banking Specialist</p>
          <p>同时也是 VectorPaths 的创始人，用 AI 帮学生智能刷题</p>
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
