"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, MotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="relative overflow-hidden py-1" role="status" aria-live="polite" aria-atomic="true">
      {/* Invisible longest word to reserve stable width */}
      <span className={cn(className, "invisible")} aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <div className="absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className={cn(className)}
            {...motionProps}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
