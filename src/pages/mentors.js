import React from "react";

import Layout from "../components/layout";
import MentorTiles from "../components/speaker-mentor/mentor-tile";

export default () => (
  <Layout>
    <Mentors />
  </Layout>
);

const Mentors = () => {
  return (
    <div className="page-body">
      <div className="mentors">
        <section className="mentors-section">
            <MentorTiles />
        </section>
      </div>
    </div>
  );
};
