import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";

const transformations = [
  {
    context: "VectorPaths — Data Pipeline",
    label: "Knowledge Graph",
    before: {
      title: "The Chaos",
      items: [
        "2,138+ real CPA exam questions as raw PDF scans",
        "20 years of exams — inconsistent formats, missing files, broken layouts",
        "10+ classification dimensions per question (difficulty, topic, type, prerequisites...)",
        "LLM extraction errors: wrong topics, math formatting issues, over/under-extraction",
      ],
    },
    after: {
      title: "The System",
      items: [
        "6 core knowledge domains with ROI-weighted learning paths",
        "Structured knowledge graph with verified topic relationships",
        "Self-improving error pipeline: detect → document → solve → test → prevent",
        "0.87 R² prediction accuracy for student learning outcomes",
      ],
    },
    story:
      "The hardest part wasn't extraction — it was building trust in the output. LLMs don't follow your taxonomy perfectly. Math content breaks formatting. Years of exam data have gaps and inconsistencies. So I built a systematic quality pipeline: every error gets logged into a living document, cross-referenced against known issues, solved with a documented approach, and locked in with an automated test. The system gets smarter with every edge case it encounters.",
  },
  {
    context: "CBA — Customer Service",
    label: "User Insight",
    before: {
      title: "What They Said",
      items: [
        '"I want to transfer money"',
        '"This app doesn\'t work"',
        '"Can you just do it for me?"',
      ],
    },
    after: {
      title: "What They Needed",
      items: [
        "Fewer steps — the transfer flow was too complex for elderly users",
        "A simple printed step-by-step guide they could follow at home",
        "Confidence that they could do it themselves next time",
      ],
    },
    story:
      "At Commonwealth Bank, I noticed a pattern: elderly customers weren't rejecting technology — they were overwhelmed by a multi-step process designed for power users. The real problem wasn't \"how to transfer money\" but \"how to navigate 8 screens without getting lost.\" I simplified the flow into clear, numbered steps and created take-home guides. The shift: from solving the stated request to solving the actual need.",
  },
  {
    context: "VectorPaths — Decision Model",
    label: "Structured Judgment",
    before: {
      title: "The Guesswork",
      items: [
        '"This topic feels important — study it more"',
        "Teachers rely on personal experience to prioritize content",
        "No data on which topics actually predict exam success",
      ],
    },
    after: {
      title: "The Framework",
      items: [
        "Topic weights derived from 20 years of real exam frequency data",
        "ROI ranking: which topics give the highest score-per-hour-studied",
        "Verifiable, updatable model — not frozen intuition",
      ],
    },
    story:
      "Every CPA teacher has opinions on \"what's important.\" But opinions don't scale, and they can't be verified. I turned 20 years of exam data into a frequency-based weight model, so \"important\" became measurable. When the model disagreed with expert intuition, we could check — and the data was usually right.",
  },
];

const valueProps = [
  {
    icon: "📋",
    text: "When your team faces ambiguous user needs or messy data, I frame it into a structured, actionable product spec",
  },
  {
    icon: "🧠",
    text: "I design AI products where complexity lives in the system, not the user experience — users get simplicity, the model handles the hard parts",
  },
  {
    icon: "📊",
    text: "I turn 'gut feeling' product decisions into data-backed frameworks that the whole team can align on",
  },
];

export default function ComplexityClarityPage() {
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

            {/* Color accent bar instead of emoji */}
            <div className="w-16 h-2 bg-blue-light mx-auto mb-6 rounded-full" />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-wide">
              Complexity → <span className="highlight-blue">Clarity</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              I don&apos;t simplify problems — I find the structure hidden inside
              them.
            </p>

            {/* Hero metrics */}
            <div className="flex justify-center gap-6">
              <div className="px-6 py-4 bg-blue-light/20 border-2 border-blue-light/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">2,138+</p>
                <p className="text-xs text-gray-500 font-medium">
                  questions structured
                </p>
              </div>
              <div className="px-6 py-4 bg-blue-light/20 border-2 border-blue-light/40 rounded-xl">
                <p className="text-3xl font-bold text-foreground">3</p>
                <p className="text-xs text-gray-500 font-medium">
                  real transformations
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Story — Before→After transformations */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide">
              Real <span className="highlight-yellow">Transformations</span>
            </h2>
          </FadeInView>
          <p className="text-center text-gray-500 mb-12">
            Not abstract principles — real problems I turned into real systems.
          </p>

          <div className="space-y-12">
            {transformations.map((item, index) => (
              <FadeInView
                key={index}
                y={30}
                delay={index * 0.1}
                className="border-2 border-foreground rounded-xl shadow-sketch-lg overflow-hidden"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-blue-light/20 border-b-2 border-foreground">
                  <span className="text-sm font-bold text-foreground">
                    {item.context}
                  </span>
                  <span className="px-3 py-1 bg-blue-light border-2 border-foreground text-xs font-bold rounded-full">
                    {item.label}
                  </span>
                </div>

                {/* Before → After panels */}
                <div className="flex flex-col md:flex-row">
                  {/* Before */}
                  <div className="flex-1 p-6 bg-gray-50">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {item.before.title}
                    </p>
                    <ul className="space-y-2">
                      {item.before.items.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-gray-300 mt-1 flex-shrink-0">
                            ×
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow divider */}
                  <div className="flex items-center justify-center py-3 md:py-0 md:px-4 bg-white border-y-2 md:border-y-0 md:border-x-2 border-foreground/10">
                    <span className="text-2xl font-bold text-foreground md:rotate-0 rotate-90">
                      →
                    </span>
                  </div>

                  {/* After */}
                  <div className="flex-1 p-6 bg-mint/20">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                      {item.after.title}
                    </p>
                    <ul className="space-y-2">
                      {item.after.items.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="text-mint mt-1 flex-shrink-0">
                            ✓
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Story narrative */}
                <div className="px-6 py-5 bg-cream border-t-2 border-foreground/10">
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;{item.story}&rdquo;
                  </p>
                </div>
              </FadeInView>
            ))}
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
              Complexity lives in the system.{" "}
              <span className="text-blue-light">Simplicity</span> lives in the
              experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects/vectorpaths"
                className="px-6 py-3 bg-blue-light text-foreground rounded-lg font-medium hover:bg-[#a8ddf5] transition-colors"
              >
                See Full Case Study →
              </Link>
              <Link
                href="/traits/end-to-end-builder"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Next: End-to-End Ownership →
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
