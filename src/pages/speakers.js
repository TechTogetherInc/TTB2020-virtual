import React from "react";

import Layout from "../components/layout";
import SpeakerTiles from "../components/speaker-mentor/speaker-tile";

export default () => (
  <Layout>
    <Speaker />
  </Layout>
);

const Speaker = () => {
  return (
    <div className="page-body">
      <div className="speakers">
          <div className="get-excited-div">
              <h1>Get ready to get inspired.</h1>
              <h4>Check out this year's lineup of all-star speakers.</h4>
          </div>
        <section className="speakers-section">
            <SpeakerTiles />
        </section>
      </div>
    </div>
  );
};
