// FILE: components/CtaSection.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  const partners = [
    "Claude API",
    "Claude.ai",
    "Claude Code",
    "AWS Bedrock",
    "Google Cloud",
    "Microsoft Foundry",
    "GitHub Copilot",
  ];

  return (
    <section
      id="cta"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-bg-dark text-white relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-accent/10 to-transparent blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10 text-center">
        <div
          className={`reveal-on-scroll max-w-4xl mx-auto space-y-6 sm:space-y-8 ${
            inView ? "revealed" : ""
          }`}
        >
          {/* Main H2 Header with target keyword */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Start Building with Claude Fable 5 Today
          </h2>

          {/* Body sentence on availability platforms */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Access the class-leading claude-fable-5 model on the platform of your choice: Claude API, Claude.ai, Claude Code, AWS Bedrock, Google Cloud Vertex, Microsoft Foundry, and GitHub Copilot.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://console.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center font-bold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 gap-1.5"
            >
              Get API Access
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center font-bold text-white hover:text-accent border border-white/20 hover:border-accent bg-transparent hover:bg-white/5 rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Contact Sales
            </a>
          </div>

          {/* Supported platform list banner */}
          <div className="pt-12 sm:pt-16 border-t border-slate-800/80">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Supported Environments & Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
