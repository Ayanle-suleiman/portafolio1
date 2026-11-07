import { skills } from "../data";
import SectionHeader from "./SectionHeader";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          index="02"
          label="Skills"
          title="My data toolkit."
          description="The languages, methods and tools I've used in coursework and projects."
        />

        <div className="skills-grid reveal">
          {skills.map((s) => (
            <div className="card skill-card" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => <li className="chip" key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
