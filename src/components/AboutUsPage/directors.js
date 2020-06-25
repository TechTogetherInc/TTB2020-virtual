import React from "react";
import TeamData from "../../data/team-info.json";
import { StaticQuery, graphql } from "gatsby";
import Image from "./headshots/image";

const DirectorMember = (props) => (
  <div className="team-member">
    <a href={props.linkedin} target="_blank" className="team-member__name">
      {props.name}
    </a>
    <br />
    <span>
      <i style={{ color: "black", fontWeight: "bold" }}>{props.position}</i>
    </span>
    <br />
    <span className="team-member__school">{props.school}</span>

    <br />
    <span className="team-member__year">{props.year}</span>
  </div>
);

const Directors = () => {
  function renderTeammates(section) {
    return (
      <div>
        <div className="row">
          {section.members.map((member) => (
            <div className="col-12 col-md-4 member-container">
              {/* <Sarina imageFile="Sarina_Simon_Director.jpg" /> */}
              <div class="member-image">
                <Image alt="headshot" filename={member.headshot} />
              </div>
              <DirectorMember
                name={member.name}
                position={member.position}
                school={member.school}
                year={member.year}
                headshot={member.headshot}
                linkedin={member.linkedin}
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
      {renderTeammates(TeamData[0])}
      <br />
      <br />
      <h1>Marketing</h1>
      {renderTeammates(TeamData[1])}
      <br />
      <br />
      <h1>Operations</h1>
      {renderTeammates(TeamData[2])}
      <br />
      <br />
      <h1>Partnerships</h1>
      {renderTeammates(TeamData[3])}
      <br />
      <br />
      <h1>Outreach</h1>
      {renderTeammates(TeamData[4])}
      <br />
      <br />
      <h1>Technology</h1>
      {renderTeammates(TeamData[5])}
    </div>
  );
};

export default Directors;
