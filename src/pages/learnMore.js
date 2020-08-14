import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Sponsor from "../components/sponsors/sponsor";
import ProjectHighlights from "../components/projectHighlights/projecthighlights";
import Statistics from "../components/Statistics/statistics";
import PhotoCarousel from "../components/aboutContainer/aboutItem";

export default () => (
  <Layout>
    <LearnMore />
  </Layout>
);

const LearnMore = () => {
  return (
    <div className="page-body">
      <div className="learnMore">
        <section className="header">
          <PhotoCarousel />
        </section>

        {/* <section className="about-container">
          <PhotoCarousel />
        </section> */}
        <section className="project-showcase-container">
          <ProjectHighlights />
        </section>
        <section className="stats-container">
          <Statistics />
        </section>
        <section className="sponsors-container">
          <Sponsor />
        </section>
      </div>
    </div>
  );
};
