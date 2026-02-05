import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zijin Zhang | Product Builder & Banking Specialist",
  description: "I build AI-powered products and deliver excellent customer experiences.",
  keywords: ["Product Design", "AI", "LLM", "Banking", "VectorPaths"],
  authors: [{ name: "Zijin Zhang" }],
  openGraph: {
    title: "Zijin Zhang | Product Builder & Banking Specialist",
    description: "I build AI-powered products and deliver excellent customer experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#fef9f3]`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
