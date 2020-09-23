import React from "react";

import Organizers from "../../images/organizer.jpg";
const Sponsor = () => (
  <div>
    <div className="be-sponsor">
      <div className="row">
        <div className="col-12 col-md-6 be-sponsor-text">
          <h1>Interested in sponsoring?</h1>

          <p>
            Our event would not be possible without our amazing sponsors and
            partners. Our supporters come from across North America, and all
            with the intention to provide technology access to
            gender-marginalized groups in tech. We provide options to our
            sponsors to help you get the most out of our event.
          </p>
          <br />
          <div className="sponsor-button">
            <a type="button" href="mailto:sponsor-boston@techtogether.io">
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 sponsor-photo">
          <img src={Organizers} alt="oops" />
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>

  //{" "}
  // </div>
);

export default Sponsor;
