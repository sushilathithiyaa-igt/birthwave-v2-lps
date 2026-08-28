import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialBand } from "@/components/EditorialBand";
import { CareGrid } from "@/components/CareGrid";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { landingPageBooking } from "@/config/landingPages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Natural Birth",
  description:
    "Prepare for birth with calm, clarity and support. Guidance for an informed, low-intervention birth experience where appropriate at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/natural-birth" },
};

const booking = landingPageBooking["/natural-birth"];

const principles = [
  { number: "01", title: "Learn", description: "Understand the choices available to you." },
  { number: "02", title: "Prepare", description: "Build confidence through practical preparation." },
  { number: "03", title: "Adapt", description: "Keep clinical context at the centre of decisions." },
];

const preparationItems = [
  {
    number: "01 / START HERE",
    title: "Talk through your wishes",
    description: "Begin with a consultation where your questions, preferences and medical context can be understood.",
    feature: true,
    linkLabel: "Start the conversation",
  },
  { number: "02", title: "Birth preparation", description: "Explore practical ways to prepare.", linkLabel: "Learn more" },
  { number: "03", title: "Movement & wellbeing", description: "Supportive guidance through pregnancy.", linkLabel: "Learn more" },
  { number: "04", title: "Know your options", description: "Natural birth, normal delivery and VBAC conversations.", linkLabel: "Ask the team" },
  { number: "05", title: "Ongoing care", description: "Support that continues beyond one appointment.", linkLabel: "Book a visit" },
];

const relatedCare = [
  { title: "Normal delivery", description: "Supportive care for vaginal birth based on individual clinical needs.", href: "/normal-vaginal-delivery" },
  { title: "VBAC counselling", description: "Understand your options after a previous Caesarean.", href: "/vbac-consultation" },
  { title: "Pregnancy care", description: "A connected place to begin antenatal care and preparation.", href: "/pregnancy-antenatal-care" },
];

const faqs = [
  {
    question: "What is the difference between normal delivery and natural birth?",
    answer:
      "Normal delivery generally refers to vaginal birth. Natural birth often describes a lower-intervention approach. Your care team can help you understand what is appropriate for your pregnancy.",
  },
  {
    question: "When should I start preparing for natural birth?",
    answer: "Preparation can begin early in pregnancy and be tailored as your pregnancy progresses.",
  },
  {
    question: "Can I discuss pain relief and changing plans?",
    answer: "Yes. A birth plan is a conversation, and it can be revisited with your clinician as circumstances change.",
  },
];

export default function NaturalBirthPage() {
  return (
    <>
      <InnerHero
        tone="dark"
        eyebrow="Natural birth"
        title="Prepare for birth with calm, clarity and support."
        lede="Guidance for an informed, low-intervention birth experience where appropriate, shaped around your pregnancy and clinical needs."
        bookingConfig={booking}
        primaryLabel="Book an Appointment"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/birth-position-practice.png"
        imageAlt="A pregnant woman practising a birth-ball position during a workshop"
        imageSideSrc="/images/care/prenatal-workshop.png"
        imageSideAlt="A birth partner practising a hand-holding support technique"
        tag={{ heading: "Informed choices", body: "with a care team beside you through preparation." }}
      />

      <EditorialBand
        odId="meaning"
        className="bg-sand"
        eyebrow="What natural birth can mean"
        title="Your preferences deserve a thoughtful conversation."
        description="Natural birth often describes a lower-intervention approach. The Birthwave team can help you understand options, preparation and what may be appropriate for your pregnancy."
        principles={principles}
        imageSrc="/images/care/workshop-facilitator.png"
        imageAlt="A childbirth educator teaching with a pelvis model during a workshop"
      />

      <section id="prepare" data-od-id="preparation" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="A preparation rhythm"
            title="Make space for the birth you are preparing for."
            description="Small, clear conversations can make the journey feel more navigable."
          />
          <div className="mt-12">
            <CareGrid items={preparationItems} />
          </div>
        </div>
      </section>

      <RelatedCareBand
        odId="related-care"
        eyebrow="Your birth, your choices"
        title="Support without promises."
        description="Birth is individual. Care should make room for informed decisions and changing clinical needs."
        ctaHref="/pregnancy-antenatal-care"
        ctaLabel="Explore pregnancy care"
        items={relatedCare}
      />

      <section id="faq" data-od-id="faq" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 bp1050:grid-cols-[0.65fr_1.35fr] bp1050:gap-[100px] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Clarity before the day arrives." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Begin with a conversation"
        title="Feel more prepared for what comes next."
        description="Meet The Birthwave team in Nungambakkam, Chennai."
        service={booking.service}
        sourcePage={booking.sourcePage}
        submitLabel="Request consultation"
      />
    </>
  );
}
