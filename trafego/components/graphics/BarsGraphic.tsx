export default function BarsGraphic({ className }: { className?: string }) {
  const bars = [60, 100, 80, 140, 110, 170];

  return (
    <svg
      className={className}
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {bars.map((height, index) => (
        <rect
          key={index}
          x={index * 52 + 10}
          y={200 - height}
          width="28"
          height={height}
          rx="3"
          fill="#3B82F6"
          opacity={0.08 + index * 0.03}
        />
      ))}
    </svg>
  );
}
