import React from "react";

import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import photo1 from "../../images/backgrounds/1.png";
import photo2 from "../../images/backgrounds/2.png";
import photo3 from "../../images/backgrounds/3.png";
import photo4 from "../../images/backgrounds/4.png";
import photo5 from "../../images/backgrounds/5.png";

import FileSaver from 'file-saver';

const photos = [photo1, photo2, photo3, photo4, photo5];

const ZoomBackgrounds = () => {

    const fileDownloadHandler = () => {
        for (var i = 0; i < photos.length; i++) {
            FileSaver.saveAs(photos[i], i+".jpg");
        }
    }

    return (
        <div className="zoom-container">
            <h1>Zoom Backgrounds</h1>
            <div style={{ textAlign: "center", fontStyle: "italic", fontWeight: "bold", paddingBottom: "15px" }}>
                Use one of these zoom backgrounds to show your love for Tech Together Boston
            </div>
            <div className="attend-header">
                <div className="register-button">
                    <a type="button" onClick={fileDownloadHandler}>
                        Download All
                    </a>
                </div>
            </div>
            <br />
            <div className="carousel" autoPlay interval={5000}>
                <Carousel>
                    <div>
                        <img src={photo1} alt="oops" />
                    </div>
                    <div>
                        <img src={photo2} alt="oops" />
                    </div>
                    <div>
                        <img src={photo3} alt="oops" />
                    </div>
                    <div>
                        <img src={photo4} alt="oops" />
                    </div>
                    <div>
                        <img src={photo5} alt="oops" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};
export default ZoomBackgrounds;
