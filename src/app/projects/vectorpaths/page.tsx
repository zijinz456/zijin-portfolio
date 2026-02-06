import Link from "next/link";
import Image from "next/image";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import OngoingBadge from "@/components/OngoingBadge";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";

const problemPoints = [
  {
    title: "Textbooks treat all topics equally",
    description: "Students don't know what actually matters on the exam.",
    icon: "📚",
  },
  {
    title: "Question banks only track right/wrong",
    description: "Can't identify where the thinking broke down.",
    icon: "❌",
  },
  {
    title: "Teacher experience can't scale",
    description: "Expert judgment stays locked in individuals.",
    icon: "👨‍🏫",
  },
];

const productScreenshots = [
  {
    src: "/projects/vectorpaths/landing-hero.webp",
    alt: "VectorPaths landing page with target score selector",
    caption: "Students set their target study score — the system adapts everything to their goal.",
    label: "Goal-Driven Entry",
  },
  {
    src: "/projects/vectorpaths/topic-practice.webp",
    alt: "Topic Practice page showing 6 topics and 2,138 questions",
    caption: "2,138 real VCE exam questions organized across 6 core topics.",
    label: "Structured Content",
  },
  {
    src: "/projects/vectorpaths/question-practice.webp",
    alt: "Question practice interface with annotation sidebar showing classifications, difficulty, and risk analysis",
    caption: "Behind every question: structured annotations that tell the system exactly what skill is being tested, how hard it is, and where students are most likely to go wrong.",
    label: "Annotation-Driven Practice",
  },
];

const learnings = [
  {
    title: "LLM output is only as good as your schema",
    description:
      <>Raw LLM output varies every run. I designed <strong>9 annotation tables with strict schemas and validation layers</strong> — turning unreliable extraction into a repeatable pipeline across 2,138+ questions. The lesson: AI is powerful, but <strong>without structured constraints, it&apos;s useless at scale</strong>.</>,
  },
  {
    title: "Edge cases are the real product",
    description:
      <>Multi-concept questions, nested logic chains, trap-type risks that look routine — these edge cases broke the early pipeline constantly. <strong>Handling them is what separates a demo from a system students actually trust.</strong></>,
  },
  {
    title: "Interpretability > accuracy in education",
    description:
      <>I chose a <strong>weighted statistical model over a black-box ML approach</strong>. Teachers need to see why a concept is ranked high and trust the recommendation enough to use it in their classroom. In education, <strong>a model people understand beats a model that&apos;s 5% more accurate</strong>.</>,
  },
  {
    title: "Building for two audiences at once",
    description:
      <>Students want a simple, intuitive experience — just show me what to study next. Teachers want transparency — why is this concept ranked high? The same system serves both, which means <strong>every design decision is a tradeoff between simplicity and explainability</strong>.</>,
  },
];

