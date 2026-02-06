import FadeInView from "@/components/motion/FadeInView";
import Timeline from "@/components/Timeline";
import RecentUpdates from "@/components/RecentUpdates";
import CaseStudyCard from "@/components/CaseStudyCard";
import OngoingBadge from "@/components/OngoingBadge";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import CustomerSegmentDiagram from "@/components/diagrams/CustomerSegmentDiagram";

function ProgressFooter() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-foreground whitespace-nowrap">Still Building...</span>
      <div className="flex-1 h-2 bg-gray-100 border border-foreground rounded-full overflow-hidden">
        <div className="relative h-full w-[70%] bg-gradient-to-r from-yellow via-blue-light to-pink rounded-full">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <span>Data + Algorithm</span>
        <span className="text-gray-300">→</span>
        <span>Frontend + Deploy</span>
      </div>
    </div>
  );
}

function CBAFooter() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-foreground whitespace-nowrap">Observing Daily...</span>
      <div className="flex flex-wrap gap-2">
        {["User Friction", "Process Gaps", "Handoff Failures", "Self-Serve Opportunities"].map(
          (tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium bg-mint/40 border border-foreground/20 rounded-full text-foreground"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default function ExperienceContent() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Recent Updates Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <RecentUpdates />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Timeline />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-warm">
        <div className="max-w-5xl mx-auto">
          <FadeInView className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-foreground mb-4">
              <span className="highlight-pink">Case Studies</span>
            </h2>
            <p className="text-gray-600">Problem → Approach → Impact</p>
          </FadeInView>

          <div className="space-y-8">
            {/* VectorPaths Case Study */}
            <div id="vectorpaths-case">
              <CaseStudyCard
                title="VectorPaths"
              subtitle="Founder & Product Lead — Product Strategy, Algorithm Design, Full-Stack Dev"
              description="Students don't know what matters most on the exam, and teachers' expert judgment can't scale. I built an AI-powered learning platform from scratch — extracting and structuring real exam questions with a multi-stage LLM pipeline, designing a topic weight system backtested against 20 years of data, and shipping a full practice environment with progressive hints and goal-based learning paths."
              customImage="/skills/coding.webp"
              externalUrl="https://vectorpaths.com"
              ctaLink="/projects/vectorpaths"
              ctaText="View Full Case Study"
              color="yellow"
              badge={<OngoingBadge size="sm" showBar={false} />}
              visual={<ArchitectureDiagram size="sm" showLabels={true} />}
              stats={[
                { label: "Real Exam Questions", value: "2,138+" },
                { label: "Core Topics", value: "6" },
                { label: "R² Accuracy", value: "0.87" },
              ]}
              insights={[
                "Designed a three-layer system: content experience → topic weight algorithm → LLM-powered data pipeline",
                "Chose statistical model over ML for interpretability — teachers need to trust the recommendations",
                "Currently building adaptive engine: step-level weakness tracking + personalized question ranking",
              ]}
              footer={<ProgressFooter />}
              />
            </div>

            {/* CBA Case Study */}
            <div id="cba-case">
              <CaseStudyCard
                title="Commonwealth Bank"
                subtitle="Customer Banking Specialist — User Research, Process Optimization"
                description="Every day at the branch is unstructured user research. I serve distinct customer segments — elderly clients navigating digital transitions, ESL customers parsing complex financial language, small business owners with multi-product needs, and digital natives frustrated by in-branch requirements. I learned to separate what people ask for from what they actually need, map recurring friction to systemic design gaps, and identify where cross-team handoffs lose critical context."
                customImage="/skills/cba.webp"
                color="green"
                badge={<OngoingBadge size="sm" showBar={false} />}
                visual={<CustomerSegmentDiagram />}
                insights={[
                  "Repeated confusion at the same steps = design gap, not user gap — if 5 people trip on the same stair, fix the stair",
                  "What users ask for ≠ what they need — 'close my account' often means 'explain this fee I didn't expect'",
                  "Cross-team handoffs lose context — customers re-explain their issue 2-3 times because systems don't carry state",
                  "Frontline empathy reveals things surveys can't — tone, hesitation, and body language tell you where the real friction lives",
                ]}
                extraSections={[
                  {
                    title: "Friction Patterns Observed",
                    items: [
                      { label: "Form Design →", detail: "Lending referral forms ask for info customers don't have on hand; causes return visits and frustration" },
                      { label: "Channel Gaps →", detail: "Phone support sends customers to branch without transferring context; customer has to re-explain entire issue" },
                      { label: "Self-Serve Barriers →", detail: "App handles most common requests, but customers lack guidance on which ones — no clear signposting at point of need" },
                      { label: "Language Mismatch →", detail: "Banking terminology in notifications and letters confuses ESL customers; they visit the branch just to 'translate' a letter they received" },
                    ],
                  },
                ]}
                footer={<CBAFooter />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
