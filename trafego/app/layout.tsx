import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willian Meirelles | Gestão de Tráfego Pago",
  description:
    "Estratégia, dados e precisão para transformar investimentos em resultados concretos. Gestão de tráfego pago para empresas que buscam crescimento previsível.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-bg font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
