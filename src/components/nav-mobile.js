import React, { useState } from "react";
import DynamicLink from "./dynamic-link.js";
import NavLinks from "../data/nav-links.json";
import TTBLogoV3 from "../images/graphics/ttb-logoV3.png";
import Hamburger from "../images/graphics/hamburger_icon.png";
import Exit from "../images/graphics/exit_icon.png";

const NavMobile = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  function toggleMenu() {
    setNavOpen(!isNavOpen);
  }

  return (
    // nav mobile crap here
    <nav className={`nav-mobile ${isNavOpen ? "opened" : "closed"}`}>
      <div className="nav-mobile__top">
        <DynamicLink to="/" className="nav_logo">
          <img className="nav__logo" src={TTBLogoV3} alt="oops" />{" "}
        </DynamicLink>
        <button onClick={toggleMenu} className="nav-mobile__toggle-btn">
          <i className={isNavOpen ? "opened" : "closed"} />
          <img
            src={Hamburger}
            alt="oops"
            style={isNavOpen ? { display: "none" } : { display: "block" }}
          />
          <img
            src={Exit}
            alt="oops"
            style={isNavOpen ? { display: "block" } : { display: "none" }}
          />
        </button>
      </div>
      <ul
        className="nav-mobile__list"
        style={isNavOpen ? { display: "block" } : { display: "none" }}
      >
        {NavLinks.map((link, index) => {
          return (
            <li key={`nav-item-${index}`} className="nav-mobile__item">
              <DynamicLink
                className="nav-mobile__link"
                to={link.path}
                onClick={toggleMenu}
              >
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
