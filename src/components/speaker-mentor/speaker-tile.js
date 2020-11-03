import React from "react";
import SpeakersData from "../../data/speakers.json";

import Richard from "../../images/speakers/richard.png";
import Carolyn from "../../images/speakers/carolyn.png";
import Savita from "../../images/speakers/savita.png";
import Charis from "../../images/speakers/charis.png";
import Liat from "../../images/speakers/liat.png";

import Kim from "../../images/speakers/Kim.png";
import Amy from "../../images/speakers/Amy.png";
import Alon from "../../images/speakers/Alon.png";
import Sara from "../../images/speakers/Sara.png";
import Alyssa from "../../images/speakers/Alyssa.png";
import Rashmili from "../../images/speakers/Rashmili.png";

const photos = {
    Richard,
    Carolyn,
    Savita,
    Charis,
    Liat,
    Kim,
    Amy, Alon, Sara, Alyssa, Rashmili
};

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
