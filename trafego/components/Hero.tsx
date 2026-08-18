"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="border-b border-border px-6 py-24 sm:px-10 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-content">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Estratégia, dados e precisão para transformar investimentos em
          resultados concretos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Posicionamento digital pensado para empresas que entendem que
          crescimento não vem de fórmulas mágicas, mas de processos
          consistentes e parcerias estratégicas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md bg-blue px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-light"
          >
            Quero performar minha empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
