import { timeline } from "../data";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader index="04" label="Experience" title="Education & experience." />

        <ol className="timeline reveal">
          {timeline.map((t) => (
            <li className="timeline-item" key={t.title}>
              <div className="timeline-meta">
                <span className="timeline-date">{t.date}</span>
                <span className={`timeline-type ${t.type === "Education" ? "is-edu" : ""}`}>{t.type}</span>
              </div>
              <div className="timeline-body">
                <h3>{t.title}</h3>
                <p className="timeline-org">{t.org}</p>
                <ul>
                  {t.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
