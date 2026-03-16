"use client";

interface SupplementPacketProps {
  variant: "am" | "pm";
  className?: string;
}

export function SupplementPacket({ variant, className = "" }: SupplementPacketProps) {
  const isAM = variant === "am";
  const accentColor = isAM ? "var(--radiant-gold)" : "var(--electric-blue)";
  const accentRgba = isAM ? "rgba(245,166,35," : "rgba(0,102,255,";
  const label = isAM ? "AM PROTOCOL" : "PM PROTOCOL";
  const rotation = isAM ? "-3deg" : "3deg";

  const pillColors = isAM
    ? ["#0066FF", "#F5A623", "#00E676", "#0066FF", "#F5A623"]
    : ["#7C3AED", "#0066FF", "#00E676", "#F5A623", "#7C3AED"];

  return (
    <div
      className={className}
      style={{
        width: "180px",
        height: "260px",
        background: "linear-gradient(180deg, #0D1520, #141E2E)",
        border: `1px solid ${accentRgba}0.25)`,
        boxShadow: `inset 0 0 40px ${accentRgba}0.05)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        position: "relative",
        transform: `rotate(${rotation})`,
        animation: "packetFloat 4s ease-in-out infinite",
        animationDelay: isAM ? "0s" : "2s",
      }}
    >
      {/* Ōma wordmark */}
      <p
        style={{
          fontFamily: "var(--font-primary)",
          fontWeight: 800,
          fontSize: "24px",
          color: accentColor,
          letterSpacing: "-0.02em",
        }}
      >
        Ōma
      </p>

      {/* Divider */}
      <div style={{ width: "48px", height: "1px", background: `${accentRgba}0.5)` }} />

      {/* Protocol label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--ice-silver)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>

      {/* Abstract pills */}
      <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
        {pillColors.map((color, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: color,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Patient name */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.06em",
          marginTop: "8px",
        }}
      >
        SARAH CHEN
      </p>

      <style>{`
        @keyframes packetFloat {
          0%, 100% { transform: rotate(${rotation}) translateY(0); }
          50% { transform: rotate(${rotation}) translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
