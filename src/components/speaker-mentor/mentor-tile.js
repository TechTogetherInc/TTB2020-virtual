import React from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import MentorsData from "../../data/mentors.json";

import Richard from "../../images/speakers/richard.png";

const Mentor = (props) => (
    <div class="card card-width">
        <div className="card-img-div">
            <img class="card-img-top mentor-img" src={Richard} alt="Card image cap" />
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.name} ({props.pronouns})</h5>
            <h6 class="card-title">{props.majorProfession} | {props.universityWorkplace}</h6>
            <div className="card-skills">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip id="button-tooltip-2"><p>{props.skills.reduce((result, item) => { return `${result}${item}, ` }, "")}</p></Tooltip>}
                >
                    <p class="card-text card-ellipsis">
                        {
                            props.skills.reduce((result, item) => {
                                return `${result}${item}, `
                            }, "")
                        }
                    </p>
                </OverlayTrigger>
            </div>
        </div>
    </div >
);

const MentorTiles = () => (
    <div>
        <h1 className="mentor-head">TTB 2020 mentors</h1>
        <div className="mentor-container row">
            {MentorsData.map((mentor) => (
                <div className="mentor" key={mentor.name}>
                    <Mentor
                        name={mentor.name}
                        photo={mentor.photo}
                        pronouns={mentor.pronouns}
                        universityWorkplace={mentor.universityWorkplace}
                        majorProfession={mentor.majorProfession}
                        skills={mentor.skills}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default MentorTiles;
