function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <p className="section-label">Contact</p>

          <h2>Let's build something useful.</h2>

          <p>
            I'm always interested in connecting with people working in
            technology, data science and AI.
          </p>

          <div className="contact-links">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayaanlsaleeban08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>✉</span>
              <div>
                <strong>Email</strong>
                <small>ayaanlsaleeban08@gmail.com</small>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ayanle-suleiman"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>◉</span>
              <div>
                <strong>GitHub</strong>
                <small>github.com/Ayanle-suleiman</small>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayanle-suleiman/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>in</span>
              <div>
                <strong>LinkedIn</strong>
                <small>linkedin.com/in/ayanle-suleiman</small>
              </div>
            </a>

          </div>

          {/* Email Button */}
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ayaanlsaleeban08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Email Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;