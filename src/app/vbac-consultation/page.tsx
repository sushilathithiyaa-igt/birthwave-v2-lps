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
  title: "VBAC Consultation",
  description:
    "Understand your options after a previous Caesarean. A calm, individual VBAC consultation at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/vbac-consultation" },
};

const booking = landingPageBooking["/vbac-consultation"];

const principles = [
  { number: "01", title: "Review", description: "Bring your previous birth history into the conversation." },
  { number: "02", title: "Understand", description: "Ask what your current pregnancy may mean for your options." },
  { number: "03", title: "Plan", description: "Make a care plan with your clinician, not a promise." },
];

const consultationPath = [
  {
    number: "01 / BEGIN",
    title: "Bring your story",
    description: "Share what feels important about your previous birth and current pregnancy.",
    feature: true,
    linkLabel: "Request a consultation",
  },
  { number: "02", title: "Review history", description: "Understand what information matters.", linkLabel: "Ask the team" },
  { number: "03", title: "Discuss options", description: "Explore whether VBAC may be possible.", linkLabel: "Learn more" },
  { number: "04", title: "Plan care", description: "Keep clinical needs at the centre.", linkLabel: "Book a visit" },
  { number: "05", title: "Keep talking", description: "Revisit the plan as pregnancy progresses.", linkLabel: "Continue the conversation" },
];

const relatedCare = [
  { title: "Normal delivery care", description: "Supportive care for vaginal birth based on individual clinical needs.", href: "/normal-vaginal-delivery" },
  { title: "Natural birth", description: "Preparation for an informed, low-intervention approach where appropriate.", href: "/natural-birth" },
  { title: "Antenatal care", description: "Regular consultations, monitoring and preparation through pregnancy.", href: "/pregnancy-antenatal-care" },
];

const faqs = [
  {
    question: "Is VBAC possible after a previous C-section?",
    answer: "VBAC may be possible for some people. It depends on your medical history and current pregnancy, so an individual consultation is important.",
  },
  {
    question: "What should I bring to a VBAC consultation?",
    answer: "Bring any relevant information from your previous birth and current pregnancy that you have available. The team can guide you through what is useful.",
  },
  {
    question: "Can I also discuss natural birth?",
    answer: "Yes. Natural birth preparation and normal vaginal delivery support can be part of the wider conversation where appropriate.",
  },
];

export default function VBACConsultationPage() {
  return (
    <>
      <InnerHero
        eyebrow="VBAC consultation"
        title="Understand your options after a previous Caesarean."
        lede="A calm, individual conversation about vaginal birth after Caesarean, your history and the care that may be appropriate for your current pregnancy."
        bookingConfig={booking}
        primaryLabel="Book a VBAC consultation"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/postpartum-baby-feet.png"
        imageAlt="A newborn's feet resting against a mother's postpartum belly"
        imageSideSrc="/images/home/dr-santoshi-clinic.jpg"
        imageSideAlt="Dr. Santoshi Nandigam at The Birthwave clinic"
        badge="Individual care"
        tag={{ heading: "One history", body: "one present pregnancy, one careful conversation." }}
      />

      <EditorialBand
        odId="vbac-meaning"
        className="bg-sand"
        eyebrow="A clearer starting point"
        title="VBAC deserves more than a yes or no."
        description="VBAC may be possible for some people. An individual consultation helps you understand your options based on your medical history and current pregnancy."
        principles={principles}
        imageSrc="/images/care/clinic-signage-detail.jpg"
        imageAlt="The Birthwave clinic signage"
      />

      <section id="consultation" data-od-id="consultation-path" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The consultation path"
            title="Questions first. Decisions together."
            description="A supportive way to make sense of a previous Caesarean and a new pregnancy."
          />
          <div className="mt-12">
            <CareGrid items={consultationPath} />
          </div>
        </div>
      </section>

      <RelatedCareBand
        odId="related-care"
        bgClassName="bg-cocoa"
        eyebrow="Connected birth care"
        title="Your VBAC conversation belongs inside your pregnancy care."
        description="The Birthwave team can help connect the next step with antenatal care, birth preparation and delivery conversations."
        ctaHref="/pregnancy-antenatal-care"
        ctaLabel="Explore pregnancy care"
        items={relatedCare}
      />

      <section id="faq" data-od-id="faq" className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 bp1050:grid-cols-[0.65fr_1.35fr] bp1050:gap-[100px] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Come with the questions you have." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Take the next step"
        title="A careful conversation can begin here."
        description="Meet The Birthwave team in Nungambakkam, Chennai."
        service={booking.service}
        sourcePage={booking.sourcePage}
        submitLabel="Request consultation"
        showPreviousCesareanField
      />
    </>
  );
}
