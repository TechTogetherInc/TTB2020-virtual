import React from "react";
import Directors from "../directors";
// import Partnerships from "../AboutUsPage/"

const TeamMembers = () => (
  <div className="team">
    <div classname="team-intro">
      <h1>Meet the Team behind TTB 2020-Virtual</h1>
      <div className="bar-sm"></div>
      <p>
        The TTB 2020-Virtual Organizing Team plans to host virtual hackathon for
        the upcoming hackathon season.We are working to maintain every element of our in-person events within
        a virtual platform, and to ensure that you have the TechTogether
        experience you love.
      </p>
      <br></br>
    </div>
    <section className="leadership">
      <Directors />
    </section>

    {/* <section className="Partnerships">
            <Partnerships />
        </section> */}
  </div>
);

export default TeamMembers;
