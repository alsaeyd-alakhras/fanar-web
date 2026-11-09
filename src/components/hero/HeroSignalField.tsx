const NODES = [
  [95, 150, 2.5], [170, 90, 2], [220, 190, 3], [305, 115, 2],
  [350, 235, 3.5], [430, 165, 2.2], [515, 95, 2], [560, 245, 3],
  [650, 150, 2.4], [720, 235, 2], [125, 330, 2], [245, 315, 2.5],
  [390, 345, 3], [520, 330, 2], [665, 350, 2.5], [760, 315, 2],
];

const LINKS = [
  [0,2],[1,2],[2,3],[2,4],[3,4],[3,6],[4,5],[4,11],[4,12],
  [5,6],[5,7],[6,8],[7,8],[7,13],[8,9],[8,14],[10,11],[11,12],
  [12,13],[13,14],[14,15],
];

export default function HeroSignalField() {
  return (
    <svg viewBox="0 0 840 470" className="h-full w-full overflow-visible" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="signalFog" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#84A4B1" stopOpacity=".16" />
          <stop offset="100%" stopColor="#84A4B1" stopOpacity="0" />
        </radialGradient>
        <filter id="signalGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <ellipse data-signal-fog cx="410" cy="235" rx="310" ry="205" fill="url(#signalFog)" />

      <g data-signal-grid stroke="#84A4B1" strokeOpacity=".07" strokeWidth=".7">
        {[110,190,270,350].map(y => <path key={y} d={`M35 ${y} H805`} />)}
        {[120,240,360,480,600,720].map(x => <path key={x} d={`M${x} 40 V430`} />)}
      </g>

      <g stroke="#84A4B1" strokeWidth="1">
        {LINKS.map(([a,b], i) => (
          <path
            key={i}
            data-signal-link
            d={`M${NODES[a][0]} ${NODES[a][1]} L${NODES[b][0]} ${NODES[b][1]}`}
            strokeOpacity={i % 3 === 0 ? .28 : .16}
          />
        ))}
      </g>

      <g>
        {NODES.map(([cx,cy,r], i) => (
          <g key={i} data-signal-node>
            <circle cx={cx} cy={cy} r={r * 5} fill="#84A4B1" fillOpacity=".035" filter="url(#signalGlow)" />
            <circle cx={cx} cy={cy} r={r} fill={i === 4 || i === 12 ? "#F3F3F1" : "#84A4B1"} fillOpacity={i === 4 || i === 12 ? .9 : .55} />
          </g>
        ))}
      </g>

      <g data-signal-orbits stroke="#84A4B1" strokeOpacity=".13" strokeWidth=".8">
        <ellipse cx="410" cy="235" rx="190" ry="118" />
        <ellipse cx="410" cy="235" rx="265" ry="165" strokeDasharray="3 11" />
      </g>
    </svg>
  );
}
