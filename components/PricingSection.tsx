// FILE: components/PricingSection.tsx
"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight mb-4">
            Claude Fable 5 Pricing — API & Subscription Plans
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Choose the integration tier that matches your operational needs. Get started with no hidden fees.
          </p>
        </div>

        {/* 3-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Standard */}
          <div
            className={`reveal-on-scroll bg-white border border-border-custom rounded-2xl p-8 flex flex-col justify-between shadow-xs ${
              inView ? "revealed" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  API Standard
                </span>
                <span className="bg-bg-secondary text-text-primary text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-border-custom">
                  Pay as you go
                </span>
              </div>
              <h3 className="text-2xl font-bold text-bg-dark mb-4">Standard Usage</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Real-time API integration for interactive chat, live coding, and instant-response applications.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="block text-xs text-text-muted uppercase">Input Token rate</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent">$10.00</span>
                  <span className="text-text-muted text-xs"> / 1M input tokens</span>
                </div>
                <div>
                  <span className="block text-xs text-text-muted uppercase">Output Token rate</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent">$50.00</span>
                  <span className="text-text-muted text-xs"> / 1M output tokens</span>
                </div>
              </div>
            </div>

            <div>
              <ul className="space-y-3 mb-8 border-t border-border-custom pt-6">
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Prompt caching up to 90% off</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Sub-second time-to-first-token</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>2,000 requests / min rate limit</span>
                </li>
              </ul>
              <a
                href="#cta"
                className="w-full h-11 inline-flex items-center justify-center font-bold text-sm text-text-primary hover:text-accent bg-bg-secondary hover:bg-bg-primary border border-border-custom hover:border-accent rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-accent"
              >
                Access Standard API
              </a>
            </div>
          </div>

          {/* Card 2: Batch (Featured) */}
          <div
            className={`reveal-on-scroll bg-white border-2 border-accent rounded-2xl p-8 flex flex-col justify-between shadow-md relative ${
              inView ? "revealed" : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Recommendation Ribbon */}
            <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-sm">
              Recommended Workloads
            </span>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  API Batch
                </span>
                <span className="bg-accent-light text-accent text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-accent/20">
                  50% off standard
                </span>
              </div>
              <h3 className="text-2xl font-bold text-bg-dark mb-4">Batch Processing</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Optimized for heavy asynchronous workloads like full-codebase audits, datasets reasoning, and batch evaluations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="block text-xs text-text-muted uppercase">Input Token rate</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent">$5.00</span>
                  <span className="text-text-muted text-xs"> / 1M input tokens</span>
                </div>
                <div>
                  <span className="block text-xs text-text-muted uppercase">Output Token rate</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-accent">$25.00</span>
                  <span className="text-text-muted text-xs"> / 1M output tokens</span>
                </div>
              </div>
            </div>

            <div>
              <ul className="space-y-3 mb-8 border-t border-border-custom pt-6">
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Guaranteed completion under 24h</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Flat 50% discount on standard rates</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Unlimited concurrent batch jobs</span>
                </li>
              </ul>
              <a
                href="#cta"
                className="w-full h-11 inline-flex items-center justify-center font-bold text-sm text-white bg-accent hover:bg-accent-hover rounded-lg transition-all shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent"
              >
                Start Batch job
              </a>
            </div>
          </div>

          {/* Card 3: Subscription */}
          <div
            className={`reveal-on-scroll bg-white border border-border-custom rounded-2xl p-8 flex flex-col justify-between shadow-xs ${
              inView ? "revealed" : ""
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Subscription
                </span>
                <span className="bg-bg-secondary text-text-primary text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-border-custom">
                  All plans
                </span>
              </div>
              <h3 className="text-2xl font-bold text-bg-dark mb-4">Subscription Tiers</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Pre-configured tiers built directly into Claude.ai, Claude Code, and Copilot environments.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-bg-secondary border border-border-custom text-xs font-bold rounded-lg text-text-primary">Pro</span>
                  <span className="px-2.5 py-1 bg-bg-secondary border border-border-custom text-xs font-bold rounded-lg text-text-primary">Max</span>
                  <span className="px-2.5 py-1 bg-bg-secondary border border-border-custom text-xs font-bold rounded-lg text-text-primary">Team</span>
                  <span className="px-2.5 py-1 bg-bg-secondary border border-border-custom text-xs font-bold rounded-lg text-text-primary">Enterprise</span>
                </div>
                <div className="bg-accent-light/35 border border-accent/20 p-3 rounded-lg text-xs text-accent-hover font-semibold leading-relaxed">
                  📢 Claude Fable 5 included at no extra cost from June 9 to June 22. Standard usage credits apply starting June 23.
                </div>
              </div>
            </div>

            <div>
              <ul className="space-y-3 mb-8 border-t border-border-custom pt-6">
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Accessible in Claude.ai & Claude Code</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>30-day safety data retention</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-text-primary">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span>Admin billing console controls</span>
                </li>
              </ul>
              <a
                href="#cta"
                className="w-full h-11 inline-flex items-center justify-center font-bold text-sm text-text-primary hover:text-accent bg-bg-secondary hover:bg-bg-primary border border-border-custom hover:border-accent rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-accent"
              >
                Explore Plans
              </a>
            </div>
          </div>
        </div>

        {/* Small disclaimer print */}
        <p className="text-center text-xs text-text-muted mt-12 leading-relaxed">
          Prices per Anthropic API docs, June 2026. Subject to change. Promotional period dates are fixed in Coordinated Universal Time (UTC).
        </p>
      </div>
    </section>
  );
}
