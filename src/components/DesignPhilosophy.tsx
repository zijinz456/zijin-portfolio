"use client";

import { motion } from "framer-motion";

const philosophies = [
  {
    icon: "🎯",
    title: "先理解真实目标",
    subtitle: "而不是字面请求",
    example: "在CBA，客户说「我要转账」，真实需求可能是「我不确定怎么操作app」",
    color: "#ffe135",
  },
  {
    icon: "🧠",
    title: "减少认知负荷",
    subtitle: "让复杂变简单",
    example: "在VectorPaths，把10+维度的题目分类对用户隐藏，只呈现「下一道最适合你的题」",
    color: "#87ceeb",
  },
  {
    icon: "⚠️",
    title: "设计失败路径",
    subtitle: "不只是成功路径",
    example: "用户答错时怎么办？困惑时怎么办？放弃时怎么办？",
    color: "#ffb6c1",
  },
  {
    icon: "📊",
    title: "用数据验证直觉",
    subtitle: "而不是凭感觉",
    example: "用Exam Report的R²相关性验证难度分类是否准确",
    color: "#98d4bb",
  },
];

export default function DesignPhilosophy() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {philosophies.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className="p-5 border-2 border-[#1a1a1a] rounded-xl shadow-[3px_3px_0_#1a1a1a] transition-all"
          style={{ backgroundColor: item.color }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.subtitle}</p>
            </div>
          </div>
          <div className="mt-3 p-3 bg-white/60 rounded-lg border border-[#1a1a1a]/20">
            <p className="text-xs text-gray-600 italic">→ {item.example}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
