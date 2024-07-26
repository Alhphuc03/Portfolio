import PropTypes from "prop-types";
import "./Exp.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="card-project">
      <div className="top">
        {experience.img && (
          <img
            className="image-project"
            src={experience.img}
            alt="experience"
          />
        )}
        <div className="body">
          <div className="title-project">{experience.title}</div>
          <div className="role-project">{experience.role}</div>
          <div className="date-project">{experience.date}</div>
        </div>
      </div>
      <div className="description">
        <span className="description-project">Description: </span>
        {experience.desc && <span className="span-des">{experience.desc}</span>}
        {experience.skills && experience.skills.length > 0 && (
          <>
            <br />
            <div className="skills">
              <b>Technical:</b>
              <div className="item-wrapper">
                {experience.skills.map((skill, index) => (
                  <div key={index} className="skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {experience.features && (
          <div className="features">
            <b>Key Features:</b>
            {Object.keys(experience.features).map((featureKey, index) => (
              <div key={index} className="feature-category">
                <p>
                  {featureKey
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, function (str) {
                      return str.toUpperCase();
                    })}
                  :
                </p>
                <ul>
                  {experience.features[featureKey].map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {experience.deploy && (
        <a href={experience.deploy} target="_blank" rel="noopener noreferrer">
          <button className="button-deloy">
            <b>Deploy:</b>
            <span>{experience.deploy}</span>
          </button>
        </a>
      )}
      {experience.github && (
        <a href={experience.github} target="_blank" rel="noopener noreferrer">
          <button className="button-github">
            <b>GitHub</b> <span>{experience.github}</span>
          </button>
        </a>
      )}
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    img: PropTypes.string,
    role: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    deploy: PropTypes.string,
    github: PropTypes.string,
    features: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
  }).isRequired,
};
export default ExperienceCard;
