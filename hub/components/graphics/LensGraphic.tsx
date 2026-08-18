export default function LensGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="240" cy="240" r="200" stroke="#3B82F6" strokeWidth="1" opacity="0.12" />
      <circle cx="240" cy="240" r="150" stroke="#3B82F6" strokeWidth="1" opacity="0.16" />
      <circle cx="240" cy="240" r="100" stroke="#3B82F6" strokeWidth="1" opacity="0.22" />
      <circle cx="240" cy="240" r="52" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
      <path d="M222 205 L278 240 L222 275 Z" fill="#3B82F6" opacity="0.4" />
    </svg>
  );
}
