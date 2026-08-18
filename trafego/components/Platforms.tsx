import FadeIn from "./FadeIn";

const platforms = [
  "Meta Ads (Facebook e Instagram)",
  "Google Ads",
  "TikTok Ads",
  "YouTube Ads",
  "LinkedIn Ads",
];

export default function Platforms() {
  return (
    <section className="border-b border-border bg-surface1/30 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <FadeIn className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            Plataformas
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Presença estratégica onde seu cliente está
          </h2>
        </FadeIn>

        <div className="mt-14 flex flex-wrap gap-4">
          {platforms.map((platform, index) => (
            <FadeIn key={platform} delay={index * 0.06}>
              <span className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-subtle transition-colors duration-300 hover:border-blue/50 hover:text-white">
                {platform}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
