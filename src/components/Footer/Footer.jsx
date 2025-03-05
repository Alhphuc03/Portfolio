import { FaFacebook, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-wrapper">
        <h1 className="title-footer"> LE HUU PHUC</h1>
        <nav className="nav-footer">
          <a href="#about" className="nav-link-footer">
            About
          </a>
          <a href="#skills" className="nav-link-footer">
            Skills
          </a>
          <a href="#work-experience" className="nav-link-footer">
            Work Experience
          </a>
          <a href="#project" className="nav-link-footer">
            Projects
          </a>
          <a href="#education" className="nav-link-footer">
            Education
          </a>
          <a href="#contact" className="nav-link-footer">
            Contacts
          </a>
        </nav>
        <div className="social-media-icons">
          <a href="" target="display" className="social-media-icon">
            <FaFacebook />
          </a>
          <a href="" target="display" className="social-media-icon">
            <FaGithub />
          </a>
        </div>
        <p className="copyright">&copy; 2024.LeHuuPhuc</p>
      </footer>
    </div>
  );
}

export default Footer;
