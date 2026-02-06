import type { Metadata } from "next";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Zijin Zhang's professional experience — from founding VectorPaths (AI-powered adaptive learning platform with 2,138+ real exam questions, 0.87 R² accuracy) to banking operations at Commonwealth Bank. AI Product Builder portfolio.",
  openGraph: {
    title: "Experience | Zijin Zhang — AI Product Builder",
    description:
      "Case studies and timeline of Zijin Zhang's AI product building journey — VectorPaths, Commonwealth Bank, and more.",
    url: "https://zijinzhangprofile.com/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
