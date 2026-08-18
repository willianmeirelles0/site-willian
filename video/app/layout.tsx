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
  title: "Willian Meirelles | Produção Audiovisual",
  description:
    "Imagem que comunica autoridade antes mesmo de você falar. Produção audiovisual profissional com Sony FX30 Cinema Line e color grading no DaVinci Resolve.",
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
