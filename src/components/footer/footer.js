import React from "react";
import logo from "../../images/graphics/ttb-logoV2.png";
import Facebook from "../../images/graphics/facebook_white.png";
import Instagram from "../../images/graphics/instagram_white.png";
import Twitter from "../../images/graphics/twitter_white.png";
import LinkedIn from "../../images/graphics/linkedin_white.png";
import Email from "../../images/graphics/email_white.png";
import Youtube from "../../images/graphics/youtube_white.png";
// import Medium from "../../images/medium_article2.png";
const Footer = () => (
  <section className="footer">
    <div className="row mx-auto">
      <div className="col-12 col-md-6 footer-logo-container">
        <img src={logo} className="img-fluid footer_logo" />
        <p>Developed with &#x1F90D; by TechTogether Boston Team</p>
        <p>
          <a href="https://techtogether.io/" target="_blank">
            About TechTogether
          </a>
          <br />
          <a href="http://mlh.io/code-of-conduct" target="_blank">
            MLH Code of Conduct
          </a>
        </p>
      </div>

      <div className="col-12 col-md-6">
        <div className="social-media">
          <a
            className="col-12 col-md-6 sm-icons"
            href="https://www.facebook.com/TechTogetherBoston/"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook Logo" />
          </a>
          <a
            className="col-12 col-md-6 sm-icons"
            href="https://www.instagram.com/techtogetherboston/"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram Logo" />
          </a>
          <a
            className="col-12 col-md-6 sm-icons"
            href="https://twitter.com/techtogetherbos"
            target="_blank"
          >
            <img src={Twitter} alt="Twitter Logo" />
          </a>
          <a
            className="col-12 col-md-6 sm-icons"
            href="https://www.linkedin.com/company/techtogetherboston/"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
          <a
            className="col-12 col-md-6 sm-icons"
            href="https://www.youtube.com/channel/UCRfTWuC55dbE4koLsIjH5bA"
            target="_blank"
          >
            <img src={Youtube} alt="Youtube Logo" />
          </a>
          <a
            className="col-12 col-md-6 sm-icons"
            href="mailto:info.boston@techtogether.io"
            target="_blank"
          >
            <img src={Email} alt="Email Logo" />
          </a>

        </div>
      </div>
    </div>
  </section>
);
export default Footer;
