import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CareGrid } from "@/components/CareGrid";
import { DoctorTrust } from "@/components/DoctorTrust";
import { RelatedCareBand } from "@/components/RelatedCareBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ConversionSection } from "@/components/ConversionSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pregnancy & Antenatal Care",
  description:
    "Personalised pregnancy care from your first visit to birth. Antenatal consultations, monitoring, nutrition and birth preparation at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/pregnancy-antenatal-care" },
};

const careItems = [
  {
    number: "01 / CORE CARE",
    title: "Regular Antenatal Consultations",
    description: "Ongoing consultations to monitor your pregnancy, discuss symptoms and answer questions as they arise.",
    feature: true,
    href: "#book",
    linkLabel: "Plan your consultation",
  },
  {
    number: "02",
    title: "Scans, Tests & Monitoring",
    description: "Recommended scans, screenings and tests explained clearly, so you understand what is being checked and why.",
  },
  {
    number: "03",
    title: "Nutrition During Pregnancy",
    description: "Practical nutritional guidance to support your health and your baby's development throughout pregnancy.",
  },
  {
    number: "04",
    title: "Movement & Pregnancy Yoga",
    description: "Appropriate movement and yoga based on your stage of pregnancy and individual needs.",
  },
  {
    number: "05",
    title: "Birth Preparation",
    description: "Start understanding labour, delivery choices, breathing, movement and birth preferences well before your due date.",
  },
];

const journey = [
  { title: "Early Pregnancy", description: "Confirming and understanding your pregnancy, reviewing your health history, planning initial tests and scans, and discussing the questions that naturally come with the first few weeks." },
  { title: "As Your Pregnancy Progresses", description: "Regular consultations, monitoring your health and your baby's growth, reviewing scans and tests, and supporting nutrition, movement and overall wellbeing." },
  { title: "Preparing for Birth", description: "As you move closer to delivery, conversations increasingly focus on labour, birth preferences, physical preparation, breastfeeding preparation and what to expect around delivery." },
  { title: "Towards Delivery", description: "Your doctor reviews how your pregnancy is progressing and discusses the safest and most appropriate birth options with you." },
];

const approachItems = [
  { title: "Pregnancy & medical care", description: "Doctor-led antenatal monitoring and guidance." },
  { title: "Nutrition", description: "Support for changing nutritional needs through pregnancy." },
  { title: "Yoga & movement", description: "Pregnancy-appropriate movement and physical preparation." },
  { title: "Childbirth preparation", description: "Understanding labour, birth choices and what to expect." },
  { title: "Pelvic health & recovery preparation", description: "Preparing the body for birth and the recovery that follows." },
  { title: "Lactation preparation", description: "Beginning breastfeeding education before your baby arrives." },
];

const faqs = [
  {
    question: "When should I have my first pregnancy or antenatal appointment?",
    answer:
      "You can contact an obstetrician once you know you are pregnant. Your first antenatal visit helps confirm and understand your pregnancy, review your medical history, discuss any symptoms or concerns, and plan the scans and tests you may need.",
  },
  {
    question: "What is antenatal care and why is it important during pregnancy?",
    answer:
      "Antenatal care is the regular medical care and support you receive during pregnancy before your baby is born. It includes check-ups to monitor your health and your baby's growth, along with appropriate scans, tests and screenings, and an opportunity to discuss nutrition, activity, warning signs and preparation for birth.",
  },
  {
    question: "What is the difference between normal delivery and natural birth?",
    answer:
      "Both usually involve giving birth vaginally, but the approach to labour and pain management may be different. Normal delivery generally means vaginal birth and may include medical support or pain-relief options such as an epidural when needed or chosen. Natural birth generally aims to allow labour and vaginal birth to progress with minimal medical intervention where possible and clinically appropriate.",
  },
  {
    question: "When should I start preparing for a normal delivery or natural birth?",
    answer:
      "Birth preparation can begin during pregnancy rather than waiting until labour or the final few weeks, and can include understanding labour, discussing your birth preferences, staying appropriately active, breathing and relaxation techniques, and childbirth education.",
  },
  {
    question: "Can I have a normal delivery after a previous C-section?",
    answer:
      "For some women, a vaginal birth after a previous C-section may be possible. This is known as VBAC — Vaginal Birth After Caesarean. Whether VBAC is appropriate depends on factors such as the reason for your previous C-section, your previous birth history and the health of you and your baby.",
  },
  {
    question: "Does Birthwave provide nutrition, yoga and birth preparation along with antenatal care?",
    answer:
      "Yes. Depending on your individual needs, your care may include nutrition guidance, pregnancy yoga and movement, childbirth education, birth preparation, pelvic health support and lactation guidance, alongside your regular antenatal care.",
  },
  {
    question: "What does holistic pregnancy care mean?",
    answer:
      "Holistic pregnancy care means caring for you as a whole person during pregnancy — not only monitoring your baby's growth or completing routine tests, but also considering nutrition, movement, emotional wellbeing, childbirth preparation and breastfeeding preparation.",
  },
];

