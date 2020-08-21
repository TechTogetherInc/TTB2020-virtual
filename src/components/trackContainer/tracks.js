import React from "react";
import TrackChallengesData from "../../data/track-challenges.json";
import Aurora from "../../images/aurora.png";

const photos = {
  Aurora,
  Aurora,
  Aurora,
};

const Track = (props) => (
  <div className="track-text">
    <img src={photos[props.title]} className="track-pic" />
    <h3 className="track-title">{props.title}</h3>
    <br />
    <p>{props.description}</p>
  </div>
);

const Tracks = () => {
  return (
    <div className="tracks-container">
      <h1>Challenges</h1>
      <div className="tracks-container row">
      {TrackChallengesData.map((track) => (
        <div className="track col-sm" key={track.title}>
          <Track
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
