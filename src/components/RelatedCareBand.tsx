import Link from "next/link";
import { Button } from "@/components/Button";

export type RelatedCareItem = {
  title: string;
  description: string;
  href?: string;
};

export function RelatedCareBand({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  items,
  bgClassName = "bg-ink",
  odId,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  items: RelatedCareItem[];
  bgClassName?: string;
  odId?: string;
}) {
  return (
    <section data-od-id={odId} className={`${bgClassName} py-[clamp(4.5rem,9vw,7.5rem)] text-white`}>
      <div className="mx-auto grid w-full max-w-[1220px] gap-12 px-6 sm:px-8 bp1050:grid-cols-[0.75fr_1.25fr] bp1050:gap-[90px] lg:px-12">
        <div className="bp1050:sticky bp1050:top-[120px] bp1050:self-start">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-coral/90 uppercase">{eyebrow}</p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
            {title}
          </h2>
          <p className="my-6 max-w-[390px] text-[15px] leading-relaxed text-white/70">{description}</p>
          {ctaHref && ctaLabel && (
            <Button href={ctaHref} variant="light" className="mt-7">
              {ctaLabel}
            </Button>
          )}
        </div>
        <div className="border-t border-white/20">
          {items.map((item) => {
            const inner = (
              <>
                <div>
                  <h3 className="font-display text-[28px] leading-[1.15] font-medium">{item.title}</h3>
                  <p className="mt-[7px] max-w-[500px] text-sm text-white/70">{item.description}</p>
                </div>
                <span aria-hidden className="text-2xl text-coral/90">↗</span>
              </>
            );
            const className =
              "grid grid-cols-[1fr_auto] items-start gap-4 border-b border-white/20 py-7 transition-[padding] duration-250 hover:pl-2.5";
            return item.href ? (
              <Link key={item.title} href={item.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={item.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
