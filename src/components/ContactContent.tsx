import Link from "next/link";
import WavingAvatar from "@/components/WavingAvatar";
import FadeIn from "@/components/motion/FadeIn";
import HoverSlide from "@/components/motion/HoverSlide";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "zijinz456@gmail.com",
    href: "mailto:zijinz456@gmail.com",
    color: "var(--yellow)",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/zijin-zhang",
    href: "https://www.linkedin.com/in/zijin-zhang-2578b92b1",
    color: "var(--blue-light)",
  },
  {
    icon: "📄",
    label: "Resume",
    value: "Download my resume (PDF)",
    href: "/Zijin_Zhang_Resume.pdf",
    color: "var(--purple)",
  },
];

const questions = [
  { text: "Tell me about yourself", href: "/#about-me", color: "var(--yellow)" },
  { text: "Walk me through your biggest project", href: "/experience#vectorpaths-case", color: "var(--blue-light)" },
  { text: "What are your key strengths?", href: "/#top-skills", color: "var(--pink)" },
  { text: "What's your technical background?", href: "/skills#technical-skills", color: "var(--mint)" },
  { text: "What makes you unique?", href: "/skills#beyond-work", color: "var(--purple)" },
  { text: "How do you prioritize features?", href: "/skills#how-i-work", color: "var(--yellow)" },
  { text: "Describe a product you built from scratch", href: "/projects/vectorpaths", color: "var(--blue-light)" },
];

function getLinkProps(href: string) {
  if (href.startsWith("http")) return { target: "_blank" as const, rel: "noopener noreferrer" };
  if (href.endsWith(".pdf")) return { download: "Zijin_Zhang_Resume.pdf" };
  return {};
}

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Waving Avatar */}
          <FadeIn scale={0.8} y={0} className="mb-8 flex justify-center">
            <WavingAvatar size={200} className="border-2 border-foreground shadow-sketch-lg" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-4">
              Let&apos;s <span className="highlight-yellow">Connect!</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Want to chat about AI products, product design, or just say hi?
              <br />
              Feel free to reach out anytime!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <FadeIn key={link.label} x={-20} y={0} delay={0.3 + index * 0.1}>
                <a
                  href={link.href}
                  {...getLinkProps(link.href)}
                  className="block p-6 border-2 border-foreground rounded-xl shadow-sketch-lg hover-sketch"
                  style={{ backgroundColor: link.color }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl" aria-hidden="true">{link.icon}</span>
                    <div>
                      <p className="text-sm text-foreground/70 uppercase">{link.label}</p>
                      <p className="text-lg font-medium text-foreground">{link.value}</p>
                    </div>
                    <span className="ml-auto text-foreground text-xl">→</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Questions */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.5}>
            <div className="p-8 bg-white border-2 border-foreground rounded-xl shadow-sketch-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink border-2 border-foreground rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-foreground">Questions to Me</h3>
              </div>

              {/* Interview Questions */}
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <HoverSlide key={question.text} delay={0.6 + index * 0.1}>
                    <Link
                      href={question.href}
                      className="flex items-center gap-3 p-3 bg-white border-2 border-foreground rounded-lg hover:shadow-sketch-sm transition-all group"
                    >
                      <span
                        className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: question.color }}
                      >
                        {index + 1}
                      </span>
                      <span className="text-sm text-foreground font-medium">{question.text}</span>
                      <span className="ml-auto text-gray-400 group-hover:text-foreground transition-colors">→</span>
                    </Link>
                  </HoverSlide>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Click any question to jump to the answer
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
