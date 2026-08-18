export default function FilmStripGraphic({ className }: { className?: string }) {
  const holes = Array.from({ length: 6 });

  return (
    <svg
      className={className}
      viewBox="0 0 120 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="30" y1="0" x2="30" y2="480" stroke="#3B82F6" strokeWidth="1" opacity="0.14" />
      <line x1="90" y1="0" x2="90" y2="480" stroke="#3B82F6" strokeWidth="1" opacity="0.14" />
      {holes.map((_, index) => (
        <rect
          key={index}
          x="10"
          y={20 + index * 80}
          width="16"
          height="24"
          rx="3"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.2"
        />
      ))}
      {holes.map((_, index) => (
        <rect
          key={`r-${index}`}
          x="94"
          y={20 + index * 80}
          width="16"
          height="24"
          rx="3"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.2"
        />
      ))}
    </svg>
  );
}
