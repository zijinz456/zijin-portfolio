import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zijin Zhang. Available for product design, AI development, and collaboration opportunities.",
  openGraph: {
    title: "Contact | Zijin Zhang",
    description: "Get in touch with me for collaboration opportunities.",
    url: "https://zijinzhangprofile.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
