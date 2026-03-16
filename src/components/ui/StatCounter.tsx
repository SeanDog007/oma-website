"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  color?: string;
  label: string;
  description: string;
}

export function StatCounter({ target, suffix = "", color = "var(--void-black)", label, description }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          if (prefersReducedMotion) {
            setCount(target);
            return;
          }
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <div ref={ref} className="text-center">
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontWeight: 800,
          fontSize: "clamp(72px, 8vw, 120px)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color,
          marginBottom: "8px",
        }}
      >
        {count.toLocaleString()}{suffix}
      </p>
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "0.02em",
          color: "var(--text-muted-light)",
          marginBottom: "16px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontWeight: 400,
          fontSize: "15px",
          color: "#9CA3AF",
          lineHeight: 1.5,
          maxWidth: "280px",
          margin: "0 auto",
        }}
      >
        {description}
      </p>
    </div>
  );
}
