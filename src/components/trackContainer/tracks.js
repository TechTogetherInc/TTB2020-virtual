import React from "react";
import TrackChallengesData from "../../data/track-challenges.json";
import Image from "./trackImages/image";

const Track = (props) => {
  return (
    <div className="track-text">
      <Image alt="oops" filename={props.image} className="track-pic" />
      <h3 className="track-title">{props.title}</h3>
      <br />
      <p>{props.description}</p>
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tracks;
