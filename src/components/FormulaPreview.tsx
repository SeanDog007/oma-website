"use client";

import { useEffect, useRef, useState } from "react";

const formulas = [
  { finding: "MTHFR C677T", supplement: "Methylfolate 1000mcg", color: "#0066FF" },
  { finding: "VDR Taq", supplement: "Vitamin D3 5000 IU", color: "#0066FF" },
  { finding: "Low Akkermansia", supplement: "Tributyrin 500mg", color: "#00E676" },
  { finding: "CYP1A2 Slow Metabolizer", supplement: "NAC 600mg", color: "#0066FF" },
  { finding: "Phase II Conjugation", supplement: "Glutathione 250mg", color: "#7C3AED" },
];

export function FormulaPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ maxWidth: "640px", margin: "0 auto" }}>
      <p
        className="section-label"
        style={{ marginBottom: "32px", textAlign: "center" }}
      >
        From Insight to Capsule
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {formulas.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: item.color,
                whiteSpace: "nowrap",
                minWidth: "180px",
              }}
            >
              {item.finding}
            </span>
            <span
              style={{
                flex: 1,
                borderBottom: "1px dotted rgba(255,255,255,0.15)",
                minWidth: "20px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--pure-white)",
                whiteSpace: "nowrap",
              }}
            >
              {item.supplement}
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${item.color}, var(--radiant-gold))`,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontSize: "14px",
          color: "var(--text-muted-dark)",
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        Every capsule traced back to YOUR data.
      </p>
    </div>
  );
}
