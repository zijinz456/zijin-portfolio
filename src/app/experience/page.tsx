"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import RecentUpdates from "@/components/RecentUpdates";
import CaseStudy, { FlowDiagram, ValidationStats } from "@/components/CaseStudy";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#fef9f3] pt-24">
      {/* Recent Updates Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <RecentUpdates />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <Timeline />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-[#fff9e6]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
              <span className="highlight-pink">Case Studies</span>
            </h2>
            <p className="text-gray-600">Deep dive into my projects</p>
          </motion.div>

          {/* VectorPaths Case Study */}
          <CaseStudy
            id="vectorpaths-case"
            title="VectorPaths"
            subtitle="AI-Powered Adaptive Learning Platform"
            avatarScene="coding"
            color="yellow"
            challenge="Students don't know which questions to practice. Teachers' judgment relies on experience—it doesn't scale."
            sections={[
              {
                title: "My Hypothesis",
                content: (
                  <p>
                    What if we could turn <strong>&quot;teaching judgment&quot;</strong> into a data
                    problem? Then AI could deliver personalized recommendations at scale.
                  </p>
                ),
              },
              {
                title: "Conversation Flow Design",
                content: (
                  <FlowDiagram
                    steps={[
                      { label: "User selects target score" },
                      { label: "System calculates knowledge point ROI" },
                      { label: "Push highest-value question" },
                      { label: "User answers", branches: ["Correct", "Wrong"] },
                      { label: "Next Q / Diagnostic Flow" },
                      { label: "3× Reinforcement + Link to notes" },
                    ]}
                  />
                ),
              },
              {
                title: "How I Used LLM",
                content: (
                  <div className="space-y-3">
                    <p>
                      • Used <strong>LLM + Schema constraints</strong> to extract structured data
                      from 3000+ questions
                    </p>
                    <p>
                      • <strong>Why Schema?</strong> Pure LLM output format is unstable. Schema
                      ensures every question has complete dimension labels.
                    </p>
                    <p>
                      • <strong>LLM limitations:</strong> Direct answer generation has
                      hallucination risk → My solution: LLM extraction + human spot-check
                      verification
                    </p>
                  </div>
                ),
              },
              {
                title: "Key Design Decisions",
                content: (
                  <div className="space-y-4">
                    <div className="p-4 bg-[#ffe135] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">
                        Why 3 questions after wrong answer?
                      </p>
                      <p className="text-sm text-gray-700">
                        Testing showed: &lt;3 = weak retention, &gt;3 = user fatigue. 3 is the
                        sweet spot.
                      </p>
                    </div>
                    <div className="p-4 bg-[#87ceeb] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">
                        Why collect error reasons?
                      </p>
                      <p className="text-sm text-gray-700">
                        Calculation error vs. concept misunderstanding need different
                        interventions.
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
                title: "Failure Paths I Designed",
                content: (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500">❌</span>
                      <div>
                        <p className="font-medium">User answers wrong 3× in a row</p>
                        <p className="text-sm text-gray-500">
                          → Lower difficulty, build confidence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500">⚠️</span>
                      <div>
                        <p className="font-medium">User says &quot;too hard&quot;</p>
                        <p className="text-sm text-gray-500">
                          → Might mean &quot;I need more hints&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-500">⏸️</span>
                      <div>
                        <p className="font-medium">User quits mid-session</p>
                        <p className="text-sm text-gray-500">
                          → Save state, resume from checkpoint next time
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* CBA Case Study */}
          <CaseStudy
            id="cba-case"
            title="CBA Customer Service"
            subtitle="Real Customer Interactions → Design Insights"
            avatarScene="working"
            color="green"
            challenge="How do you design AI assistants that actually help real customers with messy, emotional, and often unclear requests?"
            sections={[
              {
                title: "What I Learned from the Front Line",
                content: (
                  <div className="space-y-4">
                    <div className="p-4 bg-[#98d4bb] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">Adaptive Tone</p>
                      <p className="text-sm text-gray-700">
                        Slow down for elderly customers, be direct with tech-savvy users.
                        One-size-fits-all doesn&apos;t work.
                      </p>
                    </div>
                    <div className="p-4 bg-[#ffb6c1] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">De-escalation Patterns</p>
                      <p className="text-sm text-gray-700">
                        &quot;I want to complain&quot; often means &quot;I need to be heard.&quot;
                        Recognition before resolution.
                      </p>
                    </div>
                    <div className="p-4 bg-[#e8d4f8] border-2 border-[#1a1a1a] rounded-xl">
                      <p className="font-semibold text-[#1a1a1a] mb-2">Know When to Handoff</p>
                      <p className="text-sm text-gray-700">
                        Recognize chatbot limits. Some conversations need human touch.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Design Principles I Developed",
                content: (
                  <div className="space-y-3">
                    <p>
                      <strong>1. Understand the real goal, not the literal request</strong>
                      <br />
                      <span className="text-gray-600">
                        &quot;I want to transfer money&quot; might mean &quot;I&apos;m not sure how to use the
                        app.&quot;
                      </span>
                    </p>
                    <p>
                      <strong>2. Design for the frustrated user first</strong>
                      <br />
                      <span className="text-gray-600">
                        If it works for someone who&apos;s upset, it&apos;ll work for everyone.
                      </span>
                    </p>
                    <p>
                      <strong>3. Context is everything</strong>
                      <br />
                      <span className="text-gray-600">
                        Same words, different history = different response needed.
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
