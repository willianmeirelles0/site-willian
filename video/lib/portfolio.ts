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
    id: "JVPuFMmX-gQ",
    embedUrl: "https://www.youtube.com/embed/JVPuFMmX-gQ",
    titulo: "LB Interiores",
    categoria: "Corporativo",
  },
  {
    id: "atCNskVh9Ao",
    embedUrl: "https://www.youtube.com/embed/atCNskVh9Ao",
    titulo: "Casa da Serra Restaurante",
    categoria: "Gastronomia",
  },
  {
    id: "XjpHuT6hwWg",
    embedUrl: "https://www.youtube.com/embed/XjpHuT6hwWg",
    titulo: "Willian Meirelles",
    categoria: "Institucional",
  },
  {
    id: "w00r73rBaJQ",
    embedUrl: "https://www.youtube.com/embed/w00r73rBaJQ",
    titulo: "Casa da Serra Restaurante",
    categoria: "Gastronomia",
  },
  {
    id: "d61CjB1xQ20",
    embedUrl: "https://www.youtube.com/embed/d61CjB1xQ20",
    titulo: "PowerX",
    categoria: "Corporativo",
  },
  {
    id: "5YXeTwuPYuk",
    embedUrl: "https://www.youtube.com/embed/5YXeTwuPYuk",
    titulo: "Casa da Serra Restaurante",
    categoria: "Gastronomia",
  },
];

export const portfolioCategories: Array<"Todos" | PortfolioCategory> = [
  "Todos",
  "Gastronomia",
  "Corporativo",
  "Institucional",
  "Produtos",
];
