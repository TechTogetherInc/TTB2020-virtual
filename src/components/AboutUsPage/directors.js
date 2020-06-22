import React from "react";
import TeamData from "../../data/team-info.json";
import { StaticQuery, graphql } from "gatsby";
import Sarina from "../AboutUsPage/headshots/sarina";
import Nisha from "../AboutUsPage/headshots/nisha";
import Jengyu from "../AboutUsPage/headshots/jengyu";
import Kelsey from "../AboutUsPage/headshots/kelsey";
import Julie from "../AboutUsPage/headshots/julie";
import Hannah from "../AboutUsPage/headshots/hannah";
const DirectorMember = (props) => (
  <div className="team-member">
    <div className="team-member__image-container">
      <div className="team-member__image">
        <div className="team-member__circle" />
        {/* <Sarina /> */}
        {/* <img src={props.headshot} /> */}
      </div>
      <p className="team-member__name">{props.name}</p>
    </div>
    <span className="team-member__school_year">{props.school}</span>
    <br />
    <span className="team-member__school_year">{props.year}</span>
    <p>{props.position}</p>
  </div>
);

const Directors = () => {
  function renderLeadership(section) {
    return (
      <div>
        <div className="row">
          {section.members.map((member) => (
            <div className="col-4">
              <Sarina />
              <DirectorMember
                name={member.name}
                position={member.position}
                school={member.school}
                year={member.year}
                headshot={member.headshot}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Leadership</h1>

      {renderLeadership(TeamData[0])}
    </div>
  );
};

export default Directors;
