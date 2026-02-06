import type { Metadata } from "next";
import FadeInView from "@/components/motion/FadeInView";
import TraitHero from "@/components/traits/TraitHero";
import ValuePropsSection from "@/components/traits/ValuePropsSection";
import TraitCTA from "@/components/traits/TraitCTA";

export const metadata: Metadata = {
  title: "Fast Learner",
  description: "Zero to shipped product in 4 months. I build first and learn what I need along the way — every month produces a deliverable, not just knowledge.",
  openGraph: {
    title: "Fast Learner | Zijin Zhang",
    description: "Zero to shipped product in 4 months. I build first and learn along the way.",
    url: "https://zijinzhangprofile.com/traits/fast-learner",
  },
};

const timeline = [
  {
    month: "Month 1",
    deliverable: "AI Tool Evaluation + Product Prototypes",
    details:
      <>Hands-on tested Claude, GPT-4, Gemini, DeepSeek — not just prompting, but <strong>systematic comparison of strengths, weaknesses, and optimal use cases</strong>. Mastered Figma and AI design tools to create product mockups.</>,
    skills: ["LLM Evaluation", "AI Design Tools", "Figma", "Product Thinking"],
    color: "var(--purple)",
  },
  {
    month: "Month 2",
    deliverable: "Complete System Architecture for VectorPaths",
    details:
      <>Designed the full architecture from scratch: knowledge graph structure, learning path algorithms, topic weighting model, user experience flows. <strong>All documented before writing a single line of code.</strong></>,
    skills: [
      "System Design",
      "Knowledge Graphs",
      "Algorithm Design",
      "Technical Documentation",
    ],
    color: "var(--blue-light)",
  },
  {
    month: "Month 3",
    deliverable: "Working Full-Stack Web Application",
    details:
      <>Built VectorPaths from zero — React/Next.js frontend, Node.js backend, PostgreSQL database. <strong>Learned the entire stack by building</strong>, not by watching tutorials. Every feature shipped to production.</>,
    skills: [
      "React/Next.js",
      "Node.js",
      "PostgreSQL",
      "Full-Stack Development",
    ],
    color: "var(--mint)",
  },
  {
    month: "Month 4",
    deliverable: "Automation Pipelines + This Portfolio Website",
    details:
      <>Built CI/CD pipelines, n8n workflow automation with AI agents, and this entire portfolio site — designed, developed, and deployed independently. <strong>The learning never stopped producing output.</strong></>,
    skills: [
      "CI/CD",
      "n8n Automation",
      "AI Agents",
      "Vercel Deployment",
    ],
    color: "var(--yellow)",
  },
];

const valueProps = [
  {
    icon: "⚡",
    text: <>The AI landscape moves fast. I enjoy evaluating new models and tools through <strong>hands-on comparative analysis</strong> — building with them, not just reading about them</>,
  },
  {
    icon: "🧠",
    text: <>Having both <strong>product thinking and technical depth</strong> helps me understand what's feasible and design products that use AI capabilities effectively</>,
  },
  {
    icon: "📦",
    text: <>I learn by building — each month of learning produces <strong>something shipped</strong>, not just notes. This means my ramp-up process naturally contributes deliverables along the way</>,
  },
];

export default function FastLearnerPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <TraitHero
        accentBarClass="bg-yellow"
        metricBoxClass="bg-yellow/20 border-yellow/40"
        title={<>Fast <span className="highlight-yellow">Learner</span></>}
        subtitle="I don't study first — I build first, and learn what I need along the way."
        metrics={[
          { value: "4", label: "months" },
          { value: "0 → 1", label: "shipped product" },
        ]}
        imageSrc="/skills/fast-learner.webp"
        imageAlt="Fast Learner illustration"
      />

      {/* The Story — Output-oriented Timeline */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide">
              What I <span className="highlight-pink">Shipped</span> Each Month
            </h2>
          </FadeInView>
          <p className="text-center text-gray-500 mb-12">
            Not &quot;what I studied&quot; — what I delivered.
          </p>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-foreground/15" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <FadeInView
                  key={item.month}
                  x={-20}
                  y={0}
                  delay={index * 0.15}
                  className="relative flex gap-6"
                >
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-3 border-foreground flex items-center justify-center font-bold text-xs md:text-sm text-foreground"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.month.replace("Month ", "M")}
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="p-5 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm">
                      <h3 className="font-bold text-foreground mb-2">
                        {item.deliverable}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {item.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-[10px] font-medium rounded-md border"
                            style={{
                              backgroundColor: `color-mix(in srgb, ${item.color} 20%, transparent)`,
                              borderColor: `color-mix(in srgb, ${item.color} 40%, transparent)`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ValuePropsSection items={valueProps} />

      <TraitCTA
        message={
          <>
            Give me a new domain. I&apos;ll be{" "}
            <span className="text-yellow">productive</span> in weeks, not months.
          </>
        }
        links={[
          {
            href: "/projects/vectorpaths",
            label: "See VectorPaths Case →",
            primary: true,
            className: "bg-yellow text-foreground hover:bg-yellow-light",
          },
          {
            href: "/traits/complexity-clarity",
            label: "Next: Complexity → Clarity →",
          },
        ]}
      />
    </div>
  );
}
