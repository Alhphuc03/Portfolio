import { workExperiences } from "../../data/constants";
import ExperienceCard from "../Projects/ExperienceCard";
import "./WorkExperience.css";
const WorkExperience = () => {
  return (
    <div className="experience-container" id="work-experience">
      <div className="experience-wrapper">
        <div className="experience-title">Work Experience</div>
        <div className="experience-des">
          I have gained experience as a software engineer through internships
          and working at different companies, contributing to various real-world
          projects.
        </div>
        <div className="timeline-section">
          {workExperiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
