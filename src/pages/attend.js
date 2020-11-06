import React from "react";
import AttendStats from "../components/AttendPage/attendStats";
import Schedule from "../components/AttendPage/schedule";
import Challenges from "../components/AttendPage/challenges";
import ZoomBackgrounds from "../components/AttendPage/zoomBackgrounds"

import Layout from "../components/layout";
export default () => (
  <Layout>
    <Attend />
  </Layout>
);

const Attend = () => {
  return (
    <div className="page-body">
      <div className="attend">
        <section className="attend-section">
          <div style={{ paddingTop: "85px" }}>
            <Schedule />
            <AttendStats />
            <Challenges />
            <ZoomBackgrounds />
          </div>
        </section>
      </div>
    </div>
  );
};
