export function SilverSphere({
  className,
  size,
  opacity = 0.8,
}: {
  className?: string;
  size?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`sphere-silver pointer-events-none absolute rounded-full ${className ?? ""}`}
      style={{
        width: size ?? "42vw",
        height: size ?? "42vw",
        maxWidth: "640px",
        maxHeight: "640px",
        opacity,
      }}
    />
  );
}