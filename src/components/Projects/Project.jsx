import "./Project.css";

import { experiences } from "../../data/constants";
import ExperienceCard from "./ExperienceCard";

const Project = () => {
  return (
    <div className="project-container" id="project">
      <div className="project-wrapper">
        <div className="project-title">Projects</div>
        <div className="project-des">
          My experience as a software engineer extends beyond work, as I have
          also developed various personal projects, applying my skills across
          different technologies.
        </div>
        <div className="timeline-section">
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
