// FILE: app/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import BenchmarkSection from "@/components/BenchmarkSection";
import SafetySection from "@/components/SafetySection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<Record<string, never>>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  // Conforming to Next.js 16 requirements by awaiting the routing promises
  await props.params;
  await props.searchParams;

  const title = "Claude Fable 5 — Mythos-Class AI Model by Anthropic";
  const description = "Claude Fable 5 is Anthropic's Mythos-class AI model, featuring 80.3% on SWE-Bench Pro, a 1M+ token context window, and advanced autonomous agent power.";
  
  const keywords = [
    "Claude Fable 5",
    "Anthropic Claude Fable",
    "Mythos-class AI model",
    "Claude Fable 5 API",
    "best AI model 2026",
    "Claude Fable benchmarks",
    "SWE-Bench Pro",
    "AI coding model",
    "long-context AI",
    "Claude Fable pricing"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: "https://claude-fable.anthropic.com",
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Claude Fable",
      url: "https://claude-fable.anthropic.com",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <BenchmarkSection />
        <SafetySection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
