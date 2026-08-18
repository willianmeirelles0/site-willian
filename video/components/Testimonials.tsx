import FadeIn from "./FadeIn";

const testimonials = [
  {
    nome: "Jerônimo Monticelli",
    empresa: "Consultor financeiro",
    texto: "Superou as minhas expectativas.",
  },
  {
    nome: "Andriele Dias",
    empresa: "Casa da Serra Restaurante",
    texto: "Estão de parabéns. O material realmente ficou incrível.",
  },
];

const loop = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-surface1/30 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O que dizem os clientes
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} className="mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-6 pl-6 sm:pl-10">
          {loop.map((testimonial, index) => (
            <div
              key={`${testimonial.nome}-${index}`}
              className="flex w-[320px] shrink-0 flex-col justify-between gap-8 rounded-2xl border border-border bg-surface2 p-8 sm:w-[380px]"
            >
              <p className="text-lg leading-relaxed text-subtle">
                &ldquo;{testimonial.texto}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-white">
                  {testimonial.nome}
                </p>
                <p className="text-sm text-muted">{testimonial.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
