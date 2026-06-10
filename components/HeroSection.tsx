// FILE: components/HeroSection.tsx
"use client";

import React from "react";
import { ArrowRight, Code2, Layers, Cpu } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-32 sm:pt-40 pb-20 flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Decorative Grid Dot Background */}
      <div className="absolute inset-0 grid-dot-pattern pointer-events-none opacity-70" aria-hidden="true" />

      {/* Premium Amber Radial Glow Top-Right */}
      <div
        className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-radial from-accent/10 to-transparent blur-3xl rounded-full pointer-events-none -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-radial from-accent/5 to-transparent blur-3xl rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16">
        {/* Left Copy */}
        <div className="flex-1 space-y-6 sm:space-y-8 max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-light/60 border border-accent/20 rounded-full text-accent font-semibold tracking-wider text-xs uppercase">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Anthropic · Mythos-Class AI · June 2026</span>
          </div>

          {/* Primary H1 SEO Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bg-dark tracking-tight leading-[1.15]">
            Claude Fable 5 — The{" "}
            <span className="bg-gradient-to-r from-accent to-[#B45309] bg-clip-text text-transparent">
              Most Capable
            </span>{" "}
            AI Model Available
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Powered by the groundbreaking Mythos-class architecture, Claude Fable 5 sets a new paradigm with an unprecedented{" "}
            <strong className="text-bg-dark font-bold">80.3% SWE-Bench Pro</strong> score, a massive{" "}
            <strong className="text-bg-dark font-bold">1M+ token context</strong> window, and highly autonomous stateful agents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#cta"
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center font-bold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 gap-2"
            >
              Start with claude-fable-5 API
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center font-bold text-text-primary hover:text-accent border border-border-custom hover:border-accent bg-bg-secondary hover:bg-bg-primary rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Read the Docs
            </a>
          </div>

          {/* Float Badge Row (Visible on larger screens) */}
          <div className="pt-8 border-t border-border-custom/60 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-custom rounded-full text-sm font-semibold text-text-primary shadow-xs">
              <Code2 className="h-4 w-4 text-accent" aria-label="Coding Icon" />
              <span>80.3% SWE-Bench Pro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-custom rounded-full text-sm font-semibold text-text-primary shadow-xs">
              <Layers className="h-4 w-4 text-accent" aria-label="Layers Icon" />
              <span>1M+ Token Context</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-custom rounded-full text-sm font-semibold text-text-primary shadow-xs">
              <Cpu className="h-4 w-4 text-accent" aria-label="CPU Icon" />
              <span>#1 FrontierCode</span>
            </div>
          </div>
        </div>

        {/* Right Graphical Element */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex items-center justify-center relative">
          <div
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-radial from-accent/20 to-transparent absolute blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative border border-accent/20 bg-bg-dark/95 text-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4" aria-hidden="true">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">claude-fable-5-terminal</span>
            </div>
            <div className="space-y-3">
              <p className="text-white/40">// Querying Anthropic Mythos-Class Model API...</p>
              <div className="flex items-start gap-2">
                <span className="text-accent">$</span>
                <span className="text-green-400">client.messages.create(&#123;</span>
              </div>
              <p className="pl-6 text-yellow-300">model: "claude-fable-5",</p>
              <p className="pl-6 text-yellow-300">max_tokens: 1048576,</p>
              <p className="pl-6 text-yellow-300">messages: [&#123; role: "user", content: codebase_context &#125;]</p>
              <p className="pl-2 text-green-400">&#125;);</p>
              <div className="border-t border-white/10 pt-4 mt-4 text-white/80">
                <p className="text-accent font-semibold">// Response metadata:</p>
                <p>💡 Status: 200 OK</p>
                <p>📊 SWE-Bench Pro Score: 80.3% (Model ID: claude-fable-5)</p>
                <p>🔒 System Safety: active (0 universal jailbreaks found)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
