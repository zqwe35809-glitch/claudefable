// FILE: components/StatsBar.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export default function StatsBar() {
  const [containerRef, inView] = useInView({ threshold: 0.1 });

  // Count up animation calculations
  const sweProVal = useCountUp(80.3, 1500, inView, 1);
  const sweVerifiedVal = useCountUp(95.0, 1500, inView, 1);
  const contextVal = useCountUp(1, 1500, inView, 0);
  const redTeamVal = useCountUp(1000, 1500, inView, 0);

  const stats = [
    {
      value: `${sweProVal}%`,
      label: "SWE-Bench Pro Score",
      description: "Highest score ever recorded on SWE-Bench Pro",
    },
    {
      value: `${sweVerifiedVal}%`,
      label: "SWE-Bench Verified",
      description: "Industry-standard code remediation test",
    },
    {
      value: `${contextVal}M+`,
      label: "Context Window (tokens)",
      description: "Million-token context with 100% recall accuracy",
    },
    {
      value: `${parseInt(redTeamVal).toLocaleString()}+`,
      label: "Red-Team Testing Hours",
      description: "Extensive safety testing by global third-party experts",
    },
  ];

  return (
    <section
      id="stats"
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="w-full bg-bg-secondary border-t-4 border-accent py-12 md:py-16 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="sr-only">Claude Fable 5 Key Metric Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 lg:divide-x divide-border-custom">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-4 sm:p-0 ${
                idx > 0 ? "pt-8 sm:pt-0 lg:pl-8" : ""
              }`}
            >
              <span className="font-mono text-4xl sm:text-5xl font-bold text-accent tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-base sm:text-lg font-bold text-text-primary uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-xs sm:text-sm text-text-muted max-w-xs leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
