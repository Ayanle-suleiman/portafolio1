function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          AS<span>.</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#journey">Journey</a>
          </li>

          <li>
            <a href="#contact" className="nav-button">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
