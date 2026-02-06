"use client";

import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

const layers = [
  {
    title: "What Students See",
    subtitle: "/topics | /q/{id} | /me",
    color: "var(--blue-light)",
    textColor: "var(--foreground)",
  },
  {
    title: "What Matters",
    subtitle: "topic_weights + tier + backtest",
    color: "var(--mint)",
    textColor: "var(--foreground)",
  },
  {
    title: "What Happened",
    subtitle: "questions | topics | solution_steps",
    color: "var(--pink)",
    textColor: "#ffffff",
  },
];

export default function ArchitectureDiagram({
  size = "md",
  showLabels = true
}: ArchitectureDiagramProps) {
  const sizeClasses = {
    sm: { height: "h-12", text: "text-xs", padding: "px-3 py-2" },
    md: { height: "h-16", text: "text-sm", padding: "px-4 py-3" },
    lg: { height: "h-20", text: "text-base", padding: "px-5 py-4" },
  };

  const config = sizeClasses[size];

  return (
    <div className="w-full">
      {layers.map((layer, index) => {
        const isFirst = index === 0;
        const isLast = index === layers.length - 1;
        const roundedClass = isFirst
          ? "rounded-t-xl"
          : isLast
          ? "rounded-b-xl"
          : "";

        return (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              ${config.height} ${config.padding} ${roundedClass}
              border-2 border-foreground
              ${!isLast ? "border-b-0" : ""}
              flex flex-col justify-center
            `}
            style={{ backgroundColor: layer.color }}
          >
            <p
              className={`font-bold ${config.text}`}
              style={{ color: layer.textColor }}
            >
              {layer.title}
            </p>
            {showLabels && (
              <p
                className={`${size === "sm" ? "text-[10px]" : "text-xs"} opacity-80`}
                style={{ color: layer.textColor }}
              >
                {layer.subtitle}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
