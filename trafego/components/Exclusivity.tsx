import FadeIn from "./FadeIn";

export default function Exclusivity() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Exclusividade
          </span>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            Minha atuação é seletiva: atendo preferencialmente empresas
            indicadas ou que compreendem que resultados consistentes são
            fruto de estratégia, processos e parceria sólida, não de
            promessas vazias.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
