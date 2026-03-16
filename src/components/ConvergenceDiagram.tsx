"use client";

import { useEffect, useRef, useState } from "react";

export function ConvergenceDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  const genomeNodes = [
    { cx: 80, cy: 100, label: "MTHFR" },
    { cx: 60, cy: 200, label: "VDR" },
    { cx: 90, cy: 300, label: "CYP1A2" },
    { cx: 50, cy: 400, label: "GSTM1" },
  ];

  const microbiomeNodes = [
    { cx: 720, cy: 120, label: "Akkermansia" },
    { cx: 740, cy: 220, label: "Bifidobacterium" },
    { cx: 710, cy: 320, label: "F. prausnitzii" },
    { cx: 730, cy: 400, label: "Roseburia" },
  ];

  const insightNodes = [
    { cx: 400, cy: 150, label: "Methylation" },
    { cx: 400, cy: 260, label: "Detox Capacity" },
    { cx: 400, cy: 370, label: "Gut Barrier" },
  ];

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 500"
      className="w-full max-w-[800px] mx-auto"
      style={{ height: "auto" }}
      aria-label="Convergence diagram showing genome and microbiome nodes connecting through integrated insight nodes"
    >
      {/* Edges: genome → insight */}
      {genomeNodes.map((g, gi) =>
        insightNodes.map((ins, ii) => (
          <line
            key={`g-${gi}-i-${ii}`}
            x1={g.cx} y1={g.cy} x2={ins.cx} y2={ins.cy}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 1.5s ease ${0.3 + gi * 0.1 + ii * 0.05}s`,
            }}
          />
        ))
      )}

      {/* Edges: microbiome → insight */}
      {microbiomeNodes.map((m, mi) =>
        insightNodes.map((ins, ii) => (
          <line
            key={`m-${mi}-i-${ii}`}
            x1={m.cx} y1={m.cy} x2={ins.cx} y2={ins.cy}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 1.5s ease ${0.5 + mi * 0.1 + ii * 0.05}s`,
            }}
          />
        ))
      )}

      {/* Genome nodes */}
      {genomeNodes.map((node, i) => (
        <g key={`genome-${i}`} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.8s ease ${i * 0.15}s`, transform: visible ? "translateX(0)" : "translateX(-20px)" }}>
          <circle cx={node.cx} cy={node.cy} r="6" fill="#0066FF" opacity="0.8" />
          <text x={node.cx} y={node.cy - 14} textAnchor="middle" fill="#0066FF" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">{node.label}</text>
        </g>
      ))}

      {/* Microbiome nodes */}
      {microbiomeNodes.map((node, i) => (
        <g key={`micro-${i}`} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.8s ease ${0.3 + i * 0.15}s` }}>
          <circle cx={node.cx} cy={node.cy} r="6" fill="#00E676" opacity="0.8" />
          <text x={node.cx} y={node.cy - 14} textAnchor="middle" fill="#00E676" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">{node.label}</text>
        </g>
      ))}

      {/* Insight nodes (larger, gold, glowing) */}
      {insightNodes.map((node, i) => (
        <g key={`insight-${i}`} style={{ opacity: visible ? 1 : 0, transition: `opacity 1s ease ${0.8 + i * 0.2}s` }}>
          <circle cx={node.cx} cy={node.cy} r="24" fill="rgba(245,166,35,0.1)" />
          <circle cx={node.cx} cy={node.cy} r="10" fill="#F5A623" opacity="0.9" />
          <text x={node.cx} y={node.cy - 18} textAnchor="middle" fill="#F5A623" fontSize="12" fontFamily="var(--font-primary)" fontWeight="600" opacity="0.9">{node.label}</text>
        </g>
      ))}

      {/* Labels */}
      <text x="70" y="50" fill="#0066FF" fontSize="12" fontFamily="var(--font-primary)" fontWeight="600" letterSpacing="0.08em" opacity={visible ? 0.6 : 0} style={{ transition: "opacity 0.8s ease 0.2s" }}>GENOME</text>
      <text x="700" y="70" fill="#00E676" fontSize="12" fontFamily="var(--font-primary)" fontWeight="600" letterSpacing="0.08em" textAnchor="end" opacity={visible ? 0.6 : 0} style={{ transition: "opacity 0.8s ease 0.5s" }}>MICROBIOME</text>
      <text x="400" y="470" fill="#F5A623" fontSize="12" fontFamily="var(--font-primary)" fontWeight="600" letterSpacing="0.08em" textAnchor="middle" opacity={visible ? 0.6 : 0} style={{ transition: "opacity 0.8s ease 1s" }}>INTEGRATED INSIGHT</text>
    </svg>
  );
}
