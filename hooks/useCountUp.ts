// FILE: hooks/useCountUp.ts
"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  endValue: number,
  duration: number = 1500,
  shouldStart: boolean = false,
  decimals: number = 0
): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    // SSR safety check
    if (typeof window === "undefined") {
      setCount(endValue);
      return;
    }

    // Check prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(endValue);
      return;
    }

    let startTimestamp: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      // easeOutCubic easing curve: f(x) = 1 - (1 - x)^3
      const easing = 1 - Math.pow(1 - percentage, 3);
      const currentValue = startValue + easing * (endValue - startValue);

      setCount(currentValue);

      if (percentage < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [endValue, duration, shouldStart]);

  return count.toFixed(decimals);
}
