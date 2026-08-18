export const WHATSAPP_NUMBER = "5554993166996";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type LeadFormData = {
  nome: string;
  whatsapp: string;
  email: string;
  cidade: string;
  empresa: string;
  nicho: string;
  servicos: string[];
};

export function buildLeadMessage(data: LeadFormData) {
  const lines = [
    "Olá! Preenchi o formulário no site e gostaria de mais informações, por favor.",
    "",
    `Nome completo: ${data.nome}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    `Cidade: ${data.cidade}`,
    `Empresa: ${data.empresa}`,
    `Nicho de atuação: ${data.nicho}`,
    `Serviço desejado: ${data.servicos.length ? data.servicos.join(", ") : "Não informado"}`,
  ];

  return lines.join("\n");
}
