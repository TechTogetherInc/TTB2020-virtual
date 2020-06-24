import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import photo1 from "../../images/project-highlights/aurora.png";
import ProjectImage from "../../components/projectHighlights/projectimage";

// import photo2 from "../../images/project-highlights/safeSpace.jpg";
// import photo3 from "../../images/project-highlights/moodring.png";
// import photo4 from "../../images/project-highlights/SheNetwork.png";
const ProjectHighlights = () => (
  <div className="row mx-auto align-items-center">
    <div className="col-12 col-md-6 order-md-2 order-1">
      <Carousel className="projectimages" style={{ width: 250 }}>
        <div>
          <ProjectImage filename="sheNework.png" />
        </div>

        <div>
          <ProjectImage filename="aurora.png" />
        </div>
        <div>
          <ProjectImage filename="safeSpace.jpg" />
        </div>
        <div>
          <ProjectImage filename="moodring.png" />
        </div>
      </Carousel>
    </div>
    <div className="col-12 col-md-5 about">
      <h1>TTB 2020 Project Highlights</h1>
      <div className="bar-sm"></div>
      <p>
        <a
          href="https://devpost.com/software/aurora-pyoei7"
          target="_blank"
          style={{ color: "#000C54" }}
        >
          Aurora{" "}
        </a>
        is a multifaceted program that connects individuals in need of legal aid
        and guidance with those who share the tools and generosity to assist
        them. Assisting those who need their help the most, Aurora also has the
        ability to identify and reach out to local government officials to
        incite change.
      </p>
      <p>
        <a
          href="https://devpost.com/software/safespace-ya7v0n"
          target="_blank"
          style={{ color: "#000C54" }}
        >
          SafeSpace{" "}
        </a>
        is a tool that helps tackle impostor syndrome and to create a more
        inclusive space and also provided resources or help to those victimized.
      </p>
      <p>
        <a
          href="https://devpost.com/software/shenetwork"
          target="_blank"
          style={{ color: "#000C54" }}
        >
          SheNetwork{" "}
        </a>
        is a platform for women in the tech field to be empowered and connect.
        We want young women to develop their passion for tech by turning their
        dreams into a reality--by growing their network
      </p>
      <p>
        <a
          href="https://devpost.com/software/moodring"
          target="_blank"
          style={{ color: "#000C54" }}
        >
          moodring{" "}
        </a>
        pools together the sentiment of the anonymous thoughts of everyone who
        uses it—no matter their language—to create a visual representation of
        the world’s honest emotions over the course of a day.
      </p>
    </div>
  </div>
);

export default ProjectHighlights;
