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
        <div className="eduction-content">
          {education.map((education, index) => (
            <div className="education-card" key={index}>
              <h3 className="school-name">
                Name: <span>{education.name}</span>
              </h3>
              <p className="study-period">
                Education Duration <span>{education.studyPeriod}</span>
              </p>
              <p className="gpa">
                GPA: <span>{education.gpa}</span>
              </p>
              <div className="currentYear">
                Current year: <span> {education.currentYear}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
