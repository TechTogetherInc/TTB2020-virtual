import React from "react";
import logo from "../../images/graphics/ttb-logoV2.png";
import Facebook from "../../images/graphics/facebook_white.png";
import Instagram from "../../images/graphics/instagram_white.png";
import Twitter from "../../images/graphics/twitter_white.png";
import LinkedIn from "../../images/graphics/linkedin_white.png";
import Medium from "../../images/medium_article2.png";
const Footer = () => (
  <section className="footer">
    <div className="row mx-auto align-items-center">
      <div className="col-5">
        <img src={logo} className="img-fluid footer_logo" />
      </div>
      <div className="col-7">
        <p> Follow Us on Social Media! </p>
      </div>
    </div>
  </section>
);
export default Footer;
