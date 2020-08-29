import React from "react";

// import teamPhoto from "../../../images/about-us.jpg";
// import MissionImage from "./missionphoto";
import "./mission.scss";
import Video from "../../video.js";

const Mission = () => (
  <div className="mission">
    <div className="row">
      <div className="col-12 col-md-7">
        <h1>
          Boston's largest student-run hackathon open to all female, femme, and
          non-binary individuals
        </h1>
        <div className="mission-statement">
          <h2>Our Mission</h2>
          {/* <div className="bar-sm"></div> */}
          <ul>
            <li>
              Empower women and non-binary individuals in technology to achieve
            </li>
            <li>
              Provide them with opportunities to explore the tech industry in an
              inspiring, encouraging, and energizing environment
            </li>
            <li>Create a community of inclusivity within the tech industry</li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-5 ">
        <div className="embed-responsive embed-responsive-16by9 video">
          <Video
            className="embed-responsive-item"
            videoSrcURL="https://www.youtube.com/embed/lcR29DyWLHg"
            videoTitle="TTB2020"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Mission;
