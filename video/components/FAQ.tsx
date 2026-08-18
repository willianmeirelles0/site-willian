"use client";

import { useState, type ReactNode } from "react";
import FadeIn from "./FadeIn";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: ReactNode;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-bg px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            {eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </FadeIn>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl font-light text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-blue-light" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                      {item.answer}
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
