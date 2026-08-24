const principles = [
  {
    num: "01",
    title: "Patient-first, always",
    copy: "Space to ask, understand and make informed decisions.",
  },
  {
    num: "02",
    title: "Continuity of care",
    copy: "Support that connects pregnancy, birth, recovery and childhood.",
  },
  {
    num: "03",
    title: "Whole-person support",
    copy: "Guidance across nutrition, movement, wellbeing and counselling.",
  },
  {
    num: "04",
    title: "Warm, welcoming care",
    copy: "A calm environment designed around real family needs.",
  },
];

export function DifferenceSection() {
  return (
    <section
      data-od-id="difference"
      className="bg-od-sage py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container">
        <div className="max-w-[700px]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            The Birthwave difference
          </p>
          <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
            More than appointments. Care for the whole experience.
          </h2>
        </div>

        {/* Two-column editorial rhythm with thin top rules — not icon cards. */}
        <div className="mt-[54px] grid gap-[18px] bp620:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-[45px_1fr] gap-4 border-t border-[rgba(40,36,33,0.2)] py-[22px] bp620:py-[30px]"
            >
              <span className="font-display text-[23px] text-od-rose">{item.num}</span>
              <div>
                <h3 className="mb-[5px] font-display text-[25px] text-od-ink">{item.title}</h3>
                <p className="text-sm text-od-muted">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
