import React from "react";
import { Link } from "gatsby";
import Video from "../components/video";
import Layout from "../components/layout";
import Image from "../components/image";
// import SEO from "../components/seo";
import Sponsor from "../components/sponsors/sponsor";
import Testimonials from "../components/testimonials/testimonials";
import ProjectHighlights from "../components/projectHighlights/projecthighlights";
import Statistics from "../components/Statistics/statistics";
import PhotoCarousel from "../components/aboutContainer/aboutItem";
export default () => (
  <Layout>
    <App />
  </Layout>
);

const App = () => {
  return (
    <div className="page-body">
      <div className="home">
        <section className="header">
          <div className="header__content">
            <div className="row">
              <div className="col-12 col-md-6 image-container">
                <div className="embed-responsive embed-responsive-16by9">
                  {/* <iframe
                    className="embed-responsive-item"
                    src="https://drive.google.com/file/d/1QsU2bSx2cDOXt4ZxL6E3x4YYekVy40d9/preview"
                  ></iframe> */}
                  <Video
                    className="embed-responsive-item"
                    videoSrcURL="https://www.youtube.com/embed/lcR29DyWLHg"
                    videoTitle="TTB2020"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 offset-md-0 text-section">
                <h1>TechTogether Boston 2020 Virtual</h1>
                <br />
                <h3 style={{ fontWeight: "bold" }}>
                  Boston's largest all-female, femme, <br />
                  and non-binary hackathon.
                </h3>
                <h3>November 6 - November 8, 2020</h3>
                <div
                  className="button-container"
                  style={{ justifyContent: "center" }}
                >
                  <br></br>
                  {/* <div className="button1">
                    <a href="/live/index.html">
                      <p>Live Site!</p>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-container">
          <PhotoCarousel />
        </section>

        <section className="project-showcase-container">
          <ProjectHighlights />
        </section>
        <section className="stats-container">
          <Statistics />
        </section>
        <section className="testimonial-container">
          <Testimonials />
        </section>
        <section className="sponsors-container">
          <Sponsor />
        </section>
      </div>
    </div>
  );
};

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage
