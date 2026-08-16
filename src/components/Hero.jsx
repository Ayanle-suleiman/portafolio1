function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">

          {/* LEFT SIDE */}
          <div className="hero-content">

            <p className="hero-label">
              COMPUTER SCIENCE • DATA SCIENCE • AI
            </p>

            <h1>
              Hi, I'm <span>Ayanle Suleiman</span>.
            </h1>

            <h2>
              Building with data and technology.
            </h2>

            <p className="hero-description">
              I'm a Computer Science student interested in Data Science,
              Machine Learning and building practical technology solutions
              for real-world problems.
            </p>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="primary-button"
              >
                View My Projects
              </a>

              <a
                href="/projects/Resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                View Resume
              </a>
              
            </div>
        
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-image-wrapper">
            <img
              src="/projects/profile.png"
              alt="Ayanle Suleiman"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;