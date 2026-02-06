import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "VectorPaths",
  description: "An AI-powered adaptive learning platform for VCE Mathematics. 2,138+ real exam questions, 6 core topics, 0.87 R² accuracy.",
  openGraph: {
    title: "VectorPaths | Zijin Zhang",
    description: "AI-powered adaptive learning platform — 2,138+ questions, 0.87 R² accuracy.",
    url: "https://zijinzhangprofile.com/projects/vectorpaths",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VectorPaths',
  applicationCategory: 'EducationalApplication',
  description: 'AI-powered adaptive learning platform for VCE Mathematics with 2,138+ real exam questions and 0.87 R² prediction accuracy.',
  url: 'https://vectorpaths.com',
  author: {
    '@type': 'Person',
    name: 'Zijin Zhang',
    url: 'https://zijinzhangprofile.com',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AUD',
  },
};

export default function VectorPathsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
