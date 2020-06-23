import React from "react";
import TeamData from "../../data/team-info.json";
import { StaticQuery, graphql } from "gatsby";
import Image from "./headshots/image";

const DirectorMember = (props) => (
  <div className="team-member">
    <p className="team-member__name">{props.name}</p>
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
                <Image alt="Gatsby in Space" filename={member.headshot} />
              </div>
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

      {renderTeammates(TeamData[0])}

      <h2>Marketing</h2>
      {renderTeammates(TeamData[1])}
      <h2>Operations</h2>
      {renderTeammates(TeamData[2])}
      <h2>Partnerships</h2>
      {renderTeammates(TeamData[3])}
      <h3>Outreach</h3>
      {renderTeammates(TeamData[4])}
      <h2>Technology</h2>
      {renderTeammates(TeamData[5])}
    </div>
  );
};

export default Directors;
