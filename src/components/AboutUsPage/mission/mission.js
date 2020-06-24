import React from "react";

import teamPhoto from "../../../images/about-us.jpg";
import MissionImage from "./missionphoto";
const Mission = () => (
  <div className="mission">
    <h1>About Us</h1>
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="aboutus-statement">
          <p>
            TechTogether Boston, previously known as SheHacks Boston, is
            Boston's largest student-run hackathon open to all female, femme,
            and non-binary individuals
          </p>
        </div>
        <div className="mission-statement">
          <h2 style={{ color: "rgb(0, 12, 84)" }}>Mission Statement</h2>
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
      <div className="col-12 col-md-6 ">
        <MissionImage
          filename="about-us.jpg"
          className=" missionimage img-fluid"
        />
      </div>
    </div>
  </div>
);
export default Mission;
