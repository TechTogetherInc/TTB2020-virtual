import React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
// import Header from "./header";
import Nav from "../components/navbar";
import NavMobile from "../components/nav-mobile";
import Footer from "../components/footer/footer";
import favicon from "../images/graphics/ttb-logoV2.png";

import "../styles/main.scss";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="TechTogether Boston 2020 Virtual"
      meta={[
        {
          name: "description",
          content:
            "Quarantine can't stop the party! Join us at TechTogether Boston 2020 Virtual, Boston's largest all-female, femme, and non-binary hackathon",
        },
        {
          name: "keywords",
          content: "hackathon, boston, female, hackers, non-binary, diversity",
        },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Nav />
    <NavMobile />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;