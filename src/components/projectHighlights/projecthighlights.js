import React from "react";
import ProjectsData from "../../data/project-highlights.json";
import ProjectImage from "../../components/projectHighlights/projectimage";

const Project = (props) => (
  <div className="project-text">
    <img src={props.image} className="project-pic" />
    <a href={props.link}>{props.title}</a>
    <p>{props.description}</p>
  </div>
);

const ProjectHighlights = () => (
  <div>
    <h1>TTB 2020 Project Highlights</h1>
    <div className="bar-sm"></div>
    <div className="projects-container row">
      {ProjectsData.map((project) => (
        <div className="project col-sm">
          <Project
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectHighlights;
