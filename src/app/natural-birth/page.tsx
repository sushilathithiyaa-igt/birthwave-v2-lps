import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialBand } from "@/components/EditorialBand";
import { CareGrid } from "@/components/CareGrid";
import { DoctorTrust } from "@/components/DoctorTrust";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Natural Birth",
  description:
    "Prepare for a natural birth with confidence, knowledge and the right support. Understand labour, movement, informed choices and lower-intervention birth where appropriate at The Birthwave.",
  alternates: { canonical: "/natural-birth" },
};

const preparationItems = [
  { number: "01 / START HERE", title: "Understanding Labour", description: "Learn about the stages of labour, contractions, signs that labour may be beginning and when to contact your care team.", feature: true, href: "#book", linkLabel: "Start the conversation" },
  { number: "02", title: "Birth Planning", description: "Discuss your preferences and understand the choices that may be available during labour and birth." },
  { number: "03", title: "Breathing & Relaxation", description: "Learn practical breathing and relaxation techniques that may help you cope with labour." },
  { number: "04", title: "Movement & Positioning", description: "Understand comfortable movement and positions that may be used during labour based on your individual circumstances." },
  { number: "05", title: "Birth Partner Preparation", description: "Help your partner understand labour and how they can provide practical and emotional support." },
];

const considerIf = [
  "are pregnant and want to understand your birth options",
  "are interested in preparing for a vaginal birth",
  "would like to explore a lower-intervention approach to labour where appropriate",
  "want to learn breathing, movement and relaxation techniques for labour",
  "would like your birth partner to be involved in preparation",
  "want childbirth education as part of your pregnancy journey",
  "simply want to understand whether natural birth may be suitable for your individual pregnancy",
];

const faqs = [
  {
    question: "What is natural birth?",
    answer:
      "Natural birth generally refers to an approach to labour and vaginal birth that aims to allow labour to progress naturally with minimal medical intervention when clinically appropriate. Women may prepare using breathing and relaxation techniques, movement, comfortable positions, childbirth education and support from their birth partner and care team.",
  },
  {
    question: "What is the difference between natural birth and normal vaginal delivery?",
    answer:
      "Both can involve giving birth vaginally. Natural birth usually refers to an approach that aims for minimal medical intervention where appropriate, with greater emphasis on preparation, movement, breathing and relaxation during labour. Normal vaginal delivery refers more broadly to the baby being delivered vaginally; pain-relief options and other appropriate obstetric interventions may also be used depending on the woman's preferences and clinical needs.",
  },
  {
    question: "When should I start preparing for natural birth?",
    answer:
      "Birth preparation can begin during pregnancy rather than waiting until labour starts. Antenatal preparation gives you time to understand the stages of labour, discuss your birth preferences, learn breathing and relaxation techniques, explore movement and positioning, prepare your birth partner and ask questions about childbirth.",
  },
  {
    question: "Can I use pain relief if I originally planned for a natural birth?",
    answer:
      "Yes. Your preferences around pain relief can be discussed during pregnancy and again during labour. Choosing pain relief does not take away from the importance of being informed, supported and involved in decisions about your birth.",
  },
  {
    question: "Can I have a natural birth after a previous Caesarean?",
    answer:
      "Some women who have previously had a Caesarean may be able to consider vaginal birth in a later pregnancy. This is called VBAC — Vaginal Birth After Caesarean. Your obstetrician can review your previous birth history and current pregnancy and discuss the birth options that may be appropriate for you.",
  },
  {
    question: "Does Birthwave provide yoga, nutrition and birth preparation along with pregnancy care?",
    answer:
      "Birthwave's approach brings medical pregnancy care together with supportive services around pregnancy, childbirth and recovery, which may include pregnancy yoga and movement, nutrition guidance, childbirth education, birth-partner preparation, pelvic health support, lactation support and postpartum recovery.",
  },
  {
    question: "What does holistic natural birth preparation mean?",
    answer:
      "Holistic preparation means looking beyond the day of delivery and considering the different aspects that can influence a woman's experience of pregnancy and childbirth — including medical pregnancy care, childbirth education, physical preparation, movement, nutrition, emotional wellbeing, birth-partner involvement and postpartum preparation, based on each woman's individual needs.",
  },
];

