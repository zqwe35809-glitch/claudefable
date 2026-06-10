// FILE: components/BenchmarkSection.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";

export default function BenchmarkSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const rows = [
    {
      model: "Claude Fable 5 (Mythos-Class)",
      swePro: "80.3%",
      sweVerified: "95.0%",
      cursorBench: "72.9%",
      frontierCode: "#1 (Diamond split: 29.3%)",
      highlight: true,
    },
    {
      model: "Claude Opus 4.8",
      swePro: "69.2%",
      sweVerified: "84.1%",
      cursorBench: "58.4%",
      frontierCode: "#2 (Gold split)",
      highlight: false,
    },
    {
      model: "GPT-5.5",
      swePro: "58.6%",
      sweVerified: "78.2%",
      cursorBench: "49.1%",
      frontierCode: "#3 (Silver split)",
      highlight: false,
    },
    {
      model: "Gemini 3.1 Pro",
      swePro: "54.2%",
      sweVerified: "72.0%",
      cursorBench: "42.5%",
      frontierCode: "#4 (Bronze split)",
      highlight: false,
    },
  ];

  return (
    <section
      id="benchmarks"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight mb-4">
            Claude Fable 5 Benchmark Results vs Leading AI Models (2026)
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Rigorous evaluation on complex coding tasks demonstrates Fable 5's dominant software engineering capabilities.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-white border border-border-custom rounded-xl shadow-xs overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-secondary border-b border-border-custom text-xs uppercase tracking-widest text-text-muted font-bold">
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6 text-right">SWE-Bench Pro</th>
                  <th className="py-4 px-6 text-right">SWE-Bench Verified</th>
                  <th className="py-4 px-6 text-right">CursorBench (max)</th>
                  <th className="py-4 px-6 text-right">FrontierCode Split</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom text-sm">
                {rows.map((row) => (
                  <tr
                    key={row.model}
                    className={`transition-colors duration-150 ${
                      row.highlight
                        ? "bg-accent-light/10 border-l-4 border-l-accent font-bold"
                        : "hover:bg-bg-secondary/40"
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-bg-dark">
                      {row.model}
                    </td>
                    <td className="py-4 px-6 text-right font-mono text-accent">
                      {row.swePro}
                    </td>
                    <td className="py-4 px-6 text-right font-mono text-accent">
                      {row.sweVerified}
                    </td>
                    <td className="py-4 px-6 text-right font-mono text-accent">
                      {row.cursorBench}
                    </td>
                    <td className="py-4 px-6 text-right text-text-primary">
                      {row.frontierCode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-3 px-6 bg-bg-secondary/50 border-t border-border-custom text-xs text-text-muted">
            Source: Anthropic benchmark report, June 9 2026
          </div>
        </div>

        {/* Pull Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Karpathy */}
          <article
            className={`reveal-on-scroll bg-white p-8 rounded-xl border border-border-custom shadow-xs flex flex-col justify-between ${
              inView ? "revealed" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div>
              <Quote className="h-8 w-8 text-accent/20 mb-4" aria-hidden="true" />
              <p className="text-text-primary text-base sm:text-lg italic leading-relaxed mb-6">
                &ldquo;Fable 5 is not just another incremental update. It is a profound, generational leap that redefines what we expect from coding assistants. It handles large-scale operations with an ease that makes it feel like a next-decade model.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center font-bold text-accent">
                AK
              </div>
              <div>
                <h4 className="font-bold text-bg-dark text-sm sm:text-base">Andrej Karpathy</h4>
                <p className="text-text-muted text-xs">AI Researcher & Educator (Paraphrased)</p>
              </div>
            </div>
          </article>

          {/* Card 2: Cursor CEO */}
          <article
            className={`reveal-on-scroll bg-white p-8 rounded-xl border border-border-custom shadow-xs flex flex-col justify-between ${
              inView ? "revealed" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <Quote className="h-8 w-8 text-accent/20 mb-4" aria-hidden="true" />
              <p className="text-text-primary text-base sm:text-lg italic leading-relaxed mb-6">
                &ldquo;Long-horizon autonomous coding tasks that were previously out of reach are now fully solvable. Fable 5's ability to maintain state across complex workspaces and self-correct on the fly unlocks true agentic workflows.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center font-bold text-accent">
                CC
              </div>
              <div>
                <h4 className="font-bold text-bg-dark text-sm sm:text-base">Cursor CEO</h4>
                <p className="text-text-muted text-xs">AI Coding Environment Pioneer (Paraphrased)</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
