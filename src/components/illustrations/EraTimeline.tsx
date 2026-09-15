const ERAS = ["Osadnictwo", "Umocnienia", "Rzemiosło", "Żegluga", "Dojrzałość"];

export function EraTimeline() {
  return (
    <svg viewBox="0 0 620 160" role="img" aria-label="Oś czasu pięciu er rozwoju osady w trakcie jednej kampanii">
      <rect width="620" height="160" fill="#151b15" rx="16" />
      <line x1="40" y1="80" x2="580" y2="80" stroke="#384a38" strokeWidth="3" />
      {ERAS.map((era, i) => {
        const x = 40 + (i * 540) / (ERAS.length - 1);
        return (
          <g key={era} transform={`translate(${x},80)`}>
            <circle r="9" fill={i === 0 ? "#c98a4b" : "#283428"} stroke="#c98a4b" strokeWidth="2.4" />
            <text y="-20" textAnchor="middle" fill="#ece0c6" fontSize="13">
              {era}
            </text>
            <text y="34" textAnchor="middle" fill="#7c9a6c" fontSize="11">
              era {i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