export default function NaturalBirthPage() {
  return (
    <>
      <InnerHero
        tone="dark"
        eyebrow="Natural Birth Care in Chennai"
        title="Prepare for a natural birth with confidence, knowledge and the right support."
        lede="At Birthwave, natural birth preparation begins during pregnancy. We help you understand labour, prepare your body and mind, explore your birth preferences, and approach childbirth with personalised obstetric care and holistic support."
        primaryLabel="Book a Consultation"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/birth-position-practice.png"
        imageAlt="A pregnant woman practising a birth position with support during a workshop"
        badge="Informed choices"
      />

      <EditorialBand
        className="bg-blush-light"
        eyebrow="What natural birth can mean"
        title="Your preferences deserve a thoughtful conversation."
        description="Natural birth is a way of giving birth vaginally while allowing labour to progress as naturally as possible, with less medical intervention when it is safe and appropriate. During labour, a mother may use breathing and relaxation techniques, walking or changing positions, gentle movement, massage, and physical and emotional support to help her stay comfortable and cope with contractions."
        principles={[
          { number: "01", title: "Learn", description: "Understand the choices available to you." },
          { number: "02", title: "Prepare", description: "Build confidence through practical preparation." },
          { number: "03", title: "Adapt", description: "Keep clinical context at the centre of every decision." },
        ]}
        imageSrc="/images/care/prenatal-workshop.png"
        imageAlt="A birth partner practising a hand-holding support technique during a prenatal workshop"
      />

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Clearing up a common question"
            title="Natural birth and normal vaginal delivery — are they the same?"
            description="Both may result in a baby being born vaginally, but the terms are often used differently when discussing the approach to labour."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[26px_26px_10px_26px] border border-ink/10 bg-blush p-7">
              <h3 className="font-display text-xl font-semibold text-ink">Natural Birth</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Usually describes an approach where a woman wishes to experience labour with
                minimal medical intervention when appropriate — through breathing and relaxation,
                movement and positioning, non-medical comfort measures, and continuous support from
                the care team and birth partner.
              </p>
            </div>
            <div className="rounded-[26px_26px_10px_26px] border border-ink/10 bg-white/70 p-7">
              <h3 className="font-display text-xl font-semibold text-ink">Normal Vaginal Delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Refers more broadly to giving birth vaginally. Depending on the individual
                situation and the woman&apos;s preferences, pain-relief options or other appropriate
                obstetric interventions may form part of the labour and delivery care.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-[600px] font-display text-lg font-medium text-ink">
            The right birth approach is individual to every woman. Your obstetrician can help you
            understand your options based on your pregnancy, health, preferences and clinical
            circumstances.
          </p>
        </div>
      </section>

      <section className="bg-blush py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Birthwave approach"
            title="Natural birth preparation starts before the day of delivery."
            description="At Birthwave, conversations about birth can begin during pregnancy, giving you time to understand labour, discuss your preferences, prepare physically and emotionally, and involve the person who will support you during birth."
          />
          <div className="mt-12">
            <CareGrid items={preparationItems} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <DoctorTrust ctaLabel="Book a Consultation with Dr. Santoshi" />
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Is natural birth something I can consider?"
            title="Your natural birth journey starts with understanding your pregnancy."
            description="You may wish to discuss natural birth if you:"
          />
          <ul className="mt-8 grid max-w-[720px] gap-3.5 sm:grid-cols-2">
            {considerIf.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="text-rose">↗</span>
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-lg font-medium text-ink">
            You don&apos;t need to have every decision made before your consultation. Start with a
            conversation about the birth experience you are hoping for.
          </p>
        </div>
      </section>

      <RelatedCareBand
        eyebrow="Your birth, your choices"
        title="Support without promises."
        description="Birth is individual. Care should make room for informed decisions and changing clinical needs."
        ctaHref="/pregnancy-antenatal-care"
        ctaLabel="Explore pregnancy care"
        items={[
          { title: "Normal delivery", description: "Supportive care for vaginal birth based on individual clinical needs.", href: "/normal-vaginal-delivery" },
          { title: "VBAC counselling", description: "Understand your options after a previous Caesarean.", href: "/vbac-consultation" },
          { title: "Pregnancy care", description: "A connected place to begin antenatal care and preparation.", href: "/pregnancy-antenatal-care" },
        ]}
      />

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Clarity before the day arrives." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Your birth. Your questions. Your care."
        title="Considering natural birth? Start with a conversation."
        description="Whether you're early in pregnancy or already thinking about how you would like to give birth, you can begin by understanding your pregnancy, discussing your preferences and exploring the preparation and support available to you."
        service="Natural Birth"
        sourcePage="Natural Birth"
        submitLabel="Book a Consultation"
      />
    </>
  );
}
