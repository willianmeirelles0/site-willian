"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { portfolioCategories, portfolioItems } from "@/lib/portfolio";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof portfolioCategories)[number]>("Todos");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "Todos" || item.categoria === activeCategory
  );

  return (
    <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Portfólio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trabalhos em produção
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Estrutura de portfólio pronta para receber os vídeos finais. As
            peças abaixo demonstram o layout de exibição.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "border-blue bg-blue text-white"
                  : "border-border text-muted hover:border-blue/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface1">
                <div className="aspect-video w-full">
                  <iframe
                    src={item.embedUrl}
                    title={item.titulo}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-blue-light">
                    {item.categoria}
                  </span>
                  <h3 className="mt-2 text-base font-medium text-white">
                    {item.titulo}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
