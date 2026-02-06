import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zijin Zhang — email, LinkedIn, or explore answers to common questions about my work and background.",
  openGraph: {
    title: "Contact | Zijin Zhang",
    description:
      "Reach out to Zijin Zhang via email or LinkedIn.",
    url: "https://zijinzhangprofile.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
