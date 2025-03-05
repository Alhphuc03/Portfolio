import { useEffect, useState } from "react";
import "./IntroductionSection.css";
import avt from "../../../public/avt2.png";
const IntroductionSection = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" className={hasScrolled ? "scrolled" : ""}>
      <div className="about-container">
        <div className="introduction">
          <h1 className="name">
            Hi, I am <br /> Le Huu Phuc
          </h1>
          <div className="position">
            <div className="position-l">I am a </div>
            <div className="position-r">Web Developer</div>
          </div>
          <p className="description">
            I am a final-year student with a dynamic and adaptable personality,
            eager to embrace new challenges. My goal is to become a professional
            <strong> Frontend Developer</strong>, continuously improving my
            skills in <strong>UI/UX</strong> and{" "}
            <strong>Fullstack Development</strong> while contributing to
            high-quality web applications. Driven by a positive attitude and a
            growth mindset, I am committed to making meaningful contributions
            and striving for excellence in everything I undertake.
          </p>

          <div className="cv-container">
            <a
              href="https://drive.google.com/file/d/1hbtYjtzDtgk5IU3OmMPsOUXKgKe4SHpF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv"
            >
              Check Resume
            </a>
          </div>
        </div>
      </div>
      <div className="about-img">
        <img src={avt} alt="hero-image" className="img-avatar" />
      </div>
    </div>
  );
};

export default IntroductionSection;
