import React, { useState } from "react";
import DynamicLink from "./dynamic-link.js";
import NavLinks from "../data/nav-links.json";
import TTBLogoV3 from "../images/graphics/ttb-logoV3.png";
import Hamburger from "../images/graphics/hamburger_icon.png";
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
          <img className="nav__logo" src={TTBLogoV3} />{" "}
        </DynamicLink>
        <button onClick={toggleMenu} className="nav-mobile__toggle-btn">
          <i
            className={
              isNavOpen
              // ? "mdi mdi-24px mdi-close close-icon"
              // : "mdi mdi-24px mdi-menu menu-icon"
            }
          />
          <img src={Hamburger} />
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
