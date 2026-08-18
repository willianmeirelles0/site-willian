import FadeIn from "./FadeIn";

const niches = [
  "Gastronomia",
  "Saúde e Estética",
  "Mercado Imobiliário",
  "Construtoras",
  "Lojas de Móveis Planejados",
  "Odontologia",
  "Finanças",
  "Varejo",
  "Palestrantes e Mentores",
  "Feiras de Negócios",
  "Indústrias",
  "Energia Solar",
  "Vinícolas",
  "Profissionais que entendem que imagem constrói autoridade",
];

export default function Niches() {
  return (
    <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Nichos atendidos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Setores que já confiam na estratégia
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-wrap gap-3">
          {niches.map((niche, index) => (
            <FadeIn key={niche} delay={index * 0.04}>
              <span className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm text-subtle transition-colors duration-300 hover:border-blue/50 hover:text-white">
                {niche}
              </span>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 max-w-2xl">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Não trabalho focado em um único nicho de mercado. O critério que
            importa é outro: empresas dispostas a mudar a forma como enxergam
            o marketing e a estruturar resultados concretos.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
