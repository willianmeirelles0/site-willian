"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import { portfolioCategories, portfolioItems } from "@/lib/portfolio";
import FilmStripGraphic from "./graphics/FilmStripGraphic";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof portfolioCategories)[number]>("Todos");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "Todos" || item.categoria === activeCategory
  );

  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [activeCategory]);

  function scrollByAmount(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: direction * 300, behavior: "smooth" });
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-border px-6 py-24 sm:px-10 sm:py-32">
      <FilmStripGraphic className="pointer-events-none absolute -right-6 top-0 -z-10 hidden h-full w-[80px] opacity-70 lg:block" />
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Portfólio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trabalhos em produção
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Uma seleção de trabalhos entregues. Novas peças são adicionadas
            aqui conforme os projetos são concluídos.
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

        <FadeIn delay={0.15} className="mt-12">
          <div
            ref={scrollerRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="w-[210px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface1 sm:w-[250px]"
              >
                <div className="aspect-[9/16] w-full">
                  <iframe
                    src={item.embedUrl}
                    title={item.titulo}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-blue-light">
                    {item.categoria}
                  </span>
                  <h3 className="mt-2 text-sm font-medium text-white">
                    {item.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Vídeo anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white transition-colors duration-200 hover:border-blue hover:text-blue-light"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Próximo vídeo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white transition-colors duration-200 hover:border-blue hover:text-blue-light"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
