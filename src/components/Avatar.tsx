"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type AvatarScene =
  | "default"      // 默认微笑 - 首页
  | "thinking"     // 思考 - About Me
  | "working"      // CBA工作场景
  | "coding"       // 做网站场景
  | "camera"       // 摄影场景
  | "waving";      // 挥手 - Contact

interface AvatarProps {
  scene?: AvatarScene;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

// 场景描述用于无障碍
const sceneDescriptions: Record<AvatarScene, string> = {
  default: "Zijin smiling warmly",
  thinking: "Zijin in a thinking pose",
  working: "Zijin at work",
  coding: "Zijin coding",
  camera: "Zijin with a camera",
  waving: "Zijin waving hello",
};

// 场景对应的图片路径 (目前只有一张，后续可以添加更多)
const sceneImages: Record<AvatarScene, string> = {
  default: "/avatars/default.png",
  thinking: "/avatars/default.png",  // TODO: 添加思考姿势图片
  working: "/avatars/default.png",   // TODO: 添加工作姿势图片
  coding: "/avatars/default.png",    // TODO: 添加编程姿势图片
  camera: "/avatars/default.png",    // TODO: 添加相机姿势图片
  waving: "/avatars/default.png",    // TODO: 添加挥手姿势图片
};

export default function Avatar({ scene = "default", size = "lg", className = "" }: AvatarProps) {
  const sizeClass = sizeClasses[size];
  const prefersReducedMotion = useReducedMotion();

  // 尊重用户的减少动画偏好
  const breathingAnimation = prefersReducedMotion
    ? {}
    : {
        y: [0, -5, 0],
        scale: [1, 1.02, 1],
      };

  const wobbleAnimation = prefersReducedMotion
    ? {}
    : {
        rotate: [-1, 1, -1],
      };

  const glowAnimation = prefersReducedMotion
    ? { opacity: 0.4 }
    : {
        opacity: [0.3, 0.6, 0.3],
      };

  return (
    <motion.div
      className={`relative ${sizeClass} ${className}`}
      animate={breathingAnimation}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      role="img"
      aria-label={sceneDescriptions[scene]}
    >
      {/* 头像容器 */}
      <motion.div
        className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-blue-50 to-pink-50"
        animate={wobbleAnimation}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sceneImages[scene]}
          alt={sceneDescriptions[scene]}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 光晕效果 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200/30 to-pink-200/30 pointer-events-none"
        animate={glowAnimation}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        aria-hidden="true"
      />
    </motion.div>
  );
}
