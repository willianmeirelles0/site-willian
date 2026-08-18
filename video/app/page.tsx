import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Equipment from "@/components/Equipment";
import Niches from "@/components/Niches";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import CrossSell from "@/components/CrossSell";
import Footer from "@/components/Footer";
import { videoFaq } from "@/lib/faq";

const TICKER_WORDS = [
  "Audiovisual",
  "Cinema",
  "Color Grading",
  "Sony FX30",
  "DaVinci Resolve",
  "Imagem",
  "Autoridade",
  "Identidade",
];

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Ticker words={TICKER_WORDS} />
      <Hero />
      <Process />
      <Portfolio />
      <Equipment />
      <Niches />
      <Testimonials />
      <FAQ
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns sobre a produção audiovisual"
        items={videoFaq}
      />
      <LeadForm
        eyebrow="Contato"
        title="Vamos falar sobre a sua produção"
        description="Preencha os dados abaixo e envie diretamente para o WhatsApp. A resposta é pessoal e direta."
        defaultServices={["Produção Audiovisual"]}
      />
      <CrossSell
        text="Um vídeo poderoso merece uma distribuição estratégica. Conheça a gestão de tráfego pago."
        buttonLabel="Conhecer gestão de tráfego"
        href="https://trafego.willianmeirelles.com.br"
      />
      <Footer
        hubUrl="https://willianmeirelles.com.br"
        otherPageUrl="https://trafego.willianmeirelles.com.br"
        otherPageLabel="Gestão de tráfego pago"
      />
    </main>
  );
}
