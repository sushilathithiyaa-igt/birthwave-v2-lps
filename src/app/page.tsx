import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { DoctorTrust } from "@/components/DoctorTrust";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { buildWhatsAppTopicUrl } from "@/lib/enquiry";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const journeyEntries = [
  {
    label: "Planning for Pregnancy",
    description: "Thinking about starting a family or finding it difficult to conceive?",
    href: buildWhatsAppTopicUrl("Fertility & Preconception care"),
  },
  {
    label: "I'm Pregnant",
    description: "From your first consultation through each stage of pregnancy, find care and support.",
    href: "/pregnancy-antenatal-care",
  },
  {
    label: "Preparing for Birth",
    description: "Understand your birth options and have informed conversations about normal birth and VBAC.",
    href: "/natural-birth",
  },
  {
    label: "Postpartum & Recovery",
    description: "Support for recovery, breastfeeding, pelvic health and emotional wellbeing after birth.",
    href: buildWhatsAppTopicUrl("Postpartum & Recovery care"),
  },
  {
    label: "Newborn & Pediatric Care",
    description: "Pediatric consultations, newborn care, vaccinations and growth support for your child.",
    href: buildWhatsAppTopicUrl("Newborn & Pediatric care"),
  },
  {
    label: "Women's Health",
    description: "Gynaecology, PCOS, pelvic health and vaginismus care.",
    href: buildWhatsAppTopicUrl("Women's Health"),
  },
];

const priorityCare = [
  {
    label: "Pregnancy & Antenatal Care",
    description: "Personalised pregnancy care, from your first visit to birth.",
    href: "/pregnancy-antenatal-care",
  },
  {
    label: "Natural Birth",
    description: "Prepare for a natural birth with confidence, knowledge and the right support.",
    href: "/natural-birth",
  },
  {
    label: "Normal Vaginal Delivery",
    description: "Preparing for a normal vaginal delivery, from pregnancy through recovery.",
    href: "/normal-vaginal-delivery",
  },
  {
    label: "VBAC Consultation",
    description: "Had a C-section before? Let's talk about your birth options this time.",
    href: "/vbac-consultation",
  },
];

const journeySteps = [
  { num: "01", title: "Planning", description: "Preconception and fertility support." },
  { num: "02", title: "Pregnancy", description: "Antenatal care and preparation." },
  { num: "03", title: "Birth", description: "Informed, supportive birth care." },
  { num: "04", title: "Recovery", description: "Postpartum support for mothers." },
  { num: "05", title: "Baby & Child", description: "Newborn, pediatric and vaccine care." },
];

