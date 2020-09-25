import React from "react";
// import { Link } from "gatsby"
import DynamicLink from "./dynamic-link";
import NavLinks from "../data/nav-links.json";
import TTBLogoV2 from "../images/graphics/ttb-logoV2.png";

const Nav = () => (
  <nav className="nav">
    <a
      id="mlh-trust-badge"
      style={{
        display: "block",
        maxWidth: "100px",
        minWidth: "60px",
        position: "fixed",
        left: "0px",
        top: "0",
        width: "10%",
        zIndex: "10000",
        marginLeft: "9px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
      href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
        alt="Major League Hacking 2021 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>

    <DynamicLink to="/" className=" nav__logo">
      <img
        className="img-fluid "
        src={TTBLogoV2}
        alt="oops"
        style={{ marginLeft: "75px" }}
      />
    </DynamicLink>

    <ul className="nav__list">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item">
            <DynamicLink className="nav__link" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;
