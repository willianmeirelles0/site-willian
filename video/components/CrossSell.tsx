import FadeIn from "./FadeIn";

export default function CrossSell({
  text,
  buttonLabel,
  href,
}: {
  text: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="border-b border-border px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-content">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-border bg-surface2 p-10 sm:p-14 lg:flex-row lg:items-center">
            <p className="max-w-xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              {text}
            </p>
            <a
              href={href}
              className="inline-flex shrink-0 items-center gap-3 rounded-md border border-border px-7 py-4 text-sm font-medium text-white transition-colors duration-200 hover:border-blue hover:text-blue-light"
            >
              {buttonLabel}
              <span>&#8594;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
