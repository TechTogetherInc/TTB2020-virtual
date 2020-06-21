import React from "react";
import TeamData from "../../data/team-info.json";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const DirectorMember = (props) => (
  <div className="team-member">
    <div className="team-member__image-container">
      <div className="team-member__image">
        <div className="team-member__circle" />
        <img src={props.headshot} />
      </div>
      <p className="team-member__name">{props.name}</p>
    </div>
    <span className="team-member__school_year">{props.school_year}</span>
    <p>{props.position}</p>
  </div>
);

const Directors = () => {
  function renderLeadership(section) {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <DirectorMember
              name={section.members[0].name}
              position={section.members[0].position}
              school_year={section.members[0].school_year}
              headshot={section.members[0].headshot}
            />
          </div>
          <div className="col-4">
            <DirectorMember
              name={section.members[1].name}
              position={section.members[1].position}
              school_year={section.members[1].school_year}
              headshot={section.members[1].headshot}
            />
          </div>
          <div className="col-4">
            <DirectorMember
              name={section.members[2].name}
              position={section.members[2].position}
              school_year={section.members[2].school_year}
              headshot={section.members[2].headshot}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <DirectorMember
              name={section.members[3].name}
              position={section.members[3].position}
              school_year={section.members[3].school_year}
              headshot={section.members[3].headshot}
            />
          </div>
          <div className="col-4">
            <DirectorMember
              name={section.members[4].name}
              position={section.members[4].position}
              school_year={section.members[4].school_year}
              headshot={section.members[4].headshot}
            />
          </div>
          <div className="col-4">
            <DirectorMember
              name={section.members[5].name}
              position={section.members[5].position}
              school_year={section.members[5].school_year}
              headshot={section.members[5].headshot}
            />
          </div>
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
