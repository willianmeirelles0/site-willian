import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import Stats from "@/components/Stats";
import AudienceFit from "@/components/AudienceFit";
import Niches from "@/components/Niches";
import Exclusivity from "@/components/Exclusivity";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import CrossSell from "@/components/CrossSell";
import Footer from "@/components/Footer";
import { trafegoFaq } from "@/lib/faq";

const TICKER_WORDS = [
  "Estratégia",
  "Resultados",
  "Performance",
  "Precisão",
  "Dados",
  "Crescimento",
  "Conversão",
  "Leads",
];

export default function TrafegoPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Ticker words={TICKER_WORDS} />
      <Hero />
      <About />
      <Services />
      <Platforms />
      <Stats />
      <AudienceFit />
      <Niches />
      <Exclusivity />
      <FAQ
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns sobre gestão de tráfego pago"
        items={trafegoFaq}
      />
      <LeadForm
        eyebrow="Contato"
        title="Vamos falar sobre a sua estratégia"
        description="Preencha os dados abaixo e envie diretamente para o WhatsApp. A resposta é pessoal e direta."
        defaultServices={["Tráfego Pago"]}
      />
      <CrossSell
        text="Seu anúncio precisa de um vídeo que converte. Conheça a produção audiovisual profissional."
        buttonLabel="Conhecer produção audiovisual"
        href="https://video.willianmeirelles.com.br"
      />
      <Footer
        hubUrl="https://willianmeirelles.com.br"
        otherPageUrl="https://video.willianmeirelles.com.br"
        otherPageLabel="Produção audiovisual"
      />
    </main>
  );
}
