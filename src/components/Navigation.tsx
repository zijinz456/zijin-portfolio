"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/experience", label: "Experience", icon: "📋" },
  { href: "/skills", label: "Skills", icon: "⚡" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* 胶囊形导航栏 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-[#1a1a1a] rounded-full px-2 py-2 shadow-[3px_3px_0_#1a1a1a]"
      >
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${
                    isActive
                      ? "bg-[#1a1a1a] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border-2 border-[#1a1a1a] rounded-2xl shadow-[3px_3px_0_#1a1a1a] overflow-hidden min-w-[200px]"
          >
            <ul className="p-2 space-y-1" role="list">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-2 py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#ffe135] text-[#1a1a1a]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
