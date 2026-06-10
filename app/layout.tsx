// FILE: app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Global defaults if not overridden by page.tsx
  title: "Claude Fable 5 — Anthropic's Mythos-Class AI Model",
  description: "Experience Claude Fable 5, the first publicly available Mythos-class AI model with 1M+ token context window and state-of-the-art SWE-Bench scores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Claude Fable 5",
    "description": "Anthropic's Mythos-class AI model featuring 1M+ token context window, state-of-the-art SWE-Bench Pro software engineering performance, and advanced memory agent systems.",
    "applicationCategory": "Artificial Intelligence Application",
    "operatingSystem": "Web, Cloud, API",
    "author": {
      "@type": "Organization",
      "name": "Anthropic",
      "url": "https://www.anthropic.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "5.00",
      "highPrice": "50.00",
      "priceSpecification": [
        {
          "@type": "UnitPriceSpecification",
          "name": "Standard API Input",
          "price": "10.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1000000,
            "unitText": "tokens"
          }
        },
        {
          "@type": "UnitPriceSpecification",
          "name": "Standard API Output",
          "price": "50.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1000000,
            "unitText": "tokens"
          }
        },
        {
          "@type": "UnitPriceSpecification",
          "name": "Batch API Input",
          "price": "5.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1000000,
            "unitText": "tokens"
          }
        },
        {
          "@type": "UnitPriceSpecification",
          "name": "Batch API Output",
          "price": "25.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1000000,
            "unitText": "tokens"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
