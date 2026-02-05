import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "My technical skills in AI, Product Design, DevOps, and Communication. Including expertise in LLM Engineering, Conversational Flow Design, and more.",
  openGraph: {
    title: "Skills | Zijin Zhang",
    description: "My technical skills in AI, Product Design, DevOps, and Communication.",
    url: "https://zijinzhangprofile.com/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
