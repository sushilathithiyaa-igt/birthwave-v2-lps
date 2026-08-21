import Image from "next/image";
import { Button } from "@/components/Button";

export function InnerHero({
  eyebrow,
  title,
  lede,
  primaryHref = "#book",
  primaryLabel,
  whatsappHref,
  imageSrc,
  imageAlt,
  badge,
  tone = "light",
  note,
  darkBgClassName = "bg-ink",
}: {
  eyebrow: string;
  title: string;
  lede: string;
  primaryHref?: string;
  primaryLabel: string;
  whatsappHref: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  tone?: "light" | "dark";
  note?: string;
  darkBgClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    <section className={`pt-[9.25rem] pb-[clamp(3.5rem,8vw,5.75rem)] ${dark ? `${darkBgClassName} text-white` : ""}`}>
      <div className="mx-auto grid w-full max-w-[1220px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-12">
        <div>
          <p className={`mb-5 text-xs font-semibold tracking-[0.16em] uppercase ${dark ? "text-coral/90" : "text-rose"}`}>
            {eyebrow}
          </p>
          <h1 className="max-w-[620px] font-display text-[clamp(2.4rem,5vw,4.1rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
            {title}
          </h1>
          <p className={`mt-6 max-w-[510px] text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
            {lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={primaryHref} variant={dark ? "light" : "primary"}>
              {primaryLabel}
            </Button>
            <Button href={whatsappHref} variant={dark ? "outline-dark" : "outline"} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </Button>
          </div>
          {note && (
            <p className={`mt-5 max-w-[440px] text-sm italic ${dark ? "text-white/60" : "text-muted"}`}>
              {note}
            </p>
          )}
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
          <div className="absolute inset-0 overflow-hidden rounded-[190px_190px_26px_26px] shadow-[var(--shadow-soft)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 340px, 420px"
              priority
              className="object-cover"
            />
          </div>
          {badge && (
            <span className="absolute top-6 left-4 rounded-full bg-white px-3.5 py-2 text-[0.7rem] font-semibold text-deep shadow-[var(--shadow-card)]">
              {badge}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
