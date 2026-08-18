import FadeIn from "./FadeIn";

const specs = [
  "Sensor BSI Exmor R APS-C",
  "4K 120fps",
  "S-Log3 + S-Cinetone",
  "Dual ISO nativo 800 e 2500",
  "Color Grading no DaVinci Resolve",
  "Entrega em Rec.709 para máxima fidelidade de cor",
];

export default function Equipment() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Equipamento
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sony FX30 Cinema Line
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Uma câmera de cinema desenhada para capturar imagem com
            profundidade e fidelidade de cor, base para um processo de
            pós-produção profissional.
          </p>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {specs.map((spec, index) => (
            <FadeIn key={spec} delay={index * 0.06}>
              <div className="flex h-full items-center bg-surface1 p-6">
                <p className="text-sm font-medium text-subtle sm:text-base">
                  {spec}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
