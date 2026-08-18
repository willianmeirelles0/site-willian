"use client";

import { motion } from "framer-motion";

const TRAFEGO_URL = "https://trafego.willianmeirelles.com.br";
const VIDEO_URL = "https://video.willianmeirelles.com.br";

const banners = [
  {
    href: TRAFEGO_URL,
    label: "Gestão de Tráfego Pago",
    phrase:
      "Estratégia, dados e precisão para transformar investimentos em resultados concretos.",
  },
  {
    href: VIDEO_URL,
    label: "Produção Audiovisual",
    phrase: "Imagem que comunica autoridade antes mesmo de você falar.",
  },
];

export default function HubPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center py-14 sm:py-20"
      >
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Willian Meirelles
        </h1>
      </motion.header>

      <div className="flex flex-1 flex-col md:flex-row">
        {banners.map((banner, index) => (
          <motion.a
            key={banner.href}
            href={banner.href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: "easeOut" }}
            className="group relative flex min-h-[46vh] flex-1 flex-col justify-between border-t border-border p-10 transition-colors duration-300 hover:bg-surface1 sm:p-14 md:min-h-screen md:border-t-0 md:p-16"
            style={
              index === 0
                ? { borderRight: "1px solid rgba(255,255,255,0.07)" }
                : undefined
            }
          >
            <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-blue/40" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="max-w-md">
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {banner.label}
              </h2>
              <p className="text-base leading-relaxed text-subtle sm:text-lg">
                {banner.phrase}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-muted transition-colors duration-300 group-hover:text-blue-light">
              <span>Acessar</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                &#8594;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
