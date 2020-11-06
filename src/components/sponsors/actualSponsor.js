import React, { useState } from "react";
import SponsorData from "../../data/sponsors.json";
import ReactModal from "react-modal";
// import { StaticQuery, graphql } from "gatsby";
import Image from "./image";

ReactModal.setAppElement("#___gatsby");

const ActualSponsor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorBlurb, setSponsorBlurb] = useState("");

  const openModal = (name, blurb) => {
    if (blurb) {
      setSponsorName(name);
      setSponsorBlurb(blurb);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "2px" }}>Our Current Sponsors</h1>
      <p style={{ fontStyle: "italic" }}>
        Click on the sponsor logos for more information!
      </p>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Sponsor Blurbs"
        className="Modal"
        overlayClassName="Overlay"
        scrollable={true}
      >
        <h1 style={{ color: "black", textAlign: "right" }} onClick={closeModal}>
          x
        </h1>
        <h1 style={{ color: "black", marginBottom: "25px" }}>{sponsorName}</h1>
        <p dangerouslySetInnerHTML={{ __html: sponsorBlurb }}></p>
      </ReactModal>

      {/* sponsors */}
      <div className="row">
        <div style={{ width: "325px", margin: "auto" }}>
          <Image filename={"sponsor-logos/amazon.png"} />
        </div>
        <div style={{ width: "325px", margin: "auto" }}>
          <Image filename={"sponsor-logos/BU-logo.png"} />
        </div>
      </div>
      <div className="row">
        <div
          style={{ width: "225px", margin: "auto" }}
          onClick={() =>
            openModal(
              "Pegasystem",
              "Pega is the leader in cloud software for customer engagement and operational excellence. The world’s most recognized and successful brands rely on Pega’s AI-powered software to optimize every customer interaction on any channel while ensuring their brand promises are kept. Pega’s low-code application development platform allows enterprises to quickly build and evolve apps to meet their customer and employee needs and drive digital transformation on a global scale."
            )
          }
        >
          <Image filename={"sponsor-logos/pegasystem-logo.jpg"} />
        </div>

        <div
          style={{ width: "225px", margin: "auto" }}
          onClick={() =>
            openModal(
              "Capital One",
              "In our 25 years as a founder-led public company, Capital One has grown from a small, credit card start-up that pioneered the use of predictive modeling into one of the largest, fastest-growing, and most dynamic financial technology companies. At Capital One, we believe our success is fueled by data-driven insights, deep customer understanding, and innovative business strategy.  We’ve helped transform cities and communities by attracting incredibly talented associates with the audacity to think they can change the world and the humility to understand they need a whole lot of help to make it happen."
            )
          }
        >
          <Image filename={"sponsor-logos/capitalone-logo.png"} />
        </div>

        <div
          style={{ width: "225px", margin: "auto" }}
          onClick={() =>
            openModal(
              "Red Hat",
              "Red Hat is the world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies. Red Hat helps you standardize across environments, develop cloud-native applications, and integrate, automate, secure, and manage complex environments with award-winning support, training, and consulting services."
            )
          }
        >
          <Image filename={"sponsor-logos/redhat-logo.png"} />
        </div>
      </div>
      <div className="row">
        {SponsorData.map((sponsor) => (
          <div
            className=""
            style={{ width: "150px", margin: "auto", padding: "5px" }}
            onClick={() => openModal(sponsor.sponsor, sponsor.blurb)}
          >
            <Image filename={sponsor.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActualSponsor;
