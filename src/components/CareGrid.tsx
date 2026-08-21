import Link from "next/link";

export type CareGridItem = {
  number: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  feature?: boolean;
};

export function CareGrid({ items }: { items: CareGridItem[] }) {
  return (
    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
      {items.map((item) => {
        const content = (
          <>
            <span className={`font-display text-xs font-semibold ${item.feature ? "text-white/85" : "text-rose"}`}>
              {item.number}
            </span>
            <h3 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className={`mt-2.5 flex-1 text-sm leading-relaxed ${item.feature ? "text-white/85" : "text-muted"}`}>
              {item.description}
            </p>
            {item.href && (
              <span className={`mt-5 text-xs font-semibold ${item.feature ? "text-white" : "text-deep"}`}>
                {item.linkLabel ?? "Learn more"} →
              </span>
            )}
          </>
        );

        const className = `flex flex-col rounded-[26px_26px_10px_26px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${
          item.feature
            ? "min-h-[29rem] rounded-[70px_28px_28px_28px] bg-rose text-white md:row-span-2"
            : "min-h-[14rem] border border-ink/10 bg-white/60"
        }`;

        return item.href ? (
          <Link key={item.title} href={item.href} className={className}>
            {content}
          </Link>
        ) : (
          <div key={item.title} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
