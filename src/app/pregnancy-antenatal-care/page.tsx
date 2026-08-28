import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { JourneyPathPanel } from "@/components/JourneyPathPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { CareGrid } from "@/components/CareGrid";
import { EditorialBand } from "@/components/EditorialBand";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { landingPageBooking } from "@/config/landingPages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pregnancy & Antenatal Care",
  description:
    "Personalised pregnancy care from your first visit to birth. Antenatal consultations, monitoring, nutrition and birth preparation at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/pregnancy-antenatal-care" },
};

const booking = landingPageBooking["/pregnancy-antenatal-care"];

const continuumSteps = [
  { number: "01", label: "Early pregnancy" },
  { number: "02", label: "Growing well" },
  { number: "03", label: "Birth preparation" },
  { number: "04", label: "Birth" },
  { number: "05", label: "Recovery" },
];

const careItems = [
  {
    number: "01 / CORE CARE",
    title: "Regular antenatal consultations",
    description: "Thoughtful check-ins, monitoring and guidance as your pregnancy changes.",
    feature: true,
    linkLabel: "Plan your consultation",
  },
  { number: "02", title: "Scans & tests", description: "Pregnancy monitoring, explained clearly.", linkLabel: "Ask the team" },
  { number: "03", title: "Nutrition", description: "Practical support for nourishment during pregnancy.", linkLabel: "Learn more" },
  { number: "04", title: "Movement", description: "Pregnancy wellness and movement guidance.", linkLabel: "Learn more" },
  { number: "05", title: "Birth preparation", description: "Understand your options and prepare with confidence.", linkLabel: "Start a conversation" },
];

const principles = [
  { number: "01", title: "Listen", description: "Space for the questions that matter to you." },
  { number: "02", title: "Explain", description: "Guidance that helps you understand each next step." },
  { number: "03", title: "Prepare", description: "Birth preparation shaped around your needs." },
];

const connectedCare = [
  { title: "Early pregnancy", description: "Start with a consultation that gives you a clear next step." },
  { title: "Growing well", description: "Regular antenatal care, monitoring and practical guidance." },
  { title: "Preparing for birth", description: "Explore natural birth, normal delivery and other options with your care team." },
];

const faqs = [
  {
    question: "When should I schedule my first antenatal consultation?",
    answer:
      "Many people book after a positive pregnancy test. The right timing can depend on your needs and history, so the care team can guide you.",
  },
  {
    question: "When should I start preparing for birth?",
    answer:
      "Preparation can begin early and be tailored as your pregnancy progresses. Speak with your clinician about what is right for you.",
  },
  {
    question: "Can I discuss natural birth or VBAC during pregnancy care?",
    answer: "Yes. Understanding your options is part of thoughtful pregnancy and birth care.",
  },
];

export default function PregnancyAntenatalCarePage() {
  return (
    <>
      <InnerHero
        eyebrow="Pregnancy & antenatal care"
        title="Personalised pregnancy care, from your first visit to birth."
        lede="Antenatal consultations, thoughtful monitoring, nutrition guidance and birth preparation, connected through every stage of your pregnancy."
        bookingConfig={booking}
        primaryLabel="Book an Appointment"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/birth-partner-session.png"
        imageAlt="A pregnant woman and her partner in a calm antenatal session"
        imageSideSrc="/images/care/antenatal-movement-coaching.png"
        imageSideAlt="A pregnancy movement and wellness class"
        badge="Care that grows with you"
        tag={{ heading: "One continuum", body: "from early pregnancy to the birth you are preparing for." }}
      />

      <JourneyPathPanel
        eyebrow="The pregnancy continuum"
        label="Care evolves as your pregnancy progresses."
        steps={continuumSteps}
      />

      <section id="care" data-od-id="care-path" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Care that grows with your pregnancy"
            title="The right support for each stage."
            description="A clear, connected path from your first consultation to birth preparation."
          />
          <div className="mt-12">
            <CareGrid items={careItems} />
          </div>
        </div>
      </section>

      <EditorialBand
        odId="approach"
        className="bg-sand"
        eyebrow="The Birthwave approach"
        title="A calmer way to feel informed."
        description="Pregnancy brings questions. Our care is built around listening, clear guidance and support that respects your individual clinical context."
        principles={principles}
        imageSrc="/images/care/childbirth-workshop-01.png"
        imageAlt="A small group childbirth education workshop"
      />

      <RelatedCareBand
        odId="care-team"
        eyebrow="Connected care"
        title="Pregnancy is not a checklist."
        description="It is a changing journey. The Birthwave brings care, preparation and ongoing support together."
        ctaHref="#book"
        ctaLabel="Talk to the team"
        items={connectedCare}
      />

      <section id="faq" data-od-id="faq" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 bp1050:grid-cols-[0.65fr_1.35fr] bp1050:gap-[100px] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Make the next step clearer." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Begin your care journey"
        title="A thoughtful place to begin."
        description="Book a consultation with The Birthwave team in Nungambakkam, Chennai."
        service={booking.service}
        sourcePage={booking.sourcePage}
        submitLabel="Request consultation"
        showStageField
      />
    </>
  );
}
