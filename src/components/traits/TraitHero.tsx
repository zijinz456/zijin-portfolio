import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";

interface Metric {
  value: string;
  label: string;
}

interface TraitHeroProps {
  accentBarClass: string;
  metricBoxClass: string;
  title: ReactNode;
  subtitle: string;
  metrics: [Metric, Metric];
  imageSrc?: string;
  imageAlt?: string;
}

export default function TraitHero({
  accentBarClass,
  metricBoxClass,
  title,
  subtitle,
  metrics,
  imageSrc,
  imageAlt = "Skill illustration",
}: TraitHeroProps): React.ReactElement {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
          >
            ← Back to Home
          </Link>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text side */}
          <FadeIn x={-20} y={0} className="flex-1 text-center md:text-left">
            <div className={`w-16 h-2 mb-6 rounded-full mx-auto md:mx-0 ${accentBarClass}`} />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-wide">
              {title}
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="flex justify-center md:justify-start gap-6">
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

          {/* Image side */}
          {imageSrc && (
            <FadeIn x={20} y={0} delay={0.2} scale={0.9} className="flex-shrink-0">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
