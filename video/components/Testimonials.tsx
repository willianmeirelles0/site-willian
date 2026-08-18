import FadeIn from "./FadeIn";

const testimonials = [
  {
    nome: "Nome do cliente",
    empresa: "Empresa do cliente",
    texto:
      "Espaço reservado para o depoimento do cliente sobre a experiência com a produção audiovisual.",
  },
  {
    nome: "Nome do cliente",
    empresa: "Empresa do cliente",
    texto:
      "Espaço reservado para o depoimento do cliente sobre a experiência com a produção audiovisual.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Depoimentos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O que dizem os clientes
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-surface2 p-8">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
