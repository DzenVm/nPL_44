export function TerrainProfile() {
  return (
    <svg viewBox="0 0 600 260" role="img" aria-label="Przekrój terenu pokazujący wzgórze, dolinę rzeki i równinę oraz ich wpływ na budowę">
      <rect width="600" height="260" fill="#151b15" rx="16" />

      {/* linia gruntu */}
      <path
        d="M0 190 C 60 150, 110 100, 170 90 C 230 80, 250 150, 320 170 C 380 186, 430 150, 500 140 C 540 134, 570 150, 600 160 L 600 260 L 0 260 Z"
        fill="#283428"
      />
      <path
        d="M0 190 C 60 150, 110 100, 170 90 C 230 80, 250 150, 320 170 C 380 186, 430 150, 500 140 C 540 134, 570 150, 600 160"
        fill="none"
        stroke="#5f7f52"
        strokeWidth="3"
      />

      {/* rzeka w dolinie */}
      <path d="M255 168 C 275 190, 300 210, 340 230" stroke="#3f6a86" strokeWidth="10" fill="none" strokeLinecap="round" />

      {/* budynek na wzgórzu */}
      <g transform="translate(150,60)">
        <polygon points="0,10 20,-14 40,10" fill="#b06f34" />
        <rect x="6" y="10" width="28" height="20" fill="#ece0c6" />
      </g>

      {/* most nad rzeką */}
      <path d="M300 190 L 340 168" stroke="#c98a4b" strokeWidth="4" />

      {/* podpisy warstw */}
      <g fill="#ddcda3" fontSize="12.5">
        <text x="60" y="35">Wzgórze: wolniej, bezpieczniej</text>
        <text x="230" y="245">Dolina: szybciej, ryzykownie</text>
        <text x="430" y="110">Równina: łatwa rozbudowa</text>
      </g>
    </svg>
  );
}
