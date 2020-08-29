import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo";
import AttendHeader from "../components/AttendPage/attendheader";
export default () => (
  <Layout>
    <Attend />
  </Layout>
);

const Attend = () => {
  return (
    <div className="page-body">
      <div className="attend">
        <section className="header">
          <AttendHeader />
        </section>
      </div>
    </div>
  );
};
