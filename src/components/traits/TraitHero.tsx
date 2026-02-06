import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

interface Metric {
  value: string;
  label: string;
}

interface TraitHeroProps {
  accentBarClass: string;
  metricBoxClass: string;
  title: React.ReactNode;
  subtitle: string;
  metrics: [Metric, Metric];
}

export default function TraitHero({
  accentBarClass,
  metricBoxClass,
  title,
  subtitle,
  metrics,
}: TraitHeroProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
          >
            ← Back to Home
          </Link>

          <div className={`w-16 h-2 mx-auto mb-6 rounded-full ${accentBarClass}`} />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-wide">
            {title}
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          <div className="flex justify-center gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className={`px-6 py-4 rounded-xl border-2 ${metricBoxClass}`}
              >
                <p className="text-3xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
