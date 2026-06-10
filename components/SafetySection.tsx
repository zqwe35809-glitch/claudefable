// FILE: components/SafetySection.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { ShieldCheck, Lock, Dna, Beaker, GitFork } from "lucide-react";

export default function SafetySection() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const protectedDomains = [
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Aggressive filtering for hacking attempts, code injection, and exploit search vectors.",
    },
    {
      icon: Dna,
      title: "Biology",
      description: "Rigorous detection safeguards preventing access to harmful bio-organic agent formulation data.",
    },
    {
      icon: Beaker,
      title: "Chemistry",
      description: "Checks on chemical synthesis scripts to prevent dangerous compounds manufacture.",
    },
    {
      icon: GitFork,
      title: "Model Distillation",
      description: "Proactive classifiers blocking attempts to bypass license agreements via direct model harvesting.",
    },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-[#F0FDF4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Responsible Release: Claude Fable 5 Safety Architecture
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Leading capabilities must be backed by advanced safety designs. Fable 5 introduces real-time mitigations for risky query domains.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: How it works */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-green-600" aria-hidden="true" />
              How It Works
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Safety Classifiers</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Embedded classifiers screen every inbound request in real time prior to core inference.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Opus 4.8 Fallback</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Requests triggering high-risk classifier signatures fallback automatically to Claude Opus 4.8.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Minimal Session Impact</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Fewer than 5% of active user sessions trigger safety fallbacks, preserving high mythos capabilities.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 text-green-800 flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Zero Refusal Billing</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Refusals return `stop_reason: "refusal"` with an HTTP 200 code, and are never billed to your API usage.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Protected Domains */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {protectedDomains.map((domain, index) => {
              const IconComp = domain.icon;
              return (
                <div
                  key={domain.title}
                  className={`reveal-on-scroll bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow transition-all duration-300 ${
                    inView ? "revealed" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4" aria-hidden="true">
                    <IconComp className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-2">
                    {domain.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-slate-900 py-4 px-6 sm:py-5 sm:px-8 rounded-xl text-center shadow-lg border border-accent/20">
          <p className="text-accent font-extrabold tracking-wide text-sm sm:text-base uppercase flex items-center justify-center gap-2">
            <span>🛡️</span>
            1,000+ hours of external red-team testing. Zero universal jailbreaks found.
          </p>
        </div>
      </div>
    </section>
  );
}
