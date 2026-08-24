import Link from "next/link";

const focusItems = [
  {
    odId: "focus-pregnancy",
    num: "01",
    title: "Antenatal & Pregnancy Care",
    copy: "Support through each stage of pregnancy.",
    href: "/pregnancy-antenatal-care",
  },
  {
    odId: "focus-natural-birth",
    num: "02",
    title: "Natural Birth",
    copy: "Preparing for an informed, low-intervention experience where appropriate.",
    href: "/natural-birth",
  },
  {
    odId: "focus-normal-delivery",
    num: "03",
    title: "Normal Delivery",
    copy: "Supportive care for vaginal birth based on individual clinical needs.",
    href: "/normal-vaginal-delivery",
  },
  {
    odId: "focus-vbac",
    num: "04",
    title: "VBAC Counselling",
    copy: "Understand your options after a previous Caesarean.",
    href: "/vbac-consultation",
  },
];

export function BirthFocusSection() {
  return (
    <section
      id="focus"
      data-od-id="focus-services"
      className="bg-od-ink py-[76px] text-white bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container grid items-start gap-[55px] bp1000:grid-cols-[1.1fr_0.9fr] bp1000:gap-[90px]">
        <div className="static bp1000:sticky bp1000:top-[130px]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            Your birth, your choices
          </p>
          <h2 className="max-w-[510px] font-display text-[43px] leading-[1.02] font-normal tracking-[-0.045em] bp620:text-[clamp(40px,4.5vw,64px)]">
            Supported with care.
          </h2>
          <p className="my-6 max-w-[410px] text-[15px] text-[#b8ada7]">
            We help you understand your options and prepare for a safe, informed birth experience
            based on your individual clinical needs.
          </p>
          <Link
            href="/#contact"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-od-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background] duration-250 hover:-translate-y-0.5 hover:bg-od-rose-deep"
          >
            Talk to our team
            <span aria-hidden className="text-lg transition-transform duration-250 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Numbered editorial rows with hairline separators — not cards. */}
        <div className="border-t border-white/20">
          {focusItems.map((item) => (
            <Link
              key={item.odId}
              href={item.href}
              data-od-id={item.odId}
              className="group grid grid-cols-[32px_1fr_auto] items-start gap-2.5 border-b border-white/20 py-[27px] bp620:grid-cols-[48px_1fr_auto] bp620:gap-[18px]"
            >
              <span className="font-display text-[22px] text-[#d6b2a6]">{item.num}</span>
              <div className="min-w-0">
                <h3 className="mb-1.5 font-display text-[24px] bp620:text-[28px]">{item.title}</h3>
                <p className="max-w-[440px] text-[14px] text-[#c7bdb7] bp620:text-[15px]">
                  {item.copy}
                </p>
              </div>
              <span
                aria-hidden
                className="text-2xl text-[#d6b2a6] transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
