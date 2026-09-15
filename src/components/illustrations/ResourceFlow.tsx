export function ResourceFlow() {
  return (
    <svg viewBox="0 0 560 380" role="img" aria-label="Schemat przepływu surowców między polem, magazynem i warsztatem">
      <rect width="560" height="380" fill="#151b15" rx="16" />

      {/* pole uprawne */}
      <g transform="translate(60,70)">
        <rect x="0" y="0" width="140" height="90" rx="6" fill="#1d251d" stroke="#384a38" />
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1={10 + i * 26} y1="10" x2={10 + i * 26} y2="80" stroke="#c9a34b" strokeWidth="3" opacity="0.65" />
        ))}
        <text x="70" y="112" textAnchor="middle" fill="#ece0c6" fontSize="14" opacity="0.8">
          Pole uprawne
        </text>
      </g>

      {/* magazyn */}
      <g transform="translate(240,50)">
        <rect x="0" y="30" width="100" height="80" fill="#283428" stroke="#5f7f52" />
        <polygon points="0,30 50,0 100,30" fill="#b06f34" />
        <text x="50" y="132" textAnchor="middle" fill="#ece0c6" fontSize="14" opacity="0.8">
          Magazyn
        </text>
      </g>

      {/* warsztat */}
      <g transform="translate(400,70)">
        <rect x="0" y="0" width="120" height="90" rx="6" fill="#1d251d" stroke="#384a38" />
        <circle cx="35" cy="45" r="18" fill="none" stroke="#c98a4b" strokeWidth="4" />
        <circle cx="70" cy="60" r="12" fill="none" stroke="#c98a4b" strokeWidth="3" />
        <text x="60" y="112" textAnchor="middle" fill="#ece0c6" fontSize="14" opacity="0.8">
          Warsztat
        </text>
      </g>

      {/* strzałki przepływu */}
      <g stroke="#c98a4b" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)">
        <path d="M202 110 L 238 100" />
        <path d="M340 100 L 398 100" />
      </g>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#c98a4b" />
        </marker>
      </defs>

      {/* dolny pasek: cykl sezonowy */}
      <g transform="translate(60,230)">
        <line x1="0" y1="40" x2="460" y2="40" stroke="#384a38" strokeWidth="2" />
        {["Zasiew", "Wzrost", "Zbiory", "Przechowanie"].map((label, i) => (
          <g key={label} transform={`translate(${i * 150},0)`}>
            <circle cx="0" cy="40" r="6" fill="#7c9a6c" />
            <text x="0" y="70" textAnchor="middle" fill="#ddcda3" fontSize="13">
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
