import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zijinzhangprofile.com'),
  title: {
    default: "Zijin Zhang | Product Builder & Banking Specialist",
    template: "%s | Zijin Zhang"
  },
  description: "I build AI-powered products and deliver excellent customer experiences. Experienced in product design, AI/LLM integration, and banking operations.",
  keywords: ["Zijin Zhang", "Product Designer", "AI", "LLM", "Banking Specialist", "VectorPaths", "Product Builder", "Sydney", "Australia"],
  authors: [{ name: "Zijin Zhang", url: "https://zijinzhangprofile.com" }],
  creator: "Zijin Zhang",
  openGraph: {
    title: "Zijin Zhang | Product Builder & Banking Specialist",
    description: "I build AI-powered products and deliver excellent customer experiences.",
    url: "https://zijinzhangprofile.com",
    siteName: "Zijin Zhang Portfolio",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zijin Zhang | Product Builder & Banking Specialist",
    description: "I build AI-powered products and deliver excellent customer experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'b9DfI0xgdtWZKSKJhwgZJ9Vhg-_cudWl7NOMsz4FkSo',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zijin Zhang',
  url: 'https://zijinzhangprofile.com',
  jobTitle: 'Product Builder & Banking Specialist',
  description: 'I build AI-powered products and deliver excellent customer experiences.',
  knowsAbout: ['Product Design', 'AI', 'LLM', 'Banking', 'User Experience', 'Data Analysis'],
  alumniOf: {
    '@type': 'Organization',
    name: 'Commonwealth Bank of Australia'
  },
  sameAs: [
    'https://www.linkedin.com/in/zijinzhang/',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#fef9f3]`}>
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
