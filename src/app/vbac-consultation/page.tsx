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
  title: "VBAC Consultation",
  description:
    "Had a C-section before? Understand your options for a vaginal birth after Caesarean (VBAC) through an individual consultation at The Birthwave, Nungambakkam, Chennai.",
  alternates: { canonical: "/vbac-consultation" },
};

const conversationItems = [
  { number: "01 / BEGIN", title: "Your Previous Caesarean", description: "Why the Caesarean was needed and whether there were any complications.", feature: true, href: "#book", linkLabel: "Request a consultation" },
  { number: "02", title: "Your Previous Birth History", description: "Any previous vaginal births and your overall obstetric history are relevant to the discussion." },
  { number: "03", title: "Your Previous Medical Records", description: "Where available, records from your previous delivery can help your obstetrician understand the type of previous uterine incision." },
  { number: "04", title: "Your Current Pregnancy", description: "Your health, your baby's wellbeing and the progress of this pregnancy are considered." },
  { number: "05", title: "Your Birth Preferences", description: "Your questions, concerns and previous birth experience are part of the conversation too." },
];

const preparationItems = [
  { title: "Regular Antenatal Care", description: "Monitoring the health and progress of you and your baby." },
  { title: "Understanding Labour", description: "Learning how labour may begin and when to contact or come to the hospital." },
  { title: "Birth Preparation", description: "Discussing movement, breathing, comfort measures, pain-relief choices and birth preferences." },
  { title: "Birth Partner Preparation", description: "Helping your partner understand how they can support you." },
  { title: "Planning Ahead", description: "Understanding both the intended VBAC plan and circumstances that could require that plan to change." },
];

const faqs = [
  {
    question: "What does VBAC mean?",
    answer: "VBAC stands for Vaginal Birth After Caesarean — giving birth vaginally after having previously had a Caesarean birth.",
  },
  {
    question: "Can I have a vaginal delivery after one C-section?",
    answer: "For many women, it may be an option, but it depends on your previous Caesarean, medical and obstetric history and current pregnancy. Your obstetrician needs to assess these factors individually.",
  },
  {
    question: "Does one previous C-section mean I need another C-section?",
    answer: "Not necessarily. After a previous Caesarean, both VBAC and a planned repeat Caesarean may be options depending on your individual circumstances.",
  },
  {
    question: "When should I discuss VBAC with my doctor?",
    answer: "It is helpful to discuss your previous birth and options during pregnancy rather than waiting until labour. RCOG recommends discussing birth options during antenatal care.",
  },
  {
    question: "Will my previous C-section records be useful?",
    answer: "Yes. Information about why your previous Caesarean was performed, any complications and the type of incision made in the uterus can be relevant when assessing birth options.",
  },
  {
    question: "Can I have pain relief if I am planning a VBAC?",
    answer: "Yes. Pain-relief options can be discussed with your maternity team; RCOG specifically notes that various options, including an epidural, may be used during VBAC labour.",
  },
  {
    question: "What happens if labour does not progress as expected?",
    answer: "Your maternity team will monitor you and your baby. If circumstances change, your obstetrician may recommend changing the birth plan, which can include Caesarean delivery when clinically appropriate.",
  },
];

