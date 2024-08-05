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
              href="https://drive.google.com/file/d/1Vgw-Svql-lDWaDjZppcWRupBwfVDcJmN/view?usp=sharing"
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
          src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/425740001_122151152048034652_7480462945252868222_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHU8tEOokNTfPDcWSQzp_yykZlSCRAoIpyRmVIJECginEoj6AMHbmzqPsTV7yR7gHWrJ0By0ua6Y8qL6ImSqI4C&_nc_ohc=uY8OqpBLQ80Q7kNvgElyism&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYD8vi_fMPJfx_unAouDi5TBQhftEDpgcZJkUlTCbhEOSg&oe=66B64326"
          alt="hero-image"
          className="img-avatar"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
