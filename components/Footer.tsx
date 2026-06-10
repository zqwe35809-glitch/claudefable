// FILE: components/Footer.tsx
"use client";

import React from "react";

export default function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Benchmarks", href: "#benchmarks" },
        { name: "Safety Tiers", href: "#safety" },
        { name: "Pricing Plans", href: "#pricing" },
        { name: "Model Registry", href: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Release Notes", href: "#" },
        { name: "Developer Forum", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Research Papers", href: "#" },
        { name: "Partnerships", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Safety Policy", href: "#" },
        { name: "Data Retention", href: "#" },
        { name: "Compliance", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-custom py-16 sm:py-20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top footer area */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-16">
          {/* Logo & Tagline column */}
          <div className="col-span-2 space-y-4">
            <a
              href="#hero"
              className="text-lg sm:text-xl font-bold tracking-tight rounded-md focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Claude Fable Homepage"
            >
              <span className="text-text-primary">
                Claude <span className="text-accent">Fable</span>
              </span>
            </a>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xs">
              The frontier, made available. Advanced artificial intelligence models built for security and enterprise trust.
            </p>
          </div>

          {/* Links columns */}
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-accent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright area */}
        <div className="border-t border-border-custom/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Anthropic PBC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#"
              className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a
              href="#"
              className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              Terms of Use
            </a>
            <span>&middot;</span>
            <a
              href="#"
              className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              System Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
