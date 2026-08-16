function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">About Me</p>

          <h2 className="section-title">
            Curious about data,Focused on impact.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm  AYANLE suleiman a Third year student at a Computer Science program, developing my skills across
              programming, data analysis, machine learning and software
              development.
            </p>

            <p>
              I enjoy taking real-world problems, understanding the data
              behind them and turning ideas into practical solutions.
            </p>

            <p>
              My current goal is to continue building meaningful projects,
              strengthen my technical skills and gain experience through
              internships, competitions and real-world projects.
            </p>
          </div>

          <div className="about-card">
            <h3>What I'm Exploring</h3>

            <ul className="about-list">
              <li>Data Science & Analytics</li>
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Software Development</li>
              <li>Data Visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;