const SEALS = [
  { cx: 90, shape: "shield", color: "#b06f34", note: "Ekspansywna" },
  { cx: 230, shape: "circle", color: "#5f7f52", note: "Handlowa" },
  { cx: 370, shape: "diamond", color: "#8f5726", note: "Obronna" },
  { cx: 510, shape: "shield", color: "#7c9a6c", note: "Wyczekująca" },
];

export function FactionSeals() {
  return (
    <svg viewBox="0 0 600 220" role="img" aria-label="Cztery odrębne pieczęcie symbolizujące style gry frakcji sterowanych przez komputer">
      <rect width="600" height="220" fill="#151b15" rx="16" />
      {SEALS.map((seal, i) => (
        <g key={i} transform={`translate(${seal.cx},90)`}>
          {seal.shape === "shield" && (
            <path
              d="M0 -46 L34 -32 V6 C34 34 18 50 0 58 C-18 50 -34 34 -34 6 V-32 Z"
              fill="none"
              stroke={seal.color}
              strokeWidth="3"
            />
          )}
          {seal.shape === "circle" && <circle r="40" fill="none" stroke={seal.color} strokeWidth="3" />}
          {seal.shape === "diamond" && (
            <rect x="-32" y="-32" width="64" height="64" transform="rotate(45)" fill="none" stroke={seal.color} strokeWidth="3" />
          )}
          <circle r="6" fill={seal.color} />
          <text y="82" textAnchor="middle" fill="#ddcda3" fontSize="13">
            {seal.note}
          </text>
        </g>
      ))}
    </svg>
  );
}
