import { buildWhatsAppAppointmentUrl } from "@/lib/enquiry";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      data-od-id="final-cta"
      className="relative overflow-hidden bg-od-ink py-[100px] text-white"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[250px] -right-[160px] h-[500px] w-[500px] rounded-full border border-[rgba(214,178,166,0.25)]"
      />
      <div
        id="book"
        className="od-container relative z-[1] block scroll-mt-24 bp620:flex bp620:items-end bp620:justify-between bp620:gap-10"
      >
        <div>
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-blush uppercase">
            Begin your care journey
          </p>
          <h2 className="max-w-[650px] font-display text-[40px] leading-[1.02] font-normal tracking-[-0.045em] bp620:text-[clamp(40px,4.5vw,65px)]">
            Wherever you are in your journey, we&rsquo;re here to care.
          </h2>
        </div>
        <div className="shrink-0">
          <p className="mt-[22px] mb-6 max-w-[390px] text-base text-[#c7bdb7] bp620:mt-0">
            Book a consultation with a team that supports women, mothers, babies and families with
            care and compassion.
          </p>
          <a
            href={buildWhatsAppAppointmentUrl()}
            target="_blank"
            rel="noreferrer"
            data-event="hero_book"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-od-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background,box-shadow] duration-250 hover:-translate-y-0.5 hover:bg-od-rose-deep hover:shadow-[0_12px_24px_rgba(202,149,133,0.34)] active:translate-y-0 active:scale-[0.98]"
          >
            Book an Appointment
            <span aria-hidden className="text-lg transition-transform duration-250 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
