import React from "react";
import SpeakersData from "../../data/speakers.json";

import Richard from "../../images/speakers/richard.png";
import Carolyn from "../../images/speakers/carolyn.png";
import Savita from "../../images/speakers/savita.png";
import Charis from "../../images/speakers/charis.png";
import Liat from "../../images/speakers/liat.png";

const photos = {
    Richard,
    Carolyn,
    Savita,
    Charis,
    Liat,
};

// const Speaker = (props) => (
//     <div class="card card-width">
//         <img class="card-img-top img-fluid" src={photos[props.image]} alt={props.image}/>
//         <div class="card-body">
//             <h5 class="card-title">{props.name}</h5>
//             <h6>{props.company}</h6>
//             <h6>{props.title}</h6>
//         </div>
//         <div class="card-body">
//             <p class="card-text">{props.aboutMe}</p>
//             <a href={props.linkedinUrl} target="_blank" class="card-link">Contact Me</a>
//         </div>
//     </div>
// );

const Speaker = (props) => (
    <div class="row mb-2">
        <div className="col-12 col-md-3">
            <img src={photos[props.image]} alt="oops" className="speaker-img" />
        </div>
        <div className="col-12 col-md-9 speaker-text">
            <h2 className="speaker-name">{props.name}</h2>
            <h5 className="speaker-title">{props.title} @ {props.company}</h5>
            <p className="speaker-description">{props.aboutMe}</p>
        </div>
    </div>
);

const SpeakerTiles = () => (
    <div>
        <h1 className="speaker-head">TTB 2020 Speakers</h1>
        <div className="speaker-container row">
            {SpeakersData.map((speaker) => (
                <div className="speaker" key={speaker.name}>
                    <Speaker
                        name={speaker.name}
                        company={speaker.company}
                        title={speaker.title}
                        linkedinUrl={speaker.linkedinUrl}
                        image={speaker.image}
                        aboutMe={speaker.aboutMe}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default SpeakerTiles;
