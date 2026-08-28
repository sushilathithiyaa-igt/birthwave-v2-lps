"use client";

import { useId, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Can I seek care at The Birthwave even if I'm not planning pregnancy?",
    answer:
      "Yes. The Birthwave supports women through changing stages of health and life — general gynaecology, menstrual and hormonal concerns, PCOS, pelvic health and vaginismus are all part of the care offered here, not only pregnancy and birth.",
  },
  {
    question: "What makes The Birthwave's approach different?",
    answer:
      "Care is built around continuity and the whole woman, not a single appointment or a single condition — bringing medical care together with informed decision-making and supportive care as your needs change.",
  },
  {
    question: "Can PCOS affect my periods or fertility?",
    answer:
      "PCOS can be associated with irregular periods, hormonal changes and, for some women, difficulty conceiving. An individual evaluation can help you understand how it may be affecting you.",
  },
  {
    question: "How are lifestyle, nutrition and weight discussed in PCOS or fertility care?",
    answer:
      "Where relevant to your individual health and fertility goals, lifestyle and nutrition may be discussed as part of your overall care plan — alongside, not instead of, appropriate medical evaluation.",
  },
  {
    question: "What does holistic fertility support mean?",
    answer:
      "It means combining appropriate medical evaluation with broader support for preconception health and wellbeing, rather than looking at fertility in isolation. It does not mean every fertility consultation leads to IVF.",
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
    question: "Can my newborn also receive care at The Birthwave?",
    answer:
      "Yes. The Birthwave provides pediatric care for newborns and children, including consultations, growth monitoring and vaccination support.",
  },
];

export function HomeFaqSection() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      data-od-id="faq"
      className="bg-od-paper py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container grid gap-10 bp620:gap-[55px] bp1000:grid-cols-[0.72fr_1.28fr] bp1000:gap-[100px]">
        <div className="max-w-[700px]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            Questions, answered
          </p>
          <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
            Let&rsquo;s make the next step clearer.
          </h2>
          <p className="mt-[22px] max-w-[580px] text-base text-od-muted bp620:text-[17px]">
            Have another question? Our care team will be happy to help.
          </p>
          <Link
            href="/#contact"
            className="group mt-[22px] inline-flex items-center gap-2 text-sm font-semibold text-od-ink"
          >
            Contact The Birthwave
            <span aria-hidden className="text-lg transition-transform duration-250 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="border-t border-od-line">
          {faqs.map((faq, index) => {
            const open = index === openIndex;
            return (
              <div key={faq.question} className="border-b border-od-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${uid}-panel-${index}`}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex min-h-[70px] w-full items-center justify-between gap-4 py-[18px] text-left text-base font-bold text-od-ink transition-colors hover:text-od-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-od-rose focus-visible:-outline-offset-2"
                  >
                    <span className="min-w-0 flex-1">{faq.question}</span>
                    <span
                      aria-hidden
                      className={`grid h-[27px] w-[27px] shrink-0 place-items-center font-display text-[27px] leading-none text-od-rose transition-transform duration-250 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`${uid}-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`text-[15px] text-od-muted ${open ? "pr-[42px] pb-[22px]" : ""}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
