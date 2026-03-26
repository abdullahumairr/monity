interface PageBackgroundProps {
  children: React.ReactNode;
}

const GRID_SIZE = 130;
const GRID_ROWS = 8;
const GRID_HEIGHT = GRID_SIZE * GRID_ROWS; 

const GRID_COLOR = "rgba(255, 255, 255, 1)";

function makeGridDataUrl(color: string, size: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="${color}" stroke-width="12"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const gridBg = makeGridDataUrl(GRID_COLOR, GRID_SIZE);

export default function PageBackground({ children }: PageBackgroundProps) {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#FFFBF6]" />

      {/* Scrollable page */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10"
          style={{ height: GRID_HEIGHT }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: gridBg,
              backgroundRepeat: "repeat",
              backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(242,157,39,0.14) 0%, rgba(248,205,145,0.07) 40%, transparent 100%)",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: GRID_HEIGHT,
              background:
                "linear-gradient(to bottom, transparent 35%, #FFFBF6 70%)",
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10"
          style={{ height: GRID_HEIGHT }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: gridBg,
              backgroundRepeat: "repeat",
              backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(242,157,39,0.14) 0%, rgba(248,205,145,0.07) 40%, transparent 100%)",
            }}
          />

          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: GRID_HEIGHT,
              background:
                "linear-gradient(to top, transparent 35%, #FFFBF6 70%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </div>
    </>
  );
}
