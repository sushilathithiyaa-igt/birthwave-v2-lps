import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export function DoctorTrust({
  tone = "light",
  ctaHref = "#book",
  ctaLabel = "Meet Dr. Santoshi",
}: {
  tone?: "light" | "dark";
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 ${
        tone === "dark" ? "text-white" : ""
      }`}
    >
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[120px_20px_20px_20px] shadow-[var(--shadow-soft)]">
        <Image
          src="/images/team/dr-santoshi-nandigam.png"
          alt="Dr. Santoshi Nandigam, Founder of The Birthwave"
          fill
          sizes="(max-width: 768px) 340px, 400px"
          className="object-cover"
        />
      </div>
      <div>
        <SectionHeading
          eyebrow="Doctor-led, woman-centred care"
          title="Dr. Santoshi Nandigam"
          tone={tone}
        />
        <p className={`mt-2 text-sm font-medium ${tone === "dark" ? "text-white/70" : "text-muted"}`}>
          Founder · Obstetrician &amp; Gynaecologist
        </p>
        <p className={`mt-5 max-w-[520px] text-[1.02rem] leading-relaxed ${tone === "dark" ? "text-white/75" : "text-muted"}`}>
          Dr. Santoshi&apos;s approach looks at the woman as a whole, bringing together medical
          care, informed decision-making and supportive care through fertility, pregnancy, birth
          and the postpartum journey. At {siteConfig.name}, the aim is not to fit every woman into
          the same pathway, but to understand her individual needs and guide her through the
          options that may be appropriate for her.
        </p>
        <Button href={ctaHref} variant={tone === "dark" ? "light" : "primary"} className="mt-7">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
