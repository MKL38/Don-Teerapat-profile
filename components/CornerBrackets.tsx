// Blueprint/HUD corner-bracket frame used around photos and CTAs (per Style guide).
export default function CornerBrackets({
  className = "",
  size = 22,
  inset = 14,
  color = "rgba(255,255,255,0.55)",
}: {
  className?: string;
  size?: number;
  inset?: number;
  color?: string;
}) {
  const common = {
    position: "absolute" as const,
    width: size,
    height: size,
    borderColor: color,
  };
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span
        style={{ ...common, top: inset, left: inset, borderTop: "1px solid", borderLeft: "1px solid" }}
      />
      <span
        style={{ ...common, top: inset, right: inset, borderTop: "1px solid", borderRight: "1px solid" }}
      />
      <span
        style={{ ...common, bottom: inset, left: inset, borderBottom: "1px solid", borderLeft: "1px solid" }}
      />
      <span
        style={{ ...common, bottom: inset, right: inset, borderBottom: "1px solid", borderRight: "1px solid" }}
      />
    </div>
  );
}
