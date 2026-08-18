import FadeIn from "./FadeIn";

const platforms = [
  "Meta Ads (Facebook e Instagram)",
  "Google Ads",
  "TikTok Ads",
  "YouTube Ads",
  "LinkedIn Ads",
];

const loop = [...platforms, ...platforms];

export default function Platforms() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Plataformas
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Presença estratégica
            <br className="hidden lg:block" /> onde seu cliente está
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <div className="relative overflow-hidden rounded-full border border-border bg-surface1 py-4">
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pl-10">
              {loop.map((platform, index) => (
                <span
                  key={`${platform}-${index}`}
                  className="flex items-center gap-10 text-sm font-medium text-subtle"
                >
                  {platform}
                  <span className="text-blue">&#8226;</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
