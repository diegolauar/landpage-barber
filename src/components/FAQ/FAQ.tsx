"use client";

import { useState } from "react";
import { faqItems } from "@/config/barberShop";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
            07 — FAQ
          </p>
          <h2 className="font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
            Perguntas frequentes.
          </h2>
          <p className="mt-6 text-muted text-base leading-relaxed max-w-[24em]">
            Não encontrou sua dúvida? Fale com a gente pelo WhatsApp.
          </p>
        </div>
        <div className="border-t border-border-strong">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-border-strong">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full bg-transparent border-0 text-foreground font-sans text-lg font-bold text-left py-6 flex justify-between items-center gap-5 cursor-pointer min-h-11"
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="font-mono text-xl text-accent shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <p className="m-0 pr-0 sm:pr-10 pb-6.5 text-base leading-relaxed text-muted">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
