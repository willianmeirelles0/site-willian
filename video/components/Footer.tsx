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
  return (
    <footer className="px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-base font-semibold text-white">
            Willian Meirelles
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-muted transition-colors duration-200 hover:text-blue-light"
          >
            +55 54 99316 6996
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
    </footer>
  );
}
