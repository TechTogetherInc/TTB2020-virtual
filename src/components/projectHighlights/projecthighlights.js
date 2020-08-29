import React from "react";
import ProjectsData from "../../data/project-highlights.json";
// import ProjectImage from "../../components/projectHighlights/projectimage";
import Aurora from "../../images/aurora.png";
import SafeSpace from "../../images/safeSpace.jpg";
import SheNetwork from "../../images/SheNework.png";
import moodring from "../../images/moodring.png";

const photos = {
  Aurora,
  SafeSpace,
  SheNetwork,
  moodring,
};

const Project = (props) => (
  <div className="project-text">
    <img src={photos[props.title]} className="project-pic" />
    <a className="project-title" href={props.link} target="_blank">
      {props.title}
    </a>
    <p>{props.description}</p>
  </div>
);

const ProjectHighlights = () => (
  <div>
    <h1 className="project-head">TTB 2020 Project Highlights</h1>
    <div className="bar-sm"></div>
    <div className="projects-container row">
      {ProjectsData.map((project) => (
        <div className="project col-sm" key={project.title}>
          <Project
            title={project.title}
            link={project.link}
            description={project.description}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectHighlights;
