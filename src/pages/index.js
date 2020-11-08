import React from "react";
import Layout from "../components/layout";
import Sponsor from "../components/sponsors/sponsor";
import ActualSponsor from "../components/sponsors/actualSponsor";
import Tracks from "../components/trackContainer/tracks";
import Stats from "../components/Statistics/statistics";
import FAQContainer from "../components/FAQContainer/FAQContainer";
import Speaker from "../components/speaker/speaker";
import DFM from "../images/DFM.png";
import AttendHeader from "../components/AttendPage/attendheader";
import CountdownTimer from "../components/counter-timer";

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
                  <div
                    className="register-button"
                    style={{ margin: "5px 1px", padding: "10px 30px" }}
                  >
                    <a type="button" href="/attend">
                      VIEW HACKATHON SCHEDULE
                    </a>
                  </div>
                  <div
                    className="register-button"
                    style={{ margin: "5px 1px" }}
                  >
                    <a
                      type="button"
                      href="https://techtogetherboston-2020.devpost.com/"
                    >
                      SUBMIT PROJECT ON DEVPOST
                    </a>
                  </div>
                  <div
                    className="register-button"
                    style={{ margin: "5px 1px", padding: "10px 63px" }}
                  >
                    <a
                      type="button"
                      href="https://drive.google.com/drive/folders/1AYFc5NadNDdIWgi1Hhv7LqlRCWLqK6Zx"
                    >
                      SESSION RECORDINGS
                    </a>
                  </div>
                </div>
                <a target="_blank" href="https://pinnacle.us.org/">
                  <img
                    src={require("../images/PinnacleBadge_TTB.png")}
                    style={{
                      width: "250px",
                      align: "right",
                      margin: "20px 0 0 -15px",
                    }}
                  />
                </a>
              </div>
              <div className="image-container ">
                <img
                  className="dfm"
                  src={DFM}
                  alt="dear future me pic is broken! "
                  align="right"
                />{" "}
              </div>
            </div>
            {/* <div className="row" style={{ borderTop: "1px solid" }}>
              <div className="col-12">
                <CountdownTimer />
              </div>
            </div> */}
          </div>
        </section>
        <section className="attend">
          <AttendHeader />
        </section>
        <section className="stats">
          <Stats />
        </section>
        <section className="tracks">
          <Tracks />
        </section>

        {/* <section className="sponsors-container">
          <Sponsor />
        </section> */}
        <section className="sponsors-logo-container">
          <ActualSponsor />
        </section>

        {/* <section className="speaker-container">
          <Speaker />
        </section> */}
        <section className="faq-container">
          <FAQContainer />
        </section>
      </div>
    </div>
  );
};
