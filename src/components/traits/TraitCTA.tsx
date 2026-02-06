import Link from "next/link";
import FadeInView from "@/components/motion/FadeInView";

interface CTALink {
  href: string;
  label: string;
  primary?: boolean;
  className?: string;
}

interface TraitCTAProps {
  message: React.ReactNode;
  links: [CTALink, CTALink];
}

export default function TraitCTA({ message, links }: TraitCTAProps) {
  return (
    <section className="py-12 px-6 bg-foreground text-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <p className="text-xl font-light mb-8 tracking-wide">{message}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.primary
                    ? `px-6 py-3 text-foreground rounded-lg font-medium transition-colors ${link.className ?? "bg-yellow hover:bg-yellow-light"}`
                    : "px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
