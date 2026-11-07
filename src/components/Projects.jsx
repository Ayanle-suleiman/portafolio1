import { useCallback, useMemo, useState } from "react";
import { github } from "../data";
import useGithubProjects from "../useGithubProjects";
import SectionHeader from "./SectionHeader";
import ProjectCover from "./ProjectCover";
import ProjectModal from "./ProjectModal";
import { ArrowIcon, GithubIcon } from "./Icons";

const PAGE = github.perPage || 6;

function Projects() {
  const { projects, loading } = useGithubProjects();
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], [projects]);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );
  const shown = showAll ? filtered : filtered.slice(0, PAGE);
  const hidden = filtered.length - shown.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % filtered.length), [filtered.length]);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);

  const pick = (c) => {
    setFilter(c);
    setShowAll(false);
  };

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionHeader
          index="03"
          label="Projects"
          title="Selected work."
          description="Pulled live from my GitHub. Each project follows the same arc: a question, a method, and what the data actually said. Click any project for the full story."
        />

        {categories.length > 2 && (
          <div className="filters" role="toolbar" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={filter === c}
                className={`filter ${filter === c ? "is-active" : ""}`}
                onClick={() => pick(c)}
              >
                {c}
                <span>{c === "All" ? projects.length : projects.filter((p) => p.category === c).length}</span>
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="projects-grid" aria-busy="true" aria-label="Loading projects from GitHub">
            {[0, 1, 2].map((i) => <div className="card project-skeleton" key={i} />)}
          </div>
        )}

        <div className="projects-grid" key={filter}>
          {shown.map((p, i) => (
            <article
              className={`card project-card ${p.featured ? "is-featured" : ""}`}
              key={p.id}
              style={{ animationDelay: `${(i % PAGE) * 60}ms` }}
            >
              <button className="project-hit" onClick={() => setOpenIndex(i)} aria-label={`Open details for ${p.title}`} />
              <ProjectCover project={p} />

              <div className="project-inner">
                <p className="project-meta">
                  <span className="project-cat">{p.category}</span>
                  {p.featured ? <span className="badge">Featured</span> : p.year && <span>{p.year}</span>}
                </p>

                <h3>{p.title}</h3>
                <p className="project-question">{p.question || "Open the repository for details."}</p>

                {p.result && <p className="project-result-inline">{p.result}</p>}

                <ul className="chips chips-sm">
                  {p.tags.slice(0, 4).map((t) => <li className="chip" key={t}>{t}</li>)}
                  {p.tags.length > 4 && <li className="chip chip-more">+{p.tags.length - 4}</li>}
                </ul>

                <div className="project-links">
                  <span className="project-more">Details <ArrowIcon /></span>
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="project-code">
                      <GithubIcon /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!loading && (
          <div className="projects-more">
            {(hidden > 0 || (showAll && filtered.length > PAGE)) && (
              <button className="btn btn-outline" onClick={() => setShowAll((s) => !s)}>
                {showAll ? "Show fewer" : `Show ${hidden} more project${hidden > 1 ? "s" : ""}`}
              </button>
            )}
            <a
              className="btn btn-ghost"
              href={`https://github.com/${github.username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> All repositories on GitHub
            </a>
          </div>
        )}
      </div>

      <ProjectModal
        project={openIndex === null ? null : filtered[openIndex]}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  );
}

export default Projects;
