import Image from "next/image";
import { Button } from "@/components/Button";
import { BookTrigger } from "@/components/BookTrigger";
import type { BookingConfig } from "@/components/BookingSheet";

const HERO_TRUST = ["Doctor-led care", "Pregnancy → birth → recovery", "Nungambakkam, Chennai"];

export function InnerHero({
  eyebrow,
  title,
  lede,
  bookingConfig,
  primaryLabel,
  whatsappHref,
  imageSrc,
  imageAlt,
  imageSideSrc,
  imageSideAlt,
  badge,
  tag,
  tone = "light",
  darkBgClassName = "bg-ink",
}: {
  eyebrow: string;
  title: string;
  lede: string;
  bookingConfig: BookingConfig;
  primaryLabel: string;
  whatsappHref: string;
  imageSrc: string;
  imageAlt: string;
  imageSideSrc: string;
  imageSideAlt: string;
  badge?: string;
  tag?: { heading: string; body: string };
  tone?: "light" | "dark";
  darkBgClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    <section
      data-od-id="hero"
      className={`relative overflow-hidden pt-[112px] pb-[58px] bp620:pt-[148px] bp620:pb-[86px] bp1000:min-h-[760px] bp1000:pt-[148px] ${
        dark ? `${darkBgClassName} text-white` : ""
      }`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-[100px] -right-[29vw] h-[58vw] w-[58vw] rounded-full border border-rose/20"
      />
      <div className="relative mx-auto grid w-full max-w-[1220px] gap-12 px-6 sm:px-8 bp1050:grid-cols-[0.88fr_1.12fr] bp1050:items-center bp1050:gap-[60px] lg:px-12">
        <div className="max-w-[680px] bp1000:max-w-none">
          <p className={`mb-5 text-xs font-semibold tracking-[0.16em] uppercase ${dark ? "text-coral/90" : "text-rose"}`}>
            {eyebrow}
          </p>
          <h1 className="max-w-[620px] font-display text-[clamp(2.75rem,12vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.03em] bp620:text-[clamp(3.125rem,5.5vw,4.875rem)]">
            {title}
          </h1>
          <p className={`mt-[22px] mb-[26px] max-w-[510px] text-[15px] leading-relaxed bp620:mt-[27px] bp620:mb-8 bp620:text-lg ${dark ? "text-white/70" : "text-muted"}`}>
            {lede}
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <BookTrigger config={bookingConfig} variant={dark ? "light" : "primary"} data-event="hero_book">
              {primaryLabel}
            </BookTrigger>
            <Button
              href={whatsappHref}
              variant={dark ? "outline-dark" : "outline"}
              target="_blank"
              rel="noreferrer"
              withArrow={false}
              data-event="whatsapp"
            >
              Chat on WhatsApp
            </Button>
          </div>
          <div
            className={`mt-[29px] flex flex-wrap gap-[9px] text-[11px] ${dark ? "text-white/70" : "text-muted"}`}
          >
            {HERO_TRUST.map((item, index) => (
              <span
                key={item}
                className={
                  index < HERO_TRUST.length - 1
                    ? `border-r pr-[9px] ${dark ? "border-white/22" : "border-ink/12"}`
                    : ""
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-2 h-[370px] bp620:h-[550px] bp1000:mt-0">
          <div className="absolute top-0 right-0 h-[345px] w-[78%] overflow-hidden rounded-[130px_130px_20px_20px] shadow-[var(--shadow-soft)] bp620:h-[510px] bp620:rounded-[190px_190px_26px_26px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 620px) 78vw, (max-width: 1000px) 60vw, 560px"
              priority
              className="object-cover"
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 h-[175px] w-[41%] overflow-hidden rounded-[20px_70px_20px_70px] border-[6px] shadow-[var(--shadow-soft)] bp620:h-[250px] bp620:rounded-[28px_120px_28px_120px] bp620:border-[9px] ${
              dark ? "border-ink" : "border-ivory"
            }`}
          >
            <Image
              src={imageSideSrc}
              alt={imageSideAlt}
              fill
              sizes="(max-width: 620px) 41vw, 240px"
              className="object-cover"
            />
          </div>
          {badge && (
            <span className="absolute top-[18px] left-[2%] rounded-full bg-sky-mist px-3 py-2.5 text-[9px] font-semibold text-deep bp620:top-[30px] bp620:left-[4%] bp620:text-[11px]">
              {badge}
            </span>
          )}
          {tag && (
            <div className="absolute right-0 bottom-[15px] max-w-[145px] rounded-2xl bg-white p-[13px] text-[10px] leading-[1.35] text-muted shadow-[var(--shadow-soft)] bp620:right-[1%] bp620:bottom-[42px] bp620:max-w-[185px] bp620:p-[18px] bp620:text-xs">
              <strong className="mb-1 block font-display text-base leading-[1.1] font-semibold text-ink bp620:text-xl">
                {tag.heading}
              </strong>
              {tag.body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
