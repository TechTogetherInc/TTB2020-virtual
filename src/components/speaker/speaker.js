import React from "react";

import SpeakerImg from "../../images/speakerimg.jpg";
const Speaker = () => (
  <div className="be-speaker">
    <div className="row">
      <div className="col-12 col-md-6 speaker-img">
        <img src={SpeakerImg} alt="oops" />
      </div>
      <div className="col-12 col-md-6 be-speaker-text ">
        <h1>Interested in helping?</h1>

        <p>
          Become a key part of our event team as a speaker, volunteer, or
          mentor!
        </p>
        <br />
        <div className="speaker-button">
          <a type="button" href="mailto:sponsor-boston@techtogether.io">
            Apply
          </a>
        </div>
      </div>
    </div>

    <br />
    <br />
  </div>

  //{" "}
  // </div>
);

export default Speaker;
