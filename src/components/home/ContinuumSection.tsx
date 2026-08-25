const steps = [
  { num: "01", title: "Planning", copy: "Preconception and fertility support." },
  { num: "02", title: "Pregnancy", copy: "Antenatal care and preparation." },
  { num: "03", title: "Birth", copy: "Informed, supportive birth care." },
  { num: "04", title: "Baby & Child", copy: "Newborn, pediatric and vaccine care." },
  { num: "05", title: "Recovery", copy: "Postpartum support for mothers." },
];

/** Dot offsets exactly as declared in the reference's `.journey-line:before`
 *  box-shadow (0 / 25% / 50% / 75% / 100%). The reference expressed them as
 *  percentage box-shadow offsets, which browsers reject, so only one dot ever
 *  painted there; rendering them as real nodes realises the declared design. */
const DOT_OFFSETS = ["0%", "25%", "50%", "75%", "100%"];

export function ContinuumSection() {
  return (
    <section
      id="journey"
      data-od-id="pregnancy-journey"
      className="bg-od-ivory py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container">
        <div className="mb-[60px] block bp1000:flex bp1000:items-end bp1000:justify-between bp1000:gap-10">
          <div className="max-w-[700px]">
            <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
              A connected continuum
            </p>
            <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
              One team, every chapter.
            </h2>
          </div>
          <p className="mt-[18px] max-w-[310px] text-od-muted bp1000:mt-0">
            From planning to growing up, care that moves with your family.
          </p>
        </div>

        <div
          aria-hidden
          className="relative mt-[30px] hidden h-px bg-od-line bp620:block bp1000:mt-0"
        >
          {DOT_OFFSETS.map((left) => (
            <span
              key={left}
              className="absolute -top-1 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-od-rose first:translate-x-0 last:-translate-x-full"
              style={{ left }}
            />
          ))}
        </div>

        <div className="grid gap-[26px] border-l border-od-line pl-[25px] bp620:grid-cols-5 bp620:gap-5 bp620:border-l-0 bp620:pt-8 bp620:pl-0">
          {steps.map((step) => (
            <div key={step.num}>
              <span className="font-display text-[18px] text-od-rose">{step.num}</span>
              <h3 className="mt-2.5 mb-[5px] font-display text-[21px] text-od-ink">{step.title}</h3>
              <p className="text-sm text-od-muted bp620:max-w-[160px]">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
