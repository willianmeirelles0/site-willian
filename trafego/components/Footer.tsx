import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer({
  hubUrl,
  otherPageUrl,
  otherPageLabel,
}: {
  hubUrl: string;
  otherPageUrl: string;
  otherPageLabel: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-white">
              Willian Meirelles
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-muted transition-colors duration-200 hover:text-blue-light"
            >
              +55 54 99316 6996
            </a>
            <a
              href="mailto:trafego@willianmeirelles.com.br"
              className="mt-1 block text-sm text-muted transition-colors duration-200 hover:text-blue-light"
            >
              trafego@willianmeirelles.com.br
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <a
              href={hubUrl}
              className="transition-colors duration-200 hover:text-white"
            >
              Página inicial
            </a>
            <a
              href={otherPageUrl}
              className="transition-colors duration-200 hover:text-white"
            >
              {otherPageLabel}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted">
          <p>WILLIAN MEIRELLES LTDA &#8226; CNPJ 64.705.449/0001-38</p>
          <p className="mt-1">
            &#169; {year} Willian Meirelles. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
