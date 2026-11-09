export default function HeroCore() {
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full overflow-visible" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3F3F1" stopOpacity=".22" />
          <stop offset="38%" stopColor="#84A4B1" stopOpacity=".12" />
          <stop offset="100%" stopColor="#84A4B1" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle data-core-glow cx="210" cy="210" r="175" fill="url(#coreGlow)" />

      <g data-core-rings stroke="#84A4B1" fill="none">
        <circle cx="210" cy="210" r="132" strokeOpacity=".13" />
        <circle cx="210" cy="210" r="94" strokeOpacity=".22" strokeDasharray="2 8" />
        <circle cx="210" cy="210" r="54" strokeOpacity=".34" />
      </g>

      <g data-core-axes stroke="#84A4B1" strokeOpacity=".18">
        <path d="M210 35 V385" />
        <path d="M35 210 H385" />
        <path d="M86 86 L334 334" />
        <path d="M334 86 L86 334" />
      </g>

      <g data-core-mark>
        <path d="M210 142 L270 199 L210 254 L150 199 Z" stroke="#F3F3F1" strokeOpacity=".72" strokeWidth="1.4" />
        <path d="M210 164 L246 199 L210 232 L174 199 Z" stroke="#84A4B1" strokeOpacity=".8" strokeWidth="1.3" />
        <circle cx="210" cy="199" r="5" fill="#84A4B1" />
      </g>

      <g data-core-ticks stroke="#84A4B1" strokeOpacity=".48">
        <path d="M210 66 V80" /><path d="M210 340 V354" />
        <path d="M66 210 H80" /><path d="M340 210 H354" />
      </g>
    </svg>
  );
}
