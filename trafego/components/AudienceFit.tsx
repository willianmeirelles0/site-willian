import FadeIn from "./FadeIn";

const items = [
  "Busca aumentar o faturamento de forma previsível",
  "Valoriza relatórios claros",
  "Entende que crescimento vem de estratégias profissionais",
  "Deseja atrair clientes qualificados",
  "Está cansado de investir em anúncios sem retorno",
  "Quer escalar resultados com eficiência",
];

export default function AudienceFit() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Para quem é
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A gestão de performance digital é perfeita para você que
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={item} delay={index * 0.06}>
              <div className="flex h-full items-start gap-4 bg-surface1 p-7">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                <p className="text-base leading-relaxed text-subtle">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
