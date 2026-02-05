import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zijin Zhang | Conversation Designer & AI Product Builder",
  description: "I design dialogue experiences that make complex things simple.",
  keywords: ["Conversation Design", "AI", "LLM", "Product Design", "UX"],
  authors: [{ name: "Zijin Zhang" }],
  openGraph: {
    title: "Zijin Zhang | Conversation Designer & AI Product Builder",
    description: "I design dialogue experiences that make complex things simple.",
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
