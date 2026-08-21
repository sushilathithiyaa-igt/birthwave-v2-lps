import Image from "next/image";

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export function EditorialBand({
  eyebrow,
  title,
  description,
  principles,
  imageSrc,
  imageAlt,
  reverse = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  principles: Principle[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <section className={`py-[clamp(4.5rem,9vw,7.5rem)] ${className}`}>
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">{eyebrow}</p>
          <h2 className="max-w-[530px] font-display text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
            {title}
          </h2>
          <p className="mt-6 max-w-[480px] text-[1.02rem] leading-relaxed text-muted">{description}</p>
          <div className="mt-8 border-t border-ink/10">
            {principles.map((principle) => (
              <div key={principle.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/10 py-4.5">
                <span className="font-display text-lg font-semibold text-rose">{principle.number}</span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{principle.title}</h3>
                  <p className="mt-0.5 text-[0.8rem] text-muted">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`relative aspect-[5/6] w-full overflow-hidden rounded-[140px_28px_140px_28px] shadow-[var(--shadow-soft)] ${reverse ? "lg:order-1" : ""}`}>
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
