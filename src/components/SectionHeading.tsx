import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`max-w-[700px] ${className}`}>
      <p
        className={`mb-4 text-xs font-semibold tracking-[0.16em] uppercase ${
          tone === "dark" ? "text-coral/90" : "text-rose"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.03em] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[580px] text-[1.05rem] leading-relaxed ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
