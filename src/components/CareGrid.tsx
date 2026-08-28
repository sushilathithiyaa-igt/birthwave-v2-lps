export type CareGridItem = {
  number: string;
  title: string;
  description: string;
  /** Defaults to "#book" — an in-page anchor to the conversion form, matching
   *  the reference's plain (non-sheet) service-link CTAs. */
  href?: string;
  linkLabel?: string;
  feature?: boolean;
};

/** The reference's `.care-grid`: a 1.25fr/.75fr/.75fr row with the feature
 *  card spanning two rows on the left, collapsing to a 2-up grid (feature
 *  full-width) below 620px — a single breakpoint, not a tablet-then-desktop
 *  staged one. Cards themselves aren't links — only the inner CTA is,
 *  matching the reference's `<article>` + inner `<a class="service-link">`. */
export function CareGrid({ items }: { items: CareGridItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 bp620:grid-cols-[1.25fr_0.75fr_0.75fr] bp620:gap-[14px]">
      {items.map((item) => (
        <article
          key={item.title}
          className={`flex flex-col rounded-[22px_22px_8px_22px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] bp620:col-span-1 bp620:p-7 ${
            item.feature
              ? "col-span-2 min-h-[260px] rounded-[60px_22px_22px_22px] bg-rose text-white bp620:min-h-[464px] bp620:rounded-[70px_28px_28px_28px] bp620:[grid-row:span_2]"
              : "col-span-1 min-h-[205px] border border-ink/10 bg-white/62 bp620:min-h-[225px]"
          }`}
        >
          <span className={`font-display text-[13px] font-semibold ${item.feature ? "text-white/85" : "text-rose"}`}>
            {item.number}
          </span>
          <h3 className="mt-[18px] mb-[9px] font-display text-[21px] leading-[1.15] font-semibold tracking-[-0.035em] bp620:text-[25px]">
            {item.title}
          </h3>
          <p className={`flex-1 text-[13px] leading-[1.55] ${item.feature ? "text-white/85" : "text-muted"}`}>
            {item.description}
          </p>
          <a
            href={item.href ?? "#book"}
            className={`group mt-auto pt-[22px] text-xs font-semibold ${item.feature ? "text-white" : "text-deep"}`}
          >
            {item.linkLabel ?? "Learn more"}{" "}
            <span aria-hidden className="inline-block transition-transform duration-250 group-hover:translate-x-1">
              →
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}
