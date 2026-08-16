function Projects() {
  const projects = [
    {
      number: "01",
      title: "Youth Unemployment Analysis",
      description:
        "Analyzed youth unemployment trends across Southeast Asian countries using World Development Indicators and statistical and machine learning techniques.",
      tags: ["Python", "Pandas", "Statistics", "K-Means", "Random Forest"],
    },
    {
      number: "02",
      title: "Plant Disease Recognition",
      description:
        "Developed an image processing and machine learning pipeline for recognizing tomato leaf diseases using preprocessing, segmentation, feature extraction and classification.",
      tags: ["Python", "OpenCV", "K-Means", "SVM", "Machine Learning"],
    },
    {
      number: "03",
      title: "Sales Analysis",
      description:
        "Analyzed sales performance and used statistical testing to identify significant differences between sales periods.",
      tags: ["R", "ANOVA", "Statistics", "Data Analysis"],
    },
    {
      number: "04",
      title: "Portfolio Website",
      description:
        "A personal portfolio designed to showcase my projects, technical skills, learning journey and future work.",
      tags: ["React", "JavaScript", "CSS", "Vite"],
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projects</p>

          <h2 className="section-title">
            Things I've been building.
          </h2>

          <p className="section-description">
            Academic and personal projects where I apply programming,
            statistics, data science and machine learning to practical
            problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">
                {project.number}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;