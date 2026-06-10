// FILE: components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Disable body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Benchmarks", href: "#benchmarks" },
    { name: "Safety", href: "#safety" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md shadow-sm border-b border-border-custom"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight rounded-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Claude Fable Homepage"
        >
          <span className="text-text-primary">
            Claude <span className="text-accent">Fable</span>
          </span>
          <span className="bg-accent-light text-accent text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border border-accent/20">
            Mythos
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-text-muted hover:text-accent transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#cta"
            className="h-10 px-5 inline-flex items-center justify-center font-bold text-sm text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 shadow-sm hover:shadow focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get API Access
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-text-primary hover:text-accent focus-visible:ring-2 focus-visible:ring-accent rounded-lg transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-16 sm:top-20 z-40 bg-bg-primary border-b border-border-custom shadow-xl lg:hidden transform transition-all duration-300 ease-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-6 sm:px-8 space-y-4" aria-label="Mobile navigation">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-text-primary hover:text-accent px-3 py-2 rounded-lg hover:bg-bg-secondary transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border-custom flex flex-col gap-3">
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="w-full h-11 inline-flex items-center justify-center font-bold text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              Get API Access
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
