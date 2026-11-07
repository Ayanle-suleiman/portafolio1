// Draws a small data-style cover for projects that have no image.
// The picture is derived from the title, so each project gets its own
// stable design, and the chart type follows the category.

function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function kindFor(category = "") {
  const c = category.toLowerCase();
  if (c.includes("vision") || c.includes("image")) return "pixels";
  if (c.includes("stat") || c.includes("analy") || c.includes("visual")) return "bars";
  if (c.includes("time") || c.includes("forecast")) return "line";
  return "clusters";
}

function Clusters({ rnd }) {
  const centers = [0, 1, 2].map(() => [20 + rnd() * 60, 18 + rnd() * 24]);
  return centers.flatMap(([cx, cy], k) =>
    Array.from({ length: 14 }, (_, i) => (
      <circle
        key={`${k}-${i}`}
        cx={cx + (rnd() - 0.5) * 22}
        cy={cy + (rnd() - 0.5) * 16}
        r={1.4}
        className={`c${k}`}
      />
    ))
  );
}

function Bars({ rnd }) {
  const n = 9;
  return Array.from({ length: n }, (_, i) => {
    const h = 8 + rnd() * 34;
    return <rect key={i} x={8 + i * 9.6} y={54 - h} width={6} height={h} rx={1} className={i === n - 3 ? "c0" : "c1"} />;
  });
}

function Line({ rnd }) {
  let y = 40;
  const pts = Array.from({ length: 16 }, (_, i) => {
    y = Math.max(10, Math.min(52, y + (rnd() - 0.55) * 10));
    return `${6 + i * 5.9},${y.toFixed(1)}`;
  });
  return (
    <>
      <polyline points={`6,58 ${pts.join(" ")} 94.5,58`} className="area" />
      <polyline points={pts.join(" ")} className="stroke" />
    </>
  );
}

function Pixels({ rnd }) {
  const cells = [];
  for (let x = 0; x < 12; x++)
    for (let y = 0; y < 6; y++) {
      const v = rnd();
      cells.push(
        <rect key={`${x}-${y}`} x={8 + x * 7.2} y={6 + y * 8} width={6.2} height={7} rx={0.8}
          className={v > 0.8 ? "c0" : v > 0.5 ? "c1" : "c2"} />
      );
    }
  return cells;
}

const shapes = { clusters: Clusters, bars: Bars, line: Line, pixels: Pixels };

function ProjectCover({ project, className = "" }) {
  if (project.image) {
    return (
      <div className={`project-cover ${className}`}>
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
      </div>
    );
  }
  const rnd = seeded(project.title);
  const kind = kindFor(project.category);
  const Shape = shapes[kind];
  return (
    <div className={`project-cover is-generated ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice">
        {[15, 30, 45].map((g) => <line key={g} x1="0" x2="100" y1={g} y2={g} className="grid" />)}
        <Shape rnd={rnd} />
      </svg>
    </div>
  );
}

export default ProjectCover;
