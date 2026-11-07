import { useEffect, useRef } from "react";
import ProjectCover from "./ProjectCover";
import { ArrowIcon, GithubIcon, MenuIcon } from "./Icons";

function ProjectModal({ project, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  const links = [
    project.code && { href: project.code, label: "View on GitHub", icon: <GithubIcon /> },
    project.demo && { href: project.demo, label: "Live demo", icon: <ArrowIcon /> },
    project.report && { href: project.report, label: "Read report", icon: <ArrowIcon /> },
  ].filter(Boolean);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        key={project.title}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close">
          <MenuIcon open />
        </button>

        <ProjectCover project={project} className="modal-cover" />

        <div className="modal-content">
          <p className="project-meta">
            <span className="project-cat">{project.category}</span>
            {project.year && <span>Updated {project.year}</span>}
          </p>
          <h3 id="modal-title">{project.title}</h3>

          <dl className="project-body">
            <div><dt>Question</dt><dd>{project.question}</dd></div>
            <div><dt>Approach</dt><dd>{project.approach}</dd></div>
            {project.result && (
              <div className="project-result"><dt>Result</dt><dd>{project.result}</dd></div>
            )}
          </dl>

          {project.highlights?.length > 0 && (
            <ul className="modal-highlights">
              {project.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          )}

          <ul className="chips chips-sm">
            {project.tags.map((t) => <li className="chip" key={t}>{t}</li>)}
          </ul>

          {links.length > 0 && (
            <div className="modal-links">
              {links.map((l, i) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                   className={`btn ${i === 0 ? "btn-primary" : "btn-outline"} btn-sm`}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          )}

          <div className="modal-nav">
            <button onClick={onPrev}>← Previous</button>
            <button onClick={onNext}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
