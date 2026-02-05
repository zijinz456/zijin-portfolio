"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Skill {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

const skills: Skill[] = [
  {
    id: "clarity",
    title: "Complexity to Clarity",
    subtitle: "把复杂的东西变简单",
    description: "I turn messy data into clear flows. The goal is understanding, not information overload.",
    image: "/skills/clarity.png",
    href: "/traits/complexity-clarity",
    color: "#87ceeb",
  },
  {
    id: "fast-learner",
    title: "Fast Learner",
    subtitle: "快速掌握新技术",
    description: "I pick up new tools and concepts quickly, adapting to ambiguous environments with ease.",
    image: "/skills/fast-learner.png",
    href: "/traits/fast-learner",
    color: "#ffe135",
  },
  {
    id: "end-to-end",
    title: "End-to-End Builder",
    subtitle: "从想法到产品，全程落地",
    description: "I ship from idea to working product. Not just designs. Not just code. The whole thing.",
    image: "/skills/end-to-end.png",
    href: "/traits/end-to-end-builder",
    color: "#ff6b9d",
  },
];

export default function TopSkillsShowcase() {
  return (
    <div className="mt-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-wide">
          MY TOP 3 <span className="highlight-pink">SKILLS</span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <Link href={skill.href} className="block group">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-[#1a1a1a] rounded-2xl overflow-hidden shadow-[4px_4px_0_#1a1a1a] hover:shadow-[2px_2px_0_#1a1a1a] transition-all"
              >
                {/* Image */}
                <div
                  className="relative h-48 flex items-center justify-center p-4"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={200}
                    height={180}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#1a1a1a] mb-3"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#4a90d9] transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#4a90d9] group-hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
