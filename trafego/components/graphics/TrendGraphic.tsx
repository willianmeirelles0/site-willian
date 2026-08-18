export default function TrendGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 340 L140 260 L260 300 L380 160 L500 200 L620 60"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      <path
        d="M20 340 L140 260 L260 300 L380 160 L500 200 L620 60 L620 420 L20 420 Z"
        fill="url(#trend-fade)"
        opacity="0.1"
      />
      <circle cx="140" cy="260" r="5" fill="#3B82F6" opacity="0.45" />
      <circle cx="380" cy="160" r="5" fill="#3B82F6" opacity="0.5" />
      <circle cx="620" cy="60" r="6" fill="#3B82F6" opacity="0.65" />
      <defs>
        <linearGradient id="trend-fade" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#3B82F6" stopOpacity="0.7" />
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
