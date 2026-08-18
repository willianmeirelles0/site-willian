import FadeIn from "./FadeIn";

const steps = [
  {
    title: "Captação",
    description:
      "Sony FX30 Cinema Line com perfil S-Log3, preservando o máximo de informação de luz e cor.",
  },
  {
    title: "Color Grading",
    description:
      "Tratamento profissional no DaVinci Resolve, construindo atmosfera, identidade e emoção em cada frame.",
  },
  {
    title: "Entrega",
    description:
      "Vídeos otimizados para cada plataforma, Instagram, YouTube, apresentações corporativas e campanhas de tráfego.",
  },
];

export default function Process() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Processo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Do S-Log3 ao resultado final
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface2 p-8">
                <span className="text-sm font-medium text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
