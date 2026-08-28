import type { ReactNode } from "react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

export function ConversionSection({
  eyebrow,
  title,
  description,
  service,
  sourcePage,
  submitLabel,
  showStageField,
  showPreviousCesareanField,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  service: string;
  sourcePage: string;
  submitLabel: string;
  showStageField?: boolean;
  showPreviousCesareanField?: boolean;
  note?: string;
}) {
  return (
    <section id="contact" data-od-id="conversion" className="relative overflow-hidden bg-blush py-[clamp(5.4rem,10vw,8.9rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full border border-rose/30"
      />
      <div className="relative mx-auto grid w-full max-w-[1220px] gap-14 px-6 sm:px-8 bp1050:grid-cols-[1fr_0.9fr] bp1050:gap-[70px] lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">{eyebrow}</p>
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
            {title}
          </h2>
          <p className="mt-5 max-w-[420px] text-muted">{description}</p>
          {note && <p className="mt-3 max-w-[420px] text-sm text-muted italic">{note}</p>}
          <Button href={siteConfig.phoneHref} className="mt-7 w-fit">
            Call {siteConfig.phoneDisplay}
          </Button>
        </div>
        <AppointmentForm
          heading={submitLabel}
          service={service}
          sourcePage={sourcePage}
          submitLabel={submitLabel}
          showStageField={showStageField}
          showPreviousCesareanField={showPreviousCesareanField}
        />
      </div>
    </section>
  );
}
