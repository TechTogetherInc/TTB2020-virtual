import React from "react";

import teamPhoto from "../../../images/about-us.jpg";
import MissionImage from "./missionphoto";
import "./mission.scss";

const Mission = () => (
  <div className="mission">
    <h1>
      Boston's largest student-run hackathon open to all female, femme, and
      non-binary individuals
    </h1>
    <div className="row">
      <div className="col-12 col-md-5">
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
      <div className="col-12 col-md-7 ">
        <MissionImage
          filename="about-us.jpg"
          className=" missionimage img-fluid"
        />
      </div>
    </div>
  </div>
);
export default Mission;
