import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey including work at Commonwealth Bank of Australia and building VectorPaths - an AI-powered education platform.",
  openGraph: {
    title: "Experience | Zijin Zhang",
    description: "My professional journey at CBA and building AI products.",
    url: "https://zijinzhangprofile.com/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
