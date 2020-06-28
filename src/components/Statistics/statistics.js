import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import photo1 from "../../images/stats1.png";
import photo2 from "../../images/stats2.png";
import photo3 from "../../images/stats3.png";
import photo4 from "../../images/stats4.png";
import photo5 from "../../images/stats5.png";
const Statistics = () => (
  <div>
    <h1>TechTogether 2020 Statistics</h1>
    <div className=" carousel">
      <Carousel>
        <div>
          <img src={photo1} />
        </div>
        <div>
          <img src={photo2} />
        </div>
        <div>
          <img src={photo3} />
        </div>
        <div>
          <img src={photo4} />
        </div>
        <div>
          <img src={photo5} />
        </div>
      </Carousel>
    </div>
  </div>
);
export default Statistics;
