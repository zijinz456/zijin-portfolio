"use client";

import { motion } from "framer-motion";
import { colorMap, type ColorKey } from "@/lib/colors";
import Avatar from "./Avatar";
import Image from "next/image";

interface CaseStudyProps {
  id: string;
  title: string;
  subtitle: string;
  avatarScene?: string;
  customImage?: string;
  externalUrl?: string;
  challenge: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
  color?: ColorKey;
}

export default function CaseStudy({
  id,
  title,
  subtitle,
  avatarScene,
  customImage,
  externalUrl,
  challenge,
  sections,
  color = "yellow",
}: CaseStudyProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Header Card */}
      <div
        className="p-6 border-2 border-foreground rounded-xl shadow-sketch-lg mb-4"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="flex items-center gap-4">
          {customImage ? (
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-foreground bg-white flex items-center justify-center">
              <Image
                src={customImage}
                alt={title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ) : (
            avatarScene && <Avatar size="md" />
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-gray-700">{subtitle}</p>
          </div>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white border-2 border-foreground rounded-lg font-medium text-sm shadow-sketch-sm hover-sketch flex items-center gap-2"
            >
              Visit Website
              <span>↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white border-2 border-foreground rounded-xl shadow-sketch-lg overflow-hidden">
        {/* Challenge Section */}
        <div className="p-6 border-b-2 border-dashed border-foreground/30">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-pink border-2 border-foreground rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">❓</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                The Challenge
              </h4>
              <p className="text-gray-700 leading-relaxed">{challenge}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="p-6 space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-5 border-2 border-foreground rounded-xl"
              style={{ backgroundColor: colors.light }}
            >
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                <span
                  className="w-8 h-8 border-2 border-foreground rounded-lg flex items-center justify-center text-sm font-bold text-foreground"
                  style={{ backgroundColor: colors.bg }}
                >
                  {index + 1}
                </span>
                {section.title}
              </h4>
              <div className="text-gray-700 leading-relaxed">{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

