import type { Metadata } from "next";
import FadeInView from "@/components/motion/FadeInView";
import TraitHero from "@/components/traits/TraitHero";
import ValuePropsSection from "@/components/traits/ValuePropsSection";
import TraitCTA from "@/components/traits/TraitCTA";

export const metadata: Metadata = {
  title: "Complexity to Clarity",
  description: "I don't simplify problems — I find the structure hidden inside them. 2,138+ questions structured into 6 core domains with 0.87 R² accuracy.",
  openGraph: {
    title: "Complexity to Clarity | Zijin Zhang",
    description: "From 2,138+ raw questions to structured knowledge graph. I find the structure hidden inside complex problems.",
    url: "https://zijinzhangprofile.com/traits/complexity-clarity",
  },
};

const transformations = [
  {
    context: "VectorPaths — Data Pipeline",
    label: "Knowledge Graph",
    before: {
      title: "The Chaos",
      items: [
        "2,138+ real VCE Methods exam questions as raw PDF scans",
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
      "Every VCE Methods teacher has opinions on \"what's important.\" But opinions don't scale, and they can't be verified. I turned 20 years of exam data into a frequency-based weight model, so \"important\" became measurable. When the model disagreed with expert intuition, we could check — and the data was usually right.",
  },
];

const valueProps = [
  {
    icon: "📋",
    text: <>I enjoy turning <strong>ambiguous requirements or messy data</strong> into structured, actionable specs that make the next steps clearer for everyone</>,
  },
  {
    icon: "🧠",
    text: <>I care about keeping <strong>complexity in the system</strong>, not the user experience — so users get a simple interface while the model handles the hard parts</>,
  },
  {
    icon: "📊",
    text: <>I like grounding product decisions in <strong>data rather than gut feeling</strong> — building frameworks that help the team align on a shared understanding</>,
  },
];

export default function ComplexityClarityPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <TraitHero
        accentBarClass="bg-blue-light"
        metricBoxClass="bg-blue-light/20 border-blue-light/40"
        title={<>Complexity → <span className="highlight-blue">Clarity</span></>}
        subtitle="I don't simplify problems — I find the structure hidden inside them."
        metrics={[
          { value: "20 yrs", label: "of exam data structured" },
          { value: "3", label: "source types integrated" },
        ]}
        imageSrc="/skills/clarity.webp"
        imageAlt="Complexity to Clarity illustration"
      />

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
                key={item.context}
                y={30}
                delay={index * 0.1}
                className="border-2 border-foreground rounded-xl shadow-sketch-lg overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-3 bg-blue-light/20 border-b-2 border-foreground">
                  <span className="text-sm font-bold text-foreground">{item.context}</span>
                  <span className="px-3 py-1 bg-blue-light border-2 border-foreground text-xs font-bold rounded-full">
                    {item.label}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6 bg-gray-50">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {item.before.title}
                    </p>
                    <ul className="space-y-2">
                      {item.before.items.map((line, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-gray-300 mt-1 flex-shrink-0">×</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center py-3 md:py-0 md:px-4 bg-white border-y-2 md:border-y-0 md:border-x-2 border-foreground/10">
                    <span className="text-2xl font-bold text-foreground md:rotate-0 rotate-90">→</span>
                  </div>

                  <div className="flex-1 p-6 bg-mint/20">
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                      {item.after.title}
                    </p>
                    <ul className="space-y-2">
                      {item.after.items.map((line, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-mint mt-1 flex-shrink-0">✓</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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

      <ValuePropsSection items={valueProps} />

      <TraitCTA
        message={
          <>
            Complexity lives in the system.{" "}
            <span className="text-blue-light">Simplicity</span> lives in the experience.
          </>
        }
        links={[
          {
            href: "/projects/vectorpaths",
            label: "See Full Case Study →",
            primary: true,
            className: "bg-blue-light text-foreground hover:bg-[#a8ddf5]",
          },
          {
            href: "/traits/end-to-end-builder",
            label: "Next: End-to-End Ownership →",
          },
        ]}
      />
    </div>
  );
}
