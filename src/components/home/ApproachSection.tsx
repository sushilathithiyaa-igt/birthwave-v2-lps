const pillars = [
  {
    num: "01",
    title: "Medical Care",
    tags: "Obstetrics · Gynaecology · Fertility · Pediatrics",
    copy: "Clinical consultations and medical care appropriate to each stage of the journey.",
  },
  {
    num: "02",
    title: "Birth & Recovery Support",
    tags: "Childbirth Education · Lactation · Pelvic-Floor Therapy",
    copy: "Support to help women prepare for birth, breastfeeding and recovery.",
  },
  {
    num: "03",
    title: "Holistic Wellbeing",
    tags: "Nutrition · Psychology · Yoga · Strength & Conditioning",
    copy: "Support for physical and emotional wellbeing alongside appropriate medical care.",
  },
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
            The Birthwave Way
          </p>
          {/* Weight 400 here, per the reference — only `.section-heading h2`
              carries 600, which gives the editorial sections a lighter voice. */}
          <h2 className="max-w-[480px] font-display text-[43px] leading-[1.02] font-normal tracking-[-0.04em] text-od-ink bp620:text-[clamp(38px,4.3vw,60px)]">
            Because every part of your wellbeing matters.
          </h2>
          <p className="mt-6 max-w-[480px] text-base text-od-muted bp620:text-[18px]">
            Pregnancy and women&rsquo;s health are not only about appointments and reports.
            Nutrition, movement, emotional wellbeing, preparation for birth, breastfeeding and
            recovery can all be part of the journey — that is why The Birthwave brings different
            areas of care together around the woman.
          </p>
        </div>

        {/* Editorial rows separated by hairlines — deliberately not cards. */}
        <div className="mt-1.5 border-t border-od-line">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-[63px_1fr] gap-5 border-b border-od-line py-[22px] bp620:grid-cols-[85px_1fr]"
            >
              <b className="font-display text-2xl font-normal text-od-rose">{item.num}</b>
              <div>
                <h3 className="mb-[3px] text-[18px] font-semibold text-od-ink">{item.title}</h3>
                <p className="mb-1 text-[12px] font-semibold tracking-[0.02em] text-od-rose">
                  {item.tags}
                </p>
                <p className="text-[15px] text-od-muted">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
