import Image from "next/image";
import type { ReactNode } from "react";

/** Image + copy + bullet-points band — the reference's `.feature-band`.
 *  Distinct from EditorialBand (numbered principles): this one carries a
 *  short bullet list and is used where the design calls for it specifically
 *  (Normal Vaginal Delivery's "Clear, individual care" section). */
export function FeatureBand({
  eyebrow,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  reverse = false,
  cta,
  className = "",
  odId,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: ReactNode;
  className?: string;
  odId?: string;
}) {
  return (
    <section data-od-id={odId} className={`py-[clamp(4.5rem,9vw,7.5rem)] ${className}`}>
      <div
        className={`mx-auto grid w-full max-w-[1220px] items-center gap-14 px-6 sm:px-8 bp1050:gap-[70px] lg:px-12 ${
          reverse ? "bp1050:grid-cols-[1.1fr_0.9fr]" : "bp1050:grid-cols-[0.9fr_1.1fr]"
        }`}
      >
        <div
          className={`relative h-[330px] w-full overflow-hidden rounded-[100px_22px_100px_22px] shadow-[var(--shadow-soft)] bp620:h-[470px] bp620:rounded-[170px_30px_30px_30px] ${
            reverse ? "bp1050:order-2" : ""
          }`}
        >
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
        </div>
        <div className={reverse ? "bp1050:order-1" : ""}>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">{eyebrow}</p>
          <h2 className="max-w-[580px] font-display text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
            {title}
          </h2>
          <p className="mt-6 mb-7 max-w-[480px] text-base leading-relaxed text-muted">{description}</p>
          <ul className="mb-7 grid grid-cols-1 gap-2.5 bp620:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="border-t border-ink/10 py-3 text-[13px] text-ink">
                <span aria-hidden className="mr-2 text-rose">
                  ↗
                </span>
                {point}
              </li>
            ))}
          </ul>
          {cta}
        </div>
      </div>
    </section>
  );
}
