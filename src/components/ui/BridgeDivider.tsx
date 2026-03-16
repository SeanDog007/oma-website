export function BridgeDivider() {
  return (
    <div className="bridge-divider" role="separator" aria-hidden="true">
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "var(--meridian-blue)",
          flexShrink: 0,
        }}
      />
      <span className="bridge-divider-line" />
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "var(--botanical-green)",
          flexShrink: 0,
        }}
      />
    </div>
  );
}
