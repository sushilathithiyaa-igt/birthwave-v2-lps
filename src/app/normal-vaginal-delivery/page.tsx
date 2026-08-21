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
  title: "Normal Vaginal Delivery",
  description:
    "Preparing for a normal vaginal delivery — antenatal care, birth preparation, labour support and post-delivery recovery at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/normal-vaginal-delivery" },
};

const preparationItems = [
  { number: "01 / PREPARE", title: "Antenatal Care", description: "Regular pregnancy check-ups help monitor the health and progress of both mother and baby.", feature: true, href: "#book", linkLabel: "Book a conversation" },
  { number: "02", title: "Birth Preparation", description: "Understand labour, contractions, when to come to the hospital and what you may experience during different stages of labour." },
  { number: "03", title: "Movement & Exercise", description: "Where medically appropriate, movement, pregnancy yoga and suitable exercises may form part of your pregnancy and birth preparation." },
  { number: "04", title: "Nutrition", description: "Receive guidance on nutrition and healthy habits throughout pregnancy." },
  { number: "05", title: "Childbirth Education", description: "Learn about labour, birth positions, breathing, comfort measures, pain-relief choices and the role of your birth partner." },
];

const preferences = [
  "Movement and positions during labour",
  "Breathing and relaxation techniques",
  "Pain-relief options",
  "Birth-partner involvement",
  "Immediate care after birth",
  "Breastfeeding and lactation support",
  "Postpartum recovery",
];

const faqs = [
  {
    question: "What is a normal vaginal delivery?",
    answer: "It is childbirth through the vagina rather than by Caesarean section. Labour and delivery can differ from one woman to another.",
  },
  {
    question: "Can I prepare for a normal vaginal delivery during pregnancy?",
    answer: "Yes. Antenatal care, childbirth education and discussions about movement, nutrition, labour, comfort measures and birth preferences can help you prepare. What is appropriate for you should be discussed with your healthcare team.",
  },
  {
    question: "When should I start preparing for childbirth?",
    answer: "You can begin discussing birth preparation during your antenatal visits rather than waiting until the final weeks of pregnancy.",
  },
  {
    question: "Can my birth partner be involved?",
    answer: "Birth partners can play an important role in emotional and practical support. Discuss Birthwave's current labour-room arrangements with your care team.",
  },
  {
    question: "What pain-relief options are available during vaginal delivery?",
    answer: "Different pain-management options may be available during labour. Your doctor and maternity team can explain which options are appropriate and available to you.",
  },
  {
    question: "Does planning for vaginal delivery mean I will definitely have one?",
    answer: "No. Labour cannot be predicted completely. Your care team monitors you and your baby and may recommend a change in the birth plan if clinically necessary.",
  },
  {
    question: "What is the difference between normal vaginal delivery and natural birth?",
    answer: "Normal vaginal delivery describes the route of birth — the baby is born through the vagina. “Natural birth” is commonly used to describe an approach that aims to allow labour and birth to progress physiologically with fewer interventions where appropriate. Because the term “natural birth” can mean different things to different people, discuss your preferences with your doctor.",
  },
];

