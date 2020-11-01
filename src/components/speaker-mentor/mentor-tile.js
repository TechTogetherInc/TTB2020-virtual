import React from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Image from "./image"

import MentorsData from "../../data/mentors.json";

const Mentor = (props) => (
    <div class="card card-width">
        <div className="card-img-div">
            <div className="card-img-top" >
                <Image alt="headshot" filename={props.photo} />
            </div>
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
        <div class="row">
            <div class="col-sm-6">
                <h1 className="mentor-head">TTB 2020 mentors</h1>
                <p className="mentor-head">To view who's online, check out our Discord !</p>
            </div>
            <div class="col-sm-6" className="contact-mentor">
                <div className="register-button">
                    <a
                        type="button"
                        target="_blank"
                    // href="https://techtogetherboston.eventbrite.com/"
                    >
                        Contact A Mentor
                    </a>
                </div>
            </div>
        </div>
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
