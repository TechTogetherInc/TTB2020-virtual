import React from "react";
import Layout from "../components/layout";
import Sponsor from "../components/sponsors/sponsor";
import Tracks from "../components/trackContainer/tracks";
import FAQContainer from "../components/FAQContainer/FAQContainer";
// import PastSponsor from "../components/sponsors/pastSponsor";
import Speaker from "../components/speaker/speaker";
import DFM from "../images/DFM.png";
import AttendHeader from "../components/AttendPage/attendheader";

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
                <h1
                  style={{
                    fontWeight: "bold",
                    padding: "0px",
                    fontSize: "45px",
                    margin: "0px",
                  }}
                >
                  TechTogether Boston
                </h1>
                <h3 style={{ fontWeight: "bold" }}>
                  Virtual · November 6-8th, 2020
                </h3>
                <br />
                <h3>
                  Boston's largest all-female, femme, <br />
                  and non-binary hackathon.
                </h3>
                <br />
                <div className="attend-header">
                  <div className="register-button">
                    <a
                      type="button"
                      target="_blank"
                      href="https://techtogetherboston.eventbrite.com/"
                    >
                      REGISTER
                    </a>
                  </div>
                </div>
                {/* <img
                  src={require("../images/PinnacleBadge_BlackGold.png")}
                  style={{
                    width: "250px",
                    align: "right",
                    margin: "10px 0 0 0",
                  }}
                /> */}
                <img
                  src={require("../images/PinnacleBadge_TTB.png")}
                  style={{
                    width: "250px",
                    align: "right",
                    margin: "20px 0 0 -15px",
                  }}
                />
              </div>
              <div className="image-container ">
                {/* <div className="embed-responsive embed-responsive-16by9">
                  <Video
                    className="embed-responsive-item"
                    videoSrcURL="https://www.youtube.com/embed/lcR29DyWLHg"
                    videoTitle="TTB2020"
                  />
                  
                </div> */}
                <img
                  className="dfm"
                  src={DFM}
                  alt="dear future me pic is broken! "
                  // style={{ border: "10px solid red" }}
                  align="right"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="attend">
          <AttendHeader />
        </section>
        <section className="tracks">
          <Tracks />
        </section>
        <section className="sponsors-container">
          <Sponsor />
        </section>

        <section className="speaker-container">
          <Speaker />
        </section>
        <section className="faq-container">
          <FAQContainer />
        </section>
      </div>
    </div>
  );
};