export default function VectorPathsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
            >
              ← Back to Experience
            </Link>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-wide">
                  VectorPaths
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  An AI-powered adaptive learning platform for VCE Mathematics
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Founder & Product Lead</span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Product Strategy</span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Algorithm Design</span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Full-Stack Dev</span>
                </div>
              </div>
              <OngoingBadge />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 border-2 border-foreground rounded-xl shadow-sketch-sm bg-white">
                <p className="text-2xl font-bold text-foreground">2,138+</p>
                <p className="text-sm text-gray-600">Real Exam Questions</p>
              </div>
              <div className="px-5 py-3 border-2 border-foreground rounded-xl shadow-sketch-sm bg-white">
                <p className="text-2xl font-bold text-foreground">6</p>
                <p className="text-sm text-gray-600">Core Topics</p>
              </div>
              <div className="px-5 py-3 border-2 border-foreground rounded-xl shadow-sketch-sm bg-white">
                <p className="text-2xl font-bold text-foreground">20 yrs</p>
                <p className="text-sm text-gray-600">of VCE Data</p>
              </div>
              <div className="px-5 py-3 border-2 border-foreground rounded-xl shadow-sketch-sm bg-mint">
                <p className="text-2xl font-bold text-foreground">0.87</p>
                <p className="text-sm text-gray-600">R² Accuracy</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide"
          >
            <h2>The <span className="highlight-pink">Problem</span></h2>
          </FadeInView>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            As a VCE student, I spent equal time on every topic — only to realize after the exam that most marks came from a few core areas. The problem wasn&apos;t effort. It was strategy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {problemPoints.map((point, index) => (
              <FadeInView
                key={point.title}
                delay={index * 0.1}
                className="p-6 bg-cream border-2 border-foreground rounded-xl shadow-sketch-md"
              >
                <span className="text-3xl mb-3 block">{point.icon}</span>
                <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600">{point.description}</p>
              </FadeInView>
            ))}
          </div>

          {/* Comparison + Real Example */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-cream border-2 border-foreground rounded-xl shadow-sketch-sm">
              <p className="text-sm text-gray-500 mb-1">Traditional Question Bank</p>
              <p className="font-medium text-foreground">Right / Wrong</p>
            </div>
            <div className="p-4 bg-yellow border-2 border-foreground rounded-xl shadow-sketch-sm">
              <p className="text-sm text-gray-700 mb-1">VectorPaths</p>
              <p className="font-bold text-foreground">Step-level weakness tracking</p>
            </div>
          </div>

          <FadeInView
            className="p-6 bg-pink/10 border-2 border-foreground rounded-xl"
          >
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Real Example
            </p>
            <p className="text-gray-700">
              Two students lose the same 1 point on an exam. One has a <strong>concept gap</strong>,
              the other made a <strong>calculation error</strong>. Traditional systems treat them identically —
              VectorPaths doesn&apos;t.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Solution Approach Section — merged Insight + Architecture */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide"
          >
            <h2>Solution <span className="highlight-yellow">Approach</span></h2>
          </FadeInView>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I started with a simple question bank — but quickly realized the real challenge isn&apos;t &quot;what content to teach.&quot;
            It&apos;s &quot;which question helps this student most right now?&quot; That reframed the entire project from a content problem into a <strong>ranking problem</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Architecture Diagram */}
            <FadeInView x={-20} y={0}>
              <ArchitectureDiagram size="lg" showLabels={true} />
            </FadeInView>

            {/* Approach Details */}
            <FadeInView
              x={20}
              y={0}
              className="space-y-4"
            >
              <div className="p-4 bg-blue-light/30 border-2 border-foreground rounded-xl">
                <h4 className="font-bold text-foreground mb-1">Content Layer</h4>
                <p className="text-sm text-gray-700">
                  Goal-driven entry (target score selector), 6 topic practice tracks, MathJax rendering, progressive hints (5 levels), and a gamified dashboard with XP, streaks, and spaced repetition.
                </p>
              </div>
              <div className="p-4 bg-mint/30 border-2 border-foreground rounded-xl">
                <h4 className="font-bold text-foreground mb-1">Weight Layer — Strategic Score</h4>
                <p className="text-sm text-gray-700 mb-2">
                  A composite score ranks every concept by exam ROI: <strong>frequency (25%) + marks allocation (30%) + difficulty (20%) + dependency chain impact (15%) + trend (10%)</strong>. Recent years are weighted higher (1.0 → 0.8 → 0.6 → 0.4) to capture curriculum shifts.
                </p>
                <p className="text-xs text-gray-500">
                  Backtested against 20 years of VCE data — R² = 0.87
                </p>
              </div>
              <div className="p-4 bg-pink/20 border-2 border-foreground rounded-xl">
                <h4 className="font-bold text-foreground mb-1">Data Layer — LLM Annotation Pipeline</h4>
                <p className="text-sm text-gray-700">
                  Each question is annotated into 9 structured tables via Claude API: skill type &amp; variant, concept hierarchy (e.g. Calculus &gt; Differentiation &gt; Chain Rule), difficulty (logic chains, calc load, novelty), risk categories (knowledge/skill/calculation/trap), and logic chain details.
                </p>
              </div>
              <div className="p-3 bg-warm rounded-xl text-sm text-gray-600">
                <strong>Why statistical model over pure ML?</strong> Interpretability. Teachers need to understand and trust the recommendations — a black-box model wouldn&apos;t work.
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ROI Quadrant — How the Weight System Works */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide"
          >
            <h2>The ROI <span className="highlight-pink">Quadrant</span></h2>
          </FadeInView>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Strategic scores classify every concept into four quadrants — so students know exactly where to invest their time.
          </p>

          <FadeInView
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-5 border-2 border-foreground rounded-xl bg-yellow/30">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">High Frequency + Hard</p>
              <h4 className="font-bold text-foreground text-lg mb-1">Score Differentiator</h4>
              <p className="text-sm text-gray-700">High ROI — invest time to master these. They appear often and separate top students from the rest.</p>
            </div>
            <div className="p-5 border-2 border-foreground rounded-xl bg-mint/30">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">High Frequency + Easy</p>
              <h4 className="font-bold text-foreground text-lg mb-1">Foundation Marks</h4>
              <p className="text-sm text-gray-700">Practice until 100% accuracy. These are marks you can&apos;t afford to lose.</p>
            </div>
            <div className="p-5 border-2 border-foreground rounded-xl bg-blue-light/30">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">Low Frequency + Easy</p>
              <h4 className="font-bold text-foreground text-lg mb-1">Quick Wins</h4>
              <p className="text-sm text-gray-700">Quick review before the exam is enough. Low effort, easy marks when they appear.</p>
            </div>
            <div className="p-5 border-2 border-foreground rounded-xl bg-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">Low Frequency + Hard</p>
              <h4 className="font-bold text-foreground text-lg mb-1">Skip Zone</h4>
              <p className="text-sm text-gray-700">Only for students targeting 90+ scores. Most students should deprioritize these.</p>
            </div>
          </FadeInView>

          <FadeInView
            y={0}
            className="text-center text-sm text-gray-500 mt-6"
          >
            <p>Classification uses median-split on time-weighted frequency × performance score across all concepts.</p>
          </FadeInView>
        </div>
      </section>

      {/* Product Section — Screenshots */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide"
          >
            <h2>The <span className="highlight-blue">Product</span></h2>
          </FadeInView>
          <p className="text-center text-gray-600 mb-12">
            Built end-to-end: LLM annotation pipeline → strategic scoring → learning platform → deployment.
          </p>

          <div className="space-y-12">
            {productScreenshots.map((screenshot, index) => (
              <FadeInView
                key={screenshot.label}
                delay={index * 0.1}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-foreground text-white text-sm font-bold rounded-full">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-foreground">{screenshot.label}</h3>
                </div>
                <div className="border-2 border-foreground rounded-xl overflow-hidden shadow-sketch-lg">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 ml-11">
                  {screenshot.caption}
                </p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next — Adaptive Learning */}
      <section className="py-16 px-6 bg-warm">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide"
          >
            <h2>What&apos;s <span className="highlight-yellow">Next</span></h2>
          </FadeInView>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The current platform delivers structured practice — validated with early student testers. The next step is making it truly adaptive.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeInView
              className="p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-md"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-light border-2 border-foreground font-bold text-sm mb-4">
                Step-Level Tracking
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Move beyond right/wrong. Track exactly where in a multi-step solution each student&apos;s thinking breaks down — concept gap, calculation error, or notation mistake.
              </p>
              <p className="text-xs text-gray-500">
                Designed — integrating with annotation data layer
              </p>
            </FadeInView>

            <FadeInView
              delay={0.1}
              className="p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-md"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-pink border-2 border-foreground font-bold text-sm mb-4 text-white">
                Personalized Paths
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Different goals need different strategies. A student targeting 30/50 focuses on high-ROI fundamentals; a student targeting 45/50 needs non-routine question mastery.
              </p>
              <p className="text-xs text-gray-500">
                Algorithm designed — validated against 20-year exam data
              </p>
            </FadeInView>

            <FadeInView
              delay={0.2}
              className="p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-md md:col-span-2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-mint border-2 border-foreground font-bold text-sm mb-4">
                Intelligent Question Ranking
              </div>
              <p className="text-gray-700 text-sm">
                The core adaptive engine: for any student at any point, rank all available questions by expected learning value. Combines topic weights, student weakness profile, question difficulty, and recency — surfacing &quot;the next best question for you&quot; without exposing the underlying complexity.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInView
            y={0}
            className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide"
          >
            <h2>What I <span className="highlight-pink">Learned</span></h2>
          </FadeInView>

          <div className="space-y-4">
            {learnings.map((learning, index) => (
              <FadeInView
                key={learning.title}
                delay={index * 0.1}
                className="p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-sm"
              >
                <h4 className="font-bold text-foreground mb-2">{learning.title}</h4>
                <p className="text-gray-600">{learning.description}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <p className="text-2xl font-light mb-8 tracking-wide">
              &quot;The complexity lives in the system. The simplicity lives in the <span className="text-yellow">experience</span>.&quot;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://vectorpaths.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow text-foreground rounded-lg font-medium hover:bg-yellow-light transition-colors"
              >
                Visit VectorPaths →
              </a>
              <Link
                href="/experience"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Back to Experience
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
