import { useEffect, useState } from "react";
import "./IntroductionSection.css";

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
            <div className="position-r">Front End Developer</div>
          </div>
          <p className="description">
            I am a final-year student with a dynamic and adaptable personality,
            eager to embrace new challenges. Driven by a positive attitude and a
            growth mindset, I am committed to making meaningful contributions
            and striving for excellence in everything I undertake.
          </p>
          <div className="cv-container">
            <a
              href="https://drive.google.com/file/d/1X0eMn1aP6iMnvPaGuolCSmENSRUrPSRL/view?usp=sharing"
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
        <img
          src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/467733429_122208741314034652_630098085793365094_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE6n7uaFF2gMlhNUdOzcNLhXn59h2zn13Fefn2HbOfXcR87sJXGz6XiPzIC7t4I9fagPkKjbKNXnSY12YvrBbgi&_nc_ohc=_8BVWdsNi-4Q7kNvgFOu5TK&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AdqCLEnzFjL8UNmuVh_Xxv9&oh=00_AYDMsv94SJgj2f-EkTE13CNCS__4f2gjLLAfmprDSOXhHA&oe=67741EE6"
          alt="hero-image"
          className="img-avatar"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
