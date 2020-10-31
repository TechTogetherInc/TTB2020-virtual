import React from "react";
import Schedule from "../components/AttendPage/schedule";
import Challenges from "../components/AttendPage/challenges";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo";
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
            {/* <Challenges />
            <Schedule /> */}
            <div style={{ textAlign: "center", height: "500px" }}>
              Details coming!
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