const faqs = [
  {
    question: "When should I first consult a doctor after finding out I'm pregnant?",
    answer:
      "Early pregnancy is a useful time to confirm the pregnancy, discuss your health and understand the next steps in antenatal care.",
  },
  {
    question: "I had a C-section before. Can I consider a vaginal birth this time?",
    answer:
      "A vaginal birth after a previous C-section is called VBAC. Whether it may be suitable depends on your previous delivery, current pregnancy and individual medical factors.",
  },
  {
    question: "When should we consider a fertility consultation?",
    answer:
      "If pregnancy is taking longer than expected, or if you already know of a condition that may affect fertility, an evaluation can help you understand possible next steps.",
  },
  {
    question: "Intercourse is painful or penetration feels difficult. Who should I speak to?",
    answer:
      "Pain or involuntary tightening during attempted penetration can have different causes, including vaginismus and pelvic-floor concerns. A private consultation can help identify what may be contributing to it.",
  },
  {
    question: "Can my newborn also receive care at Birthwave?",
    answer:
      "Birthwave provides pediatric care for newborns and children, including consultations, growth monitoring and vaccination support.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-[9.25rem] pb-[clamp(3.5rem,8vw,5.75rem)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[29vw] top-[6.25rem] h-[58vw] w-[58vw] rounded-full border border-rose/20"
        />
        <div className="relative mx-auto grid w-full max-w-[1220px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
              Women&apos;s Wellness &bull; Pregnancy &bull; Fertility &bull; Mother &amp; Baby Care
            </p>
            <h1 className="max-w-[620px] font-display text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.03] font-semibold tracking-[-0.03em] text-ink">
              Care for every stage of your journey into motherhood.
            </h1>
            <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-muted">
              From preparing for pregnancy to pregnancy care, birth, postpartum recovery and your
              baby&apos;s early care, {siteConfig.name} brings medical expertise and holistic
              support together around you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="#book" data-event="hero_book">
                Book an Appointment
              </Button>
              <Link href="#priority-care" className="group inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Explore Birthwave
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
            <div className="absolute inset-0 overflow-hidden rounded-[190px_190px_26px_26px] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/team/dr-santoshi-nandigam.png"
                alt="Dr. Santoshi Nandigam, Founder of Birthwave, Obstetrics & Gynaecology"
                fill
                sizes="(max-width: 1024px) 340px, 420px"
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 max-w-[190px] rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] sm:-left-8">
              <p className="font-display text-lg font-semibold text-ink">Dr. Santoshi Nandigam</p>
              <p className="mt-1 text-xs text-muted">
                Founder &bull; Obstetrics &amp; Gynaecology
                <br />
                Nungambakkam, Chennai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY ENTRY POINTS */}
      <section className="border-y border-ink/10 bg-paper py-[clamp(3.5rem,7vw,5.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Your journey"
            title="Where are you in your journey?"
            description="Every woman's journey is different. Choose what feels closest to where you are today."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journeyEntries.map((entry) => (
              <Link
                key={entry.label}
                href={entry.href}
                target={entry.href.startsWith("http") ? "_blank" : undefined}
                rel={entry.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col rounded-[26px_26px_10px_26px] border border-ink/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{entry.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{entry.description}</p>
                <span className="mt-4 text-xs font-semibold text-rose">
                  {entry.href.startsWith("http") ? "Ask on WhatsApp" : "Learn more"} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DR SANTOSHI */}
      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <DoctorTrust ctaLabel="Meet Dr. Santoshi" />
        </div>
      </section>

      {/* THE BIRTHWAVE WAY */}
      <section className="bg-sand py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Holistic women's wellness"
            title="Because every part of your wellbeing matters."
            description="Pregnancy and women's health are not only about appointments and reports. Birthwave brings different areas of care together around the woman."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Medical Care",
                tag: "Obstetrics · Gynaecology · Fertility · Pediatrics",
                copy: "Clinical consultations and medical care appropriate to each stage of the journey.",
              },
              {
                title: "Birth & Recovery Support",
                tag: "Childbirth Education · Lactation · Pelvic-Floor Therapy",
                copy: "Support to help women prepare for birth, breastfeeding and recovery.",
              },
              {
                title: "Holistic Wellbeing",
                tag: "Nutrition · Psychology · Yoga · Strength & Conditioning",
                copy: "Support for physical and emotional wellbeing alongside appropriate medical care.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-[26px_26px_10px_26px] bg-white/70 p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-xs font-semibold tracking-wide text-rose">{pillar.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED CONTINUUM */}
      <section className="bg-ink py-[clamp(4.5rem,9vw,7.5rem)] text-white">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="A connected continuum"
            title="One journey. Care that evolves with you."
            tone="dark"
            description="You may first come to Birthwave while planning a pregnancy, return during pregnancy with new questions, and continue through birth, recovery and your baby's early care."
          />
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {journeySteps.map((step) => (
              <div key={step.num}>
                <span className="font-display text-lg text-coral/80">{step.num}</span>
                <h3 className="mt-2.5 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-1.5 max-w-[160px] text-sm text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIORITY CARE */}
      <section id="priority-care" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Thinking about how you want to give birth?"
            title="Understand your birth options."
            description="Pregnancy is also the time to begin understanding your birth options. Your doctor can discuss what may be appropriate for you as your pregnancy progresses."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {priorityCare.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                data-event={`priority_care_${index}`}
                className="group flex flex-col justify-between rounded-[30px_30px_10px_30px] border border-ink/10 bg-blush-light p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{card.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA / CLINIC PROOF */}
      <section className="bg-sky-mist py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Inside Birthwave"
            title="A calm, considered space for care."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow-soft)]">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/care/clinic-interior.webp"
                className="aspect-video w-full bg-ink"
              >
                <source src="/videos/clinic-experience.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[var(--shadow-soft)] lg:aspect-auto lg:h-full">
              <Image
                src="/images/care/community-event.png"
                alt="Birthwave community and workshop event with families and the care team"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <SectionHeading eyebrow="Common questions" title="It's natural to have questions." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Not sure where to begin?"
        title="Start with a conversation."
        description="You don't need to know which speciality or service to choose. Tell us what you're looking for, and the Birthwave team can guide you towards the appropriate care."
        service="General enquiry"
        sourcePage="Home"
        submitLabel="Book an Appointment"
      />
    </>
  );
}
