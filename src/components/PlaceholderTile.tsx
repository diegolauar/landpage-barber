export function PlaceholderTile({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-border-strong flex items-end p-3 sm:p-3.5 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #141414 0 10px, #191919 10px 20px)",
      }}
    >
      <span className="font-mono text-[11px] text-subtle">{label}</span>
    </div>
  );
}
