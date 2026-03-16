"use client";

export function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-12 left-1/2"
      style={{
        color: "rgba(255,255,255,0.4)",
        fontSize: "20px",
        animation: "scrollBounce 2.5s ease-in-out infinite",
        transform: "translateX(-50%)",
      }}
      aria-hidden="true"
    >
      ∨
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.4; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
