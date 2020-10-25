import React from "react";
import SpeakersData from "../../data/speakers.json";

import Aurora from "../../images/aurora.png";

const Speaker = (props) => (
    <div class="card card-width">
        <img class="card-img-top" src={Aurora} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Speaker Name</h5>
            <h6>Speaker Title</h6>
        </div>
        <div class="card-body">
        <p class="card-text">Something about me. Something about me. Something about me. Something about me. Something about me.</p>
            <a href="#" class="card-link">Bitly link</a>
        </div>
    </div>
);

const SpeakerTiles = () => (
    <div>
        <h1 className="speaker-head">TTB 2020 Speakers</h1>
        <div className="speaker-container row">
            {SpeakersData.map((speaker) => (
                <div className="speaker col-sm" key={speaker.name}>
                    <Speaker
                        name={speaker.title}
                        link={speaker.link}
                        image={speaker.image}
                        description={speaker.description}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default SpeakerTiles;
