interface PageBackgroundProps {
  children: React.ReactNode;
}

const GRID_COLOR = "#ffffff";
const GRID_SIZE = 130;

function makeGridDataUrl(color: string, size: number) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.4"/>
            <feFuncG type="linear" slope="1.4"/>
            <feFuncB type="linear" slope="1.4"/>
          </feComponentTransfer>

          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <path 
        d="M ${size} 0 L 0 0 0 ${size}" 
        fill="none" 
        stroke="${color}" 
        stroke-width="10"
        filter="url(#glow)"
      />
    </svg>
  `.trim();

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const gridBg = makeGridDataUrl(GRID_COLOR, GRID_SIZE);

export default function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FFFBF6]">
      {/* ── FIXED: Grid top — nempel di viewport, tidak ikut scroll ── */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[55vh]"
        style={{
          backgroundImage: gridBg,
          backgroundRepeat: "repeat",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      >
        {/* Orange warm tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(242,157,39,0.13) 0%, rgba(248,205,145,0.06) 50%, transparent 100%)",
          }}
        />
        {/* Fade grid ke warna bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 20%, #FFFBF6 100%)",
          }}
        />
      </div>

      {/* ── FIXED: Grid bottom — nempel di viewport, tidak ikut scroll ── */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[55vh]"
        style={{
          backgroundImage: gridBg,
          backgroundRepeat: "repeat",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      >
        {/* Orange warm tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(242,157,39,0.13) 0%, rgba(248,205,145,0.06) 50%, transparent 100%)",
          }}
        />
        {/* Fade grid ke warna bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, transparent 20%, #FFFBF6 100%)",
          }}
        />
      </div>

      {/* ── Content — di atas semua layer background ── */}
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </div>
  );
}
