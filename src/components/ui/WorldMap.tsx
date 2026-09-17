import { LAND_DOTS, MAP_HEIGHT, MAP_WIDTH, project } from "./worldMapPath";

const ports = {
  mumbai: { label: "Mumbai", lon: 72.88, lat: 19.08 },
  dubai: { label: "Dubai", lon: 55.27, lat: 25.2 },
  singapore: { label: "Singapore", lon: 103.82, lat: 1.35 },
  shanghai: { label: "Shanghai", lon: 121.47, lat: 31.23 },
  rotterdam: { label: "Rotterdam", lon: 4.48, lat: 51.92 },
  london: { label: "London", lon: -0.13, lat: 51.51 },
  newYork: { label: "New York", lon: -74.01, lat: 40.71 },
} as const;

type PortKey = keyof typeof ports;

/** Label offsets, so names sit clear of the arcs instead of on top of them. */
const labelAnchor: Record<PortKey, { dx: number; dy: number; anchor: "start" | "end" }> = {
  mumbai: { dx: -12, dy: 20, anchor: "end" },
  dubai: { dx: -12, dy: 6, anchor: "end" },
  singapore: { dx: 13, dy: 20, anchor: "start" },
  shanghai: { dx: 13, dy: 6, anchor: "start" },
  rotterdam: { dx: 13, dy: -12, anchor: "start" },
  london: { dx: -12, dy: -12, anchor: "end" },
  newYork: { dx: -13, dy: 6, anchor: "end" },
};

const lanes: { from: PortKey; to: PortKey; delay: number }[] = [
  { from: "mumbai", to: "dubai", delay: 0 },
  { from: "dubai", to: "rotterdam", delay: 0.5 },
  { from: "rotterdam", to: "london", delay: 1 },
  { from: "rotterdam", to: "newYork", delay: 1.4 },
  { from: "mumbai", to: "singapore", delay: 0.3 },
  { from: "singapore", to: "shanghai", delay: 0.8 },
];

const themes = {
  dark: { land: "#ffffff", landOpacity: 0.26, lane: "#bfe8ff", port: "#bfe8ff", label: "rgba(255,255,255,0.72)" },
  light: { land: "#3f6f99", landOpacity: 0.28, lane: "#2f6d9e", port: "#1f5f93", label: "rgba(24,52,76,0.55)" },
} as const;

/** A shallow arc between two ports — lifted in proportion to the distance flown. */
function arcPath(from: PortKey, to: PortKey) {
  const [x1, y1] = project(ports[from].lon, ports[from].lat);
  const [x2, y2] = project(ports[to].lon, ports[to].lat);
  const distance = Math.hypot(x2 - x1, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - distance * 0.28;
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
}

export default function WorldMap({
  className = "",
  theme = "dark",
  showLabels = true,
}: {
  className?: string;
  theme?: keyof typeof themes;
  showLabels?: boolean;
}) {
  const t = themes[theme];
  const gradientId = `lane-gradient-${theme}`;

  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className={className}
      role="img"
      aria-label="World map showing Trifreight's main freight lanes between Mumbai, Dubai, Singapore, Shanghai, Rotterdam, London, and New York."
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={t.lane} stopOpacity="0.1" />
          <stop offset="50%" stopColor={t.lane} stopOpacity="0.95" />
          <stop offset="100%" stopColor={t.lane} stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Every landmass, as one path of round-capped zero-length segments. */}
      <path
        d={LAND_DOTS}
        stroke={t.land}
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        opacity={t.landOpacity}
      />

      {lanes.map((lane) => (
        <path
          key={`${lane.from}-${lane.to}`}
          className="lane-arc"
          d={arcPath(lane.from, lane.to)}
          pathLength={1}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={1.6}
          strokeLinecap="round"
          style={{ animationDelay: `${lane.delay}s` }}
        />
      ))}

      {(Object.keys(ports) as PortKey[]).map((key) => {
        const [x, y] = project(ports[key].lon, ports[key].lat);
        const { dx, dy, anchor } = labelAnchor[key];
        return (
          <g key={key}>
            <circle className="port-pulse" cx={x} cy={y} fill={t.port} />
            <circle cx={x} cy={y} r={3.4} fill={t.port} />
            {showLabels && (
              <text
                className="hidden font-mono-ui sm:block"
                x={x + dx}
                y={y + dy}
                textAnchor={anchor}
                fill={t.label}
                fontSize={12}
                letterSpacing="0.08em"
              >
                {ports[key].label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
