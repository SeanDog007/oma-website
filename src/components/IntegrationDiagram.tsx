"use client";

import { useEffect, useRef, useState } from "react";

export function IntegrationDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const genomicGenes = ["MTHFR", "FUT2", "VDR", "APOE", "COMT", "HLA"];
  const microbiomeSpecies = [
    "Akkermansia",
    "Bifidobacterium",
    "F. prausnitzii",
    "Prevotella",
    "Roseburia",
    "Lactobacillus",
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop SVG */}
      <svg
        ref={ref}
        viewBox="0 0 960 480"
        className="w-full h-auto hidden md:block"
        role="img"
        aria-label="Integration diagram showing how genomic data and microbiome data converge through the Ōma platform into integrated clinical insight"
      >
        <title>Ōma Integration Diagram</title>

        {/* Genomic Panel */}
        <rect
          x="40" y="40" width="260" height="340" rx="2"
          fill="none" stroke="#1B4965" strokeWidth="1.5"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s ease 0.2s" }}
        />
        <text x="170" y="75" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600" fontSize="13"
          letterSpacing="0.06em" fill="#1B4965"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.6s ease 0.4s" }}
        >
          GENOMIC
        </text>
        {genomicGenes.map((gene, i) => (
          <g key={gene}
            opacity={animate ? 1 : 0}
            style={{ transition: `opacity 0.5s ease ${0.5 + i * 0.1}s` }}
          >
            <circle cx="90" cy={110 + i * 42} r="6" fill="#1B4965" opacity="0.6" />
            <text x="108" y={114 + i * 42}
              fontFamily="var(--font-mono)" fontSize="14" fill="rgba(245,241,235,0.8)"
              fontStyle="italic"
            >
              {gene}
            </text>
          </g>
        ))}

        {/* Microbiome Panel */}
        <rect
          x="660" y="40" width="260" height="340" rx="2"
          fill="none" stroke="#4A7C59" strokeWidth="1.5"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s ease 0.2s" }}
        />
        <text x="790" y="75" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600" fontSize="13"
          letterSpacing="0.06em" fill="#4A7C59"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.6s ease 0.4s" }}
        >
          MICROBIOME
        </text>
        {microbiomeSpecies.map((species, i) => (
          <g key={species}
            opacity={animate ? 1 : 0}
            style={{ transition: `opacity 0.5s ease ${0.5 + i * 0.1}s` }}
          >
            <circle cx="700" cy={110 + i * 42} r="6" fill="#4A7C59" opacity="0.6" />
            <text x="718" y={114 + i * 42}
              fontFamily="var(--font-mono)" fontSize="14" fill="rgba(245,241,235,0.8)"
              fontStyle="italic"
            >
              {species}
            </text>
          </g>
        ))}

        {/* Center Bridge - Ōma */}
        <rect
          x="390" y="160" width="180" height="80" rx="2"
          fill="none" stroke="#6B5B73" strokeWidth="1.5"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s ease 0.6s" }}
        />
        <text x="480" y="195" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="300" fontSize="22"
          fill="#F5F1EB" letterSpacing="0.04em"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.5s ease 0.8s" }}
        >
          Ōma
        </text>
        <text x="480" y="220" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600" fontSize="11"
          letterSpacing="0.08em" fill="#6B5B73"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.5s ease 0.9s" }}
        >
          INTEGRATION
        </text>

        {/* Connection lines - Left to center */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`left-${i}`}
            x1="300" y1={110 + i * 42}
            x2="390" y2="200"
            stroke="#1B4965" strokeWidth="1" opacity={animate ? 0.4 : 0}
            strokeDasharray="4 4"
            style={{ transition: `opacity 1s ease ${0.8 + i * 0.1}s` }}
          />
        ))}

        {/* Connection lines - Right to center */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`right-${i}`}
            x1="660" y1={110 + i * 42}
            x2="570" y2="200"
            stroke="#4A7C59" strokeWidth="1" opacity={animate ? 0.4 : 0}
            strokeDasharray="4 4"
            style={{ transition: `opacity 1s ease ${0.8 + i * 0.1}s` }}
          />
        ))}

        {/* Output - below center */}
        <line
          x1="480" y1="240" x2="480" y2="320"
          stroke="#6B5B73" strokeWidth="1" opacity={animate ? 0.5 : 0}
          style={{ transition: "opacity 0.8s ease 1.2s" }}
        />
        <rect
          x="350" y="320" width="260" height="80" rx="2"
          fill="none" stroke="#6B5B73" strokeWidth="1"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.8s ease 1.3s" }}
        />
        <text x="480" y="352" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600" fontSize="12"
          letterSpacing="0.06em" fill="#6B5B73"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.5s ease 1.4s" }}
        >
          INTEGRATED CLINICAL
        </text>
        <text x="480" y="374" textAnchor="middle"
          fontFamily="var(--font-sans)" fontWeight="600" fontSize="12"
          letterSpacing="0.06em" fill="#6B5B73"
          opacity={animate ? 1 : 0}
          style={{ transition: "opacity 0.5s ease 1.5s" }}
        >
          INSIGHT
        </text>
      </svg>

      {/* Mobile: simplified vertical layout */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {/* Genomic */}
        <div className="w-full border border-[var(--meridian-blue)] p-6" style={{ borderRadius: "2px" }}>
          <h4 className="section-label" style={{ color: "var(--meridian-blue)", marginBottom: "16px" }}>GENOMIC</h4>
          <div className="flex flex-wrap gap-3">
            {genomicGenes.map((gene) => (
              <span key={gene} className="font-data" style={{ color: "rgba(245,241,235,0.8)", fontStyle: "italic" }}>
                ◎ {gene}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ color: "var(--ash-silver)", fontSize: "24px" }}>↓</div>

        {/* Bridge */}
        <div
          className="border border-[var(--convergence-violet)] px-8 py-4 text-center"
          style={{ borderRadius: "2px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "20px",
              color: "var(--ivory-white)",
              letterSpacing: "0.04em",
            }}
          >
            Ōma
          </span>
        </div>

        {/* Arrow down */}
        <div style={{ color: "var(--ash-silver)", fontSize: "24px" }}>↑</div>

        {/* Microbiome */}
        <div className="w-full border border-[var(--botanical-green)] p-6" style={{ borderRadius: "2px" }}>
          <h4 className="section-label" style={{ color: "var(--botanical-green)", marginBottom: "16px" }}>MICROBIOME</h4>
          <div className="flex flex-wrap gap-3">
            {microbiomeSpecies.map((species) => (
              <span key={species} className="font-data" style={{ color: "rgba(245,241,235,0.8)", fontStyle: "italic" }}>
                ◎ {species}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ color: "var(--ash-silver)", fontSize: "24px" }}>↓</div>

        {/* Output */}
        <div className="w-full border border-[var(--convergence-violet)] p-6 text-center" style={{ borderRadius: "2px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.06em",
              color: "var(--convergence-violet)",
            }}
          >
            INTEGRATED CLINICAL INSIGHT
          </span>
        </div>
      </div>
    </div>
  );
}
