"use client";

import { motion } from "framer-motion";
import Avatar from "@/components/Avatar";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "zijinz456@gmail.com",
    href: "mailto:zijinz456@gmail.com",
    color: "#ffe135",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/zijin-zhang",
    href: "https://linkedin.com/in/zijin-zhang-2578b92b1",
    color: "#87ceeb",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fef9f3] pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Avatar scene="waving" size="xl" className="mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Let&apos;s <span className="highlight-yellow">Connect!</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              想聊聊 AI 产品、对话设计，或者只是 say hi？
              <br />
              欢迎随时联系我！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="block p-6 border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                style={{ backgroundColor: link.color }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">{link.label}</p>
                    <p className="text-lg font-medium text-[#1a1a1a]">{link.value}</p>
                  </div>
                  <span className="ml-auto text-[#1a1a1a] text-xl">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Questions */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-white border-2 border-[#1a1a1a] rounded-xl shadow-[4px_4px_0_#1a1a1a]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#ff6b9d] border-2 border-[#1a1a1a] rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💬</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a]">Quick Questions?</h3>
                <p className="text-sm text-gray-500">我可以帮你快速了解我的工作</p>
              </div>
            </div>

            {/* Preset Questions */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 mb-4">常见问题：</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: "What's VectorPaths?", href: "/experience#vectorpaths-case" },
                  { text: "Your experience?", href: "/experience" },
                  { text: "Tech stack?", href: "/skills" },
                  { text: "Available for work?", href: "mailto:zijinz456@gmail.com" },
                ].map((question) => (
                  <motion.a
                    key={question.text}
                    href={question.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#fef9f3] border-2 border-[#1a1a1a] rounded-lg text-sm text-[#1a1a1a] hover:bg-[#ffe135] transition-colors"
                  >
                    {question.text}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-200">
              <p className="text-xs text-gray-400 text-center">
                Full chatbot coming soon... 现在可以通过这些快捷链接了解更多！
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-400 mb-2">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
            <p className="text-sm text-gray-500">© 2025 Zijin Zhang</p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#ff6b9d] rounded-full" />
              <span className="w-2 h-2 bg-[#ffe135] rounded-full" />
              <span className="w-2 h-2 bg-[#4a90d9] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
