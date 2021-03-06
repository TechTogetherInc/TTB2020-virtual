import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo";
import TeamMembers from "../components/AboutUsPage/teamMembers/teamMembers";
import Mission from "../components/AboutUsPage/mission/mission";
import Testimonials from "../components/testimonials/testimonials";

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
        <section className="testimonial-container">
          <Testimonials />
        </section>
        <section className="teammembers">
          <TeamMembers />
        </section>
      </div>
    </div>
  );
};
