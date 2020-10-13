import React from "react";
import TrackChallengesData from "../../data/track-challenges.json";
import Image from "./trackImages/image";

const Track = (props) => {
  return (
    <div className="track-text">
      <h3 className="track-title">{props.title}</h3>
      <br/>
      <p>{props.description}</p>
      <Image alt={props.title} filename={props.image} className="track-pic" />
      {props.challenges.map((challenge) => (
          <div key={challenge.name}>
            <h4 className="challenge-name">{challenge.name}</h4>
            <p>{challenge.description}</p>
            <br/>
          </div>
        ))}
    </div>
  );
};

const Tracks = () => {
  return (
    <div className="tracks-container">
      <h1>Challenges</h1>
      <div className="tracks-container row">
        {TrackChallengesData.map((track) => (
          <div className="track col-12 col-md-4" key={track.title}>
            <Track
              image={track.image}
              title={track.title}
              description={track.description}
              challenges={track.challenges}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tracks;
