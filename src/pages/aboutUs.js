import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TeamMembers from "../components/AboutUsPage/teamMembers/teamMembers";
import Mission from "../components/AboutUsPage/mission/mission";
// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage

export default () => (
  <Layout>
    <AboutUs />
  </Layout>
);

const AboutUs = () => {
  return (
    <div className="page-body">
      <div className="aboutUs">
        <section className="header">
          <Mission />
        </section>
        <section className="teammembers">
          <TeamMembers />
        </section>
      </div>
    </div>
  );
};
