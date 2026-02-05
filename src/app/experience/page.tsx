"use client";

import { motion } from "framer-motion";
import CaseStudy, { ValidationStats } from "@/components/CaseStudy";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#fef9f3] pt-24">
      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Experience
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I build products that turn complex systems into simple experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Background</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Current Work */}
              <div className="p-5 border-2 border-[#1a1a1a] rounded-xl bg-[#fff9e6] shadow-[3px_3px_0_#1a1a1a]">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Current</span>
                <div className="mt-3 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🚀</span>
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">VectorPaths</p>
                      <p className="text-sm text-gray-600">Founder & Product Lead</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🏦</span>
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">Commonwealth Bank</p>
                      <p className="text-sm text-gray-600">Customer Banking Specialist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-5 border-2 border-[#1a1a1a] rounded-xl bg-[#f0f9ff] shadow-[3px_3px_0_#1a1a1a]">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Education</span>
                <div className="mt-3">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🎓</span>
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">University of Melbourne</p>
                      <p className="text-sm text-gray-600">B.Com — Finance & Economics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Now Learning */}
            <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Currently Learning</span>
              <p className="mt-2 text-sm text-gray-600">
                AI deployment workflows · Vibe coding · Local model training
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-[#fff9e6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">Case Studies</h2>
            <p className="text-gray-600">How I think through problems</p>
          </motion.div>

          {/* VectorPaths Case Study */}
          <CaseStudy
            id="vectorpaths-case"
            title="VectorPaths"
            subtitle="Founder & Product Lead"
            customImage="/skills/coding.png"
            externalUrl="https://vectorpaths.com"
            color="yellow"
            challenge="How do you turn experience-based teaching judgment into a scalable system?"
            sections={[
              {
                title: "My Approach",
                content: (
                  <div className="space-y-3">
                    <p>
                      <strong>1. Define the problem boundary</strong>
                      <br />
                      <span className="text-gray-600">
                        Teaching judgment = knowing which question helps this student most right now.
                        That&apos;s a ranking problem.
                      </span>
                    </p>
                    <p>
                      <strong>2. Build the data layer</strong>
                      <br />
                      <span className="text-gray-600">
                        Defined 10+ dimension taxonomy. Used LLM + Schema constraints to extract
                        structured data from 3,000+ questions.
                      </span>
                    </p>
                    <p>
                      <strong>3. Design the algorithm</strong>
                      <br />
                      <span className="text-gray-600">
                        ROI ranking based on target score and exam report data.
                        Validated with backtesting (R² = 0.87).
                      </span>
                    </p>
                  </div>
                ),
              },
              {
                title: "Key Decisions",
                content: (
                  <div className="space-y-4">
                    <div className="p-4 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">
                        Why 3 reinforcement questions?
                      </p>
                      <p className="text-sm text-gray-700">
                        &lt;3 = weak retention. &gt;3 = user fatigue. Tested to find the balance.
                      </p>
                    </div>
                    <div className="p-4 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">
                        Why collect error reasons?
                      </p>
                      <p className="text-sm text-gray-700">
                        Calculation error vs. concept gap need different interventions.
                        Same wrong answer, different fix.
                      </p>
                    </div>
                    <div className="p-4 bg-[#98d4bb] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">
                        Why practice without login?
                      </p>
                      <p className="text-sm text-gray-700">
                        Low friction entry improves conversion. Gate the value (detailed solutions),
                        not the trial.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Validation",
                content: (
                  <ValidationStats
                    stats={[
                      { label: "R² Correlation", value: "0.87", highlight: true },
                      { label: "Test Cases", value: "2,100+" },
                      { label: "Questions Processed", value: "3,000+" },
                    ]}
                  />
                ),
              },
              {
                title: "What I Learned",
                content: (
                  <div className="space-y-3">
                    <p>
                      <strong>Schema constraints save LLM output</strong>
                      <br />
                      <span className="text-gray-600">
                        Pure LLM output is unstable. Schema ensures consistent structure.
                      </span>
                    </p>
                    <p>
                      <strong>Design for failure paths</strong>
                      <br />
                      <span className="text-gray-600">
                        What happens when user gets 3 wrong in a row? When they quit mid-session?
                        Edge cases define the real experience.
                      </span>
                    </p>
                  </div>
                ),
              },
            ]}
          />

          {/* CBA Case Study */}
          <CaseStudy
            id="cba-case"
            title="Commonwealth Bank"
            subtitle="Customer Banking Specialist"
            customImage="/skills/cba.png"
            color="green"
            challenge="Serving users with vastly different needs, tech comfort, and communication styles."
            sections={[
              {
                title: "My Approach",
                content: (
                  <div className="space-y-3">
                    <p>
                      <strong>1. Read the user first</strong>
                      <br />
                      <span className="text-gray-600">
                        Adjust tone, pacing, and complexity based on who I&apos;m talking to.
                        One size doesn&apos;t fit all.
                      </span>
                    </p>
                    <p>
                      <strong>2. Clarify before acting</strong>
                      <br />
                      <span className="text-gray-600">
                        Reduce friction by understanding the real need upfront,
                        then guide to the right channel.
                      </span>
                    </p>
                    <p>
                      <strong>3. Handle frustration with structure</strong>
                      <br />
                      <span className="text-gray-600">
                        Identify the confusion point first, then provide clear step-by-step resolution.
                      </span>
                    </p>
                  </div>
                ),
              },
              {
                title: "What I Noticed",
                content: (
                  <div className="space-y-4">
                    <div className="p-4 bg-[#98d4bb] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">Design gaps cause issues</p>
                      <p className="text-sm text-gray-700">
                        Many customer problems came from unclear forms or confusing flows —
                        issues that better design could prevent entirely.
                      </p>
                    </div>
                    <div className="p-4 bg-[#e8d4f8] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">Handoffs matter</p>
                      <p className="text-sm text-gray-700">
                        Coordinating with lending and business teams showed me how
                        transitions between touchpoints shape the overall experience.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                title: "What I Learned",
                content: (
                  <div className="space-y-3">
                    <p>
                      <strong>Good design prevents problems, not just solves them</strong>
                      <br />
                      <span className="text-gray-600">
                        Most frustration I saw wasn&apos;t about the service — it was about
                        information design that could have been clearer.
                      </span>
                    </p>
                    <p>
                      <strong>Real users are messy</strong>
                      <br />
                      <span className="text-gray-600">
                        What they say isn&apos;t always what they need. Building for real people
                        means handling ambiguity.
                      </span>
                    </p>
                  </div>
                ),
              },
            ]}
          />

        </div>
      </section>
    </div>
  );
}
