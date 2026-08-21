"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="border-t border-ink/12">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div key={item.question} className="border-b border-ink/12">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-[0.95rem] font-medium text-ink"
              >
                {item.question}
                <span
                  aria-hidden
                  className={`font-display text-2xl text-rose transition-transform duration-250 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`text-[0.9rem] leading-relaxed text-muted ${open ? "pb-6 pr-8" : ""}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
