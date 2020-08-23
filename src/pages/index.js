import React from "react";
import Video from "../components/video";
import Layout from "../components/layout";
import Sponsor from "../components/sponsors/sponsor";
import Tracks from "../components/trackContainer/tracks";
import FAQContainer from "../components/FAQContainer/FAQContainer";

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
              <div className="col-12 col-md-6 offset-md-0 text-section">
                <h1 style={{ fontWeight: "bold", padding: "0px" }}>
                  TechTogether Boston 2020 Virtual
                </h1>
                <h3 style={{ fontWeight: "bold" }}>
                  November 6th - November 8th, 2020
                </h3>
                <br />
                <h3>
                  Boston's largest all-female, femme, <br />
                  and non-binary hackathon.
                </h3>
                <br />
                <div className="attend-header">
                  <form
                    class="form"
                    action="https://shehacks.us17.list-manage.com/subscribe/post?u=34946c2c134f07563cac527a4&amp;id=d441aab50c"
                    method="post"
                    id="subscribe-form"
                    name="subscribe-form"
                    target="_blank"
                    novalidate
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      className="attend-header-email"
                      size="50"
                      placeholder="Notify me when applications open"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="attend-header-button"
                    />
                  </form>
                </div>
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
              <div className="col-12 col-md-6 image-container">
                <div className="embed-responsive embed-responsive-16by9">
                  <Video
                    className="embed-responsive-item"
                    videoSrcURL="https://www.youtube.com/embed/lcR29DyWLHg"
                    videoTitle="TTB2020"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tracks-container">
          <Tracks />
        </section>
        <section className="sponsors-container">
          <Sponsor />
        </section>
        <section className="faq-container">
          <FAQContainer />
        </section>
      </div>
    </div>
  );
};
