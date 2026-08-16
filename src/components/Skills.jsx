function Skills() {
  const skills = [
    {
      title: "Programming",
      description:
        "Python, Java, JavaScript, SQL and object-oriented programming.",
    },
    {
      title: "Data Science",
      description:
        "Data cleaning, exploratory analysis, statistics, visualization and data interpretation.",
    },
    {
      title: "Machine Learning",
      description:
        "Classification, regression, clustering, model evaluation and feature engineering.",
    },
    {
      title: "Data Visualization",
      description:
        "Creating clear visualizations and communicating insights from data.",
    },
    {
      title: "Tools",
      description:
        "Git, GitHub, VS Code, Jupyter Notebook, R and modern development tools.",
    },
    {
      title: "Currently Learning",
      description:
        "Advanced machine learning, cloud technologies, AI applications and deployment.",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Skills</p>

          <h2 className="section-title">
            Tools I use to build and analyze.
          </h2>

          <p className="section-description">
            A growing technical toolkit built through university projects,
            personal projects and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>

              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
