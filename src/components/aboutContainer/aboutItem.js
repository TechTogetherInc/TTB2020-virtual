import React from "react";

import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import photo1 from "../../images/photogallery/1.jpg";
import photo2 from "../../images/photogallery/2.jpg";
import photo3 from "../../images/photogallery/3.jpg";
import photo4 from "../../images/photogallery/4.jpg";
import photo5 from "../../images/photogallery/5.jpg";
import photo6 from "../../images/photogallery/6.jpg";

import "../aboutContainer/aboutItem.scss";

const PhotoCarousel = () => {
  return (
    <div className="row mx-auto align-items-center about-container">
      <div className="col-12 col-md-5 offset-md-0 text-section">
        <h2>
          At TechTogether Boston, we're looking to shape the way
          <span> women and non-binary people</span> get involved with tech.
        </h2>
        <p>
          We aim to create an inclusive environment to encourage more
          underrepresented people to either get introduced to the world of
          technology or harness their skills to create projects of their own.
        </p>
        <p>
          With the support of our community, sponsors, and industry leaders, we
          can chip away at the gender gap in technology. From students with
          non-technical majors who are interested in breaking into tech, to
          seasoned hackathon veterans looking for help to build out complex,
          groundbreaking products - we aim to support our hackers.
        </p>
      </div>
      <div className="col-12 col-md-7 carousel">
        <Carousel style={{ height: "400px" }}>
          <div>
            <img src={photo6} />
          </div>
          <div>
            <img src={photo1} />
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
};
export default PhotoCarousel;
