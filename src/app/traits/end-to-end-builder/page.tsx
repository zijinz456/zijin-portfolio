import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";

const stackLayers = [
  {
    name: "UI Layer",
    tech: "Next.js + Tailwind + Framer Motion",
    what: "Responsive, accessible frontend with sketch-style design system",
    color: "var(--pink)",
    lightColor: "var(--tint-pink)",
  },
  {
    name: "Content Layer",
    tech: "Personalized recommendation engine",
    what: "Adaptive learning paths based on student goals, weak areas, and time budget",
    color: "var(--purple)",
    lightColor: "#faf5ff",
  },
  {
    name: "Weight Layer",
    tech: "Statistical analysis + Python",
    what: "Topic importance derived from 20 years of real exam frequency data → ROI ranking",
    color: "var(--blue-light)",
    lightColor: "var(--tint-blue)",
  },
  {
    name: "Data Layer",
    tech: "LLM extraction + Quality pipeline",
    what: "2,138+ PDF exam questions → structured schema with self-improving error handling",
    color: "var(--yellow)",
    lightColor: "var(--warm)",
  },
];

const thisWebsite = {
  title: "This Portfolio Website",
  subtitle: "Another end-to-end proof — you're looking at it right now.",
  layers: [
    {
      label: "Design",
      detail:
        "Custom sketch-style design system — colors, shadows, typography, all from scratch",
    },
    {
      label: "Development",
      detail: "Next.js 16 + React 19 + Tailwind v4 + Framer Motion",
    },
    {
      label: "Deployment",
      detail: "Vercel with analytics, SEO optimization, continuous iteration",
    },
    {
      label: "Content",
      detail:
        "Every word, every case study, every layout decision — mine",
    },
  ],
};

const valueProps = [
  {
    icon: "🔗",
    text: "I've shipped the full pipeline: from data extraction to AI model to user-facing product. I understand every layer, so I can spot gaps before they become problems",
  },
  {
    icon: "🚀",
    text: "In AI product work, the gap between 'cool demo' and 'shipped product' is huge. I bridge it — from messy data to deployed, validated system",
  },
  {
    icon: "🔧",
    text: "I don't hand off problems or wait to be unblocked. I own the outcome from user research to deployed feature",
  },
];

export default function EndToEndBuilderPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
            >
              ← Back to Home
            </Link>

            <div className="w-16 h-2 bg-pink mx-auto mb-6 rounded-full" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-wide">
              End-to-End <span className="highlight-pink">Ownership</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Not just designs. Not just code. The whole thing — shipped and
              validated.
            </p>

            {/* Hero metrics */}
            <div className="flex justify-center gap-6">
              <div className="px-6 py-4 bg-pink/20 border-2 border-pink/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">0.87</p>
                <p className="text-xs text-gray-500 font-medium">
                  R² accuracy
                </p>
              </div>
              <div className="px-6 py-4 bg-pink/20 border-2 border-pink/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="text-xs text-gray-500 font-medium">
                  layers owned
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Story — Stacked Architecture */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide">
              VectorPaths: <span className="highlight-yellow">Full Stack</span>{" "}
              Ownership
            </h2>
          </FadeInView>
          <p className="text-center text-gray-500 mb-12">
            Every layer — designed, built, tested, and shipped by one person.
          </p>

          {/* Stacked layers - bottom to top */}
          <div className="space-y-0">
            {[...stackLayers].reverse().map((layer, index) => (
              <FadeInView
                key={layer.name}
                delay={index * 0.15}
                className="relative"
              >
                <div
                  className="p-5 border-2 border-foreground first:rounded-t-xl last:rounded-b-xl -mt-[2px] first:mt-0"
                  style={{ backgroundColor: layer.lightColor }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    {/* Layer badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-foreground font-bold text-sm text-foreground flex-shrink-0 w-fit"
                      style={{ backgroundColor: layer.color }}
                    >
                      {layer.name}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {layer.what}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {layer.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          {/* Connecting narrative */}
          <FadeInView
            y={0}
            className="mt-8 p-6 bg-cream border-2 border-foreground rounded-xl shadow-sketch-sm"
          >
            <p className="text-sm text-gray-700 leading-relaxed italic">
              &ldquo;Most teams have separate people for data engineering,
              ML, backend, frontend, and design. I built all four layers of
              VectorPaths myself — not because I had to, but because
              understanding the full stack means I catch the gaps that appear at
              handoffs. The data layer informs the weight model, the weights
              shape the content recommendations, and the UI makes it all feel
              effortless. When one person sees the whole picture, nothing falls
              through the cracks.&rdquo;
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Secondary proof: This Website */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInView className="p-8 bg-white border-2 border-foreground rounded-xl shadow-sketch-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-pink rounded-full" />
              <h3 className="text-xl font-bold text-foreground">
                {thisWebsite.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              {thisWebsite.subtitle}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {thisWebsite.layers.map((item, index) => (
                <FadeInView
                  key={item.label}
                  y={10}
                  delay={index * 0.1}
                  className="p-4 bg-pink/10 border border-pink/30 rounded-lg"
                >
                  <p className="text-xs font-bold text-pink uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* What This Means For Your Team */}
      <section className="py-12 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <FadeInView y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
              What This Means{" "}
              <span className="highlight-pink">For Your Team</span>
            </h2>
          </FadeInView>

          <div className="space-y-4">
            {valueProps.map((prop, index) => (
              <FadeInView
                key={index}
                x={-20}
                y={0}
                delay={index * 0.1}
                className="flex items-start gap-4 p-5 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm"
              >
                <span className="text-2xl flex-shrink-0">{prop.icon}</span>
                <p className="text-gray-700 leading-relaxed">{prop.text}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <p className="text-xl font-light mb-8 tracking-wide">
              The best way to learn is to{" "}
              <span className="text-yellow">build</span>. The best way to grow
              is to <span className="text-pink">ship</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects/vectorpaths"
                className="px-6 py-3 bg-pink text-white rounded-lg font-medium hover:bg-[#ff8fb3] transition-colors"
              >
                See VectorPaths Case Study →
              </Link>
              <Link
                href="/traits/fast-learner"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Next: Fast Learner →
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
