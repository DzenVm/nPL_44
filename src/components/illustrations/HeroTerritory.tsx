export function HeroTerritory() {
  return (
    <svg viewBox="0 0 640 480" role="img" aria-label="Stylizowana mapa terytorium podzielonego na sześciokątne pola, z osadą, rzeką i lasem">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d251d" />
          <stop offset="1" stopColor="#0f1410" />
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill="url(#hero-sky)" />

      {/* siatka heksagonalna terenu */}
      <g stroke="#384a38" strokeWidth="1.5" fill="none" opacity="0.7">
        {Array.from({ length: 7 }).flatMap((_, row) =>
          Array.from({ length: 9 }).map((_, col) => {
            const w = 62;
            const h = 54;
            const x = 30 + col * w * 0.85 + (row % 2 === 0 ? 0 : w * 0.425);
            const y = 20 + row * h * 0.78;
            const points = [
              [x, y - h / 2],
              [x + w / 2, y - h / 4],
              [x + w / 2, y + h / 4],
              [x, y + h / 2],
              [x - w / 2, y + h / 4],
              [x - w / 2, y - h / 4],
            ]
              .map((p) => p.join(","))
              .join(" ");
            return <polygon key={`${row}-${col}`} points={points} />;
          })
        )}
      </g>

      {/* rzeka */}
      <path
        d="M0 300 C 120 260, 180 340, 260 300 S 420 220, 640 260"
        fill="none"
        stroke="#3f6a86"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* las */}
      <g fill="#5f7f52">
        {(
          [
            [110, 120],
            [140, 140],
            [95, 150],
            [480, 90],
            [510, 115],
            [460, 130],
          ] as const
        ).map(([cx, cy], i) => (
          <polygon key={i} points={`${cx},${cy - 22} ${cx + 16},${cy + 6} ${cx - 16},${cy + 6}`} />
        ))}
      </g>

      {/* osada */}
      <g transform="translate(300,230)">
        <rect x="-46" y="-6" width="92" height="46" rx="3" fill="#ece0c6" opacity="0.92" />
        <polygon points="-52,-6 0,-42 52,-6" fill="#b06f34" />
        <rect x="-14" y="12" width="28" height="28" fill="#283428" />
        <rect x="-38" y="20" width="16" height="20" fill="#283428" opacity="0.8" />
        <rect x="22" y="20" width="16" height="20" fill="#283428" opacity="0.8" />
      </g>

      {/* trasa zwiadu */}
      <path
        d="M300 260 L 220 340 L 150 360"
        fill="none"
        stroke="#c98a4b"
        strokeWidth="2.5"
        strokeDasharray="6 7"
        opacity="0.85"
      />
      <circle cx="150" cy="360" r="5" fill="#c98a4b" />
    </svg>
  );
}
