import "./Navbar.css";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector(".menu-icon").classList.toggle("active");
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"nav"}>
      <div className={`navbar-container`}>
        <Link to="/" className={`nav-logo`}>
          <a>
            <DiCssdeck size="3rem" /> <span className={`span`}>Portfolio</span>
          </a>
        </Link>
      </div>
      <ul className={`nav-items ${menuOpen ? "mobile-menu" : ""}`}>
        <a href="#about" className={`nav-link`} onClick={toggleMenu}>
          About
        </a>
        <a href="#skills" className={`nav-link`} onClick={toggleMenu}>
          Skills
        </a>
        <a href="#work-experience" className={`nav-link`} onClick={toggleMenu}>
          Work Experience
        </a>
        <a href="#project" className={`nav-link`} onClick={toggleMenu}>
          Project
        </a>
        <a href="#education" className={`nav-link`} onClick={toggleMenu}>
          Education
        </a>
        <a href="#contact" className={`nav-link`} onClick={toggleMenu}>
          Contacts
        </a>
      </ul>
      <div className={`button-container`}>
        <a
          href="https://github.com/Alhphuc03"
          target="_blank"
          className="github-button"
        >
          Github Profile
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
