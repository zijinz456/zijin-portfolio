"use client";

import { motion } from "framer-motion";
import { fadeInUpView } from "@/lib/animations";
import { colorMap, type ColorKey } from "@/lib/colors";
import Link from "next/link";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  visual: React.ReactNode;
  stats?: { label: string; value: string }[];
  insights?: string[];
  extraSections?: {
    title: string;
    items: { label: string; detail: string }[];
  }[];
  ctaText?: string;
  ctaLink?: string;
  externalUrl?: string;
  color: ColorKey;
  customImage?: string;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function CaseStudyCard({
  title,
  subtitle,
  description,
  visual,
  stats,
  insights,
  extraSections,
  ctaText = "View Full Case Study",
  ctaLink,
  externalUrl,
  color = "yellow",
  customImage,
  badge,
  footer,
}: CaseStudyCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      {...fadeInUpView}
      className="w-full bg-white border-2 border-foreground rounded-xl shadow-sketch-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Visual */}
        <div
          className="w-full md:w-[360px] p-6 flex flex-col items-center justify-center gap-4"
          style={{ backgroundColor: colors.bg }}
        >
          {/* Custom image if provided */}
          {customImage && (
            <div className="w-32 h-32 bg-white rounded-xl border-2 border-foreground flex items-center justify-center overflow-hidden mb-2">
              <Image
                src={customImage}
                alt={title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          )}

          {/* Visual diagram */}
          <div className="w-full">{visual}</div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col gap-5">
          {/* Header with badge */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
              <p className="text-gray-600">{subtitle}</p>
            </div>
            {badge}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{description}</p>

          {/* Stats row */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 border-2 border-foreground rounded-xl bg-white shadow-sketch-sm"
                >
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Key insights */}
          {insights && insights.length > 0 && (
            <div
              className="p-4 rounded-xl border-2 border-foreground"
              style={{ backgroundColor: colors.light }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Key Insights
              </p>
              <ul className="space-y-1">
                {insights.map((insight) => (
                  <li key={insight} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-foreground">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Extra sections */}
          {extraSections && extraSections.map((section) => (
            <div
              key={section.title}
              className="p-4 rounded-xl border-2 border-foreground"
              style={{ backgroundColor: colors.light }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </p>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span className="text-foreground font-bold text-sm shrink-0">{item.label}</span>
                    <span className="text-sm text-gray-700">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            {ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white rounded-xl font-medium text-sm hover:bg-[#333] transition-colors"
              >
                {ctaText}
                <span>→</span>
              </Link>
            )}
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-foreground rounded-xl font-medium text-sm shadow-sketch-sm hover-sketch"
              >
                Visit Website
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Optional footer (e.g. progress bar) */}
      {footer && (
        <div className="border-t-2 border-foreground px-6 py-3">
          {footer}
        </div>
      )}
    </motion.div>
  );
}