export default function NormalVaginalDeliveryPage() {
  return (
    <>
      <InnerHero
        eyebrow="Normal Vaginal Delivery"
        title="Preparing for a Normal Vaginal Delivery"
        lede="Every pregnancy and every labour is different. At Birthwave, we help you understand your pregnancy, prepare for labour and discuss your preferences for birth with your care team. From antenatal care and birth preparation to labour support and post-delivery recovery, our approach brings each stage of your maternity journey together."
        primaryLabel="Book an Appointment"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/childbirth-workshop-01.png"
        imageAlt="A pregnant woman being supported through a labour positioning technique during a workshop"
        badge="Care, not a promise"
        note="Birth plans depend on your individual pregnancy and may change if medically required."
      />

      <EditorialBand
        className="bg-sky-mist"
        eyebrow="Understanding normal vaginal delivery"
        title="What is a normal vaginal delivery?"
        description="A normal vaginal delivery means giving birth to your baby through the vagina rather than through a Caesarean section. Labour usually involves contractions, gradual opening of the cervix and the baby's movement through the birth canal. How labour begins, progresses and ultimately leads to delivery can be different for every woman. Your doctor monitors your pregnancy and labour and discusses care according to your individual circumstances."
        principles={[
          { number: "01", title: "Early Labour", description: "Contractions begin and the cervix gradually starts to change." },
          { number: "02", title: "Established Labour", description: "Contractions generally become stronger and more regular as the cervix continues to open." },
          { number: "03", title: "Birth & After", description: "As labour progresses, you are guided through the birth of your baby and the immediate care that follows." },
        ]}
        imageSrc="/images/care/childbirth-workshop-02.png"
        imageAlt="A care team member demonstrating a labour support position during a childbirth workshop"
      />

      <section className="bg-sand py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Preparing for birth"
            title="Preparing for Vaginal Birth Starts During Pregnancy"
            description="Birth preparation is not something that needs to begin only when labour starts. During pregnancy, your care team can help you understand what to expect and prepare physically and emotionally for childbirth."
          />
          <div className="mt-12">
            <CareGrid items={preparationItems} />
          </div>
          <p className="mt-8 max-w-[720px] text-sm leading-relaxed text-muted italic">
            WHO&apos;s patient-centred childbirth guidance supports clear communication, pain-relief
            strategies, mobility during labour and a companion of choice as important elements of
            quality maternity care, subject to the woman&apos;s circumstances and healthcare setting.
          </p>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Your birth experience"
            title="Your Preferences Matter"
            description="Birth preparation is also an opportunity to talk openly about what matters to you. Depending on your pregnancy, labour and the clinical situation, discussions may include:"
          />
          <ul className="mt-8 grid max-w-[720px] gap-3.5 sm:grid-cols-2">
            {preferences.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="text-sky">●</span>
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Your preferences are discussed alongside the wellbeing of you and your baby.
          </p>
        </div>
      </section>

      <section className="bg-sky-mist py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            Important clinical section
          </p>
          <h2 className="max-w-[700px] font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink">
            What if Labour Does Not Go as Planned?
          </h2>
          <p className="mt-6 max-w-[680px] text-[1.02rem] leading-relaxed text-muted">
            A birth plan is a guide, not a prediction of exactly how labour will unfold. Sometimes
            labour may progress differently than expected or a medical concern may arise. Your
            obstetric and maternity team will explain what is happening and discuss the appropriate
            next steps with you — this may include additional monitoring, assistance during vaginal
            birth or Caesarean birth when clinically required.
          </p>
          <p className="mt-5 max-w-[680px] font-display text-lg font-semibold text-ink">
            The goal is safe, respectful and appropriate care for both mother and baby — not
            achieving one particular type of birth at any cost.
          </p>
        </div>
      </section>

      <section className="bg-paper py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <DoctorTrust ctaLabel="Meet Our Care Team" />
        </div>
      </section>

      <RelatedCareBand
        eyebrow="Connected care"
        title="Care beyond the delivery room."
        description="Birthwave's maternity care can connect your pregnancy, childbirth and recovery journey."
        items={[
          { title: "Pregnancy & Antenatal Care", description: "Regular pregnancy monitoring and guidance.", href: "/pregnancy-antenatal-care" },
          { title: "Natural Birth", description: "Preparation for an informed, low-intervention approach where appropriate.", href: "/natural-birth" },
          { title: "VBAC Consultation", description: "Understand your options after a previous Caesarean.", href: "/vbac-consultation" },
        ]}
      />

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <SectionHeading eyebrow="Normal delivery FAQ" title="Frequently asked questions about normal vaginal delivery." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Final step"
        title="Thinking About a Normal Vaginal Delivery?"
        description="Start the conversation during pregnancy. Meet the Birthwave team to discuss your pregnancy, birth preparation and preferences."
        service="Normal Vaginal Delivery"
        sourcePage="Normal Vaginal Delivery"
        submitLabel="Discuss Your Birth Plan"
        note="Birth plans depend on your individual pregnancy and may change if medically required."
      />
    </>
  );
}
