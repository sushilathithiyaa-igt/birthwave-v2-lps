const principles = [
  { num: "01", title: "Listen", copy: "Every journey begins with understanding." },
  { num: "02", title: "Support", copy: "Guidance through changing stages and decisions." },
  { num: "03", title: "Personalise", copy: "Care shaped around individual needs and clinical context." },
];

export function ApproachSection() {
  return (
    <section
      id="about"
      data-od-id="about"
      className="bg-od-paper py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container grid items-start gap-[38px] bp620:gap-[55px] bp1000:grid-cols-[0.85fr_1.15fr] bp1000:gap-[100px]">
        <div>
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            The Birthwave approach
          </p>
          {/* Weight 400 here, per the reference — only `.section-heading h2`
              carries 600, which gives the editorial sections a lighter voice. */}
          <h2 className="max-w-[480px] font-display text-[43px] leading-[1.02] font-normal tracking-[-0.04em] text-od-ink bp620:text-[clamp(38px,4.3vw,60px)]">
            Care that sees the whole journey.
          </h2>
          <p className="mt-6 max-w-[480px] text-base text-od-muted bp620:text-[18px]">
            Birthwave brings women&rsquo;s health, pregnancy, birth, postpartum, newborn and child
            care together so families can receive thoughtful support through changing stages of
            life.
          </p>
        </div>

        {/* Editorial rows separated by hairlines — deliberately not cards. */}
        <div className="mt-1.5 border-t border-od-line">
          {principles.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-[63px_1fr] gap-5 border-b border-od-line py-[22px] bp620:grid-cols-[85px_1fr]"
            >
              <b className="font-display text-2xl font-normal text-od-rose">{item.num}</b>
              <div>
                <h3 className="mb-[3px] text-[18px] font-semibold text-od-ink">{item.title}</h3>
                <p className="text-[15px] text-od-muted">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
