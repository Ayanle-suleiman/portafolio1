import { about, focus } from "../data";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <SectionHeader index="01" label="About" title="Curious about data, focused on impact." />

        <div className="about-grid reveal">
          <div className="about-text">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <aside className="card about-card">
            <h3>What I focus on</h3>
            <ul>
              {focus.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
