import React from "react";

import bu from "../../images/partner-logos/BU-logo.png";
import wayfair from "../../images/partner-logos/Wayfair.png";
import redhat from "../../images/partner-logos/redHet_Logo.png";
import aws from "../../images/partner-logos/AWS_Services.png";
import dell from "../../images/partner-logos/dell-blue-logo.png";
import slalom from "../../images/partner-logos/Slalom_Build.png";
import atlassian from "../../images/partner-logos/Atlassian-horizontal.png";
import twosigma from "../../images/partner-logos/twosigmalogo.png";
import bcbs from "../../images/partner-logos/BCBS.png";
import mathworks from "../../images/partner-logos/MathWorks.jpg";
import capitalone from "../../images/partner-logos/capitalone-logo.png";
import facebook from "../../images/partner-logos/facebook-logo-gray-v2.png";
import ibm from "../../images/partner-logos/IBM_research_logo.png";
import cbre from "../../images/partner-logos/CBRE_logo.png";
import qualcomm from "../../images/partner-logos/Qualcomm-Logo.jpg";
import bloomberg from "../../images/partner-logos/BBGblck.png";
import liberty from "../../images/partner-logos/Liberty_Mutual.png";
import northeastern from "../../images/partner-logos/northeastern.png";
import balsamiq from "../../images/partner-logos/balsamiq-logo-noborder-print.png";
import gc from "../../images/partner-logos/gc.png";
import gwc from "../../images/partner-logos/gwc.png";
import armoured from "../../images/partner-logos/armored-things-logo.png";
import vistaprint from "../../images/partner-logos/vistaprint-logo.png";
import samsonite from "../../images/partner-logos/Samsonitelogo_PMS280.jpg";
import spark from "../../images/partner-logos/spark.png";
import bit from "../../images/partner-logos/theBit.png";
import stickermule from "../../images/partner-logos/sticker-mule-logo.png";
import stringloop from "../../images/partner-logos/stringandloop_Logo_Black.png";
import Organizers from "../../images/organizer.jpg";
const Sponsor = () => (
  <div>
    <div className="be-sponsor">
      <div className="row">
        <div className="col-12 col-md-6 be-sponsor-text">
          <h1>Sponsor TechTogether Boston</h1>

          <p>
            Our event would not be possible without our amazing sponsors and
            partners. Our supporters come from across North America, and all
            with the intention to provide technology access to
            gender-marginalized groups in tech! We provide options to our
            sponsors to help you get the most out of our event.
          </p>
          <br />
          <div className="sponsor-button">
            <a type="button" href="mailto:sponsor-boston@techtogether.io">
              Apply
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

    <div className="bar-sm"></div>
    <div className="sponsor-gallery">
      <h1>Our past sponsors</h1>
      <div className="row">
        <div className="gallery col-6 col-md-2">
          <img src={bu} alt="Boston University" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={wayfair} alt="Wayfair" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={redhat} alt="RedHat" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={aws} alt="AWS" />
        </div>
        <div className="gallery col-6 col-md-2">
          <img src={dell} alt="Dell" />
        </div>

        <div className="gallery ">
          <img src={slalom} alt="Slalom" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={atlassian} alt="Atlassian" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={twosigma} alt="Two-Sigma" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={facebook} alt="Facebook" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={mathworks} alt="Mathworks" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={capitalone} alt="Capital-One" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={bcbs} alt="BCBS" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={ibm} alt="IBM-Research" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={cbre} alt="CBRE" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={qualcomm} alt="Qualcomm" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={bloomberg} alt="Bloomberg" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={liberty} alt="Liberty Mutual" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={northeastern} alt="Northeastern University" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={balsamiq} alt="Balsamiq" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={gc} alt="General Catalyst" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={gwc} alt="Girls Who Code" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={armoured} alt="Armoured Things" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={vistaprint} alt="Vistaprint" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={samsonite} alt="Samsonite" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={spark} alt="Spark" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={stickermule} alt="Sticker Mule" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={bit} alt="The Bit" />
        </div>

        <div className="gallery col-6 col-md-2">
          <img src={stringloop} alt="String Loop" />
        </div>
      </div>
    </div>
  </div>

  //{" "}
  // </div>
);

export default Sponsor;
