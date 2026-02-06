import Link from "next/link";
import { navItems } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-foreground text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-2">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
        <p className="text-sm text-gray-500 mb-4">
          &copy; {new Date().getFullYear()} Zijin Zhang
        </p>
        <nav aria-label="Footer navigation" className="flex justify-center gap-6 text-sm text-gray-400 mb-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-2">
          <span className="w-2 h-2 bg-pink rounded-full" />
          <span className="w-2 h-2 bg-yellow rounded-full" />
          <span className="w-2 h-2 bg-blue rounded-full" />
        </div>
      </div>
    </footer>
  );
}
