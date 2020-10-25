import React from "react";
import MentorsData from "../../data/mentors.json";

import Aurora from "../../images/aurora.png";

const Mentor = (props) => (
    <div class="card card-width">
        <img class="card-img-top" src={Aurora} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">Mentor Name</h5>
            <h6>Mentor Title</h6>
        </div>
        <div class="card-body">
            <p class="card-text">Something about me. Something about me. Something about me. Something about me. Something about me.</p>
        </div>
    </div>
);

const MentorTiles = () => (
    <div>
        <h1 className="mentor-head">TTB 2020 mentors</h1>
        <div className="mentor-container row">
            {MentorsData.map((mentor) => (
                <div className="mentor col-sm" key={mentor.name}>
                    <Mentor
                        name={mentor.title}
                        link={mentor.link}
                        image={mentor.image}
                        description={mentor.description}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default MentorTiles;
