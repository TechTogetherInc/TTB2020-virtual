import React from "react";
import Image from "../image";
import challengesData from "../../data/challenges.json";

const Challenges = () => {
  return (
    <div className="display-container">
      <h1>Challenges</h1>
      <div style={{ textAlign: "center" }}>
        Winners will be featured on our website after the event.
        <br />
        Submit your solution/project at&nbsp;
        <a target="_blank" href="https://techtogetherboston-2020.devpost.com/">
          DevPost
        </a>
      </div>
      <div className="row">
        {challengesData.map((element) => (
          <div className="col-12 col-md-3 subcontainer">
            <div style={{ height: "210px" }}>
              <div
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Image alt="headshot" filename={element.image} />
              </div>
            </div>
            <div className="title">{element.title}</div>
            <div
              className="prize"
              dangerouslySetInnerHTML={{
                __html: "<u>Prize</u>: " + element.prize,
              }}
            ></div>

            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: element.description,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;