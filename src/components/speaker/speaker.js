import React from "react";

import GetInvolvedImg from "../../images/get-involved.jpg";
const Speaker = () => (
  <div className="be-speaker">
    <div className="row">
      <div className="col-12 col-md-6 speaker-img">
        <img src={GetInvolvedImg} alt="oops" />
      </div>
      <div className="col-12 col-md-6 be-speaker-text ">
        <h1>Interested in helping?</h1>

        <p>
          Become a key part of our event team as a speaker, volunteer, or
          mentor!
        </p>
        <br />
        <div className="speaker-button">
          <a type="button" href="https://techtogether.typeform.com/to/pbAZS3I4">
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
