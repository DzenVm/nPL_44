export function TechBranches() {
  const nodes: Array<{ x: number; y: number; r: number; label: string }> = [
    { x: 40, y: 150, r: 10, label: "Rdzeń" },
    { x: 150, y: 60, r: 8, label: "Rolnictwo" },
    { x: 150, y: 150, r: 8, label: "Budownictwo" },
    { x: 150, y: 240, r: 8, label: "Nawigacja" },
    { x: 280, y: 30, r: 7, label: "" },
    { x: 280, y: 90, r: 7, label: "" },
    { x: 280, y: 150, r: 7, label: "" },
    { x: 280, y: 200, r: 7, label: "" },
    { x: 280, y: 260, r: 7, label: "" },
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [1, 5],
    [2, 6],
    [2, 7],
    [3, 8],
  ];

  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Rozgałęzione drzewko technologii z trzema głównymi kierunkami rozwoju">
      <rect width="400" height="300" fill="#151b15" rx="16" />
      <g stroke="#5f7f52" strokeWidth="1.6" opacity="0.75">
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          if (!from || !to) return null;
          return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
        })}
      </g>
      <g>
        {nodes.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={node.r} fill={i === 0 ? "#c98a4b" : "#7c9a6c"} />
            {node.label && (
              <text x={node.x + 16} y={node.y + 4} fill="#ece0c6" fontSize="13">
                {node.label}
              </text>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}
