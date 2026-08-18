"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";
import { buildLeadMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const SERVICE_OPTIONS = [
  "Tráfego Pago",
  "Produção Audiovisual",
  "Tráfego + Vídeo",
  "Gerenciamento Completo (Tráfego + Vídeo + Gestão de Mídia + CRM)",
];

export default function LeadForm({
  eyebrow,
  title,
  description,
  defaultServices,
}: {
  eyebrow: string;
  title: string;
  description: string;
  defaultServices: string[];
}) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nicho, setNicho] = useState("");
  const [servicos, setServicos] = useState<string[]>(defaultServices);

  function toggleServico(servico: string) {
    setServicos((current) =>
      current.includes(servico)
        ? current.filter((item) => item !== servico)
        : [...current, servico]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildLeadMessage({
      nome,
      whatsapp,
      email,
      cidade,
      empresa,
      nicho,
      servicos,
    });
    window.open(buildWhatsAppUrl(message), "_blank");
  }

  const inputClasses =
    "w-full rounded-md border border-border bg-surface1 px-4 py-3 text-sm text-white placeholder:text-muted/70 outline-none transition-colors duration-200 focus:border-blue";

  return (
    <section className="border-t border-border bg-surface1/40 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface2 p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-subtle">
                Nome completo
                <input
                  required
                  className={inputClasses}
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  placeholder="Seu nome completo"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-subtle">
                WhatsApp
                <input
                  required
                  className={inputClasses}
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="(54) 99999 9999"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-subtle">
                E-mail
                <input
                  required
                  type="email"
                  className={inputClasses}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="voce@empresa.com"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-subtle">
                Cidade
                <input
                  required
                  className={inputClasses}
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  placeholder="Sua cidade"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-subtle">
                Nome da empresa
                <input
                  required
                  className={inputClasses}
                  value={empresa}
                  onChange={(event) => setEmpresa(event.target.value)}
                  placeholder="Nome da sua empresa"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-subtle">
                Nicho de atuação
                <input
                  required
                  className={inputClasses}
                  value={nicho}
                  onChange={(event) => setNicho(event.target.value)}
                  placeholder="Em que mercado sua empresa atua"
                />
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="mb-3 text-sm text-subtle">
                Serviço desejado
              </legend>
              <div className="flex flex-col gap-3">
                {SERVICE_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-start gap-3 rounded-md border border-border bg-surface1 px-4 py-3 text-sm text-subtle transition-colors duration-200 hover:border-blue/50"
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-blue"
                      checked={servicos.includes(option)}
                      onChange={() => toggleServico(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-blue px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-light"
            >
              Enviar pelo WhatsApp
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
