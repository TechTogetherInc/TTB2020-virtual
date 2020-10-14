import React from "react";
import SponsorData from "../../data/sponsors.json";
// import { StaticQuery, graphql } from "gatsby";
import Image from "./image"

const ActualSponsor = () => {
    return (
      <div>
        <h1>Sponsors</h1>
        <div style={{width: "700px", margin: "auto",}}>
          <Image alt="headshot" filename={"partner-logos/amazon-logo.png"} />
        </div>
        <div className="row">
            <div style={{width: "350px", margin: "auto"}}>
            <Image alt="headshot" filename={"partner-logos/pegasystem-logo.jpg"} />
            </div>

            <div style={{width: "350px", margin: "auto"}}>
            <Image alt="headshot" filename={"partner-logos/capitalone-logo.png"} />
            </div>
        </div>
        <div className="row">
          {SponsorData.map((sponsor) => (
            <div className="" style={{width:"225px", margin: "auto", padding:"0px 5px"}}>
                <Image alt="headshot" filename={sponsor.logo} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default ActualSponsor;
