import { profile } from "../data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: "Email", value: profile.email, icon: <MailIcon /> },
    { href: profile.linkedin, label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), icon: <LinkedinIcon />, external: true },
    { href: profile.github, label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), icon: <GithubIcon />, external: true },
  ];

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="contact-box reveal">
          <p className="section-label"><span>05</span> Contact</p>
          <h2 className="section-title">Let's work with data together.</h2>
          <p className="section-description">
            I'm looking for graduate and internship roles in data analytics and data science.
            The fastest way to reach me is email.
          </p>

          <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
            <MailIcon /> Email me
          </a>

          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="contact-link"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="contact-icon">{l.icon}</span>
                <span>
                  <strong>{l.label}</strong>
                  <small>{l.value}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
