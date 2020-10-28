import React from "react";
import Schedule from "../components/AttendPage/schedule"
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
        <section className="attend-section" >
          <div style={{paddingTop: "85px"}}>Details coming!</div>
        </section>
      </div>
    </div>
  );
};
