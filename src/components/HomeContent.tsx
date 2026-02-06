import Link from "next/link";
import AvatarWithBubbles from "@/components/AvatarWithBubbles";
import AboutMe from "@/components/AboutMe";
import TopSkillsShowcase from "@/components/TopSkillsShowcase";
import { WordRotate } from "@/components/ui/word-rotate";
import FadeIn from "@/components/motion/FadeIn";
import FadeInView from "@/components/motion/FadeInView";
import HoverScale from "@/components/motion/HoverScale";

const quickLinks = [
  { href: "/experience", num: "01", label: "Experience", desc: "CBA, VectorPaths & more — real projects with real impact", color: "bg-yellow" },
  { href: "/skills", num: "02", label: "Skills", desc: "From Python & LLMs to product strategy — my full toolkit", color: "bg-pink text-white" },
  { href: "/contact", num: "03", label: "Contact", desc: "Open to AI roles, collabs, or just a good conversation", color: "bg-blue-light" },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left - Intro Text */}
            <FadeIn duration={0.6} className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-relaxed tracking-wide">
                Hi, I&apos;m <span className="highlight-pink">Zijin</span>
              </h1>

              <p className="text-lg text-gray-600 mb-4">You can also call me <span className="highlight-blue text-white font-semibold">Angela</span></p>

              <div className="text-lg md:text-xl text-gray-700 mb-6 flex items-baseline gap-2 justify-center md:justify-start flex-wrap">
                <span>I&apos;m a</span>
                <WordRotate
                  words={[
                    "AI Product Builder",
                    "Data-Driven Problem Solver",
                    "End-to-End Shipper",
                    "Banking × AI Specialist",
                  ]}
                  className="highlight-yellow font-semibold whitespace-nowrap"
                  duration={2000}
                />
              </div>

              <div className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg space-y-2">
                <p>
                  I combine hands-on banking experience at <strong>Commonwealth Bank</strong> with a passion for building AI-powered products.
                </p>
                <p>
                  As the founder of{" "}
                  <a href="https://vectorpaths.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors font-medium">VectorPaths</a>
                  , an AI-powered adaptive learning platform, I bridge the gap between user needs and intelligent systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <HoverScale>
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow border-2 border-foreground rounded-lg font-medium shadow-sketch-md hover-sketch"
                  >
                    Explore My Projects →
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-foreground rounded-lg font-medium shadow-sketch-md hover-sketch"
                  >
                    Get In Touch
                  </Link>
                </HoverScale>
              </div>
            </FadeIn>

            {/* Right - Avatar with Trait Bubbles */}
            <FadeIn scale={0.9} y={0} delay={0.3} className="flex-shrink-0">
              <AvatarWithBubbles />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Welcome Section */}
      <section id="about-me" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide">
              About <span className="highlight-yellow">Me</span>
            </h2>
          </FadeInView>

          {/* About Me Section */}
          <AboutMe />

          {/* My Top 3 Skills */}
          <TopSkillsShowcase />
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-warm">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide">
              Explore <span className="highlight-pink">More</span>
            </h2>
          </FadeInView>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <FadeInView key={link.href} delay={index * 0.1}>
                <Link
                  href={link.href}
                  className="block p-6 bg-white border-2 border-foreground rounded-xl shadow-sketch-md hover-sketch"
                >
                  <span className={`inline-block w-8 h-8 ${link.color} border-2 border-foreground rounded-lg mb-3 text-center leading-7 font-bold text-sm`}>
                    {link.num}
                  </span>
                  <h3 className="font-bold text-foreground mb-2">{link.label}</h3>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </Link>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-purple">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide text-foreground">
              Happy to <span className="highlight-yellow">Connect</span>
            </h2>
            <p className="text-gray-600 mb-10">
              If you&apos;re into AI, product design, or have an interesting idea to share — feel free to say hi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <HoverScale scaleHover={1.05} scaleTap={0.95} className="inline-block">
                <a
                  href="/Zijin_Zhang_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-yellow text-foreground border-2 border-foreground rounded-full font-semibold shadow-sketch-md hover-sketch"
                >
                  View My Resume
                  <span>📄</span>
                </a>
              </HoverScale>
              <HoverScale scaleHover={1.05} scaleTap={0.95} className="inline-block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-foreground border-2 border-foreground rounded-full font-semibold shadow-sketch-md hover-sketch"
                >
                  Get in Touch
                  <span>→</span>
                </Link>
              </HoverScale>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
