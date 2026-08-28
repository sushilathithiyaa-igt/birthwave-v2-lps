export type PathStep = {
  number: string;
  label: string;
};

/** The dark rounded continuum panel directly under the hero — the
 *  reference's `.path` / `.path-inner`. Used on the Pregnancy page only. */
export function JourneyPathPanel({
  eyebrow,
  label,
  steps,
}: {
  eyebrow: string;
  label: string;
  steps: PathStep[];
}) {
  return (
    <section data-od-id="continuum" className="pb-[55px] bp620:pb-[88px]">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 rounded-[24px_70px_24px_70px] bg-cocoa px-5 py-6 text-white bp620:rounded-[34px_110px_34px_110px] bp620:px-[38px] bp620:py-7 bp1050:grid-cols-[1.1fr_2fr]">
          <div className="font-display text-[13px] leading-tight font-semibold tracking-[-0.02em]">
            <span className="mb-1.5 block text-[11px] font-body font-normal tracking-[0.06em] text-[#e6c8be] uppercase">
              {eyebrow}
            </span>
            {label}
          </div>
          <div className="flex gap-5 overflow-x-auto pb-1 bp620:grid bp620:grid-cols-5 bp620:gap-2.5 bp620:overflow-visible bp620:pb-0">
            {steps.map((step) => (
              <div key={step.number} className="min-w-[112px] border-l border-white/25 pl-[15px] bp620:min-w-0">
                <b className="mb-2 block font-display text-xs font-semibold text-[#f3cfc6]">{step.number}</b>
                <span className="text-[13px] text-[#eaded9]">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
