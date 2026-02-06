"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface TraitCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  linkTo: string;
  color: "yellow" | "blue" | "purple";
  delay?: number;
}

const colorClasses = {
  yellow: {
    bg: "bg-yellow-50 hover:bg-yellow-100",
    border: "border-yellow-200 hover:border-yellow-300",
    icon: "bg-yellow-400",
    highlight: "text-yellow-600",
    focus: "focus-visible:ring-yellow-400",
  },
  blue: {
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200 hover:border-blue-300",
    icon: "bg-blue-400",
    highlight: "text-blue-600",
    focus: "focus-visible:ring-blue-400",
  },
  purple: {
    bg: "bg-purple-50 hover:bg-purple-100",
    border: "border-purple-200 hover:border-purple-300",
    icon: "bg-purple-400",
    highlight: "text-purple-600",
    focus: "focus-visible:ring-purple-400",
  },
};

export default function TraitCard({
  icon,
  title,
  subtitle,
  description,
  linkTo,
  color,
  delay = 0,
}: TraitCardProps) {
  const colors = colorClasses[color];
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : delay }}
      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Link
        href={linkTo}
        className={`block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 ${colors.focus} focus-visible:ring-offset-2`}
        aria-label={`${title}: ${subtitle}. ${description}`}
      >
        <article
          className={`h-full p-6 rounded-xl border-2 ${colors.bg} ${colors.border} transition-all duration-300 cursor-pointer group motion-reduce:transition-none`}
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform motion-reduce:transition-none`}
            aria-hidden="true"
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
          <p className={`text-sm font-medium ${colors.highlight} mb-3`}>{subtitle}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
            <span>See how</span>
            <motion.span
              animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
