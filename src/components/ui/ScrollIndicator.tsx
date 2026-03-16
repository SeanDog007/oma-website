"use client";

export function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-12 left-1/2"
      style={{
        color: "var(--ash-silver)",
        fontSize: "20px",
        animation: "scrollBounce 2s ease-in-out infinite",
        transform: "translateX(-50%)",
      }}
      aria-hidden="true"
    >
      ∨
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
}
