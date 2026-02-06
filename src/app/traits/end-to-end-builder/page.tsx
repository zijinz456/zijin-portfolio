import type { Metadata } from "next";
import FadeInView from "@/components/motion/FadeInView";
import TraitHero from "@/components/traits/TraitHero";
import ValuePropsSection from "@/components/traits/ValuePropsSection";
import TraitCTA from "@/components/traits/TraitCTA";

export const metadata: Metadata = {
  title: "End-to-End Builder",
  description: "Not just designs. Not just code. The whole thing — shipped and validated. From data pipeline to AI model to user-facing product, all owned by one person.",
  openGraph: {
    title: "End-to-End Builder | Zijin Zhang",
    description: "From data pipeline to AI model to deployed product — all owned and shipped by one person.",
    url: "https://zijinzhangprofile.com/traits/end-to-end-builder",
  },
};

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
    lightColor: "var(--tint-purple)",
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
    { label: "Design", detail: "Custom sketch-style design system — colors, shadows, typography, all from scratch" },
    { label: "Development", detail: "Next.js 16 + React 19 + Tailwind v4 + Framer Motion" },
    { label: "Deployment", detail: "Vercel with analytics, SEO optimization, continuous iteration" },
    { label: "Content", detail: "Every word, every case study, every layout decision — mine" },
  ],
};

const valueProps = [
  {
    icon: "🔗",
    text: <>Having built the <strong>full pipeline</strong> — from data extraction to AI model to user-facing product — I've developed an intuition for where gaps tend to appear between layers</>,
  },
  {
    icon: "🚀",
    text: <>In AI product work, the gap between a &apos;cool demo&apos; and a <strong>shipped product</strong> is often larger than expected. I've navigated that gap — from messy data all the way to a deployed, validated system</>,
  },
  {
    icon: "🔧",
    text: <>I prefer to take <strong>ownership of the full outcome</strong> rather than handing off pieces — from understanding user needs to shipping the final feature</>,
  },
  {
    icon: "🤝",
    text: <>Because I've worked across every layer, I can <strong>communicate naturally with different teams</strong> — whether it's explaining requirements to engineers, discussing design trade-offs, or building a quick demo to help stakeholders align</>,
  },
];

export default function EndToEndBuilderPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <TraitHero
        accentBarClass="bg-pink"
        metricBoxClass="bg-pink/20 border-pink/40"
        title={<>End-to-End <span className="highlight-pink">Ownership</span></>}
        subtitle="Product Strategy, Architecture, Data Pipeline, UI/UX, and Deployment — the whole thing, shipped and validated."
        metrics={[
          { value: "Full-Stack", label: "ownership" },
          { value: "5", label: "disciplines covered" },
        ]}
        imageSrc="/skills/end-to-end.webp"
        imageAlt="End-to-End Builder illustration"
      />

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

          <div className="space-y-0">
            {[...stackLayers].reverse().map((layer, index) => (
              <FadeInView key={layer.name} delay={index * 0.15} className="relative">
                <div
                  className="p-5 border-2 border-foreground first:rounded-t-xl last:rounded-b-xl -mt-[2px] first:mt-0"
                  style={{ backgroundColor: layer.lightColor }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-foreground font-bold text-sm text-foreground flex-shrink-0 w-fit"
                      style={{ backgroundColor: layer.color }}
                    >
                      {layer.name}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{layer.what}</p>
                      <p className="text-xs text-gray-500 mt-1">{layer.tech}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView y={0} className="mt-8 p-6 bg-cream border-2 border-foreground rounded-xl shadow-sketch-sm">
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
              <h3 className="text-xl font-bold text-foreground">{thisWebsite.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">{thisWebsite.subtitle}</p>

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
                  <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                </FadeInView>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <ValuePropsSection items={valueProps} className="bg-warm" />

      <TraitCTA
        message={
          <>
            The best way to learn is to{" "}
            <span className="text-yellow">build</span>. The best way to grow
            is to <span className="text-pink">ship</span>.
          </>
        }
        links={[
          {
            href: "/projects/vectorpaths",
            label: "See VectorPaths Case Study →",
            primary: true,
            className: "bg-pink text-white hover:bg-[#ff8fb3]",
          },
          {
            href: "/traits/fast-learner",
            label: "Next: Fast Learner →",
          },
        ]}
      />
    </div>
  );
}