export default function VBACConsultationPage() {
  return (
    <>
      <InnerHero
        tone="dark"
        darkBgClassName="bg-cocoa"
        eyebrow="VBAC — Vaginal Birth After Caesarean"
        title="Had a C-Section Before? Let's Talk About Your Birth Options This Time."
        lede="Having had a Caesarean birth before does not automatically mean that every future birth must happen the same way. For some women, planning for a vaginal birth after a previous Caesarean may be an option. At Birthwave, the conversation begins by understanding you and your previous birth."
        primaryLabel="Book a VBAC Consultation"
        whatsappHref={siteConfig.whatsappHref}
        imageSrc="/images/care/postpartum-baby-feet.png"
        imageAlt="A newborn's feet resting against a mother's postpartum belly"
        badge="Individual care"
        note="VBAC suitability requires individual medical assessment."
      />

      <EditorialBand
        className="bg-blush-light"
        eyebrow="A clearer starting point"
        title="VBAC deserves more than a yes or no."
        description="VBAC stands for Vaginal Birth After Caesarean. Whether it is an appropriate option for you cannot be decided simply because you have had “one C-section.” Your obstetrician needs to consider your previous Caesarean, medical and obstetric history, and how your current pregnancy is progressing — because VBAC is an individual decision, not a rule that applies the same way to everyone."
        principles={[
          { number: "01", title: "Review", description: "Bring your previous birth history into the conversation." },
          { number: "02", title: "Understand", description: "Ask what your current pregnancy may mean for your options." },
          { number: "03", title: "Plan", description: "Make a care plan with your clinician, not a promise." },
        ]}
        imageSrc="/images/care/birth-partner-session.png"
        imageAlt="A couple in a calm, individual consultation-style conversation"
        reverse
      />

      <section className="bg-blush py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Your first conversation"
            title="“Can I Have a Vaginal Birth After My Previous C-Section?”"
            description="This is one of the most important questions to discuss with your obstetrician early in pregnancy. Your consultation may include reviewing:"
          />
          <div className="mt-12">
            <CareGrid items={conversationItems} />
          </div>
          <p className="mt-8 max-w-[720px] text-sm leading-relaxed text-muted italic">
            These are among the factors RCOG recommends considering when discussing birth after a
            previous Caesarean.
          </p>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Preparing during pregnancy"
            title="If VBAC Is an Option, Preparation Begins Before Labour"
            description="Once you and your obstetrician have discussed VBAC, preparation can continue throughout pregnancy. This may include:"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {preparationItems.map((item) => (
              <div key={item.title} className="rounded-[24px_24px_10px_24px] border border-ink/10 bg-white/70 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-mist py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            Important patient information
          </p>
          <h2 className="max-w-[700px] font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink">
            What if My Birth Plan Needs to Change?
          </h2>
          <p className="mt-6 max-w-[700px] text-[1.02rem] leading-relaxed text-muted">
            If you plan to attempt a vaginal birth after Caesarean, your maternity team will
            discuss when to come to the hospital and how you and your baby will be monitored
            during labour. Planning a VBAC does not guarantee that the baby will ultimately be born
            vaginally — sometimes labour does not progress as expected or concerns develop about
            the mother or baby. In those circumstances, the obstetric team may recommend changing
            the plan, including proceeding to a Caesarean birth when appropriate.
          </p>
          <p className="mt-5 max-w-[700px] font-display text-lg font-semibold text-ink">
            Changing the birth plan is not a failure. It is part of responding to the circumstances
            of your labour and making decisions with the wellbeing of you and your baby in mind.
          </p>
        </div>
      </section>

      <section className="bg-paper py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <p className="mb-8 max-w-[600px] text-[1.02rem] leading-relaxed text-muted">
            Your previous Caesarean is part of your medical history, but it does not by itself
            determine how your next birth must happen.
          </p>
          <DoctorTrust ctaLabel="Book a VBAC Consultation" />
        </div>
      </section>

      <RelatedCareBand
        bgClassName="bg-cocoa"
        eyebrow="Connected care"
        title="Support through pregnancy, birth &amp; recovery."
        description="Your VBAC conversation belongs inside your wider pregnancy and birth care."
        items={[
          { title: "Pregnancy & Antenatal Care", description: "Ongoing pregnancy monitoring and preparation.", href: "/pregnancy-antenatal-care" },
          { title: "Natural Birth", description: "Understand labour, birth preparation and what to expect.", href: "/natural-birth" },
          { title: "Normal Vaginal Delivery", description: "Learn about vaginal birth and birth preparation.", href: "/normal-vaginal-delivery" },
        ]}
      />

      <section className="py-[clamp(4.5rem,9vw,7.5rem)]">
        <div className="mx-auto grid w-full max-w-[1220px] gap-16 px-6 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <SectionHeading eyebrow="VBAC FAQ" title="Come with the questions you have." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <ConversionSection
        eyebrow="Take the next step"
        title="Had a Previous C-Section and Thinking About Your Next Birth?"
        description="You don't need to decide based on general information online. Bring your previous delivery records, if available, and speak with your obstetric care team about your individual pregnancy and birth options."
        service="VBAC Consultation"
        sourcePage="VBAC Consultation"
        submitLabel="Book a VBAC Consultation"
        showPreviousCesareanField
        note="VBAC suitability requires individual medical assessment."
      />
    </>
  );
}
