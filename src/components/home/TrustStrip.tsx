const items = [
  { num: "01", title: "Women's Health", copy: "Care through changing stages" },
  { num: "02", title: "Pregnancy & Birth", copy: "Preparation, birth and recovery" },
  { num: "03", title: "Newborn & Child", copy: "Pediatric and vaccination care" },
];

export function TrustStrip() {
  return (
    <section
      data-od-id="trust-strip"
      className="od-rise relative z-[3] mt-0 [animation-delay:0.16s] bp620:-mt-[25px]"
    >
      <div className="od-container grid overflow-hidden rounded-3xl border border-od-line bg-od-paper shadow-[var(--shadow-od-strip)] bp620:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.num}
            className="flex items-center gap-4 border-b border-od-line px-5 py-[17px] leading-[1.65] last:border-b-0 bp620:border-r bp620:border-b-0 bp620:px-7 bp620:py-[22px] bp620:last:border-r-0"
          >
            <span className="font-display text-2xl font-semibold text-od-rose">{item.num}</span>
            <div>
              <strong className="block text-[15px] font-semibold text-od-ink">{item.title}</strong>
              <span className="block text-xs text-od-muted bp620:text-[13px]">{item.copy}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
