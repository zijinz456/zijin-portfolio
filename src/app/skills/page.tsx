import type { Metadata } from "next";
import SkillsContent from "@/components/SkillsContent";

export const metadata: Metadata = {
  title: "Skills & Capabilities",
  description:
    "Zijin Zhang's technical skills — AI/LLM Engineering, Machine Learning, Product Strategy, Adaptive System Design, and DevOps. AI Product Manager capabilities.",
  openGraph: {
    title: "Skills & Capabilities | Zijin Zhang — AI Product Builder",
    description:
      "Technical skills, AI/ML capabilities, product methodology, and work approach of Zijin Zhang.",
    url: "https://zijinzhangprofile.com/skills",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
