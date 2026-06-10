// FILE: components/FeaturesSection.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Code2, BookOpen, Eye, FlaskConical, Bot, Brain } from "lucide-react";

export default function FeaturesSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "80.3% SWE-Bench Pro. Migrated a 50M-line codebase in a day.",
    },
    {
      icon: BookOpen,
      title: "Long-Context Reasoning",
      description: "1M+ token window. Retrieves and reasons across entire codebases and document libraries.",
    },
    {
      icon: Eye,
      title: "Vision & Documents",
      description: "Chart, table, and image understanding for finance, research, and legal workflows.",
    },
    {
      icon: FlaskConical,
      title: "Scientific Research",
      description: "State-of-the-art on Hebbia Finance Benchmark. Accelerates hypothesis and analysis cycles.",
    },
    {
      icon: Bot,
      title: "Autonomous Agents",
      description: "Runs longer, unsupervised task chains than any prior Claude. Ideal for agentic pipelines.",
    },
    {
      icon: Brain,
      title: "Knowledge Work",
      description: "Senior-level reasoning across domains — law, medicine, strategy, and engineering.",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight mb-4">
            Claude Fable 5 Capabilities: Built for the Hardest Problems
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            The Mythos-class framework enables high-fidelity autonomous thinking and broad reasoning capabilities across complex enterprise workflows.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal-on-scroll bg-white border border-border-custom p-8 rounded-xl shadow-xs hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 ${
                  inView ? "revealed" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Amber Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent mb-6" aria-hidden="true">
                  <IconComp className="h-6 w-6" aria-hidden="true" />
                </div>
                {/* Card Title */}
                <h3 className="text-xl font-bold text-bg-dark mb-3">
                  {feature.title}
                </h3>
                {/* Card Description */}
                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
