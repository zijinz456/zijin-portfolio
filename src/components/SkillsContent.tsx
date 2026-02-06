import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";
import StaggerItem from "@/components/motion/StaggerItem";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: "🤖",
    skills: ["LLM Engineering", "AI Agents (LangChain, AutoGPT)", "AI Workflow (n8n)", "NLP / LLM Applications", "Machine Learning Concepts", "Prompt Design", "Rapid Prototyping with AI", "AI Ethics & Guardrails"],
    color: "var(--purple)",
  },
  {
    title: "Product & Strategy",
    icon: "📋",
    skills: ["Product Roadmap", "A/B Testing", "Metrics & KPIs", "Stakeholder Management", "Agile/Scrum", "MVP Definition"],
    color: "var(--yellow)",
  },
  {
    title: "Design & UX",
    icon: "🎨",
    skills: [
      "Conversational Flow Design",
      "Adaptive System Design",
      "Data Modelling",
      "User Journey Mapping",
      "Prototyping",
    ],
    color: "var(--blue-light)",
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Python", "CI/CD (GitHub, Vercel, Render)", "Automated Testing", "Schema Constraints"],
    color: "var(--mint)",
  },
];

const howIWork = [
  {
    icon: "🧠",
    title: "Systems Thinking",
    color: "blue-light",
    tagBg: "bg-blue-light/20",
    description: "I like to understand how things connect before building. When designing VectorPaths, I mapped out how user data, question selection, and feedback loops all work together.",
    tag: "Developed through: Product Design, Data Modeling",
  },
  {
    icon: "🚀",
    title: "End-to-End Execution",
    color: "pink",
    tagBg: "bg-pink/20",
    description: "I ship complete products, not just prototypes. From designing the system architecture to deploying and iterating \u2014 I handle the full journey from idea to live product.",
    tag: "Developed through: VectorPaths, Personal Projects",
  },
  {
    icon: "💬",
    title: "Understanding Users",
    color: "yellow",
    tagBg: "bg-yellow/30",
    description: "Working at CBA taught me that what people ask for isn\u2019t always what they need. I\u2019ve learned to listen carefully, identify the real problem, and guide toward the right solution.",
    tag: "Developed through: CBA Banking, User Research",
  },
  {
    icon: "🧪",
    title: "Data-Driven Iteration",
    color: "mint",
    tagBg: "bg-mint/30",
    description: "I don\u2019t guess \u2014 I test. When building the question ranking system, I validated the algorithm with 2,100+ test cases and measured R\u00B2 correlation to make sure it actually worked.",
    tag: "Developed through: Algorithm Design, A/B Testing",
  },
];

export default function SkillsContent() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-4">
              Skills & <span className="highlight-yellow">Capabilities</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What I bring to the table as an AI Product Builder
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skills Section */}
      <section id="technical-skills" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-8 text-center">
              <span className="highlight-pink">Technical Skills</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <StaggerItem
                key={category.title}
                index={index}
                className="p-6 rounded-xl border-2 border-foreground shadow-sketch-lg hover-sketch"
                style={{ backgroundColor: category.color }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border-2 border-foreground rounded-lg text-sm text-foreground hover:bg-yellow transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 px-6 bg-warm">
        <div className="max-w-5xl mx-auto">
          <FadeIn y={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-8 text-center">
              <span className="highlight-blue">How I Work</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {howIWork.map((item, index) => (
              <StaggerItem
                key={item.title}
                index={index}
                className="bg-white border-2 border-foreground rounded-xl shadow-sketch-lg overflow-hidden"
              >
                <div className={`h-2 bg-${item.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-10 h-10 bg-${item.color} border-2 border-foreground rounded-lg flex items-center justify-center text-xl`}>{item.icon}</span>
                    <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className={`inline-block px-3 py-1 ${item.tagBg} border border-${item.color} rounded-full text-xs text-foreground`}>
                    {item.tag}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Work Section */}
      <section id="beyond-work" className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-8 text-center">
              <span className="highlight-yellow">Beyond Work</span>
            </h2>
          </FadeInView>

          {/* Kpop x Photography Story */}
          <FadeInView className="mb-8 p-8 bg-gradient-to-r from-pink/20 to-blue-light/20 border-2 border-foreground rounded-xl shadow-sketch-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Photography x K-Pop</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <p className="text-gray-700">Started with a passion for <strong>K-pop culture</strong></p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-light rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <p className="text-gray-700">Picked up <strong>photography</strong> to capture concerts & events</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-foreground font-bold">3</div>
                    <p className="text-gray-700">Built skills and portfolio through practice</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-mint rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <p className="text-gray-700">Turned it into a <strong>side business</strong></p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/60 rounded-lg border border-foreground/20">
                  <p className="text-sm text-gray-600 italic text-center">
                    &quot;I don&apos;t just have hobbies—I <span className="highlight-yellow">build things</span> from them.&quot;
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    This is my &quot;End-to-End Builder&quot; mindset in action outside of tech!
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl border-2 border-foreground shadow-sketch-lg flex items-center justify-center overflow-hidden">
                  <Image src="/skills/photography.webp" alt="Zijin's K-pop concert photography work" width={240} height={240} className="object-contain" />
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Baking Section */}
          <FadeInView className="p-8 bg-tint-pink border-2 border-foreground rounded-xl shadow-sketch-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Baking</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  What started as stress relief during exam season turned into a genuine craft. Baking teaches me patience, precision, and the importance of following a process — skills that translate directly into product work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cakes", "Cookies", "Bread", "Pastries"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-white border-2 border-foreground rounded-lg text-sm">{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-xl border-2 border-foreground shadow-sketch-lg flex items-center justify-center overflow-hidden">
                  <Image src="/skills/baking.webp" alt="Pastries and baked goods made by Zijin" width={240} height={240} className="object-contain" />
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
