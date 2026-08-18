import FadeIn from "./FadeIn";

const services = [
  {
    title: "Diagnóstico Estratégico",
    description:
      "Compreensão profunda do negócio, objetivos e mercado para definir oportunidades reais de expansão.",
  },
  {
    title: "Planejamento Sob Medida",
    description:
      "Estruturação de campanhas orientadas a performance, alinhadas ao posicionamento do cliente.",
  },
  {
    title: "Execução Profissional",
    description:
      "Operacionalização de cada campanha com foco em precisão, ajustes contínuos e dados em tempo real.",
  },
  {
    title: "Inteligência Analítica",
    description:
      "Monitoramento constante transformando métricas em decisões estratégicas.",
  },
  {
    title: "Relatórios e Transparência",
    description:
      "Relatórios claros e objetivos para acompanhar o impacto de cada investimento.",
  },
];

export default function Services() {
  return (
    <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Serviços
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Um processo completo, do diagnóstico ao resultado
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-4 bg-surface1 p-8 transition-colors duration-300 hover:bg-surface2">
                <span className="text-sm font-medium text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
