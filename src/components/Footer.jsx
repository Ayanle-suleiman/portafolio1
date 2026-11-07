import { profile } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React & Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
