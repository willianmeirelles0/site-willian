import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import BarsGraphic from "./graphics/BarsGraphic";

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border px-6 py-24 sm:px-10 sm:py-32">
      <BarsGraphic className="pointer-events-none absolute -bottom-6 -left-10 -z-10 hidden h-[200px] w-[320px] lg:block" />
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Números
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados que sustentam a estratégia
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn>
            <div className="border-t border-border pt-6">
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                +<AnimatedCounter value={1} prefix="R$" suffix=" Milhão" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                em verba de tráfego gerenciada para clientes recorrentes
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-t border-border pt-6">
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={800} suffix="%" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                ROI médio entregue nas campanhas geridas
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t border-border pt-6">
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                empresas atendidas
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-t border-border pt-6">
              <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={9} prefix="R$" suffix=" Milhões" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                movimentados em faturamento para clientes
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
