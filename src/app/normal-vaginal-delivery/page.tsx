import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CareGrid } from "@/components/CareGrid";
import { FeatureBand } from "@/components/FeatureBand";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { BookTrigger } from "@/components/BookTrigger";
import { landingPageBooking } from "@/config/landingPages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Normal Vaginal Delivery",
  description:
    "Support for a safe, informed vaginal birth. Thoughtful pregnancy and birth care focused on preparation and individual clinical needs at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/normal-vaginal-delivery" },
};

const booking = landingPageBooking["/normal-vaginal-delivery"];

const pathItems = [
  {
    number: "01 / PREPARE",
    title: "Understand your options",
    description: "Talk through normal vaginal birth, natural birth and the factors that shape individual care.",
    feature: true,
    linkLabel: "Book a conversation",
  },
  { number: "02", title: "Antenatal care", description: "Regular monitoring and guidance.", href: "/pregnancy-antenatal-care", linkLabel: "Explore pregnancy care" },
  { number: "03", title: "Birth preparation", description: "Practical support for the journey.", href: "/natural-birth", linkLabel: "Explore natural birth" },
  { number: "04", title: "Labour guidance", description: "Support based on your clinical context.", linkLabel: "Ask the team" },
  { number: "05", title: "Follow-up", description: "Care that continues after birth.", linkLabel: "Book a visit" },
];

const relatedCare = [
  { title: "Natural birth", description: "Preparation for an informed, low-intervention approach where appropriate.", href: "/natural-birth" },
  { title: "VBAC counselling", description: "Understand your options after a previous Caesarean.", href: "/vbac-consultation" },
  { title: "Postpartum recovery", description: "Support for recovery, breastfeeding, nutrition and wellbeing." },
];

const faqs = [
  {
    question: "What does normal vaginal delivery mean?",
    answer: "Normal delivery generally refers to vaginal birth. Your clinician can help explain what is appropriate for your pregnancy.",
  },
  {
    question: "When should I start preparing?",
    answer: "Preparation can begin early in pregnancy and be tailored as your pregnancy progresses.",
  },
  {
    question: "Can I discuss natural birth and VBAC?",
    answer: "Yes. Birth preferences and VBAC options can be part of an individual consultation.",
  },
];

export default function NormalVaginalDeliveryPage() {
  return (
    <>
      <InnerHero
        eyebrow="Normal vaginal delivery"
        title="Support for a safe, informed vaginal birth."
        lede="Thoughtful pregnancy and birth care focused on preparation, clear communication and individual clinical needs."
        bookingConfig={booking}
        primaryLabel="Book an Appointment"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/childbirth-workshop-02.png"
        imageAlt="A care team member demonstrating a labour support position during a workshop"
        imageSideSrc="/images/care/clinic-interior.webp"
        imageSideAlt="A calm consultation space inside The Birthwave clinic"
        badge="Care, not a promise"
        tag={{ heading: "Prepared together", body: "with support through changing clinical needs." }}
      />

      <section id="path" data-od-id="birth-path" className="bg-sky-mist py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="A supportive pathway"
            title="The work begins before labour."
            description="Good care makes room for preparation, questions and responsive decision-making."
          />
          <div className="mt-12">
            <CareGrid items={pathItems} />
          </div>
        </div>
      </section>

      <FeatureBand
        odId="clarity"
        eyebrow="Clear, individual care"
        title="Every birth story needs room to be its own."
        description="Normal vaginal delivery refers to vaginal birth. The path to it is individual, and care decisions should reflect your pregnancy, your health and your clinician's guidance."
        points={["Ask questions early", "Prepare with guidance", "Keep options open", "Review as things change"]}
        imageSrc="/images/care/community-event.png"
        imageAlt="A warm gathering of The Birthwave families and care team"
        cta={
          <BookTrigger config={booking}>Talk to the team</BookTrigger>
        }
      />

      <RelatedCareBand
        odId="related-care"
        eyebrow="The connected journey"
        title="Birth care sits inside pregnancy care."
        description="From antenatal support to postpartum recovery, one conversation can help you find the right next step."
        ctaHref="/pregnancy-antenatal-care"
        ctaLabel="See pregnancy care"
        items={relatedCare}
      />

      <section id="faq" data-od-id="faq" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 bp1050:grid-cols-[0.65fr_1.35fr] bp1050:gap-[100px] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Know what to ask next." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Your next conversation"
        title="Begin with the questions you have."
        description="Book a consultation with The Birthwave team in Nungambakkam, Chennai."
        service={booking.service}
        sourcePage={booking.sourcePage}
        submitLabel="Request consultation"
      />
    </>
  );
}
