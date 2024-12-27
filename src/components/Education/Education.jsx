
import "./Education.css";
import { education } from "../../data/constants";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <div className="education-wrapper">
        <div className="education-title">Education</div>
        <div className="education-desc">
          Here is a summary of my educational background including schools,
          duration, and GPA.
        </div>
        <div className="education-content">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <h3 className="school-name">
                Name: <span>{edu.name}</span>
              </h3>
              <p className="study-period">
                Education Duration: <span>{edu.studyPeriod}</span>
              </p>
              <p className="gpa">
                GPA: <span>{edu.gpa}</span>
              </p>
              <div className="currentYear">
                Current year: <span>{edu.currentYear}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
