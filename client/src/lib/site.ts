export const ACCENT = "#C91D6E";
export const PRIMARY = "#1C1C1C";
export const MUTED_TEXT = "#5A5A5A";

export const BRAND = "JS Fisioterapia Pélvica e Bem-Estar";

export const PHONE_DISPLAY = "(11) 99220-7709";
export const WHATSAPP_NUMBER = "5511992207709";
export const EMAIL = "juschulze@gmail.com";

export const ADDRESS_LINES = [
  "Rua Américo Brasiliense, 1923, conjunto 1101",
  "Chácara Santo Antônio, São Paulo, SP",
];
export const ADDRESS_QUERY =
  "Rua Américo Brasiliense, 1923, Chácara Santo Antônio, São Paulo, SP";

export function whatsappLink(message = "Olá! Gostaria de agendar uma avaliação na JS Fisioterapia Pélvica e Bem-Estar.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const NAV_ITEMS = [
  { id: "sobre", label: "Sobre" },
  { id: "equipe", label: "Equipe" },
  { id: "atuacao", label: "Atuação" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "faq", label: "FAQ" },
  { id: "agendar", label: "Agendar" },
  { id: "contato", label: "Contato" },
];
