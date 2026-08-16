function Journey() {
  const journey = [
    {
      date: "CURRENT",
      title: "Computer Science Student",
      description:
        "Building a strong foundation in programming, statistics, data science and software development.",
    },
    {
      date: "RECENT",
      title: "Data Science Projects",
      description:
        "Worked on projects involving unemployment analysis, machine learning, statistical analysis and computer vision.",
    },
    {
      date: "NEXT",
      title: "Real-World Experience",
      description:
        "Looking forward to internships, hackathons, workshops and opportunities to apply my skills to real-world problems.",
    },
  ];

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Journey</p>

          <h2 className="section-title">
            Still learning. Still building.
          </h2>
        </div>

        <div className="journey-list">
          {journey.map((item) => (
            <div className="journey-item" key={item.title}>
              <span className="journey-dot"></span>

              <span className="journey-date">
                {item.date}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
