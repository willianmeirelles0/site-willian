export type PortfolioCategory =
  | "Gastronomia"
  | "Corporativo"
  | "Institucional"
  | "Produtos";

export type PortfolioItem = {
  id: string;
  embedUrl: string;
  titulo: string;
  categoria: PortfolioCategory;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "placeholder-1",
    embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    titulo: "Captação institucional, exemplo de layout",
    categoria: "Institucional",
  },
  {
    id: "placeholder-2",
    embedUrl: "https://www.youtube.com/embed/R6MlUcmOul8",
    titulo: "Captação corporativa, exemplo de layout",
    categoria: "Corporativo",
  },
];

export const portfolioCategories: Array<"Todos" | PortfolioCategory> = [
  "Todos",
  "Gastronomia",
  "Corporativo",
  "Institucional",
  "Produtos",
];
