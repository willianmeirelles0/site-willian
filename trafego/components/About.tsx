import FadeIn from "./FadeIn";

const paragraphs = [
  "Nos últimos anos, dediquei-me ao marketing digital com um propósito claro: ajudar empresas a transformar publicidade online em crescimento real. Minha atuação não se limita a subir campanhas, mas a compreender cada detalhe do negócio e traduzi-lo em estratégias consistentes, orientadas a dados e resultados.",
  "Sou mais do que um gestor: sou parceiro estratégico. Acompanho de perto, ajusto com precisão e trabalho lado a lado para garantir clareza, previsibilidade e performance sustentável. Minha atuação é seletiva porque acredito que excelência exige envolvimento genuíno.",
];

export default function About() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Sobre
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prazer, sou Willian
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph.slice(0, 24)} delay={0.1 + index * 0.1}>
              <p className="text-base leading-relaxed text-subtle sm:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
