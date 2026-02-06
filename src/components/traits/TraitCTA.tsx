import { type ReactNode } from "react";
import Link from "next/link";
import FadeInView from "@/components/motion/FadeInView";

interface CTALink {
  href: string;
  label: string;
  primary?: boolean;
  className?: string;
}

interface TraitCTAProps {
  message: ReactNode;
  links: [CTALink, CTALink];
}

export default function TraitCTA({ message, links }: TraitCTAProps): React.ReactElement {
  return (
    <section className="py-12 px-6 bg-foreground text-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <p className="text-xl font-light mb-8 tracking-wide">{message}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => {
              const base = "px-6 py-3 rounded-lg font-medium transition-colors";
              const variant = link.primary
                ? link.className ?? "bg-yellow text-foreground hover:bg-yellow-light"
                : "bg-white/10 text-white hover:bg-white/20";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${base} ${variant}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
