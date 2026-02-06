import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";

const timeline = [
  {
    month: "Month 1",
    deliverable: "AI Tool Evaluation + Product Prototypes",
    details:
      "Hands-on tested Claude, GPT-4, Gemini, DeepSeek — not just prompting, but systematic comparison of strengths, weaknesses, and optimal use cases. Mastered Figma and AI design tools to create product mockups.",
    skills: ["LLM Evaluation", "AI Design Tools", "Figma", "Product Thinking"],
    color: "var(--purple)",
  },
  {
    month: "Month 2",
    deliverable: "Complete System Architecture for VectorPaths",
    details:
      "Designed the full architecture from scratch: knowledge graph structure, learning path algorithms, topic weighting model, user experience flows. All documented before writing a single line of code.",
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
      "Built VectorPaths from zero — React/Next.js frontend, Node.js backend, PostgreSQL database. Learned the entire stack by building, not by watching tutorials. Every feature shipped to production.",
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
      "Built CI/CD pipelines, n8n workflow automation with AI agents, and this entire portfolio site — designed, developed, and deployed independently. The learning never stopped producing output.",
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
    text: "AI landscape moves weekly. I can evaluate new models and tools in days, not weeks — with comparative analysis, not just surface testing",
  },
  {
    icon: "🧠",
    text: "I bridge product thinking and technical depth — I understand how the tech works, so I can design products that leverage it correctly",
  },
  {
    icon: "📦",
    text: "Every month of learning produces a shipped deliverable, not just knowledge. I learn by building, so my ramp-up always creates tangible value",
  },
];

export default function FastLearnerPage() {
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

            <div className="w-16 h-2 bg-yellow mx-auto mb-6 rounded-full" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-wide">
              Fast <span className="highlight-yellow">Learner</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              I don&apos;t study first — I build first, and learn what I need
              along the way.
            </p>

            {/* Hero metrics */}
            <div className="flex justify-center gap-6">
              <div className="px-6 py-4 bg-yellow/20 border-2 border-yellow/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">4</p>
                <p className="text-xs text-gray-500 font-medium">months</p>
              </div>
              <div className="px-6 py-4 bg-yellow/20 border-2 border-yellow/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">0 → 1</p>
                <p className="text-xs text-gray-500 font-medium">
                  shipped product
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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

          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
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
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full border-3 border-foreground flex items-center justify-center font-bold text-xs md:text-sm text-foreground"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.month.replace("Month ", "M")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="p-5 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm">
                      {/* Deliverable as headline */}
                      <h3 className="font-bold text-foreground mb-2">
                        {item.deliverable}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {item.details}
                      </p>

                      {/* Skills acquired */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-[10px] font-medium rounded-md border"
                            style={{
                              backgroundColor: `${item.color}33`,
                              borderColor: `${item.color}66`,
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

      {/* What This Means For Your Team */}
      <section className="py-12 px-6">
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
              Give me a new domain. I&apos;ll be{" "}
              <span className="text-yellow">productive</span> in weeks, not
              months.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects/vectorpaths"
                className="px-6 py-3 bg-yellow text-foreground rounded-lg font-medium hover:bg-yellow-light transition-colors"
              >
                See VectorPaths Case →
              </Link>
              <Link
                href="/traits/complexity-clarity"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Next: Complexity → Clarity →
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
