import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import photo1 from "../../images/stats1.png";
// import photo2 from "../../images/stats2.png";
// import photo3 from "../../images/stats3.png";
// import photo4 from "../../images/stats4.png";
// import photo5 from "../../images/stats5.png";

const Statistics = () => {
  // <div>
  //   <h1>TechTogether 2020 Statistics</h1>
  //   <div className=" carousel">
  //     <Carousel>
  //       <div>
  //         <img src={photo1} alt="oops" />
  //       </div>
  //       <div>
  //         <img src={photo2} alt="oops" />
  //       </div>
  //       <div>
  //         <img src={photo3} alt="oops" />
  //       </div>
  //       <div>
  //         <img src={photo4} alt="oops" />
  //       </div>
  //       <div>
  //         <img src={photo5} alt="oops" />
  //       </div>
  //     </Carousel>
  //   </div>
  // </div>

  const stats = [
    { stat: "20+", description: "sponsors" },
    { stat: "30+", description: "speakers" },
    { stat: "35+", description: "sessions to attend" },
    { stat: "60+", description: "mentors to help" },
  ];

  return (
    <div
      class="row display-container homestats"
      style={{
        borderBottom: "1px solid black",
        width: "100%",
        padding: "25px 10px",
        backgroundColor: "#181d46",
        color: "#e26554",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      {stats.map((stat) => (
        <div class="col-12 col-md-3 subcontainer">
          <div className="stat">{stat.stat}</div>
          <div className="stat-details">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};
export default Statistics;
