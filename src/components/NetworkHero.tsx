"use client";

import { useEffect, useRef, useCallback } from "react";

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "genome" | "microbiome" | "insight";
  label: string;
  radius: number;
  opacity: number;
  targetOpacity: number;
  spawnDelay: number;
}

interface Edge {
  from: number;
  to: number;
  opacity: number;
}

const GENOME_LABELS = ["MTHFR", "VDR", "CYP1A2", "GSTM1", "FUT2", "CBS", "COMT", "PEMT", "NAT2", "BHMT"];
const MICROBIOME_LABELS = ["Akkermansia", "F. prausnitzii", "Roseburia", "Bifidobacterium", "E. rectale", "Lactobacillus", "Prevotella", "Bacteroides"];
const INSIGHT_LABELS = ["Methylation", "Detox Capacity", "Gut Barrier", "Immune", "Neurotransmitter"];

export function NetworkHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const startTimeRef = useRef(0);
  const nodesRef = useRef<NetworkNode[]>([]);
  const edgesRef = useRef<Edge[]>([]);

  const initNetwork = useCallback((width: number, height: number) => {
    const nodes: NetworkNode[] = [];
    const edges: Edge[] = [];

    // Genome nodes (left cluster)
    GENOME_LABELS.forEach((label, i) => {
      nodes.push({
        x: width * 0.15 + Math.random() * width * 0.25,
        y: height * 0.15 + Math.random() * height * 0.7,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        type: "genome",
        label,
        radius: 5,
        opacity: 0,
        targetOpacity: 1,
        spawnDelay: i * 50,
      });
    });

    // Microbiome nodes (right cluster)
    MICROBIOME_LABELS.forEach((label, i) => {
      nodes.push({
        x: width * 0.6 + Math.random() * width * 0.25,
        y: height * 0.15 + Math.random() * height * 0.7,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        type: "microbiome",
        label,
        radius: 5,
        opacity: 0,
        targetOpacity: 1,
        spawnDelay: 300 + i * 50,
      });
    });

    // Insight nodes (center, larger)
    INSIGHT_LABELS.forEach((label, i) => {
      nodes.push({
        x: width * 0.35 + Math.random() * width * 0.3,
        y: height * 0.2 + (i / INSIGHT_LABELS.length) * height * 0.6,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        type: "insight",
        label,
        radius: 8,
        opacity: 0,
        targetOpacity: 1,
        spawnDelay: 800 + i * 100,
      });
    });

    // Create edges: genome → insight, microbiome → insight
    const genomeCount = GENOME_LABELS.length;
    const microbiomeCount = MICROBIOME_LABELS.length;
    const insightStart = genomeCount + microbiomeCount;

    for (let i = 0; i < genomeCount; i++) {
      const insightIdx = insightStart + Math.floor(Math.random() * INSIGHT_LABELS.length);
      edges.push({ from: i, to: insightIdx, opacity: 0 });
      if (Math.random() > 0.5) {
        const secondInsight = insightStart + Math.floor(Math.random() * INSIGHT_LABELS.length);
        if (secondInsight !== insightIdx) edges.push({ from: i, to: secondInsight, opacity: 0 });
      }
    }

    for (let i = 0; i < microbiomeCount; i++) {
      const insightIdx = insightStart + Math.floor(Math.random() * INSIGHT_LABELS.length);
      edges.push({ from: genomeCount + i, to: insightIdx, opacity: 0 });
      if (Math.random() > 0.5) {
        const secondInsight = insightStart + Math.floor(Math.random() * INSIGHT_LABELS.length);
        if (secondInsight !== insightIdx) edges.push({ from: genomeCount + i, to: secondInsight, opacity: 0 });
      }
    }

    // Some genome ↔ microbiome cross-links
    for (let i = 0; i < 4; i++) {
      edges.push({
        from: Math.floor(Math.random() * genomeCount),
        to: genomeCount + Math.floor(Math.random() * microbiomeCount),
        opacity: 0,
      });
    }

    nodesRef.current = nodes;
    edgesRef.current = edges;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    initNetwork(width, height);
    startTimeRef.current = performance.now();

    if (prefersReducedMotion) {
      // Show static state
      nodesRef.current.forEach(n => { n.opacity = 1; });
      edgesRef.current.forEach(e => { e.opacity = 0.06; });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    let lastTime = 0;
    const frameInterval = 1000 / 30;
    let pulsePhase = 0;

    const getColor = (type: string, alpha: number) => {
      switch (type) {
        case "genome": return `rgba(0, 102, 255, ${alpha})`;
        case "microbiome": return `rgba(0, 230, 118, ${alpha})`;
        case "insight": return `rgba(245, 166, 35, ${alpha})`;
        default: return `rgba(255, 255, 255, ${alpha})`;
      }
    };

    const draw = (time: number) => {
      if (time - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      const elapsed = time - startTimeRef.current;
      pulsePhase = (elapsed % 7000) / 7000;
      const pulseWave = Math.sin(pulsePhase * Math.PI * 2) * 0.5 + 0.5;

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const edges = edgesRef.current;
      const mouse = mouseRef.current;

      // Update node opacity (entrance animation)
      if (!prefersReducedMotion) {
        for (const node of nodes) {
          if (elapsed > node.spawnDelay && node.opacity < node.targetOpacity) {
            node.opacity = Math.min(node.opacity + 0.02, node.targetOpacity);
          }
          // Drift
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 20 || node.x > width - 20) node.vx *= -1;
          if (node.y < 20 || node.y > height - 20) node.vy *= -1;
          node.x = Math.max(20, Math.min(width - 20, node.x));
          node.y = Math.max(20, Math.min(height - 20, node.y));
        }
      }

      // Check hover
      let hoveredNode = -1;
      for (let i = 0; i < nodes.length; i++) {
        const dx = mouse.x - nodes[i].x;
        const dy = mouse.y - nodes[i].y;
        if (Math.sqrt(dx * dx + dy * dy) < 30) {
          hoveredNode = i;
          break;
        }
      }

      // Draw edges
      for (const edge of edges) {
        const fromNode = nodes[edge.from];
        const toNode = nodes[edge.to];
        if (!fromNode || !toNode) continue;

        const minOpacity = Math.min(fromNode.opacity, toNode.opacity);
        if (minOpacity <= 0) continue;

        if (!prefersReducedMotion && edge.opacity < 0.06) {
          edge.opacity = Math.min(edge.opacity + 0.001, 0.06);
        }

        let alpha = edge.opacity * minOpacity;
        // Pulse
        alpha += pulseWave * 0.04 * minOpacity;

        // Hover boost
        if (hoveredNode === edge.from || hoveredNode === edge.to) {
          alpha = Math.max(alpha, 0.25 * minOpacity);
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        // Curve the edges
        const mx = (fromNode.x + toNode.x) / 2 + (fromNode.y - toNode.y) * 0.1;
        const my = (fromNode.y + toNode.y) / 2 + (toNode.x - fromNode.x) * 0.1;
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.quadraticCurveTo(mx, my, toNode.x, toNode.y);
        ctx.stroke();
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.opacity <= 0) continue;

        const isHovered = hoveredNode === i;
        const isConnectedToHover = hoveredNode >= 0 && edges.some(
          e => (e.from === hoveredNode && e.to === i) || (e.to === hoveredNode && e.from === i)
        );

        let r = node.radius;
        let glowAlpha = 0;

        if (node.type === "insight") {
          r = 8 + pulseWave * 2;
          glowAlpha = 0.15 + pulseWave * 0.1;
        }

        if (isHovered || isConnectedToHover) {
          r += 2;
          glowAlpha = 0.3;
        }

        // Glow
        if (glowAlpha > 0) {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
          gradient.addColorStop(0, getColor(node.type, glowAlpha * node.opacity));
          gradient.addColorStop(1, getColor(node.type, 0));
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node circle
        ctx.fillStyle = getColor(node.type, 0.8 * node.opacity);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Label
        if (node.opacity > 0.5 && (isHovered || isConnectedToHover || node.type === "insight")) {
          ctx.font = `500 ${node.type === "insight" ? 11 : 9}px 'Inter', sans-serif`;
          ctx.fillStyle = getColor(node.type, 0.6 * node.opacity);
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - r - 6);
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", resize);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [initNetwork]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: "crosshair" }}
      aria-hidden="true"
    />
  );
}
