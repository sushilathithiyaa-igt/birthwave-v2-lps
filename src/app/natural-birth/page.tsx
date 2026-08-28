import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialBand } from "@/components/EditorialBand";
import { CareGrid } from "@/components/CareGrid";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { BirthConceptComparison } from "@/components/BirthConceptComparison";
import { landingPageBooking } from "@/config/landingPages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Natural Birth",
  description:
    "Natural birth is an approach to labour and birth — movement, breathing, relaxation and informed choice, with fewer interventions where appropriate. Prepare with The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/natural-birth" },
};

const booking = landingPageBooking["/natural-birth"];

const principles = [
  {
    number: "01",
    title: "Learn",
    description: "Understand labour, breathing, movement, positioning and comfort measures — and how they may fit your pregnancy.",
  },
  {
    number: "02",
    title: "Prepare",
    description: "Build confidence through childbirth education, practical preparation and birth-partner involvement.",
  },
  {
    number: "03",
    title: "Adapt",
    description: "Preferences can change. Pain-relief options stay part of the conversation, and your clinical circumstances stay at the centre of every decision.",
  },
];

const preparationItems = [
  {
    number: "01 / START HERE",
    title: "Talk through your wishes",
    description: "Begin with a consultation where your birth preferences, questions and medical context can be understood.",
    feature: true,
    linkLabel: "Start the conversation",
  },
  { number: "02", title: "Breathing & relaxation", description: "Techniques that may help you stay calm and work through contractions.", linkLabel: "Learn more" },
  { number: "03", title: "Movement & positioning", description: "Comfortable positions and movement during labour, where appropriate.", linkLabel: "Learn more" },
  { number: "04", title: "Birth-partner support", description: "Help your partner understand labour and how they can support you.", linkLabel: "Ask the team" },
  { number: "05", title: "Childbirth education", description: "Practical knowledge about labour, birth and the early days after.", linkLabel: "Book a visit" },
];

const relatedCare = [
  { title: "Normal delivery", description: "Supportive care for vaginal birth based on individual clinical needs.", href: "/normal-vaginal-delivery" },
  { title: "VBAC counselling", description: "Understand your options after a previous Caesarean.", href: "/vbac-consultation" },
  { title: "Pregnancy care", description: "A connected place to begin antenatal care and preparation.", href: "/pregnancy-antenatal-care" },
];

const faqs = [
  {
    question: "Is natural birth the same as normal vaginal delivery?",
    answer:
      "No. Natural birth describes an approach to labour and birth — movement, breathing, relaxation and informed choice, with fewer interventions where clinically appropriate. Normal vaginal delivery describes the route of birth. The two are related but not the same question, and your care team can help you understand what may be appropriate for your pregnancy.",
  },
  {
    question: "When should I start preparing for natural birth?",
    answer: "Preparation can begin early in pregnancy and be tailored as your pregnancy progresses.",
  },
  {
    question: "Can I discuss pain relief and changing plans?",
    answer:
      "Yes. Choosing pain relief does not take away from the importance of being informed, supported and involved in decisions about your birth. Changing the birth plan is not a failure — it is part of responding to how your labour progresses.",
  },
  {
    question: "Can I have doula support during labour?",
    answer:
      "Doula support — continuous physical and emotional support during labour — can be part of preparing for natural birth. Speak with your care team about what this could look like alongside your obstetric care.",
  },
];

export default function NaturalBirthPage() {
  return (
    <>
      <InnerHero
        tone="dark"
        eyebrow="Natural birth"
        title="Prepare for birth with calm, clarity and support."
        lede="Natural birth is an approach to labour and birth — not a route of delivery — built on movement, breathing, relaxation and informed choice, with fewer interventions where clinically appropriate."
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
        eyebrow="What natural birth means at The Birthwave"
        title="An approach, not a route of delivery."
        description="Natural birth describes how you prepare for and experience labour — through movement, breathing, relaxation, comfort measures and informed choice — with fewer routine interventions where clinically appropriate. The Birthwave team can help you understand what preparation and support may be appropriate for your pregnancy."
        principles={principles}
        imageSrc="/images/care/workshop-facilitator.png"
        imageAlt="A childbirth educator teaching with a pelvis model during a workshop"
      />

      <BirthConceptComparison />

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
