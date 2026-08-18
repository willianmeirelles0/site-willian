export default function Ticker({ words }: { words: string[] }) {
  const loop = [...words, ...words];

  return (
    <div className="relative overflow-hidden border-b border-border bg-surface1 py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="flex items-center gap-10 text-xs font-medium uppercase tracking-[0.25em] text-muted"
          >
            {word}
            <span className="text-blue">&#8226;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