export default function PregnancyAntenatalCarePage() {
  return (
    <>
      <InnerHero
        eyebrow="Pregnancy & Antenatal Care"
        title="Personalised pregnancy care, from your first visit to birth."
        lede="Every pregnancy brings different questions, changes and decisions. At Birthwave, your antenatal care combines regular medical guidance with nutrition, movement, birth preparation and continuous support throughout your pregnancy."
        primaryLabel="Book an Appointment"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/birth-partner-session.png"
        imageAlt="A pregnant woman and her partner in a calm antenatal preparation session"
        badge="Care that grows with you"
      />

      <section className="bg-sky-mist py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What your pregnancy care includes"
            title="Care that grows with your pregnancy."
            description="Your needs change as your pregnancy progresses. Your antenatal care is planned around each stage, with time to understand your health, your baby's development and how you can prepare for the months ahead."
          />
          <div className="mt-12">
            <CareGrid items={careItems} />
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Pregnancy journey" title="What care can look like through your pregnancy." />
          <div className="mt-12 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => (
              <div key={step.title}>
                <span className="font-display text-lg text-rose">{`0${index + 1}`}</span>
                <h3 className="mt-2.5 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <DoctorTrust ctaLabel="Meet Dr. Santoshi" />
        </div>
      </section>

      <section className="bg-sand py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Birthwave approach"
            title="Pregnancy care is more than appointments and scans."
            description="Medical care is at the centre of your pregnancy journey, but how you eat, move, prepare, understand your body and feel emotionally also matters."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approachItems.map((item) => (
              <div key={item.title} className="rounded-[24px_24px_10px_24px] bg-white/70 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedCareBand
        eyebrow="Thinking about how you want to give birth?"
        title="Pregnancy is also the time to begin understanding your birth options."
        description="Your doctor can discuss what may be appropriate for you as your pregnancy progresses."
        items={[
          { title: "Normal Delivery", description: "Understand vaginal birth, preparation for labour and the factors that influence your birth plan.", href: "/normal-vaginal-delivery" },
          { title: "Natural Birth", description: "Learn about Birthwave's approach to preparation, informed choices, movement and lower-intervention birth where appropriate.", href: "/natural-birth" },
          { title: "VBAC", description: "Had a previous C-section? Learn how VBAC is assessed and what preparing for a vaginal birth after caesarean can involve.", href: "/vbac-consultation" },
        ]}
      />

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <SectionHeading eyebrow="Questions, answered" title="Let's make the next step clearer." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Begin your care journey"
        title="Start your pregnancy journey with Birthwave."
        description="Whether you've just found out you're pregnant or you're looking for continued antenatal care, speak with the Birthwave team about your next appointment."
        service="Pregnancy & Antenatal Care"
        sourcePage="Pregnancy & Antenatal Care"
        submitLabel="Book an Appointment"
        showStageField
      />
    </>
  );
}
