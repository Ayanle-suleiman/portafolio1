import { profile, stats } from "../data";
import useGithubProjects from "../useGithubProjects";
import { FileIcon } from "./Icons";

// Decorative scatter + fitted line – a quiet nod to the work itself.
const points = [
  [8, 78], [14, 70], [19, 74], [25, 62], [31, 66], [36, 55], [42, 58],
  [47, 47], [53, 51], [58, 40], [64, 44], [69, 33], [75, 36], [80, 26],
  [86, 29], [91, 18],
];

function Hero() {
  const { projects, loading } = useGithubProjects();
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {profile.status}
          </p>

          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>.
          </h1>

          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">See my projects</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FileIcon /> Resume (PDF)
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value === "auto" ? (loading ? "–" : projects.length) : s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <svg className="hero-plot" viewBox="0 0 100 100" aria-hidden="true">
            {[20, 40, 60, 80].map((g) => (
              <g key={g}>
                <line x1="0" x2="100" y1={g} y2={g} />
                <line y1="0" y2="100" x1={g} x2={g} />
              </g>
            ))}
            <path className="fit" d="M4 82 L96 16" />
            {points.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.6" style={{ animationDelay: `${i * 60}ms` }} />
            ))}
          </svg>
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="hero-photo" width="300" height="300" />
          <p className="plot-caption"><code>fig. 1</code> · learning curve</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
