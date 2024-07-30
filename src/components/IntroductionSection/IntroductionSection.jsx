import "./IntroductionSection.css";
const IntroductionSection = () => {
  return (
    <div id="about">
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
            I am a 3rd year student, a dynamic and flexible individual, always
            looking to take on new challenges. With a positive attitude and a
            growth mindset, I am ready to make meaningful contributions and
            achieve great things.
          </p>
          <div className="cv-container">
            <a
              href="https://drive.google.com/file/d/1BybuIU_R_oan_L0RCRa0Qmq-oOMrngUP/view"
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
          src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/425740001_122151152048034652_7480462945252868222_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9eYkirJENz8Q7kNvgH-v12K&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYBRzjmLLh69PIicoMyC0_-8BxBDwO1NfDaef-nxgf7_AA&oe=66A83326"
          alt="hero-image"
          className="img-avatar"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
