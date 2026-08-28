import Image from "next/image";
import Link from "next/link";
import { TextLink } from "@/components/home/TextLink";

export function HeroSection() {
  return (
    <section
      id="top"
      data-od-id="hero"
      className="relative overflow-hidden bg-od-ivory pt-[118px] pb-[72px] bp620:pt-[140px] bp620:pb-[92px] bp1000:min-h-[760px] bp1000:pt-[160px]"
    >
      {/* Oversized outline circle bleeding off the bottom-right corner. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[170px] -bottom-[280px] h-[540px] w-[540px] rounded-full border border-od-rose/20"
      />

      <div className="od-container relative grid gap-[55px] bp1000:grid-cols-[0.92fr_1.08fr] bp1000:items-center bp1000:gap-[50px]">
        <div className="od-rise relative z-[2]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            Women&rsquo;s Wellness &bull; Pregnancy &bull; Fertility &bull; Mother &amp; Baby Care
          </p>
          <h1
            data-od-id="hero-heading"
            className="max-w-[650px] font-display text-[clamp(45px,13vw,62px)] leading-[1.01] font-semibold tracking-[-0.055em] text-od-ink bp620:text-[clamp(48px,5.55vw,78px)] bp620:tracking-[-0.06em]"
          >
            Care for every stage of a woman&rsquo;s life.
          </h1>
          <p className="mt-[26px] mb-8 max-w-[530px] text-base leading-[1.65] text-od-muted bp620:text-[18px]">
            The Birthwave supports women through changing stages of health and life &mdash; from
            gynaecology, PCOS and fertility to pregnancy, birth, postpartum recovery and your
            baby&rsquo;s early care. Medical expertise and holistic support, together around you.
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <Link
              href="/#contact"
              data-od-id="hero-book-appointment"
              data-event="hero_book"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-od-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background,box-shadow] duration-250 hover:-translate-y-0.5 hover:bg-od-rose-deep hover:shadow-[0_12px_24px_rgba(202,149,133,0.34)] active:translate-y-0 active:scale-[0.98]"
            >
              Book an Appointment
              <span aria-hidden className="text-lg transition-transform duration-250 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <TextLink href="/#services" data-od-id="hero-explore-care">
              Explore The Birthwave
            </TextLink>
          </div>
        </div>

        {/* Layered visual: dominant arched portrait, overlapping clinic photo,
            floating note. Heights are fixed per the reference so the overlap
            geometry holds; widths stay percentage-based so it scales fluidly. */}
        <div className="od-rise relative h-[400px] [animation-delay:0.08s] bp620:h-[510px] bp1000:h-[545px]">
          <div className="absolute top-0 right-0 h-[360px] w-[76%] overflow-hidden rounded-[120px_120px_18px_18px] shadow-[var(--shadow-od)] bp620:right-[5%] bp620:h-[500px] bp620:w-[72%] bp620:rounded-[180px_180px_22px_22px]">
            <Image
              src="/images/home/dr-santoshi-clinic.jpg"
              alt="Dr. Santoshi Nandigam at her consulting desk in The Birthwave clinic"
              fill
              sizes="(max-width: 620px) 76vw, (max-width: 1000px) 60vw, 500px"
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-[190px] w-[39%] overflow-hidden rounded-[18px_70px_18px_70px] border-[6px] border-od-ivory shadow-[var(--shadow-od)] bp620:left-[3%] bp620:h-[265px] bp620:w-[34%] bp620:rounded-[22px_100px_22px_100px] bp620:border-[9px]">
            <Image
              src="/images/home/clinic-exterior.jpg"
              alt="The Birthwave clinic entrance in Nungambakkam, Chennai"
              fill
              sizes="(max-width: 620px) 39vw, 240px"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 bottom-4 max-w-[140px] rounded-2xl bg-white p-[13px] text-[11px] leading-[1.35] text-od-muted shadow-[var(--shadow-od)] bp620:bottom-[52px] bp620:max-w-[175px] bp620:px-5 bp620:py-[18px] bp620:text-[13px]">
            <strong className="mb-1 block font-display text-[19px] leading-[1.2] font-semibold text-od-ink bp620:text-[21px]">
              Dr. Santoshi Nandigam
            </strong>
            Founder &middot; Obstetrics &amp; Gynaecology
          </div>
        </div>
      </div>
    </section>
  );
}
